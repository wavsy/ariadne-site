"use client";

import { useRef, useState } from "react";

// The film with a row of chapter buttons under it. Times are the film's own
// scene cuts, in seconds.
const CHAPTERS = [
  { t: 0, label: "The threat" },
  { t: 33.5, label: "The question" },
  { t: 50, label: "Patrol" },
  { t: 53.5, label: "Sighting" },
  { t: 61.5, label: "Identify" },
  { t: 70.5, label: "Report" },
  { t: 76.5, label: "Follow the fiber" },
  { t: 86.5, label: "Launch zone" },
];

export function FilmPlayer() {
  const ref = useRef<HTMLVideoElement>(null);
  const [current, setCurrent] = useState(-1);

  function jump(t: number) {
    const video = ref.current;
    if (!video) return;
    video.currentTime = t + 0.05;
    video.play().catch(() => {});
  }

  function onTime() {
    const video = ref.current;
    if (!video) return;
    let index = -1;
    CHAPTERS.forEach((chapter, i) => {
      if (video.currentTime >= chapter.t) index = i;
    });
    setCurrent(video.paused && video.currentTime === 0 ? -1 : index);
  }

  return (
    <div>
      <div className="frame">
        <video
          ref={ref}
          className="block aspect-video w-full"
          poster="/film/poster.jpg"
          controls
          playsInline
          preload="metadata"
          onTimeUpdate={onTime}
        >
          <source src="/film/ariadne-film.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Jump to a part of the film">
        {CHAPTERS.map((chapter, i) => (
          <button
            key={chapter.label}
            type="button"
            onClick={() => jump(chapter.t)}
            aria-current={current === i}
            className={`rounded-full border px-3.5 py-1.5 text-[0.8125rem] transition-colors ${
              current === i
                ? "border-cyan bg-cyan/10 text-white"
                : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
            }`}
          >
            {chapter.label}
          </button>
        ))}
      </div>
    </div>
  );
}
