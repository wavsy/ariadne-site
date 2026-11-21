import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research",
  description:
    "The hard questions about ARIADNE, answered briefly: detection range, drone type, distance, reflective and matte fiber, birds, cluttered fields, friendly cables, metrics and data.",
};

const wrap = "mx-auto max-w-[1240px] px-5 sm:px-8";

type Status = "built" | "sim" | "planned" | "open";

const STATUS: Record<Status, { label: string; cls: string }> = {
  built: { label: "Built and tested", cls: "border-cyan/50 text-cyan" },
  sim: { label: "Simulation", cls: "border-white/30 text-white/75" },
  planned: { label: "Planned", cls: "border-[#f5b041]/50 text-[#f5b041]" },
  open: { label: "Open question", cls: "border-red/50 text-[#ff8a91]" },
};

type QA = { q: string; a: string; status: Status };
type Part = { id: string; n: string; title: string; intro: string; figure?: { src: string; alt: string; caption: string }; items: QA[] };

// Short answers, one or two sentences each, taken from the team's repository as
// of 21 November 2026. Each one is marked with how far it has been proven.
const PARTS: Part[] = [
  {
    id: "operator",
    n: "1",
    title: "The question",
    intro: "Everything on this site is an answer to one question.",
    figure: {
      src: "/img/research/zone.jpg",
      alt: "Film still: the traced cable ends in a launch zone drawn on the base map.",
      caption: "Figure 1. Where the fiber ends: a point with a radius. Concept film.",
    },
    items: [
      {
        q: "How do we find the operator?",
        a: "We follow the fresh fiber to where it ends. That end is the launch point, and we report it as a zone with a radius. The operator is usually near it, not at it, and moves, so we say launch zone and a person at the base decides what it means.",
        status: "sim",
      },
      {
        q: "Has this been done before?",
        a: "By hand, yes: a Ukrainian brigade followed glinting fiber to a launch crew in February 2025. What we found no public description of is starting the trace from a drone that was just detected, and tilting the camera to a computed glint angle.",
        status: "built",
      },
    ],
  },
  {
    id: "detection",
    n: "2",
    title: "Seeing the drone",
    intro: "How far away the patrol drone notices an incoming drone, and what it can say about it.",
    figure: {
      src: "/img/research/identify.jpg",
      alt: "Film still: precision and recall figures for the drone detector beside sample pictures of drones and birds.",
      caption: "Figure 2. The detector scene from the film: is it a drone, and how often is the model right? Concept film.",
    },
    items: [
      {
        q: "How far away can it detect a drone?",
        a: "With the assumed 4K camera and a 70° lens, a 0.4 m drone is 6 pixels wide at about 180 m, which is the smallest box we report. In simulation the first report came at a median of 137 m (92 to 168 m), about 12 seconds before the drone would reach the base.",
        status: "sim",
      },
      {
        q: "At what distance can it tell that it is a drone?",
        a: "At that same range, once the box is at least 6 pixels wide and appears in 3 of the last 5 frames. Six pixels support “something is there”. We have not yet measured the real detector’s hit rate against size.",
        status: "built",
      },
      {
        q: "At what distance can it tell what kind of drone it is?",
        a: "Not established yet. The classifier that looks for the fiber spool is the next thing we build, and the spool is only a few pixels across at detection range. Nothing yet shows it can be recognised that far out.",
        status: "planned",
      },
      {
        q: "How does it measure the distance to the drone?",
        a: "From how wide the drone looks in the picture, assuming it is between 0.25 m and 0.60 m across. That gives a distance good to about ±40%, which is why the map shows a band and not a dot. The direction comes from where the drone sits in the frame, and it is good.",
        status: "built",
      },
      {
        q: "How does it tell a bird from a drone?",
        a: "On both the image and the movement. The detector judges the picture, then a sighting only counts if it shows up in 3 of the last 5 frames without jumping more than 80 pixels, because a drone stays in view and moves smoothly. We have not yet measured the false-alarm rate with birds.",
        status: "built",
      },
    ],
  },
  {
    id: "cable",
    n: "3",
    title: "Seeing the fiber",
    intro: "The fiber is about a quarter of a millimetre thick. Seeing it from the air is the heart of the project.",
    figure: {
      src: "/img/research/follow.jpg",
      alt: "Film still: the patrol drone flies low over open ground, following a bright line of fiber.",
      caption: "Figure 3. Every glint becomes a point; the points become the track. Concept film.",
    },
    items: [
      {
        q: "How does it detect a reflective fiber-optic cable?",
        a: "By its glint in sunlight, with an ordinary colour camera. The drone works out the one angle from which the cable reflects the sun, tips its camera to it from 10 m up, and turns the thin bright line in the picture into points on the ground.",
        status: "built",
      },
      {
        q: "Has that been proven on real fiber?",
        a: "Not yet. The detector and follower are tested on synthetic pictures only. Filming a real line on grass at 2, 5 and 10 metres, in sun and in shade, is the next test.",
        status: "planned",
      },
      {
        q: "How does it detect a matte, non-reflective cable?",
        a: "Today it does not: matte fiber gives no glint and ARIADNE finds nothing. The plan is near-infrared lighting on the drone with a matched camera, so the drone lights the fiber itself. The first step is a bench test at 1, 3 and 10 metres.",
        status: "planned",
      },
      {
        q: "What happens at night, under cloud or in rain?",
        a: "No direct sun means no glint. After sunset the drone still reports the incoming drone, says that the cable cannot be traced, and stays on patrol. Overcast and rain are not modelled, so we assume it does not work.",
        status: "sim",
      },
    ],
  },
  {
    id: "clutter",
    n: "4",
    title: "Too many cables",
    intro: "A used field is crossed by old fiber. This is where following cables by hand stopped working.",
    figure: {
      src: "/img/research/search.jpg",
      alt: "Film still: the patrol drone searches the ground beneath it for the fresh cable.",
      caption: "Figure 4. The search starts where the drone was seen, not anywhere in the field. Concept film.",
    },
    items: [
      {
        q: "What happens in a field covered with fiber-optic cables?",
        a: "It never searches for cable in general. It starts where it just saw the drone, accepts only a cable that runs along the drone’s approach, and at every crossing keeps to the straighter line. With seven old cables in simulation it reported a zone in 20 of 20 missions; 16 contained the true launch point, with a median error of 23.8 m.",
        status: "sim",
      },
      {
        q: "And in a forest or in bushes?",
        a: "Not modelled. Our simulated ground is flat and open. Stretches of up to 80 m where the cable cannot be seen are bridged and reported as such; a longer dark stretch looks like the end of the cable.",
        status: "open",
      },
      {
        q: "Both sides fly fiber drones. How does it know an enemy cable from a friendly one?",
        a: "It does not classify cables by side. The cable it follows is the one behind a drone it just watched fly at the protected position, traced away from the base, and a person confirms every zone. Telling the two sides’ cables apart by any other means is an open question.",
        status: "open",
      },
      {
        q: "How does it tell an active cable from an old one?",
        a: "Not from the picture: old and new fiber look the same, and a live fiber does not glow in any way a camera can see. A cable is “active” for us because we just watched the drone lay it. Freshness comes from the sighting.",
        status: "built",
      },
    ],
  },
  {
    id: "models",
    n: "5",
    title: "Models and metrics",
    intro: "Two different kinds of software do the seeing, and they are scored in different ways.",
    items: [
      {
        q: "Which model recognises the drone?",
        a: "A YOLO11s detector, run on the drone. Each frame is checked twice: once whole at 640 pixels, and once as a full-resolution tile that locks on to the last sighting. We chose it because it was the only candidate its author had scored on a separate public benchmark.",
        status: "built",
      },
      {
        q: "Which metrics do we use for the drone model?",
        a: "Precision, recall and false alarms per minute, counting a hit when the predicted box overlaps the true one by at least 0.3, because small drones need a forgiving threshold. F1 follows from the first two. Boxes with a confidence score under 0.25 are dropped.",
        status: "built",
      },
      {
        q: "What are the drone model’s scores?",
        a: "We have no scores of our own yet. The scoring tool is built and the air-to-air test video is prepared; running it is next. The model’s author reports precision 0.93 and recall 0.76 on a public benchmark, and we expect less from a camera that is itself flying.",
        status: "planned",
      },
      {
        q: "Which model recognises the cable?",
        a: "Not a neural network. It is classical image processing in five steps: keep what is white, keep what is thin, drop the specks, find straight runs, refit the line. We found no public labelled dataset of fiber on the ground to train a network on.",
        status: "built",
      },
      {
        q: "Which metrics do we use for the cable model?",
        a: "The outcome of the whole trace: was a zone reported, is the true launch point inside it, how many metres off is its centre, how many metres were bridged without seeing the cable, and how many other cables were ignored on the way.",
        status: "sim",
      },
    ],
  },
  {
    id: "data",
    n: "6",
    title: "Data",
    intro: "What the drone sends, and where it is kept.",
    figure: {
      src: "/img/research/database.jpg",
      alt: "Film still: the base station with a map on the left and a list of sightings on the right.",
      caption: "Figure 5. The duty officer’s view. It runs offline on a laptop. Concept film.",
    },
    items: [
      {
        q: "What data does the drone send?",
        a: "Small messages of three kinds: a drone sighting, a cable track and a launch zone. Each carries a time, a position with its error, and a label saying whether it is simulated, recorded or live. With a sighting it sends a cropped picture, never the full video.",
        status: "built",
      },
      {
        q: "What database does it go into?",
        a: "Today a journal file on the base laptop. Every accepted report and every confirm or reject is appended as one line, and the file only grows. The format is GeoJSON, an open standard that map systems and databases already read.",
        status: "built",
      },
      {
        q: "Is the data shared between drones and units?",
        a: "Not yet. One drone reports to one base. Exporting confirmed zones to the map systems units already use is planned, and a shared record of traced cables and launch sites across drones is where we want to take it.",
        status: "planned",
      },
    ],
  },
  {
    id: "limits",
    n: "7",
    title: "Limits",
    intro: "What the concept itself cannot do, whatever the software.",
    items: [
      {
        q: "Will the patrol drone survive the flight?",
        a: "That is a real limit. Following a cable means flying low and slow towards the launch site. The one documented trace by hand ended six kilometres behind the line. We do not claim to have solved it.",
        status: "open",
      },
      {
        q: "What can an opponent do about it?",
        a: "Use matte fiber, lay decoy cable, launch from a ground robot, or cut the fiber at the launch point after every flight. We name these because a counter-measure that hides its weak points is not one you can plan around.",
        status: "open",
      },
      {
        q: "Does it act on what it finds?",
        a: "No. ARIADNE informs and suggests. It takes no action on a zone, and only a person at the base can confirm one.",
        status: "built",
      },
    ],
  },
];

