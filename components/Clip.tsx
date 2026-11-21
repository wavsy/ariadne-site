"use client";

import { useEffect, useRef } from "react";

// A short silent loop cut from the concept film. Plays only while on screen.
// With reduced motion it stays on its poster and shows controls instead.
export function Clip({ name, label, className = "" }: { name: string; label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.controls = true;
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={`block aspect-video w-full object-cover ${className}`}
      src={`/film/clip-${name}.mp4`}
      poster={`/film/clip-${name}.jpg`}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
    />
  );
}
