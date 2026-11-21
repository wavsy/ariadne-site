import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { EMAIL, LINKS, TEAM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to the ARIADNE team at wavsy.dev@gmail.com.",
};

export default function Contact() {
  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden bg-bg pb-24 pt-[calc(var(--header-h)+4rem)] md:pb-32 md:pt-[calc(var(--header-h)+6rem)]">
      <div className="aurora pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="dot-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="mx-auto grid max-w-[1240px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="hero-copy">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.05em]">
            Pull the <span className="gradient-text">thread.</span>
          </h1>
          <p className="lede mt-8 max-w-[46ch]">
            Whether you serve, mentor, invest or report: if ARIADNE is relevant to your work, write
            to us. You will be talking directly to the people who built it.
          </p>

          <div className="mt-10">
            <p className="text-[0.75rem] uppercase tracking-[0.14em] text-white/45">Email</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-3 inline-block break-all font-display text-[clamp(1.15rem,2.4vw,1.6rem)] tracking-[-0.03em] underline decoration-white/25 underline-offset-[6px] transition-colors hover:decoration-cyan"
            >
              {EMAIL}
            </a>
          </div>

          <div className="mt-10">
            <p className="text-[0.75rem] uppercase tracking-[0.14em] text-white/45">The team on LinkedIn</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {TEAM.map((member) => (
                <li key={member.name}>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-white/75 transition-colors hover:border-cyan hover:text-cyan"
                  >
                    {member.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <p className="text-[0.75rem] uppercase tracking-[0.14em] text-white/45">Elsewhere</p>
            <p className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-white/70">
              <a href={LINKS.repo} target="_blank" rel="noopener noreferrer" className="src">GitHub ↗</a>
              <a href={LINKS.wavsy} target="_blank" rel="noopener noreferrer" className="src">wavsy.dev ↗</a>
              <a href={LINKS.hackathon} target="_blank" rel="noopener noreferrer" className="src">EDTH Prishtina ↗</a>
            </p>
          </div>
        </div>

        <div className="hero-copy">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