const RANGE = [
  { camera: "1080p, 70° lens", px: "about 90 m", first: "62 m (44–79 m)", reported: "18 of 20", zone: "17 of 20" },
  { camera: "4K, 70° lens (chosen)", px: "about 180 m", first: "137 m (92–168 m)", reported: "20 of 20", zone: "20 of 20" },
];

const RESULTS = [
  { scenario: "Good light", zone: "20", inside: "20", wrong: "0", median: "2.7 m", worst: "5.6 m" },
  { scenario: "Seven old cables", zone: "20", inside: "16", wrong: "4", median: "23.8 m", worst: "37.4 m" },
  { scenario: "60 m of cable in shade", zone: "20", inside: "20", wrong: "0", median: "2.3 m", worst: "5.3 m" },
  { scenario: "Sun along the cable", zone: "20", inside: "20", wrong: "0", median: "1.5 m", worst: "7.4 m" },
  { scenario: "Radio drone, no cable", zone: "0", inside: "n/a", wrong: "0", median: "n/a", worst: "n/a" },
  { scenario: "After sunset", zone: "0", inside: "n/a", wrong: "0", median: "n/a", worst: "n/a" },
];

function Tag({ status }: { status: Status }) {
  const s = STATUS[status];
  return (
    <span className={`inline-flex shrink-0 rounded-full border px-2.5 py-0.5 text-[0.6875rem] uppercase tracking-[0.08em] ${s.cls}`}>
      {s.label}
    </span>
  );
}

