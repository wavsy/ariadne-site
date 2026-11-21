"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/site";

export function Wordmark() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 28 28" className="h-6 w-6" aria-hidden>
        <circle cx="5" cy="22" r="2.5" fill="#3fc1f0" />
        <path
          d="M5 22 C 9 8, 16 20, 22 6"
          fill="none"
          stroke="#3fc1f0"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="22" cy="6" r="4" fill="none" stroke="#fff" strokeWidth="1.4" />
      </svg>
      <span className="font-display text-[1.05rem] tracking-[0.02em]">ARIADNE</span>
    </span>
  );
}

export function Header() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = compact || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background,border-color] duration-200 ${
        solid ? "border-white/10 bg-bg/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-[1240px] items-center gap-6 px-5 sm:px-8">
        <Link href="/" aria-label="ARIADNE, home" className="shrink-0">
          <Wordmark />
        </Link>
        <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.9375rem] text-white/70 transition-colors duration-150 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact/" className="btn btn-primary !px-5 !py-2.5 text-sm">
            Contact us
          </Link>
        </nav>
        <button
          type="button"
          className="ml-auto flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden>
            <span className={`h-px w-full bg-white transition-transform ${open ? "translate-y-[4px] rotate-45" : ""}`} />
            <span className={`h-px w-full bg-white transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-white/10 px-5 pb-8 pt-4 lg:hidden" aria-label="Mobile">
          {[...NAV, { href: "/contact/", label: "Contact us" }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-4 font-display text-xl tracking-[-0.03em] text-white/90"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
