import type { Metadata } from "next";
import Link from "next/link";
import { SeaMap } from "@/components/SeaMap";
import { FlagBulgaria, FlagEU, FlagNATO } from "@/components/Flags";
import { LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "Why five computer science engineers from Bulgaria spent a weekend on defence technology: merchant ships are being attacked by drones off the Bulgarian coast.",
};

const wrap = "mx-auto max-w-[1240px] px-5 sm:px-8";
const section = "relative py-24 md:py-32";

// Every entry is taken from the linked report. Where outlets disagree or a
// detail is unconfirmed, the text says so.
const TIMELINE = [
  {
    n: 1,
    date: "6 October 2026",
    title: "Two commercial vessels hit",
    body: "Bulgaria’s prime minister said sea and aerial drones struck two commercial ships about 80 miles off the coast, inside the country’s economic zone. One of them sank and a search for the crew began.",
    source: "Al Jazeera",
    href: "https://www.aljazeera.com/news/2026/10/6/bulgaria-says-two-commercial-vessels-were-hit-in-drone-attack-in-its-waters",
  },
  {
    n: 2,
    date: "13 October 2026",
    title: "A second ship sinks, sailors missing",
    body: "Drones struck two more ships off Bulgaria’s northern coast. One sank, and crew members were reported missing at sea.",
    source: "Al Jazeera",
    href: "https://www.aljazeera.com/news/2026/10/13/drone-attack-sinks-ship-off-bulgarias-black-sea-coast-pm-says",
  },
  {
    n: 3,
    date: "16 November 2026",
    title: "Betul 8 capsizes with 3,000 tonnes of wheat",
    body: "The cargo ship capsized about 40 nautical miles south-east of Cape Kaliakra after a reported attack by two sea drones. All 12 crew were rescued.",
    source: "gCaptain",
    href: "https://gcaptain.com/cargo-ship-capsizes-off-bulgaria-after-reported-sea-drone-attack/",
  },
  {
    n: 4,
    date: "17 November 2026",
    title: "Gas tanker Gas Husky hit at night",
    body: "The tanker, carrying propane, was reportedly struck by drones about 90 km east of Byala and capsized. All 19 crew were rescued.",
    source: "UA.NEWS, citing Maritime.bg",
    href: "https://ua.news/en/world/z-pochatku-zhovtnia-u-viniatkovii-ekonomichnii-zoni-bolgariyi-atakuvali-vzhe-sim-korabliv",
  },
];

const PRESS = [
  {
    outlet: "Reuters, via Baird Maritime",
    date: "16 Nov 2026",
    title: "Crew rescued after sea drone sinks cargo ship off Bulgaria",
    href: "https://www.bairdmaritime.com/security/incidents/acts-of-war/crew-rescued-after-sea-drone-sinks-cargo-ship-off-bulgaria",
  },
  {
    outlet: "Balkan Insight (BIRN)",
    date: "19 Nov 2026",
    title: "Black Sea Attacks Threaten Ukrainian Grain Trade, Disrupt Region’s Exports",
    href: "https://balkaninsight.com/2026/11/19/black-sea-attacks-threaten-ukrainian-grain-trade-disrupt-regions-exports/",
  },
  {
    outlet: "Kyiv Independent",
    date: "16 Nov 2026",
    title: "Cargo ship sinks in Bulgaria’s Black Sea after reported drone attack, all 12 crew rescued",
    href: "https://kyivindependent.com/cargo-ship-sinks-in-bulgarias-black-sea-after-reported-drone-attack-all-12-crew-rescued/",
  },
  {
    outlet: "gCaptain",
    date: "16 Nov 2026",
    title: "Cargo Ship Capsizes Off Bulgaria After Reported Sea Drone Attack",
    href: "https://gcaptain.com/cargo-ship-capsizes-off-bulgaria-after-reported-sea-drone-attack/",
  },
  {
    outlet: "Al Jazeera",
    date: "13 Oct 2026",
    title: "Drone attack sinks ship off Bulgaria’s Black Sea coast, PM says",
    href: "https://www.aljazeera.com/news/2026/10/13/drone-attack-sinks-ship-off-bulgarias-black-sea-coast-pm-says",
  },
  {
    outlet: "Al Jazeera",
    date: "6 Oct 2026",
    title: "Bulgaria searches for missing crew after drones hit two ships in Black Sea",
    href: "https://www.aljazeera.com/news/2026/10/6/bulgaria-says-two-commercial-vessels-were-hit-in-drone-attack-in-its-waters",
  },
];

