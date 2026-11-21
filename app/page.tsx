import Link from "next/link";
import { Scene } from "@/components/Scene";
import { Clip } from "@/components/Clip";
import { Team } from "@/components/Team";
import { FlagBulgaria } from "@/components/Flags";
import { LINKS } from "@/lib/site";

const wrap = "mx-auto max-w-[1240px] px-5 sm:px-8";
const section = "relative py-24 md:py-36";

const STEPS = [
  {
    n: "01",
    clip: "patrol",
    title: "Patrol",
    body: "The drone flies the perimeter of a protected position on its own. One operator, no flying by hand.",
    label: "Concept film: the patrol drone lifts off over its crew.",
  },
  {
    n: "02",
    clip: "sensor",
    title: "Spot and report",
    body: "An incoming drone crosses its camera. The base sees a direction, a rough distance and the type of drone, with a picture. That is the early warning.",
    label: "Concept film: close-up of the patrol drone's camera.",
  },
  {
    n: "03",
    clip: "trace",
    title: "Find the fresh cable",
    body: "It flies to where the drone was seen, works out the one angle from which the cable glints, tips its camera to it and follows the cable, past the older ones.",
    label: "Concept film: the drone follows a line of fiber across open ground.",
  },
  {
    n: "04",
    clip: "locate",
    title: "Suggest a launch zone",
    body: "Where the cable ends, the base gets a zone with a radius and the evidence behind it.",
    label: "Concept film: several traced cables converge on one point.",
  },
  {
    n: "05",
    clip: "map",
    title: "A person decides",
    body: "The duty officer confirms or rejects. The system informs and suggests. It takes no action on a zone.",
    label: "Concept film: traced cables build up on a shared map.",
  },
];

const RESULTS = [
  { scenario: "Good light", zone: "17 of 20", inside: "17", wrong: "0", error: "2.5 m" },
  { scenario: "Field with seven old cables", zone: "17 of 20", inside: "14", wrong: "3", error: "27.4 m" },
  { scenario: "60 m of cable in shade", zone: "17 of 20", inside: "17", wrong: "0", error: "2.1 m" },
  { scenario: "Sun shining along the cable", zone: "17 of 20", inside: "17", wrong: "0", error: "2.1 m" },
  { scenario: "After sunset", zone: "0 of 20", inside: "n/a", wrong: "0", error: "n/a" },
];

const STATE = [
  { part: "Sun position, glint angle, camera tilt", state: "Built and tested" },
  { part: "Direction and rough distance to a drone", state: "Built and tested" },
  { part: "Messages, base station, offline map", state: "Built and tested" },
  { part: "Cable detection, following and launch zone", state: "Built, tested in simulation" },
  { part: "Full mission in six scenarios", state: "Runs end to end in simulation" },
  { part: "Drone detector", state: "Model selected, field footage next" },
];

