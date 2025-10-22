"use client";

import { useState } from "react";
import Section from "../../components/Section";
import Link from "next/link";

export default function ContactPage() {
  const [status, setStatus] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok) setStatus("sent");
      else setStatus(json?.error || "error");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <Section
      id="contact"
      title="Contact"
      action={
        <Link href="/" aria-label="Close and go home" className="icon-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </Link>
      }
    >
      <form onSubmit={onSubmit} className="max-w-xl space-y-4">
        <div>
          <label className="block text-sm opacity-80">Name</label>
          <input name="name" required className="mt-1 w-full rounded-md border p-2 dark:border-neutral-700 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm opacity-80">Email</label>
          <input type="email" name="email" required className="mt-1 w-full rounded-md border p-2 dark:border-neutral-700 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm opacity-80">Message</label>
          <textarea name="message" required rows={5} className="mt-1 w-full rounded-md border p-2 dark:border-neutral-700 bg-transparent" />
        </div>
        <button type="submit" disabled={status === "loading"} className="rounded-md bg-neutral-900 px-4 py-2 text-white disabled:opacity-60 dark:bg-white dark:text-neutral-900">
          {status === "loading" ? "Sending..." : "Send"}
        </button>
        {status === "sent" && <p className="text-sm opacity-80">Thanks! I’ll get back to you soon.</p>}
        {status && status !== "loading" && status !== "sent" && (
          <p className="text-sm text-red-600">{String(status)}</p>
        )}
      </form>
    </Section>
  );
}
