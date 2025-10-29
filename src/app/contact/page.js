"use client";

import { useMemo, useState } from "react";
import Section from "../../components/Section";
import Link from "next/link";

export default function ContactPage() {
  const [status, setStatus] = useState(null);
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  const [reason, setReason] = useState("Project Inquiry");

  const messageLimit = 600;
  const remaining = useMemo(() => messageLimit - message.length, [message]);

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    payload.reason = reason;
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

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("shanthanreddy571@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (_) {}
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
      <div className="hero-wrap">
        <div className="flex items-start justify-between gap-6">
          <div className="kicker">Let’s build something great</div>
          <div className="badge">Avg. response: &lt; 24h</div>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-neutral-600 dark:text-neutral-400">
          Share a bit about your idea, collaboration, or role. I read every message—short and sweet is perfect.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Left: Profile + quick actions */}
        <div className="card relative overflow-hidden">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[var(--accent)]/15 via-transparent to-indigo-500/15 blur-2xl" aria-hidden />
          <div className="relative">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Ways to reach me</h3>
              <span className="badge">Open to work</span>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between gap-3 rounded-lg border p-3 transition-colors hover:border-[var(--accent)]">
                <div className="flex items-center gap-3">
                  <div className="icon-btn h-8 w-8">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.01L12 13l9-5.99V7H3zm0 2.236V17h18V9.236l-8.553 5.693a2 2 0 0 1-2.894 0L3 9.236z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm opacity-70">Email</div>
                    <a href="mailto:shanthanreddy571@gmail.com" className="text-sm font-medium hover:underline">shanthanreddy571@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={copyEmail} className="chip text-xs">
                    {copied ? "Copied" : "Copy"}
                  </button>
                  <a href="mailto:shanthanreddy571@gmail.com" className="btn btn-primary text-xs">Email me</a>
                </div>
              </div>

              {/* Removed GitHub block as requested */}

              <div className="flex items-center justify-between gap-3 rounded-lg border p-3 transition-colors hover:border-[var(--accent)]">
                <div className="flex items-center gap-3">
                  <div className="icon-btn h-8 w-8">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.83v2.18h.05c.53-1 1.84-2.18 3.79-2.18 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.2c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.81V24h-4V8z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm opacity-70">LinkedIn</div>
                    <a href="https://www.linkedin.com/in/shanthan-reddy-b503901b5" target="_blank" rel="noreferrer" className="text-sm font-medium hover:underline">Connect on LinkedIn</a>
                  </div>
                </div>
                <a href="https://www.linkedin.com/in/shanthan-reddy-b503901b5" target="_blank" rel="noreferrer" className="btn text-xs">Open</a>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              Available for freelance & full-time opportunities
            </div>
          </div>
        </div>

        {/* Right: Enhanced form */}
        <div className="card">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-xs font-medium opacity-80">Name</label>
                <input id="name" name="name" required placeholder="Your name" className="mt-1 w-full rounded-lg border bg-transparent px-3 py-2 outline-none transition focus:border-[var(--accent)] dark:border-neutral-700" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium opacity-80">Email</label>
                <input id="email" type="email" name="email" required placeholder="you@example.com" className="mt-1 w-full rounded-lg border bg-transparent px-3 py-2 outline-none transition focus:border-[var(--accent)] dark:border-neutral-700" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="reason" className="block text-xs font-medium opacity-80">Reason</label>
                <select id="reason" name="reason" value={reason} onChange={(e) => setReason(e.target.value)} className="mt-1 w-full rounded-lg border bg-transparent px-3 py-2 outline-none transition focus:border-[var(--accent)] dark:border-neutral-700">
                  <option>Project Inquiry</option>
                  <option>Collaboration</option>
                  <option>Speaking</option>
                  <option>Mentorship</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="company" className="block text-xs font-medium opacity-80">Company (optional)</label>
                <input id="company" name="company" placeholder="Organization or team" className="mt-1 w-full rounded-lg border bg-transparent px-3 py-2 outline-none transition focus:border-[var(--accent)] dark:border-neutral-700" />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium opacity-80">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                maxLength={messageLimit}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project, goals, timeline, and budget (if known)."
                className="mt-1 w-full resize-y rounded-lg border bg-transparent px-3 py-2 outline-none transition focus:border-[var(--accent)] dark:border-neutral-700"
              />
              <div className="mt-1 flex items-center justify-between text-xs text-neutral-500">
                <div className="flex items-center gap-2">
                  <input id="copy" name="copy" type="checkbox" className="h-4 w-4 rounded border-neutral-300 text-[var(--accent)] focus:ring-[var(--accent)]" />
                  <label htmlFor="copy" className="select-none">Send me a copy</label>
                </div>
                <span className={remaining < 40 ? "text-amber-500" : "opacity-70"}>{remaining} characters left</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn btn-primary inline-flex items-center gap-2 disabled:opacity-60"
              >
                {status === "loading" && (
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M12 3a9 9 0 1 1-9 9" />
                  </svg>
                )}
                {status === "loading" ? "Sending" : "Send message"}
              </button>
              <a href="mailto:shanthanreddy571@gmail.com" className="btn btn-ghost">Or email directly</a>
            </div>

            {status === "sent" && (
              <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-3 text-sm text-emerald-600 dark:text-emerald-400">
                Thanks! I’ll get back to you soon.
              </div>
            )}
            {status && status !== "loading" && status !== "sent" && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-3 text-sm text-red-600">
                {String(status)}
              </div>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}