const BELIEFS = [
  {
    t: "Security is built, not bought.",
    d: "A small country cannot outspend a threat. It can out-engineer one. Bulgaria has the engineers.",
  },
  {
    t: "A person decides.",
    d: "Our system informs and suggests. It never acts on its own. That is a design decision, written into the code.",
  },
  {
    t: "Say only what is verified.",
    d: "In defence, an overclaim costs lives. We label what is simulated and we list our limits before our strengths.",
  },
  {
    t: "Cheap, open and able to connect.",
    d: "An ordinary camera, a laptop, open-source components. Tools that only rich armies can afford do not protect the flank.",
  },
];

export default function Story() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-bg pb-20 pt-[calc(var(--header-h)+4rem)] md:pb-28 md:pt-[calc(var(--header-h)+6rem)]">
        <div className="aurora pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div className="dot-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div className={`${wrap} grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]`}>
          <div className="hero-copy">
            <p className="eyebrow flex items-center gap-3">
              <FlagBulgaria className="!w-8" /> Our story
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,6.4vw,4.75rem)] leading-[0.95] tracking-[-0.05em]">
              The war reached <span className="gradient-text">our sea.</span>
            </h1>
            <p className="lede mt-8 max-w-[54ch]">
              We are five computer science engineers from Bulgaria. This autumn, merchant ships began
              sinking off our own coast, hit by drones nobody saw coming. We decided that watching
              the news was not enough.
            </p>
          </div>
          <figure className="mx-auto w-full max-w-[440px]">
            <div className="frame">
              <SeaMap className="block h-auto w-full" />
            </div>
            <figcaption className="mt-3 text-[0.8125rem] leading-5 text-white/45">
              Reported attacks on merchant ships, October and November 2026. Positions approximate.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── What happened ────────────────────────────────── */}
      <section className={`${section} border-t border-white/10`}>
        <div className={wrap}>
          <div className="reveal max-w-[800px]">
            <p className="eyebrow !text-red">What happened</p>
            <h2 className="h2 mt-5">Six weeks off the Bulgarian coast.</h2>
            <p className="lede mt-7">
              These are not warships. They are cargo vessels carrying wheat and gas between Romania,
              Bulgaria and the Mediterranean, crewed by civilian sailors.
            </p>
          </div>

          <ol className="mt-14 grid gap-4 md:grid-cols-2">
            {TIMELINE.map((item, i) => (
              <li key={item.n} className="card reveal relative p-7" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red text-xs font-bold">{item.n}</span>
                  <span className="text-sm uppercase tracking-[0.12em] text-white/55">{item.date}</span>
                </div>
                <h3 className="mt-5 font-display text-xl leading-tight tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/70">{item.body}</p>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="src mt-5 inline-block text-sm">
                  {item.source} ↗
                </a>
              </li>
            ))}
          </ol>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              {
                big: "17",
                text: "vessels attacked off Bulgaria and Romania since mid-July, by the count of maritime security firm Diaplous.",
                source: "Reuters, via Baird Maritime",
                href: PRESS[0].href,
              },
              {
                big: "30+",
                text: "crew members killed or missing after attacks in the western Black Sea in October alone.",
                source: "Balkan Insight",
                href: PRESS[1].href,
              },
              {
                big: "0",
                text: "claims of responsibility. Bulgarian authorities have not officially established who is behind the attacks.",
                source: "Balkan Insight",
                href: PRESS[1].href,
              },
            ].map((stat, i) => (
              <div key={stat.big} className="reveal border-t border-white/15 pt-6" style={{ transitionDelay: `${i * 70}ms` }}>
                <p className="font-display text-[clamp(2.5rem,5vw,3.75rem)] leading-none tracking-[-0.05em]">{stat.big}</p>
                <p className="mt-4 leading-7 text-white/70">{stat.text}</p>
                <a href={stat.href} target="_blank" rel="noopener noreferrer" className="src mt-3 inline-block text-sm">
                  {stat.source} ↗
                </a>
              </div>
            ))}
          </div>
          <p className="reveal mt-10 max-w-[80ch] text-sm leading-6 text-white/45">
            Every figure links to the report it comes from.
          </p>
        </div>
      </section>

      {/* ── Why us ───────────────────────────────────────── */}
      <section className={`${section} overflow-hidden bg-deep`}>
        <div className="aurora aurora-soft pointer-events-none absolute inset-0" aria-hidden />
        <div className={`${wrap} relative grid gap-12 lg:grid-cols-2 lg:gap-20`}>
          <div className="reveal">
            <p className="eyebrow">Why us</p>
            <h2 className="h2 mt-5">We build software. So we built.</h2>
          </div>
          <div className="reveal space-y-6">
            <p className="lede">
              We are not soldiers and we are not a defence company. We are engineers from Sofia who
              work together as{" "}
              <a href={LINKS.wavsy} target="_blank" rel="noopener noreferrer" className="src">
                Wavsy
              </a>
              , a studio that builds websites, web applications and AI systems. Computer vision,
              geometry and reliable software are what we know.
            </p>
            <p className="lede">
              The attacks at sea made one thing plain to us: cheap drones now reach places that felt
              safe a year ago, and the people facing them have very little warning. We picked one
              concrete, unsolved piece of that problem which software can move: fiber-optic drones,
              which cannot be jammed or heard. That is{" "}
              <Link href="/" className="src">
                ARIADNE
              </Link>
              .
            </p>
            <p className="lede">
              We developed it extensively during the European Defense Tech Hackathon in Prishtina,
              where experts with operational experience pulled it apart and told us what a unit
              would really need. Their feedback is in the system now.
            </p>
            <p className="border-l-2 border-cyan pl-5 font-display text-lg leading-snug tracking-[-0.03em] text-white/90">
              ARIADNE starts on land, against drones that trail a fiber. The sea is where we want
              to take what we learn.
            </p>
          </div>
        </div>
      </section>

      {/* ── Beliefs ──────────────────────────────────────── */}
      <section className={section}>
        <div className={wrap}>
          <div className="reveal max-w-[760px]">
            <p className="eyebrow">What we believe</p>
            <h2 className="h2 mt-5">Four things we will not trade away.</h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {BELIEFS.map((belief, i) => (
              <article key={belief.t} className="card reveal p-8" style={{ transitionDelay: `${i * 70}ms` }}>
                <p className="font-display text-sm tracking-[0.1em] text-cyan">0{i + 1}</p>
                <h3 className="mt-4 font-display text-[1.375rem] leading-tight tracking-[-0.04em]">{belief.t}</h3>
                <p className="mt-4 leading-7 text-white/70">{belief.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we want to achieve ──────────────────────── */}
      <section className={`${section} border-t border-white/10 bg-deep/50`}>
        <div className={wrap}>
          <div className="reveal max-w-[800px]">
            <p className="eyebrow">What we want to achieve</p>
            <h2 className="h2 mt-5">A safer Bulgaria is a stronger Alliance.</h2>
            <p className="lede mt-7">
              Bulgaria has been a NATO member since 2004 and a member of the European Union since
              2007. Its coast is the Alliance’s coast. This is what we are working towards.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {[
              {
                flag: <FlagBulgaria />,
                k: "For Bulgaria",
                t: "Defence technology made at home.",
                points: [
                  "Take ARIADNE from simulation to a field test with real fiber, in real light.",
                  "Put our work in front of the Bulgarian armed forces and learn what they actually need.",
                  "Show young Bulgarian engineers that this work can be done here.",
                ],
              },
              {
                flag: <FlagNATO />,
                k: "For NATO",
                t: "Tools the eastern flank can afford.",
                points: [
                  "Build to the open formats allied units already use, so a report can travel.",
                  "Keep the cost at the level of a camera and a laptop.",
                  "Share what we learn with allied teams working on the same threat.",
                ],
              },
              {
                flag: <FlagEU />,
                k: "For the Black Sea",
                t: "Earlier warning, on land and at sea.",
                points: [
                  "Carry what we learn about spotting small drones early towards the maritime problem.",
                  "Work with people who protect ports and shipping lanes.",
                  "Keep merchant sailors out of the casualty lists.",
                ],
              },
            ].map((goal, i) => (
              <article key={goal.k} className="card reveal flex flex-col p-8" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-20">{goal.flag}</div>
                <p className="eyebrow mt-7 !text-[0.6875rem]">{goal.k}</p>
                <h3 className="mt-3 font-display text-xl leading-tight tracking-[-0.04em]">{goal.t}</h3>
                <ul className="mt-6 space-y-4">
                  {goal.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-7 text-white/70">
                      <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-cyan" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Press ────────────────────────────────────────── */}
      <section className={section}>
        <div className={wrap}>
          <div className="reveal max-w-[760px]">
            <p className="eyebrow">Read the reporting</p>
            <h2 className="h2 mt-5">Do not take our word for it.</h2>
          </div>
          <ul className="reveal mt-12 border-t border-white/10">
            {PRESS.map((item) => (
              <li key={item.href + item.date} className="border-b border-white/10">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-2 py-6 transition-colors md:grid-cols-[240px_1fr_auto] md:items-center md:gap-8"
                >
                  <span className="text-sm text-white/50">
                    {item.outlet} · {item.date}
                  </span>
                  <span className="font-display text-[1.05rem] leading-snug tracking-[-0.03em] text-white/90 transition-colors group-hover:text-cyan">
                    {item.title}
                  </span>
                  <span aria-hidden className="hidden text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-cyan md:block">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="reveal mt-20 flex flex-col items-start gap-6 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[26ch] font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-tight tracking-[-0.045em]">
              If you work on this problem, we want to hear from you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact/" className="btn btn-primary">
                Contact us <span aria-hidden>→</span>
              </Link>
              <Link href="/" className="btn btn-ghost">
                See the project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
