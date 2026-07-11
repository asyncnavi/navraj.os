"use client";

import { useState } from "react";
import { profile } from "@/content/portfolio";
import s from "./apps.module.css";

export default function ContactApp() {
  const [sent, setSent] = useState(false);

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
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: wire to Supabase / email service. For now, UI-only.
          setSent(true);
        }}
      >
        <input className={s.input} required placeholder="your name" />
        <input
          className={s.input}
          required
          type="email"
          placeholder="your@email.com"
        />
        <textarea
          className={s.textarea}
          required
          rows={3}
          placeholder="what's on your mind?"
        />
        <button
          type="submit"
          className={`${s.send} ${sent ? s.sendDone : ""}`}
        >
          {sent ? "Sent ✓ — talk soon!" : "Send message →"}
        </button>
      </form>
    </div>
  );
}
