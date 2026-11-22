import Link from "next/link";
import { Wordmark } from "@/components/Header";
import { EMAIL, LINKS, NAV } from "@/lib/site";

const label = "text-[0.75rem] uppercase tracking-[0.14em] text-white/45";
const link = "text-white/70 transition-colors duration-150 hover:text-white";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-deep">
      <div className="aurora aurora-soft pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.3fr_0.8fr_1fr_1.1fr] md:py-20">
        <div>
          <Wordmark />
          <p className="mt-6 max-w-[16ch] font-display text-xl leading-[1.15] tracking-[-0.04em]">
            The thread is the fiber.
          </p>
          <a
            href={LINKS.wavsy}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white"
          >
            Built by
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/wavsy-logo-horizontal-white.svg" alt="Wavsy" className="h-5 w-auto" />
          </a>
        </div>
        <nav className="flex flex-col gap-3" aria-label="Footer">
          <p className={label}>Site</p>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={link}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact/" className={link}>
            Contact
          </Link>
        </nav>
        <div className="flex flex-col gap-3">
          <p className={label}>Links</p>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
            ARIADNE on LinkedIn
          </a>
          <a href={LINKS.hackathon} target="_blank" rel="noopener noreferrer" className={link}>
            EDTH Prishtina hackathon
          </a>
          <a href={LINKS.edth} target="_blank" rel="noopener noreferrer" className={link}>
            European Defense Tech Hub
          </a>
          <a href={LINKS.wavsy} target="_blank" rel="noopener noreferrer" className={link}>
            wavsy.dev
          </a>
        </div>
        <div>
          <p className={label}>Contact</p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-3 inline-block break-all text-white underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-cyan"
          >
            {EMAIL}
          </a>
          <p className="mt-2 text-sm text-white/55">Sofia, Bulgaria</p>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ARIADNE on LinkedIn"
            className="mt-6 inline-flex h-10 items-center gap-2.5 rounded-full border border-white/15 px-4 text-sm text-white/75 transition-colors duration-150 hover:border-cyan hover:text-cyan"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-1.79 3.62-1.79 3.87 0 4.5 2.4 4.5 5.6V21h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V21h-4V9.75Z" />
            </svg>
            Follow on LinkedIn
          </a>
        </div>
      </div>
      <div className="relative mx-auto max-w-[1240px] border-t border-white/10 px-5 py-6 text-[0.8125rem] leading-6 text-white/45 sm:px-8">
        <p>© 2026 Wavsy · Sofia, Bulgaria</p>
      </div>
      <p
        aria-hidden
        className="footer-wordmark pointer-events-none relative -mb-[2.4vw] select-none px-4 font-display text-[14vw] leading-[0.8] tracking-[-0.05em]"
      >
        ariadne
      </p>
    </footer>
  );
}
