// Small drawn flags.

const frame = "h-auto w-full rounded-[6px] ring-1 ring-white/15";

export function FlagBulgaria({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 36" className={`${frame} ${className}`} role="img" aria-label="Flag of Bulgaria">
      <rect width="60" height="12" fill="#ffffff" />
      <rect y="12" width="60" height="12" fill="#00966e" />
      <rect y="24" width="60" height="12" fill="#d62612" />
    </svg>
  );
}

export function FlagEU({ className = "" }: { className?: string }) {
  const stars = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * Math.PI) / 6;
    return { x: 30 + 11 * Math.sin(angle), y: 18 - 11 * Math.cos(angle) };
  });
  return (
    <svg viewBox="0 0 60 36" className={`${frame} ${className}`} role="img" aria-label="Flag of the European Union">
      <rect width="60" height="36" fill="#003399" />
      {stars.map((star, i) => (
        <path
          key={i}
          transform={`translate(${star.x.toFixed(2)} ${star.y.toFixed(2)}) scale(0.2)`}
          d="M0 -10 L2.35 -3.24 L9.51 -3.09 L3.8 1.24 L5.88 8.09 L0 4 L-5.88 8.09 L-3.8 1.24 L-9.51 -3.09 L-2.35 -3.24 Z"
          fill="#ffcc00"
        />
      ))}
    </svg>
  );
}

export function FlagNATO({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 36" className={`${frame} ${className}`} role="img" aria-label="Flag of NATO">
      <rect width="60" height="36" fill="#004990" />
      <g stroke="#ffffff" strokeWidth="0.7">
        <path d="M30 2 V9 M30 27 V34 M8 18 H21 M39 18 H52" />
      </g>
      <circle cx="30" cy="18" r="7.2" fill="none" stroke="#ffffff" strokeWidth="0.8" />
      <path d="M30 6.5 L32 16 L41.5 18 L32 20 L30 29.5 L28 20 L18.5 18 L28 16 Z" fill="#ffffff" />
      <path d="M30 6.5 L30 18 L28 16 Z M41.5 18 L30 18 L32 16 Z M30 29.5 L30 18 L32 20 Z M18.5 18 L30 18 L28 20 Z" fill="#004990" opacity="0.45" />
    </svg>
  );
}
