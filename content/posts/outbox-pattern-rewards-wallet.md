---
title: "The Outbox Pattern: How It Helps Us Build a More Reliable Rewards System in Our Wallet"
date: 2026-11-07
summary: "A user earns 50 Coins and two systems have to agree. How a Postgres outbox plus ledger idempotency keeps an approved reward from disappearing when one service is down."
---

A user completes their profile and earns 50 Coins.

From the user's perspective, one thing happened. In our backend, two systems need to agree: the Rewards system records the reward, and the wallet ledger records the Coins.

What happens if the backend crashes between those two steps?

That is the problem the **Outbox Pattern** helps us solve.

## What exactly is an Outbox?

An outbox is a database table that keeps track of work we need to send to another system.

For example, it can record:

> Give this member 50 Coins for completing their profile.

The instruction stays in the database until a worker processes it. If the process crashes, another attempt can pick up the saved work.

In our implementation, the exact grant instruction lives in `rewards_commands`. A related row in `rewards_outbox` tracks its delivery.

## Why do we need it?

Our Rewards system and Go ledger use separate databases.

We need to record two facts:

1. The backend has approved a reward.
2. The ledger has credited the member's wallet.

A straightforward implementation might look like this:

```text
Save the reward decision.
Call the ledger to credit Coins.
```

But suppose the backend saves the decision and crashes before making the call.

The reward exists in the backend, but the wallet never receives the Coins. Without a saved delivery record, we may have no reliable way to find that unfinished work.

This is called the **Dual-Write Problem**. We need to write to two systems, and one write can succeed while the other fails.

## What does the Outbox change?

We save the reward decision and its outgoing instruction in the same database transaction.

A transaction groups changes so that either all of them commit or none do.

```sql
One backend database transaction:

  Save the approved reward.
  Save the exact Coin-grant command.
  Add a pending outbox entry.

Commit.
```

If any part fails, the transaction rolls back.

If it succeeds, we have recorded both the reward and the obligation to deliver it. A crash after that point does not erase the pending instruction.

The transaction does not credit the wallet yet. The ledger still needs to accept the command.

## How does our wallet use it?

Take the profile-completion reward as an example.

1. The user saves their completed profile.
2. Our Rewards scanner discovers that the member qualifies.
3. The backend saves the reward, grant command and outbox entry together.
4. The delivery worker claims the pending command.
5. The worker calls the Go ledger over HTTP.
6. The ledger credits the Coins and returns a receipt.
7. The backend saves the receipt and marks delivery complete.

An important distinction: the profile update happens before the scan. The transaction that uses the outbox groups the **reward approval and delivery instruction**, rather than the original profile update.

## What starts the worker?

AWS EventBridge invokes our scanner and delivery Lambda functions on a schedule.

- The scanner finds eligible rewards.
- The delivery worker checks the outbox for commands that are due.

An outbox entry does not start a worker by itself. The scheduled invocation starts the worker, which then reads the table.

Welcome Coins also use the delivery engine, but their first attempt happens during the app's Welcome activation request. The backend saves the command before attempting delivery.

## What happens when something fails?

There are several possible failure points.

| Scenario | How the pattern helps |
|---|---|
| Backend crashes after saving the command | The pending outbox entry survives for a later attempt. |
| Ledger is temporarily unavailable | The worker retains the command and schedules a retry. |
| Ledger credits Coins, but its response is lost | The worker retries the same command to recover the original result. |
| Delivery is permanently rejected or retries are exhausted | The case retains its evidence and moves to review. |

Saving an outbox entry means we have committed to attempting delivery. It does not mean the member has already received the Coins.

## Could a retry credit the member twice?

That is why the ledger also needs **Idempotency**.

Every retry uses the same business operation key and the same grant details.

If the ledger has already credited the 50 Coins, it recognizes the repeated command and returns the original receipt instead of creating another grant.

These mechanisms work together:

- The Outbox remembers unfinished delivery.
- Idempotency makes repeated delivery attempts safe.

The Outbox alone does not prevent duplicate credits.

## Are we using SQS?

Our Coin-delivery flow calls the ledger directly:

```text
Backend PostgreSQL Outbox
          |
          v
    Delivery Lambda
          |
         HTTP
          |
          v
       Go Ledger
          |
          v
    Ledger PostgreSQL
```

SQS is optional in an Outbox architecture. Our implementation uses PostgreSQL to track pending delivery and retries.

That keeps the flow smaller, but it also means our worker code must handle claiming work, retry delays and failed cases.

## What do we gain, and what do we still need to manage?

We gain a durable record of every approved reward that still needs delivery.

A process crash does not force us to reconstruct the instruction or guess whether it should be sent.

The cost is more delivery state to maintain. Rewards can arrive later, pending work can accumulate, and some failures need investigation.

We therefore need to monitor how long commands remain pending and which cases need review.

The question to ask when inspecting this design is:

**If the ledger has credited the Coins but the backend has not received the response, can we safely recover the same operation?**

Our saved command and the ledger's idempotency key give us that recovery path.

That's the real value of the Outbox Pattern: making sure an approved reward doesn't disappear just because one service was temporarily unavailable.
