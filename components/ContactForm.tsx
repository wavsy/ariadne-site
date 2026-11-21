"use client";

import { useState, type FormEvent } from "react";
import { EMAIL } from "@/lib/site";

const TOPICS = ["Defence or government", "Mentoring or feedback", "Investment", "Press", "Something else"];

const field =
  "mt-2 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/35 transition-colors focus:border-cyan focus:outline-none";

// There is no server behind this site. The form writes the email for you and
// opens it in your own mail app, addressed to the team.
export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const organisation = String(data.get("organisation") ?? "").trim();
    const topic = String(data.get("topic") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const subject = `ARIADNE: ${topic}${organisation ? ` (${organisation})` : ""}`;
    const body = [message, "", "—", name, organisation].filter((line, i) => i < 3 || line).join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-white/70">
          Your name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm text-white/70">
          Organisation <span className="text-white/40">(optional)</span>
          <input name="organisation" autoComplete="organization" className={field} />
        </label>
      </div>
      <label className="mt-5 block text-sm text-white/70">
        What is it about?
        <select name="topic" className={`${field} appearance-none`} defaultValue={TOPICS[0]}>
          {TOPICS.map((topic) => (
            <option key={topic} value={topic} className="bg-deep">
              {topic}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-5 block text-sm text-white/70">
        Message
        <textarea name="message" required rows={6} className={`${field} resize-y`} placeholder="Tell us who you are and what you would like to talk about." />
      </label>
      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-primary justify-center">
          Write the email <span aria-hidden>→</span>
        </button>
        <p className="text-sm leading-6 text-white/50" role="status">
          {opened ? (
            <>
              Your mail app should have opened with the message ready. If it did not, write to{" "}
              <a href={`mailto:${EMAIL}`} className="src">
                {EMAIL}
              </a>
              .
            </>
          ) : (
            "This opens your own email app with the message ready to send. Nothing is stored on this site."
          )}
        </p>
      </div>
    </form>
  );
}
