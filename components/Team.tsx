import { TEAM } from "@/lib/site";

// Small Bulgarian flag shown on every portrait.
function FlagBadge() {
  return (
    <span
      className="absolute bottom-0.5 right-0.5 block h-7 w-7 overflow-hidden rounded-full ring-[3px] ring-[#080d18] sm:bottom-1.5 sm:right-1.5 sm:h-8 sm:w-8"
      role="img"
      aria-label="Bulgaria"
    >
      <span className="block h-1/3 bg-white" />
      <span className="block h-1/3 bg-[#00966e]" />
      <span className="block h-1/3 bg-[#d62612]" />
    </span>
  );
}

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-1.79 3.62-1.79 3.87 0 4.5 2.4 4.5 5.6V21h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V21h-4V9.75Z" />
    </svg>
  );
}

// A portrait and a name. Each one is a link to that person's LinkedIn profile.
export function Team() {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
      {TEAM.map((member, i) => (
        <li key={member.name} className="reveal" style={{ transitionDelay: `${i * 70}ms` }}>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center"
            aria-label={`${member.name} on LinkedIn`}
          >
            <span className="relative block h-28 w-28 rounded-full p-[3px] transition-transform duration-300 ease-out group-hover:-translate-y-1 sm:h-36 sm:w-36">
              <span aria-hidden className="absolute inset-0 rounded-full bg-[conic-gradient(from_210deg,#3fc1f0,rgba(255,255,255,0.12)_35%,#0b3d91_70%,#3fc1f0)] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative block h-full w-full overflow-hidden rounded-full bg-[#070b16]">
                {member.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={member.avatar} alt="" width={144} height={144} loading="lazy" className="h-full w-full object-cover" />
                ) : (
                  <span className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_25%,#16305e,#070b16_70%)] font-display text-3xl tracking-[-0.04em] text-white/85">
                    {member.initials}
                  </span>
                )}
              </span>
              <FlagBadge />
            </span>
            <span className="mt-5 block font-display text-[1.05rem] leading-tight tracking-[-0.03em] transition-colors group-hover:text-cyan">
              {member.name}
            </span>
            <span className="mt-2.5 inline-flex items-center gap-1.5 text-[0.8125rem] text-white/45 transition-colors group-hover:text-cyan">
              <LinkedInMark />
              LinkedIn
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
