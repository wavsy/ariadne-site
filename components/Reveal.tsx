"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Adds "in" to every .reveal element as it scrolls into view.
export function RevealScript() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