const NEXT = [
  { t: "Field test", d: "Real fiber on real ground, filmed from the air in real light." },
  { t: "Matte fiber and low light", d: "Active near-infrared lighting, so the drone lights the fiber itself." },
  { t: "Real flight", d: "From the simulator to an aircraft, with a real autopilot." },
  { t: "Integration", d: "Reports in the formats allied units already use on their maps." },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative isolate min-h-[100dvh] overflow-hidden bg-bg">
        <div className="aurora pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div className="dot-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div className={`${wrap} grid min-h-[100dvh] content-start gap-8 pb-20 pt-[calc(var(--header-h)+2.5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:content-center lg:items-center lg:pt-[var(--header-h)]`}>
          <div className="hero-copy min-w-0">
            <a
              href={LINKS.hackathon}
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-7 inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] py-1.5 pl-1.5 pr-4 text-sm text-white/85 backdrop-blur-md transition-colors hover:border-cyan/60 hover:text-white"
            >
              <span className="rounded-full bg-cyan px-2.5 py-0.5 text-xs font-semibold text-deep">EDTH</span>
              <span className="truncate">Built in Prishtina, 20–22 November 2026</span>
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <h1 className="font-display text-[clamp(2.6rem,8.6vw,6.25rem)] leading-[0.92] tracking-[-0.05em]">
              <span className="block">Follow</span>
              <span className="gradient-text block">the thread.</span>
            </h1>
            <p className="mt-8 max-w-[44ch] text-[1.0625rem] leading-7 text-white/75">
              ARIADNE is a patrol drone that spots an incoming drone, tells the base what it is and
              where, and, when that drone is guided by a fiber-optic cable, follows the cable back to
              where it was launched.
            </p>
            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a href="#film" className="btn btn-primary">
                <svg viewBox="0 0 12 12" className="h-3 w-3" fill="currentColor" aria-hidden><path d="M2 1v10l9-5z" /></svg>
                Watch the film
              </a>
              <Link href="/contact/" className="btn btn-ghost">
                Talk to the team
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

      {/* ── Credentials strip ────────────────────────────── */}
      <section className="border-y border-white/10 bg-deep/60">
        <dl className={`${wrap} grid gap-x-8 gap-y-6 py-8 sm:grid-cols-2 lg:grid-cols-4`}>
          {[
            ["Event", "European Defense Tech Hackathon"],
            ["Where", "Prishtina, Kosovo"],
            ["Team", "Five engineers from Sofia, Bulgaria"],
            ["Code", "Open source on GitHub"],
          ].map(([term, value]) => (
            <div key={term}>
              <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-white/45">{term}</dt>
              <dd className="mt-1.5 text-[0.9375rem] text-white/90">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Film ─────────────────────────────────────────── */}
      <section id="film" className={section}>
        <div className={wrap}>
          <div className="reveal max-w-[720px]">
            <p className="eyebrow">The idea in twenty seconds</p>
            <h2 className="h2 mt-5">One mission, start to finish.</h2>
          </div>
          <div className="frame reveal mt-12">
            <video
              className="block aspect-video w-full"
              src="/film/ariadne-film.mp4"
              poster="/film/poster.jpg"
              controls
              playsInline
              preload="none"
            />
          </div>
          <p className="reveal mt-5 text-sm text-white/55">
            Concept film: one ARIADNE mission, from the first sighting to the launch site.
          </p>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────── */}
      <section id="idea" className={`${section} border-t border-white/10`}>
        <div className={wrap}>
          <div className="reveal max-w-[820px]">
            <p className="eyebrow !text-red">The problem</p>
            <h2 className="h2 mt-5">A drone you cannot jam and cannot hear.</h2>
            <p className="lede mt-7 max-w-[62ch]">
              Fiber-optic attack drones are steered through a thin glass fiber instead of radio.
              Jamming does nothing to them. Radio detectors hear nothing. The first warning is often
              the drone itself.
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
                small: "of attack drones in some units",
                text: "About 15–20% of Russian attack drones in mid-2025, by Ukraine’s Unmanned Systems Forces. Up to half in some units by 2026.",
                source: "Sources in our project document",
                href: LINKS.projectDoc,
              },
              {
                big: "0.25 mm",
                small: "of glass, left on the ground",
                text: "The fiber stays where it fell after the flight. One end of it is the place the drone was launched from.",
                source: "References",
                href: LINKS.references,
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

      {/* ── The two fixes ────────────────────────────────── */}
      <section className={`${section} overflow-hidden bg-deep`}>
        <div className="aurora aurora-soft pointer-events-none absolute inset-0" aria-hidden />
        <div className={`${wrap} relative`}>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="reveal">
              <p className="eyebrow">The opening</p>
              <h2 className="h2 mt-5">It worked by hand. Then it stopped.</h2>
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
      <section id="how" className={section}>
        <div className={wrap}>
          <div className="reveal max-w-[760px]">
            <p className="eyebrow">How it works</p>
            <h2 className="h2 mt-5">One attack, five steps.</h2>
            <p className="lede mt-7">
              In our simulation the whole sequence takes about four and a half minutes. The clips are
              cut from the concept film.
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
            <figcaption className="mt-4 text-sm leading-6 text-white/55">
              <span className="block max-w-[80ch]">
                The base station after a simulated mission over a field with old cables. Blue: the
                cable the drone followed. Grey dashes: seven older cables it ignored. Green: the
                launch zone it suggested, 1.6 m from the true point.
              </span>
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
                The cluttered field is the hardest case and the one that matters most: three times
                the true launch point fell outside the zone. After sunset the drone reports the
attack and correctly declines to trace.{" "}
                <a href={LINKS.report} target="_blank" rel="noopener noreferrer" className="src">
                  Full report ↗
                </a>
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

      {/* ── Hackathon ────────────────────────────────────── */}
      <section className={section}>
        <div className={wrap}>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="reveal">
              <p className="eyebrow">Where it was built</p>
              <h2 className="h2 mt-5">Forty-eight hours in Prishtina.</h2>
              <p className="lede mt-7">
                ARIADNE was built at the European Defense Tech Hackathon in Prishtina, Kosovo, on
                20–22 November 2026: the first defence-focused hackathon of its kind in the country,
                with more than 200 participants from across Europe and feedback from people with
                operational experience.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={LINKS.hackathon} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  The Prishtina hackathon ↗
                </a>
                <a href={LINKS.edth} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  European Defense Tech Hub ↗
                </a>
              </div>
            </div>
            <div className="reveal grid gap-4">
              <a href={LINKS.repo} target="_blank" rel="noopener noreferrer" className="card card-hover block p-7">
                <p className="eyebrow !text-[0.6875rem]">Open source</p>
                <p className="mt-4 font-display text-xl tracking-[-0.04em]">github.com/ariadne-edth/ariadne ↗</p>
                <p className="mt-3 leading-7 text-white/65">
                  The code, the tests, the simulation report and every source we cite. Clone it and
                  run the demo on a laptop, offline.
                </p>
              </a>
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
