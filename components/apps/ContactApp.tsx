"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/contact-actions";
import { profile } from "@/content/portfolio";
import s from "./apps.module.css";

export default function ContactApp() {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    sendContact,
    { status: "idle", message: "" },
  );

  return (
    <div style={{ padding: "24px 26px 28px" }}>
      <div className={s.contactTitle}>Let&apos;s build something.</div>
      <div className={s.contactSub}>
        Got an interesting problem or role? Drop a line — I read everything.
      </div>

      <div className={s.contactBtns}>
        <a className={s.contactBtn} href={`mailto:${profile.email}`}>
          <span className={s.contactBtnGlyph}>✉</span>
          <span className={s.contactBtnLabel}>Email</span>
        </a>
        <a
          className={s.contactBtn}
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          <span className={s.contactBtnGlyph}>⌘</span>
          <span className={s.contactBtnLabel}>GitHub</span>
        </a>
        <a
          className={s.contactBtn}
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <span className={s.contactBtnGlyph}>in</span>
          <span className={s.contactBtnLabel}>LinkedIn</span>
        </a>
      </div>

      <form
        className={s.form}
        action={formAction}
      >
        <input className={s.input} name="name" aria-label="Your name" autoComplete="name" maxLength={100} defaultValue={state.values?.name} required placeholder="your name" />
        <input name="website" aria-hidden="true" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
        <input
          className={s.input}
          required
          type="email"
          name="email"
          aria-label="Your email"
          autoComplete="email"
          maxLength={254}
          defaultValue={state.values?.email}
          placeholder="your@email.com"
        />
        <textarea
          className={s.textarea}
          required
          rows={3}
          name="message"
          aria-label="Your message"
          maxLength={5000}
          defaultValue={state.values?.message}
          placeholder="what's on your mind?"
        />
        <button
          type="submit"
          disabled={pending}
          className={`${s.send} ${state.status === "success" ? s.sendDone : ""}`}
        >
          {pending ? "Sending..." : "Send message →"}
        </button>
        <p role={state.status === "error" ? "alert" : "status"} aria-live="polite">
          {state.message}
        </p>
      </form>
    </div>
  );
}
