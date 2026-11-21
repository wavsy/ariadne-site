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
          <a href={LINKS.hackathon} target="_blank" rel="noopener noreferrer" className={link}>
            EDTH Prishtina hackathon
          </a>
          <a href={LINKS.edth} target="_blank" rel="noopener noreferrer" className={link}>
            European Defense Tech Hub
          </a>
          <a href={LINKS.repo} target="_blank" rel="noopener noreferrer" className={link}>
            Source code on GitHub
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