const th = "px-4 py-3.5 font-medium";
const td = "px-4 py-3.5 tabular-nums text-white/75";

export default function Research() {
  const total = PARTS.reduce((sum, part) => sum + part.items.length, 0);

  return (
    <>
      {/* ── Title block ──────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-bg pb-16 pt-[calc(var(--header-h)+4rem)] md:pb-20 md:pt-[calc(var(--header-h)+6rem)]">
        <div className="aurora pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div className="dot-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div className={`${wrap} hero-copy`}>
          <p className="eyebrow">Research · working paper</p>
          <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.05em]">
            The hard questions, <span className="gradient-text">answered.</span>
          </h1>
          <p className="lede mt-8 max-w-[64ch]">
            {total} questions people ask us about ARIADNE, each with a short answer from our own
            research and code. Every answer is marked with how far it has been proven, because an
            honest “not yet” is worth more than a confident guess.
          </p>
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/55">
            <div>
              <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-white/40">Authors</dt>
              <dd className="mt-1 text-white/80">Team Wavsy, Sofia</dd>
            </div>
            <div>
              <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-white/40">Version</dt>
              <dd className="mt-1 text-white/80">21 November 2026</dd>
            </div>
            <div>
              <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-white/40">Scope</dt>
              <dd className="mt-1 text-white/80">Reflective fiber, in sunlight</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── Abstract and legend ──────────────────────────── */}
      <section className="border-y border-white/10 bg-deep/60">
        <div className={`${wrap} grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20`}>
          <div>
            <h2 className="text-[0.75rem] uppercase tracking-[0.16em] text-cyan">Abstract</h2>
            <p className="mt-4 leading-8 text-white/80">
              Fiber-optic FPV drones cannot be jammed and give no radio signal, but they leave their
              fiber on the ground, and one end of it is the launch point. ARIADNE is software for a
              patrol drone that detects an incoming drone, reports it to a base, and follows the
              fresh fiber by its sun glint to a launch zone that a person confirms. The method
              answers the two reasons manual tracing failed: it knows which cable is new because it
              starts from the drone it just saw, and it finds the glint by calculation instead of
              luck. The full mission runs in simulation; real-fiber field tests are the next step.
            </p>
          </div>
          <div>
            <h2 className="text-[0.75rem] uppercase tracking-[0.16em] text-cyan">How to read the marks</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/65">
              <li className="flex items-start gap-3"><Tag status="built" /><span>Real code with tests behind it.</span></li>
              <li className="flex items-start gap-3"><Tag status="sim" /><span>Measured, but in our simulation only.</span></li>
              <li className="flex items-start gap-3"><Tag status="planned" /><span>Designed, not built or not measured yet.</span></li>
              <li className="flex items-start gap-3"><Tag status="open" /><span>We do not have an answer yet.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28">
        <div className={`${wrap} grid gap-14 lg:grid-cols-[240px_1fr] lg:gap-20`}>
          <nav className="hidden lg:block" aria-label="Sections">
            <div className="sticky top-[calc(var(--header-h)+2rem)]">
              <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-white/40">Contents</p>
              <ol className="mt-4 space-y-1 border-l border-white/10">
                {PARTS.map((part) => (
                  <li key={part.id}>
                    <a href={`#${part.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[0.9375rem] text-white/60 transition-colors hover:border-cyan hover:text-white">
                      <span className="mr-2 tabular-nums text-white/35">{part.n}</span>
                      {part.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#tables" className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[0.9375rem] text-white/60 transition-colors hover:border-cyan hover:text-white">
                    <span className="mr-2 tabular-nums text-white/35">8</span>
                    Tables
                  </a>
                </li>
              </ol>
            </div>
          </nav>

          <div className="min-w-0 space-y-24">
            {PARTS.map((part) => (
              <section key={part.id} id={part.id} aria-labelledby={`${part.id}-h`}>
                <div className="reveal">
                  <p className="font-display text-sm tracking-[0.1em] text-cyan">{part.n}</p>
                  <h2 id={`${part.id}-h`} className="mt-3 font-display text-[clamp(1.6rem,3.4vw,2.5rem)] leading-tight tracking-[-0.045em]">
                    {part.title}
                  </h2>
                  <p className="mt-4 max-w-[62ch] leading-7 text-white/60">{part.intro}</p>
                </div>

                {part.figure && (
                  <figure className="reveal mt-9">
                    <div className="frame">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={part.figure.src} alt={part.figure.alt} width={1600} height={900} loading="lazy" className="block h-auto w-full" />
                    </div>
                    <figcaption className="mt-3 text-[0.8125rem] leading-5 text-white/45">{part.figure.caption}</figcaption>
                  </figure>
                )}

                <dl className="mt-9 border-t border-white/10">
                  {part.items.map((item, i) => (
                    <div key={item.q} className="reveal border-b border-white/10 py-8">
                      <dt className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                        <span className="font-display text-[1.125rem] leading-snug tracking-[-0.03em] text-white">
                          <span className="mr-2 tabular-nums text-white/35">{part.n}.{i + 1}</span>
                          {item.q}
                        </span>
                        <Tag status={item.status} />
                      </dt>
                      <dd className="mt-4 max-w-[70ch] leading-8 text-white/75">{item.a}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}

            {/* ── Tables ───────────────────────────────── */}
            <section id="tables" aria-labelledby="tables-h">
              <div className="reveal">
                <p className="font-display text-sm tracking-[0.1em] text-cyan">8</p>
                <h2 id="tables-h" className="mt-3 font-display text-[clamp(1.6rem,3.4vw,2.5rem)] leading-tight tracking-[-0.045em]">
                  Tables
                </h2>
                <p className="mt-4 max-w-[62ch] leading-7 text-white/60">
                  All figures below describe the simulation: synthetic ground, a modelled glint, a
                  simulated detector that misses and raises false boxes, and a drifting position
                  error. They say nothing yet about real footage.
                </p>
              </div>

              <div className="reveal mt-10">
                <h3 className="font-display text-[1.05rem] tracking-[-0.03em]">Table 1. Detection range and the forward camera</h3>
                <div className="card mt-4 overflow-x-auto">
                  <table className="w-full min-w-[640px] text-left text-[0.9375rem]">
                    <thead className="text-[0.6875rem] uppercase tracking-[0.1em] text-white/45">
                      <tr>
                        <th className={th}>Camera</th>
                        <th className={th}>0.4 m drone is 6 px at</th>
                        <th className={th}>First report, median</th>
                        <th className={th}>Drone reported</th>
                        <th className={th}>Zone sent</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RANGE.map((row) => (
                        <tr key={row.camera} className="border-t border-white/10">
                          <th scope="row" className="px-4 py-3.5 font-normal text-white/90">{row.camera}</th>
                          <td className={td}>{row.px}</td>
                          <td className={td}>{row.first}</td>
                          <td className={td}>{row.reported}</td>
                          <td className={td}>{row.zone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 max-w-[70ch] text-sm leading-6 text-white/50">
                  Twenty simulated missions in good light. With the 4K camera the incoming drone is
                  about 210 m from the base at the first report: roughly 12 seconds of warning at
                  18 m/s.
                </p>
              </div>

              <div className="reveal mt-14">
                <h3 className="font-display text-[1.05rem] tracking-[-0.03em]">Table 2. Tracing the cable, twenty missions per scenario</h3>
                <div className="card mt-4 overflow-x-auto">
                  <table className="w-full min-w-[680px] text-left text-[0.9375rem]">
                    <thead className="text-[0.6875rem] uppercase tracking-[0.1em] text-white/45">
                      <tr>
                        <th className={th}>Scenario</th>
                        <th className={th}>Zone reported</th>
                        <th className={th}>True point inside</th>
                        <th className={th}>Zone wrong</th>
                        <th className={th}>Median error</th>
                        <th className={th}>Worst error</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RESULTS.map((row) => (
                        <tr key={row.scenario} className="border-t border-white/10">
                          <th scope="row" className="px-4 py-3.5 font-normal text-white/90">{row.scenario}</th>
                          <td className={td}>{row.zone}</td>
                          <td className={td}>{row.inside}</td>
                          <td className={`px-4 py-3.5 tabular-nums ${row.wrong === "0" ? "text-white/75" : "text-red"}`}>{row.wrong}</td>
                          <td className={td}>{row.median}</td>
                          <td className={td}>{row.worst}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 max-w-[70ch] text-sm leading-6 text-white/50">
                  In all 120 missions the incoming drone was reported. The two scenarios with no zone
                  end that way on purpose: a radio drone leaves no cable, and after sunset there is
                  no glint to follow.
                </p>
              </div>
            </section>

            <div className="reveal flex flex-col items-start gap-6 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
              <p className="max-w-[26ch] font-display text-[clamp(1.4rem,2.8vw,2rem)] leading-tight tracking-[-0.045em]">
                Have a harder question? We want to hear it.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact/" className="btn btn-primary">
                  Ask us <span aria-hidden>→</span>
                </Link>
                <Link href="/#film" className="btn btn-ghost">
                  Watch the film
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
