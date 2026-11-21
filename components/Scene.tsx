// Hero diagram: one mission, drawn the way the base-station map draws it.
// Dashed ring: the perimeter. Cyan line: the fresh cable. Grey dashes: old
// cables that are ignored. Ring at the end: the suggested launch zone.

const THREAD = "M232 292 C 270 262, 262 222, 304 204 S 372 196, 392 150 S 440 118, 462 92";

export function Scene({ className = "" }: { className?: string }) {
  const caption = { fill: "rgba(255,255,255,0.5)", fontSize: 10, letterSpacing: 1.6 } as const;

  return (
    <svg viewBox="0 0 560 500" className={className} role="img" aria-label="Diagram: a patrol drone circles a protected position, then follows a fresh fiber-optic cable past older cables to a launch zone.">
      <defs>
        <radialGradient id="zone-glow">
          <stop offset="0%" stopColor="#3fc1f0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3fc1f0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="thread-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#3fc1f0" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>

      {/* Old cables */}
      <g stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" strokeDasharray="5 7" fill="none">
        <path d="M250 330 C 320 318, 380 352, 520 300" />
        <path d="M236 270 C 300 180, 330 120, 330 30" />
        <path d="M262 304 C 330 270, 420 262, 540 214" />
        <path d="M300 250 C 350 250, 380 130, 500 40" />
      </g>

      {/* Protected position and perimeter */}
      <circle cx="170" cy="330" r="96" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeDasharray="3 8" />
      <rect x="158" y="318" width="24" height="24" rx="4" fill="none" stroke="#fff" strokeWidth="1.4" />
      <circle cx="170" cy="330" r="3" fill="#fff" />
      <g className="scene-orbit">
        <path d="M170 226 l8 14 h-16 z" fill="#3fc1f0" />
      </g>

      {/* The fresh cable and the glint running along it */}
      <path d={THREAD} pathLength={1} className="scene-thread" fill="none" stroke="url(#thread-grad)" strokeWidth="2.4" strokeLinecap="round" />
      <circle r="5" fill="#fff" className="scene-glint" style={{ offsetPath: `path("${THREAD}")`, filter: "drop-shadow(0 0 8px #3fc1f0)" }} />

      {/* Launch zone */}
      <g className="scene-zone">
        <circle cx="462" cy="92" r="70" fill="url(#zone-glow)" />
        <circle cx="462" cy="92" r="38" fill="rgba(63,193,240,0.08)" stroke="#3fc1f0" strokeWidth="1.6" />
        <path d="M455 92 h14 M462 85 v14" stroke="#fff" strokeWidth="1.4" />
      </g>

      {/* Incoming drone sighting */}
      <g>
        <circle cx="232" cy="292" r="7" fill="none" stroke="#ff4d57" strokeWidth="1.4" className="pulse-ring" />
        <circle cx="232" cy="292" r="3.5" fill="#ff4d57" />
      </g>

      <g fontFamily="var(--font-inter), sans-serif" style={{ textTransform: "uppercase" }}>
        <text x="74" y="452" {...caption}>Perimeter patrol</text>
        <text x="246" y="312" {...caption} fill="#ff8a91">Drone sighted</text>
        <text x="352" y="222" {...caption} fill="#7fd8ff">Fresh cable</text>
        <text x="396" y="40" {...caption} fill="#7fd8ff">Launch zone ± radius</text>
        <text x="404" y="368" {...caption}>Old cables, ignored</text>
      </g>
    </svg>
  );
}
