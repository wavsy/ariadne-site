// Schematic of the western Black Sea. The coast is a simplified line through
// known towns; incident positions are placed from the distances and bearings
// given in press reports and are approximate.

const COAST =
  "192.7,0 180.2,73.1 171.5,132.6 170.3,170 175.3,180.2 157.9,210.8 141.7,200.6 119.3,202.3 89.5,238 85.8,268.6 85.8,294.1 87,323 65.9,329.8 54.7,346.8 33.6,357 62.2,370.6 69.6,396.1 80.8,413.1 103.2,445.4 108,450";

const TOWNS = [
  { x: 180.2, y: 73.1, name: "Constanța", side: "left" },
  { x: 157.9, y: 210.8, name: "Cape Kaliakra", side: "left" },
  { x: 89.5, y: 238, name: "Varna", side: "left" },
  { x: 85.8, y: 294.1, name: "Byala", side: "left" },
  { x: 33.6, y: 357, name: "Burgas", side: "right" },
] as const;

const INCIDENTS = [
  { x: 220, y: 170, n: 2, label: "13 Oct" },
  { x: 285.9, y: 238, n: 1, label: "6 Oct" },
  { x: 244, y: 282, n: 3, label: "16 Nov · Betul 8" },
  { x: 222, y: 304, n: 4, label: "17 Nov · Gas Husky" },
];

export function SeaMap({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 380 450" className={className} role="img" aria-label="Schematic map of the western Black Sea showing four reported drone attacks on merchant ships off the Bulgarian coast in October and November 2026.">
      <defs>
        <pattern id="sea-dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.8" fill="rgba(255,255,255,0.09)" />
        </pattern>
        <linearGradient id="land" x1="0" x2="1">
          <stop offset="0%" stopColor="#0d1830" />
          <stop offset="100%" stopColor="#12213f" />
        </linearGradient>
      </defs>
      <rect width="380" height="450" fill="#060b16" />
      <rect width="380" height="450" fill="url(#sea-dots)" />
      <polygon points={`0,0 ${COAST} 0,450`} fill="url(#land)" />
      <polyline points={COAST} fill="none" stroke="#3fc1f0" strokeOpacity="0.7" strokeWidth="1.3" />
      {/* Land borders, schematic */}
      <path d="M171.5 146 C 120 150, 70 120, 0 128" fill="none" stroke="rgba(255,255,255,0.25)" strokeDasharray="3 5" />
      <path d="M103 445 C 70 438, 40 444, 0 436" fill="none" stroke="rgba(255,255,255,0.25)" strokeDasharray="3 5" />

      <g fontFamily="var(--font-inter), sans-serif">
        <text x="20" y="262" fill="rgba(255,255,255,0.8)" fontSize="13" letterSpacing="3" fontFamily="var(--font-unbounded), sans-serif">BULGARIA</text>
        <text x="60" y="60" fill="rgba(255,255,255,0.4)" fontSize="10" letterSpacing="2.5">ROMANIA</text>
        <text x="258" y="60" fill="rgba(127,216,255,0.55)" fontSize="10" letterSpacing="3">BLACK SEA</text>
        <text x="196" y="372" fill="rgba(255,255,255,0.4)" fontSize="8.5" letterSpacing="1.4">
          <tspan x="196" dy="0">BULGARIA&apos;S EXCLUSIVE</tspan>
          <tspan x="196" dy="12">ECONOMIC ZONE</tspan>
        </text>

        {TOWNS.map((town) => (
          <g key={town.name}>
            <circle cx={town.x} cy={town.y} r="2.4" fill="#fff" />
            <text
              x={town.side === "left" ? town.x - 8 : town.x + 8}
              y={town.y + 3.5}
              textAnchor={town.side === "left" ? "end" : "start"}
              fill="rgba(255,255,255,0.75)"
              fontSize="9.5"
            >
              {town.name}
            </text>
          </g>
        ))}

        {INCIDENTS.map((incident) => (
          <g key={incident.n}>
            <circle cx={incident.x} cy={incident.y} r="8" fill="none" stroke="#ff4d57" strokeWidth="1.2" className="pulse-ring" style={{ animationDelay: `${incident.n * 0.5}s` }} />
            <circle cx={incident.x} cy={incident.y} r="7.5" fill="#ff4d57" />
            <text x={incident.x} y={incident.y + 3.4} textAnchor="middle" fill="#fff" fontSize="9.5" fontWeight="700">
              {incident.n}
            </text>
            <text x={incident.x + 13} y={incident.y + 3.4} fill="#ffb3b8" fontSize="9.5">
              {incident.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
