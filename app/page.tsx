import Link from "next/link";
import { Scene } from "@/components/Scene";
import { Clip } from "@/components/Clip";
import { Team } from "@/components/Team";
import { Intro } from "@/components/Intro";
import { FilmPlayer } from "@/components/FilmPlayer";
import { FlagBulgaria } from "@/components/Flags";
import { LINKS } from "@/lib/site";

const wrap = "mx-auto max-w-[1240px] px-5 sm:px-8";
const section = "relative py-24 md:py-36";

const STEPS = [
  {
    n: "01",
    clip: "patrol",
    title: "Patrol",
    body: "The drone flies the perimeter of a protected position on its own, at 40 metres. One operator, no flying by hand.",
    label: "Film: the patrol drone circles a protected position.",
  },
  {
    n: "02",
    clip: "sighting",
    title: "Spot and locate",
    body: "An incoming drone crosses its camera. Several frames must agree before it reports. The base gets a direction and a rough distance, drawn on the map as a band, not a dot.",
    label: "Film: the patrol drone's camera frames an incoming drone and sends the base a bearing and a range.",
  },
  {
    n: "03",
    clip: "identify",
    title: "Identify",
    body: "Is it a drone, and what kind? A detector answers the first question. A classifier that looks for the fiber spool answers the second, and it is the part we are building now.",
    label: "Film: a confidence bar rises as more frames agree, then the drone type is classified.",
  },
  {
    n: "04",
    clip: "database",
    title: "Report",
    body: "The sighting reaches the base as one small message with a cropped picture, never the full video. Every message is checked against one contract and kept in a journal.",
    label: "Film: the sighting appears on the base station map and in the list of sightings.",
  },
  {
    n: "05",
    clip: "follow",
    title: "Follow the fresh fiber",
    body: "It flies to where the drone was seen, drops to 10 metres, works out the one angle from which the cable glints and tips its camera to it. Then it follows that cable away from the base, past the older ones.",
    label: "Film: the patrol drone flies low along a glinting line of fiber on the ground.",
  },
  {
    n: "06",
    clip: "zone",
    title: "Launch zone",
    body: "Where the fiber ends, the base gets a point with a radius and the evidence behind it. The operator is usually near it. A person at the base confirms or rejects.",
    label: "Film: the traced cable ends in a circle on the base map, with confirm and reject buttons.",
  },
];

// Simulation results, 20 missions per scenario, from the team's current report.
const RESULTS = [
  { scenario: "Good light", zone: "20 of 20", inside: "20", wrong: "0", error: "2.7 m" },
  { scenario: "Field with seven old cables", zone: "20 of 20", inside: "16", wrong: "4", error: "23.8 m" },
  { scenario: "60 m of cable in shade", zone: "20 of 20", inside: "20", wrong: "0", error: "2.3 m" },
  { scenario: "Sun shining along the cable", zone: "20 of 20", inside: "20", wrong: "0", error: "1.5 m" },
  { scenario: "After sunset", zone: "0 of 20", inside: "n/a", wrong: "0", error: "n/a" },
];

const STATE = [
  { part: "Sun position, glint angle, camera tilt", state: "Built and tested" },
  { part: "Direction and rough distance to a drone", state: "Built and tested" },
  { part: "Messages, base station, offline map, journal", state: "Built and tested" },
  { part: "Cable detection, following and launch zone", state: "Built, tested in simulation" },
  { part: "Drone detector", state: "Built and connected to the base map" },
  { part: "Full mission in six scenarios", state: "Runs end to end in simulation" },
];

const NEXT = [
  { t: "Field test", d: "Real fiber on real ground, filmed from the air in real light." },
  { t: "Score the detector", d: "Precision, recall and false alarms on air-to-air video, birds included." },
  { t: "Type classifier", d: "Tell a fiber-optic drone from a radio one by its spool." },
  { t: "Matte fiber and low light", d: "Active near-infrared lighting, so the drone lights the fiber itself." },
];

