"use client";

import { useState, type FormEvent } from "react";
import { EMAIL } from "@/lib/site";

const TOPICS = ["Defence or government", "Mentoring or feedback", "Investment", "Press", "Something else"];

// The site is static, so the message is delivered by FormSubmit, which
// forwards it to the team's inbox. Replies go to the address the visitor gives.
const ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

const field =
  "mt-2 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/35 transition-colors focus:border-cyan focus:outline-none";

type State = "idle" | "sending" | "sent" | "failed";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const topic = String(data.get("topic") ?? "");
    const organisation = String(data.get("organisation") ?? "").trim();

    data.set("_subject", `ARIADNE: ${topic}${organisation ? ` (${organisation})` : ""}`);
    data.set("_replyto", String(data.get("email") ?? ""));
    data.set("_template", "table");
    data.set("_captcha", "false");

    setState("sending");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = (await response.json().catch(() => null)) as { success?: boolean | string } | null;
      const ok = response.ok && result !== null && String(result.success) === "true";
      setState(ok ? "sent" : "failed");
      if (ok) form.reset();
    } catch {
      setState("failed");
    }
  }

  if (state === "sent") {
    return (
      <div className="card p-8 sm:p-12" role="status">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan text-deep">
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M4 10.5l4 4 8-9" />
          </svg>
        </span>
        <h2 className="mt-7 font-display text-2xl tracking-[-0.04em]">Message sent.</h2>
        <p className="lede mt-4">Thank you. It is in our inbox, and we will reply to the address you gave.</p>
        <button type="button" onClick={() => setState("idle")} className="btn btn-ghost mt-8">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-white/70">
          Your name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm text-white/70">
          Your email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-white/70">
          Organisation <span className="text-white/40">(optional)</span>
          <input name="organisation" autoComplete="organization" className={field} />
        </label>
        <label className="block text-sm text-white/70">
          What is it about?
          <select name="topic" className={`${field} appearance-none`} defaultValue={TOPICS[0]}>
            {TOPICS.map((topic) => (
              <option key={topic} value={topic} className="bg-deep">
                {topic}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-5 block text-sm text-white/70">
        Message
        <textarea name="message" required rows={6} className={`${field} resize-y`} placeholder="Tell us who you are and what you would like to talk about." />
      </label>
      {/* Honeypot: people never see or fill this; bots do, and are ignored. */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" disabled={state === "sending"} className="btn btn-primary justify-center disabled:opacity-60">
          {state === "sending" ? "Sending…" : "Send message"} <span aria-hidden>→</span>
        </button>
        <p className="text-sm leading-6 text-white/50" role="status">
          {state === "failed" ? (
            <span className="text-[#ff8a91]">
              The message could not be sent. Please write to us directly at{" "}
              <a href={`mailto:${EMAIL}`} className="underline underline-offset-4">
                {EMAIL}
              </a>
              .
            </span>
          ) : (
            "We reply to the email address you give here."
          )}
        </p>
      </div>
    </form>
  );
}
