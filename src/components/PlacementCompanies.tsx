import { CSSProperties } from "react";
import Reveal from "@/components/Reveal";

/**
 * Inline brand wordmarks. We render them as text/SVG so they stay sharp,
 * theme-agnostic and lightweight. These are stylised representations for
 * placement showcase — not official brand assets.
 */
type Logo = {
  name: string;
  render: () => JSX.Element;
  float: "a" | "b" | "c";
};

const Word = ({ children, className = "", weight = 800 }: { children: React.ReactNode; className?: string; weight?: number }) => (
  <span
    className={`font-display tracking-tight ${className}`}
    style={{ fontFamily: "Inter, system-ui, sans-serif", fontWeight: weight, letterSpacing: "-0.02em" }}
  >
    {children}
  </span>
);

const LOGOS: Logo[] = [
  {
    name: "WNS",
    float: "a",
    render: () => (
      <div className="flex items-baseline">
        <Word className="text-[1.55rem] text-neutral-900">WNS</Word>
        <span className="ml-0.5 inline-block h-2 w-2 rounded-sm bg-red-600" />
      </div>
    ),
  },
  {
    name: "MQUBE",
    float: "b",
    render: () => (
      <div className="flex items-center gap-1.5">
        <span className="grid h-7 w-7 place-items-center rounded-md border-2 border-red-500 text-red-500 font-black text-sm">M</span>
        <Word className="text-[1.35rem] text-neutral-900">QUBE</Word>
      </div>
    ),
  },
  {
    name: "Protiviti",
    float: "c",
    render: () => (
      <div className="flex flex-col items-center leading-none">
        <Word weight={400} className="text-[1.4rem] italic text-neutral-900">protiviti<span className="align-super text-[0.55rem]">®</span></Word>
        <span className="mt-0.5 text-[0.5rem] uppercase tracking-[0.18em] text-neutral-500">Global Business Consulting</span>
      </div>
    ),
  },
  {
    name: "Nasdaq",
    float: "a",
    render: () => (
      <div className="flex items-center gap-1.5">
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
          <path d="M4 18 L12 4 L20 18 Z" fill="#00B4E5" />
        </svg>
        <Word className="text-[1.35rem] text-[#0e7ea8]">Nasdaq</Word>
      </div>
    ),
  },
  {
    name: "London Stock Exchange",
    float: "b",
    render: () => (
      <div className="flex items-center gap-2">
        <div className="grid h-8 w-7 place-items-center rounded-sm bg-[#1d2a5b] text-white text-[0.55rem] font-bold leading-tight px-1">LSE</div>
        <div className="flex flex-col leading-tight text-[0.55rem] font-bold uppercase text-[#1d2a5b]">
          <span>London</span><span>Stock</span><span>Exchange</span>
        </div>
      </div>
    ),
  },
  {
    name: "Jasper",
    float: "c",
    render: () => (
      <Word className="text-[1.55rem] italic text-[#6c7ae0]">JASPER</Word>
    ),
  },
  {
    name: "Colin",
    float: "a",
    render: () => (
      <div className="rounded-sm bg-red-600 px-3 py-1">
        <Word className="text-[1.3rem] text-white">COLIN</Word>
      </div>
    ),
  },
  {
    name: "Barclays",
    float: "b",
    render: () => (
      <div className="flex items-center gap-1.5">
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 3 C7 7 4 12 3 21 C8 18 12 16 21 21 C18 12 17 7 12 3 Z" fill="#00AEEF" />
        </svg>
        <Word className="text-[1.3rem] text-[#00AEEF]">BARCLAYS</Word>
      </div>
    ),
  },
  {
    name: "Ken Research",
    float: "c",
    render: () => (
      <div className="flex items-center gap-1.5">
        <span className="grid h-7 w-7 place-items-center rounded-sm bg-neutral-900 text-white font-black text-sm">K</span>
        <div className="flex flex-col leading-tight">
          <Word className="text-[1.05rem] text-neutral-900">KEN RESEARCH</Word>
          <span className="text-[0.5rem] uppercase tracking-[0.12em] text-neutral-500">Your Search Ends With Our Research</span>
        </div>
      </div>
    ),
  },
  {
    name: "Goldman",
    float: "a",
    render: () => (
      <Word className="text-[1.2rem] text-neutral-900">GOLDMAN <span className="text-gold-deep">SACHS</span></Word>
    ),
  },
  {
    name: "Deloitte",
    float: "b",
    render: () => (
      <div className="flex items-baseline">
        <Word className="text-[1.45rem] text-neutral-900">Deloitte</Word>
        <span className="ml-0.5 h-1.5 w-1.5 rounded-full bg-green-500" />
      </div>
    ),
  },
  {
    name: "EY",
    float: "c",
    render: () => (
      <div className="flex items-center gap-1.5">
        <Word className="text-[1.7rem] text-neutral-900">EY</Word>
        <Word weight={500} className="text-[0.7rem] text-neutral-700 leading-tight">Building a<br />better world</Word>
      </div>
    ),
  },
];

const Bubble = ({ logo, idx }: { logo: Logo; idx: number }) => {
  const style: CSSProperties = { animationDelay: `${(idx % 6) * 0.4}s` };
  return (
    <div className="shrink-0 px-3" style={style}>
      <div
        className={`bubble-glass bubble-float-${logo.float} grid h-32 w-32 sm:h-36 sm:w-36 place-items-center rounded-full`}
        title={logo.name}
        aria-label={logo.name}
      >
        <div className="px-3 text-center">{logo.render()}</div>
      </div>
    </div>
  );
};

const Row = ({
  logos,
  speedClass,
}: {
  logos: Logo[];
  speedClass: string;
}) => {
  // Duplicate for seamless loop
  const items = [...logos, ...logos];
  return (
    <div className="marquee-row group relative overflow-hidden py-3">
      <div className={`flex w-max items-center ${speedClass}`}>
        {items.map((logo, i) => (
          <Bubble key={`${logo.name}-${i}`} logo={logo} idx={i} />
        ))}
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[hsl(220_22%_4%)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[hsl(220_22%_4%)] to-transparent" />
    </div>
  );
};

export const PlacementCompanies = () => {
  const row1 = LOGOS.slice(0, 5);
  const row2 = LOGOS.slice(5, 9);
  const row3 = LOGOS.slice(9, 12);

  return (
    <section className="relative overflow-hidden bg-placements py-20 sm:py-24 text-white">
      {/* Glow accents */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[80%] -translate-x-1/2 rounded-full bg-[hsl(48_100%_60%/0.18)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[hsl(44_95%_55%/0.12)] blur-3xl" />

      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Career Outcomes</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            Our <span className="bg-gold-gradient bg-clip-text text-transparent">Placement Companies</span>
          </h2>
          <p className="mt-4 text-white/70">
            Our learners have built careers at marquee finance, consulting and capital-market firms across the globe.
          </p>
        </Reveal>

        <div className="mt-14 space-y-2">
          <Reveal delay={120}>
            <Row logos={row1} speedClass="marquee-track" />
          </Reveal>
          <Reveal delay={220}>
            <Row logos={row2} speedClass="marquee-track-reverse" />
          </Reveal>
          <Reveal delay={320}>
            <Row logos={row3} speedClass="marquee-track-slow" />
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center text-sm text-white/60">
          <span><span className="font-display text-lg text-gold">500+</span> Placements</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span><span className="font-display text-lg text-gold">120+</span> Hiring Partners</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span><span className="font-display text-lg text-gold">8 LPA</span> Avg. Package</span>
        </Reveal>
      </div>
    </section>
  );
};

export default PlacementCompanies;