export default function Home() {
  return (
    <>
      <Intro />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative isolate min-h-[100dvh] overflow-hidden bg-bg">
        <div className="aurora pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div className="dot-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div className={`${wrap} grid min-h-[100dvh] content-start gap-8 pb-20 pt-[calc(var(--header-h)+2.5rem)] lg:grid-cols-[1.25fr_0.75fr] lg:content-center lg:items-center lg:pt-[var(--header-h)]`}>
          <div className="hero-copy min-w-0">
            <p className="eyebrow mb-7">ARIADNE · by Wavsy</p>
            <h1 className="font-display text-[clamp(1.95rem,5.1vw,4.4rem)] leading-[0.96] tracking-[-0.05em]">
              <span className="block whitespace-nowrap">How do we find</span>
              <span className="gradient-text block whitespace-nowrap">the operator?</span>
            </h1>
            <p className="mt-8 max-w-[46ch] text-[1.0625rem] leading-7 text-white/75">
              Follow the fiber. A fiber-optic drone leaves its cable on the ground, and one end of
              it is where the drone was launched. ARIADNE is a patrol drone that spots the incoming
              drone and traces the fresh cable back to that point.
            </p>
            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a href="#film" className="btn btn-primary">
                <svg viewBox="0 0 12 12" className="h-3 w-3" fill="currentColor" aria-hidden><path d="M2 1v10l9-5z" /></svg>
                Watch the film
              </a>
              <Link href="/research/" className="btn btn-ghost">
                Read the research
              </Link>
            </div>
          </div>
          <div className="scene-float flex justify-center">
            <Scene className="w-full max-w-[620px]" />
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block" aria-hidden>
          <span className="scroll-cue block h-10 w-6 rounded-full border border-white/25" />
        </div>
      </section>

      {/* ── Film ─────────────────────────────────────────── */}
      <section id="film" className={`${section} border-t border-white/10`}>
        <div className={wrap}>
          <div className="reveal grid items-end gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div>
              <p className="eyebrow">The film · two minutes</p>
              <h2 className="h2 mt-5">One operator. One fiber. One way back.</h2>
            </div>
            <p className="lede">
              An operator launches fiber-optic drones at a base, moves, and launches again. A patrol
              drone spots one of them, tells the base what it is and where, then follows the fiber
              on the ground to the place it came from.
            </p>
          </div>
          <div className="reveal mt-12">
            <FilmPlayer />
          </div>
          <p className="reveal mt-5 text-sm text-white/50">
            Concept animation, no sound. The countries are imaginary and every scene is simulated.
          </p>
        </div>
      </section>

      {/* ── The answer in three moves ────────────────────── */}
      <section id="idea" className={`${section} overflow-hidden bg-deep`}>
        <div className="aurora aurora-soft pointer-events-none absolute inset-0" aria-hidden />
        <div className={`${wrap} relative`}>
          <div className="reveal max-w-[820px]">
            <p className="eyebrow !text-red">The problem</p>
            <h2 className="h2 mt-5">He launches, moves, and launches again.</h2>
            <p className="lede mt-7 max-w-[62ch]">
              Fiber-optic FPV drones are steered through a thin glass fiber instead of radio.
              Jamming does nothing to them and radio detectors hear nothing. Air defence can stop
              the drone. It cannot stop the person who sends the next one.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              {
                big: "No",
                small: "scalable countermeasures",
                text: "“So far, there are no scalable countermeasures against these fibre-optic drones.”",
                source: "Lowy Institute, 6 Aug 2025",
                href: "https://www.lowyinstitute.org/the-interpreter/fibre-optic-drones-reshape-ukraine-s-technological-war",
              },
              {
                big: "Up to 50%",
                small: "of FPV drones in some units",
                text: "About 15–20% of Russian FPV drones in mid-2025, by Ukraine’s Unmanned Systems Forces. In some units, up to half by 2026.",
                source: "RBC-Ukraine and Euromaidan Press",
                href: "https://euromaidanpress.com/2026/05/28/in-the-age-of-drone-warfare-early-detection-grows-ever-more-urgent-not-just-in-ukraine-but-worldwide/",
              },
              {
                big: "0.25 mm",
                small: "of fiber, left on the ground",
                text: "The fiber stays where it fell after the flight, often for 4 to 8 kilometres. One end of it is the place the drone was launched from.",
                source: "Oboronka, 23 Jan 2026",
                href: "https://oboronka.mezha.ua/en/chomu-ukrajina-dosi-vidstaye-u-dronah-na-optovolokni-307959/",
              },
            ].map((fact, i) => (
              <article key={fact.big} className="card reveal p-7" style={{ transitionDelay: `${i * 80}ms` }}>
                <p className="font-display text-[clamp(2rem,4vw,2.75rem)] leading-none tracking-[-0.05em]">{fact.big}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.1em] text-white/50">{fact.small}</p>
                <p className="mt-6 leading-7 text-white/75">{fact.text}</p>
                <a href={fact.href} target="_blank" rel="noopener noreferrer" className="src mt-5 inline-block text-sm">
                  {fact.source} ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── The answer ───────────────────────────────────── */}
      <section className={section}>
        <div className={wrap}>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="reveal">
              <p className="eyebrow">The answer</p>
              <h2 className="h2 mt-5">Follow the fiber to where it starts.</h2>
              <p className="lede mt-7">
                In February 2025 a Ukrainian brigade saw spent fiber glinting in low sun, flew along
                it by hand and{" "}
                <a className="src" target="_blank" rel="noopener noreferrer" href="https://militarnyi.com/en/news/national-guardsmen-found-enemy-drone-operators-by-following-fiber-optic-wires/">
                  found the launch crew
                </a>
                . So the idea is proven.
              </p>
              <p className="lede mt-5">
                Within months it was failing. The fields{" "}
                <a className="src" target="_blank" rel="noopener noreferrer" href="https://euromaidanpress.com/2025/05/24/fiber-optics-everywhere/">
                  filled with old cable
                </a>{" "}
                and nobody could tell new from old. And it had only ever worked when the sun happened
                to sit at the right angle.
              </p>
              <p className="mt-8 border-l-2 border-cyan pl-5 font-display text-lg leading-snug tracking-[-0.03em] text-white/90">
                We automate a tactic that worked by hand, and we fix the two reasons it stopped:
                clutter, and luck with the light.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  k: "Fix one",
                  t: "Fresh by cue",
                  d: "The trace starts from a drone the patrol has just seen, at the spot where it saw it. That is how it knows which cable among many is the new one.",
                  main: true,
                },
                {
                  k: "Fix two",
                  t: "Glint by calculation",
                  d: "A cable glints towards exactly one angle. ARIADNE works it out from the sun and the cable’s direction, and tips its camera to it. Luck becomes method.",
                  main: true,
                },
                {
                  k: "Also",
                  t: "It knows when it is blind",
                  d: "After sunset it says the cable cannot be traced, and stays on patrol instead of guessing.",
                },
                {
                  k: "Always",
                  t: "A person decides",
                  d: "The report shows the zone and the evidence behind it. A human confirms or rejects. Nothing else happens.",
                },
              ].map((fix, i) => (
                <article
                  key={fix.t}
                  className={`card reveal p-7 ${fix.main ? "!border-cyan/40" : ""}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <p className="eyebrow !text-[0.6875rem]">{fix.k}</p>
                  <h3 className="mt-4 font-display text-xl leading-tight tracking-[-0.04em]">{fix.t}</h3>
                  <p className="mt-4 leading-7 text-white/70">{fix.d}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────── */}
      <section id="how" className={`${section} border-t border-white/10`}>
        <div className={wrap}>
          <div className="reveal max-w-[760px]">
            <p className="eyebrow">How it works</p>
            <h2 className="h2 mt-5">From first sighting to launch zone.</h2>
            <p className="lede mt-7">
              In our simulation the whole sequence takes about four and a half minutes. The clips
              are cut from the film.
            </p>
          </div>
          <ol className="mt-16 space-y-16 md:space-y-28">
            {STEPS.map((step, i) => (
              <li key={step.n} className="reveal grid items-center gap-8 md:grid-cols-2 md:gap-16">
                <div className={i % 2 ? "md:order-2" : ""}>
                  <p className="font-display text-sm tracking-[0.1em] text-cyan">{step.n}</p>
                  <h3 className="mt-4 font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-tight tracking-[-0.045em]">
                    {step.title}
                  </h3>
                  <p className="lede mt-5 max-w-[46ch]">{step.body}</p>
                </div>
                <div className="frame">
                  <Clip name={step.clip} label={step.label} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Evidence ─────────────────────────────────────── */}
      <section id="evidence" className={`${section} border-t border-white/10 bg-deep/50`}>
        <div className={wrap}>
          <div className="reveal max-w-[780px]">
            <p className="eyebrow">Evidence</p>
            <h2 className="h2 mt-5">We state only what is verified.</h2>
            <p className="lede mt-7">
              That is a rule in our repository, and it applies to this page. Every number below comes
              from running code, and all of it describes a simulation.
            </p>
          </div>

          <figure className="reveal mt-14">
            <div className="frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/base-station.jpg" alt="The ARIADNE base station map at the end of a simulated mission: a blue cable track ending in a green launch zone, with grey dashed older cables around it." width={997} height={588} loading="lazy" className="block h-auto w-full" />
            </div>
            <figcaption className="mt-4 max-w-[80ch] text-sm leading-6 text-white/55">
              The base station at the end of a simulated mission over a field with old cables. Blue:
              the cable the drone followed. Grey dashes: the older cables it ignored. Green: the
              launch zone it suggested.
            </figcaption>
          </figure>

          <div className="mt-20 grid gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="reveal">
              <h3 className="font-display text-xl tracking-[-0.04em]">Twenty simulated missions per scenario</h3>
              <div className="card mt-6 overflow-x-auto">
                <table className="w-full min-w-[560px] text-left text-[0.9375rem]">
                  <thead className="text-[0.6875rem] uppercase tracking-[0.12em] text-white/45">
                    <tr>
                      <th className="px-5 py-4 font-medium">Scenario</th>
                      <th className="px-3 py-4 font-medium">Zone reported</th>
                      <th className="px-3 py-4 font-medium">True point inside</th>
                      <th className="px-3 py-4 font-medium">Zone wrong</th>
                      <th className="px-5 py-4 font-medium">Median error</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RESULTS.map((row) => (
                      <tr key={row.scenario} className="border-t border-white/10">
                        <th scope="row" className="px-5 py-4 font-normal text-white/90">{row.scenario}</th>
                        <td className="px-3 py-4 tabular-nums text-white/75">{row.zone}</td>
                        <td className="px-3 py-4 tabular-nums text-white/75">{row.inside}</td>
                        <td className={`px-3 py-4 tabular-nums ${row.wrong === "0" ? "text-white/75" : "text-red"}`}>{row.wrong}</td>
                        <td className="px-5 py-4 tabular-nums text-white/75">{row.error}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-5 max-w-[70ch] text-sm leading-6 text-white/55">
                The cluttered field is the hardest case and the one that matters most: four times
                the true launch point fell outside the zone. After sunset the drone reports the
                attack and correctly declines to trace.{" "}
                <Link href="/research/" className="src">
                  The hard questions, answered →
                </Link>
              </p>
            </div>

            <div className="reveal">
              <h3 className="font-display text-xl tracking-[-0.04em]">What is built</h3>
              <ul className="mt-6 space-y-3">
                {STATE.map((row) => (
                  <li key={row.part} className="card flex items-start gap-4 px-5 py-4">
                    <span aria-hidden className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan" />
                    <span>
                      <span className="block text-white/90">{row.part}</span>
                      <span className="mt-0.5 block text-sm text-white/55">{row.state}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="reveal mt-20 grid gap-10 rounded-[1.25rem] border border-cyan/30 bg-cyan/[0.04] p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">What comes next</p>
              <h3 className="mt-4 font-display text-[clamp(1.4rem,2.6vw,2rem)] leading-tight tracking-[-0.045em]">
                From simulation to the field.
              </h3>
              <p className="mt-4 leading-7 text-white/60">
                Today ARIADNE traces reflective fiber in sunlight, in simulation. This is the road
                from there.
              </p>
            </div>
            <ol className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {NEXT.map((item, i) => (
                <li key={item.t} className="flex gap-4">
                  <span className="font-display text-sm tracking-[0.08em] text-cyan">0{i + 1}</span>
                  <span>
                    <span className="block font-display tracking-[-0.03em]">{item.t}</span>
                    <span className="mt-1.5 block leading-7 text-white/65">{item.d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Developed with experts ───────────────────────── */}
      <section className={section}>
        <div className={wrap}>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="reveal">
              <p className="eyebrow">Developed with experts</p>
              <h2 className="h2 mt-5">Stress-tested in Prishtina.</h2>
              <p className="lede mt-7">
                We developed ARIADNE extensively during the European Defense Tech Hackathon in
                Prishtina, Kosovo, on 20–22 November 2026. Three days among more than 200 builders
                from across Europe, taking feedback from experts with operational experience and
                working it straight into the system.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={LINKS.hackathon} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  EDTH Prishtina ↗
                </a>
                <a href={LINKS.edth} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  European Defense Tech Hub ↗
                </a>
              </div>
            </div>
            <div className="reveal grid gap-4">
              <Link href="/research/" className="card card-hover block p-7">
                <p className="eyebrow !text-[0.6875rem]">Research</p>
                <p className="mt-4 font-display text-xl tracking-[-0.04em]">The hard questions, answered →</p>
                <p className="mt-3 leading-7 text-white/65">
                  Detection range, birds, matte fiber, cluttered fields, friendly cables. What we
                  know, what we have measured and what is still open.
                </p>
              </Link>
              <Link href="/name/" className="card card-hover block p-7">
                <p className="eyebrow !text-[0.6875rem]">The name</p>
                <p className="mt-4 font-display text-xl tracking-[-0.04em]">Why it is called ARIADNE →</p>
                <p className="mt-3 leading-7 text-white/65">
                  A labyrinth, a ball of thread and the oldest way out there is.
                </p>
              </Link>
              <Link href="/story/" className="card card-hover flex items-center gap-6 p-7">
                <FlagBulgaria className="!w-20 shrink-0" />
                <span>
                  <span className="block font-display text-xl tracking-[-0.04em]">Why five Bulgarians care →</span>
                  <span className="mt-2 block leading-7 text-white/65">
                    Merchant ships are being sunk off our own coast. Read our story.
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────── */}
      <section id="team" className={`${section} border-t border-white/10 bg-deep/50`}>
        <div className={wrap}>
          <div className="reveal max-w-[760px]">
            <p className="eyebrow">Team</p>
            <h2 className="h2 mt-5">The people behind it.</h2>
            <p className="lede mt-7">Computer science engineers from Bulgaria, working together as Wavsy.</p>
          </div>
          <div className="mt-14">
            <Team />
          </div>
          <div className="reveal mt-14 flex justify-center">
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Follow ARIADNE on LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── Final call ───────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 md:py-40">
        <div className="aurora pointer-events-none absolute inset-0" aria-hidden />
        <div className={`${wrap} reveal relative text-center`}>
          <h2 className="mx-auto max-w-[16ch] font-display text-[clamp(2rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.05em]">
            Help us take it <span className="gradient-text">to the field.</span>
          </h2>
          <p className="lede mx-auto mt-8 max-w-[52ch]">
            We are looking for people who know this problem first-hand, and for a chance to test
            against real fiber, in real light.
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="/contact/" className="btn btn-primary">
              Get in touch <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
