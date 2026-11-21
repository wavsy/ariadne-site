import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The name",
  description:
    "Why the project is called ARIADNE: in the Greek myth, Ariadne's thread leads Theseus out of the labyrinth. Here the thread is the fiber.",
};

const wrap = "mx-auto max-w-[1240px] px-5 sm:px-8";
const section = "relative py-24 md:py-32";

const STORY = [
  {
    n: "I",
    t: "The labyrinth",
    d: "King Minos of Crete kept a monster, the Minotaur, at the centre of a maze built by Daedalus. The maze was made so that nobody who walked in could find the way out.",
  },
  {
    n: "II",
    t: "The thread",
    d: "When Theseus of Athens came to kill the Minotaur, Ariadne, the king’s daughter, gave him a ball of thread. He tied one end at the entrance and let it run out behind him as he went in.",
  },
  {
    n: "III",
    t: "The way back",
    d: "Theseus killed the Minotaur. Then he did the simple thing that nobody before him could do: he picked up the thread and followed it back to where it began.",
  },
];

const PARALLEL = [
  { myth: "The labyrinth", ours: "A field crossed by old cables, where every line looks the same." },
  { myth: "The thread", ours: "The fiber a drone leaves on the ground behind it as it flies." },
  { myth: "The place it was tied", ours: "The launch site. One end of every fiber is there." },
  { myth: "Following it back", ours: "A patrol drone that traces the fresh fiber to where it started." },
];

export default function Name() {
  return (
    <>
      {/* ── Hero: the story in one Renaissance panel ─────── */}
      <section className="relative isolate overflow-hidden bg-bg">
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/myth/cassone.jpg"
            alt="Renaissance painting telling the story in one picture: Theseus in armour arrives by ship, and on the right Ariadne waits beside a round stone labyrinth with the Minotaur inside."
            className="h-full w-full object-cover object-[88%_50%] opacity-80"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#04070d_8%,rgba(4,7,13,0.72)_48%,rgba(4,7,13,0.25)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,#04070d_2%,transparent_45%)]" />
        </div>
        <div className={`${wrap} flex min-h-[92dvh] flex-col justify-end pb-20 pt-[calc(var(--header-h)+5rem)] md:pb-28`}>
          <div className="hero-copy max-w-[760px]">
            <p className="eyebrow">The name</p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,7.4vw,5.5rem)] leading-[0.93] tracking-[-0.05em]">
              Ariadne held <span className="gradient-text">the thread.</span>
            </h1>
            <p className="lede mt-8 max-w-[52ch] !text-white/80">
              In the Greek myth, one thread is what leads Theseus out of the labyrinth. Our project
              is named after the woman who gave it to him. Here, the thread is the fiber.
            </p>
          </div>
          <p className="mt-12 text-[0.8125rem] text-white/45">
            Master of the Campana Cassoni, <em>Theseus and the Minotaur</em>, about 1510. Public domain.
          </p>
        </div>
      </section>

      {/* ── The myth in three steps ──────────────────────── */}
      <section className={`${section} border-t border-white/10`}>
        <div className={wrap}>
          <div className="reveal max-w-[760px]">
            <p className="eyebrow">The myth</p>
            <h2 className="h2 mt-5">A maze, a monster and a ball of thread.</h2>
          </div>
          <ol className="mt-14 grid gap-4 md:grid-cols-3">
            {STORY.map((step, i) => (
              <li key={step.n} className="card reveal p-8" style={{ transitionDelay: `${i * 80}ms` }}>
                <p className="font-display text-sm tracking-[0.14em] text-cyan">{step.n}</p>
                <h3 className="mt-4 font-display text-[1.375rem] leading-tight tracking-[-0.04em]">{step.t}</h3>
                <p className="mt-4 leading-7 text-white/70">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Two ancient images ───────────────────────────── */}
      <section className={`${section} overflow-hidden bg-deep`}>
        <div className="aurora aurora-soft pointer-events-none absolute inset-0" aria-hidden />
        <div className={`${wrap} relative grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
          <figure className="reveal mx-auto w-full max-w-[440px]">
            <div className="frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/myth/burne-jones.jpg"
                alt="Drawing: Theseus creeps along a stone wall of the labyrinth with a sword in one hand and Ariadne's thread in the other, while the Minotaur peers round the corner."
                width={1400}
                height={1463}
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-[0.8125rem] leading-5 text-white/45">
              Theseus in the labyrinth, the thread in his hand. Edward Burne-Jones, tile design,
              1861. Public domain.
            </figcaption>
          </figure>
          <div className="reveal">
            <p className="eyebrow">Two thousand years old</p>
            <h2 className="h2 mt-5">The oldest way out is to follow the line back.</h2>
            <p className="lede mt-7">
              Artists have gone back to this story for two thousand years, from Roman floor mosaics
              to Victorian tile designs. The idea in it has not aged: when a path is too tangled to reason about, you
              do not solve the maze. You follow the one line that was laid through it.
            </p>
            <p className="lede mt-5">
              English still carries the story. A ball of thread was once called a{" "}
              <em>clew</em>, and from Ariadne’s clew we get the word <em>clue</em>: the thing you
              follow to find what is hidden.
            </p>
          </div>
        </div>
      </section>

      {/* ── The parallel ─────────────────────────────────── */}
      <section className={section}>
        <div className={`${wrap} grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20`}>
          <div>
            <div className="reveal">
              <p className="eyebrow">Why it fits</p>
              <h2 className="h2 mt-5">Here, the thread is the fiber.</h2>
              <p className="lede mt-7 max-w-[56ch]">
                A fiber-optic drone is steered through a glass fiber that unspools behind it. After
                the flight the fiber stays on the ground, and one end of it is where the drone was
                launched. That is our thread.
              </p>
            </div>
            <dl className="reveal mt-10 border-t border-white/10">
              {PARALLEL.map((row) => (
                <div key={row.myth} className="grid gap-1 border-b border-white/10 py-5 sm:grid-cols-[220px_1fr] sm:gap-8">
                  <dt className="font-display text-[1.05rem] tracking-[-0.03em] text-cyan">{row.myth}</dt>
                  <dd className="leading-7 text-white/75">{row.ours}</dd>
                </div>
              ))}
            </dl>
            <div className="reveal mt-10 flex flex-wrap gap-3">
              <Link href="/#how" className="btn btn-primary">
                See how it works <span aria-hidden>→</span>
              </Link>
              <Link href="/research/" className="btn btn-ghost">
                Read the research
              </Link>
            </div>
          </div>
          <figure className="reveal">
            <div className="frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/myth/mosaic.jpg"
                alt="Black and white Roman floor mosaic of a square labyrinth, with a small panel at its centre showing Theseus fighting the Minotaur."
                width={1600}
                height={1400}
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-[0.8125rem] leading-5 text-white/45">
              Labyrinth mosaic with Theseus and the Minotaur at its centre. House of the Labyrinth,
              Pompeii, first century. Public domain.
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
