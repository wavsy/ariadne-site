"use client";

import { useEffect, useState } from "react";

// Opening sequence on the landing page: a dark screen, a thread that draws
// itself, the question, then the curtain lifts onto the page. It plays once per
// browser session, can be skipped with a click or a key, and is not shown at
// all to people who ask for reduced motion. The page under it is complete from
// the start, so nothing depends on it.
const KEY = "ariadne-intro-seen";
const LINE_1 = "How do we find";
const LINE_2 = "the operator?";

export function Intro() {
  const [phase, setPhase] = useState<"off" | "on" | "leaving">("off");

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
    } catch {
      seen = false;
    }
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setPhase("on");
    document.documentElement.classList.add("intro-lock");
    const leave = window.setTimeout(() => setPhase("leaving"), 3300);
    const done = window.setTimeout(() => finish(), 4200);

    function finish() {
      window.clearTimeout(leave);
      window.clearTimeout(done);
      document.documentElement.classList.remove("intro-lock");
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {
        /* private mode: the intro simply plays again next time */
      }
      setPhase("off");
    }
    function skip() {
      setPhase("leaving");
      window.setTimeout(finish, 650);
    }
    window.addEventListener("keydown", skip, { once: true });
    window.addEventListener("pointerdown", skip, { once: true });
    return () => {
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
      finish();
    };
  }, []);

  if (phase === "off") return null;

  return (
    <div className={`intro ${phase === "leaving" ? "intro-leaving" : ""}`} aria-hidden>
      <svg className="intro-thread" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="intro-grad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#3fc1f0" stopOpacity="0.15" />
            <stop offset="55%" stopColor="#3fc1f0" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <path
          d="M-40 830 C 240 810, 420 700, 660 742 S 1010 800, 1180 650 S 1300 310, 1420 262 S 1560 200, 1660 130"
          pathLength={1}
          fill="none"
          stroke="url(#intro-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle className="intro-end" cx="1420" cy="262" r="46" fill="none" stroke="#3fc1f0" strokeWidth="2" />
        <circle className="intro-end" cx="1420" cy="262" r="5" fill="#fff" />
      </svg>
      <div className="intro-copy">
        <p className="intro-kicker">ARIADNE</p>
        <p className="intro-question">
          <span>{LINE_1}</span>
          <span className="gradient-text">{LINE_2}</span>
        </p>
        <p className="intro-answer">Follow the thread.</p>
      </div>
      <p className="intro-skip">Click to skip</p>
    </div>
  );
}
