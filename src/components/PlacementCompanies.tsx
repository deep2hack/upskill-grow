import { CSSProperties } from "react";
import Reveal from "@/components/Reveal";

type Logo = {
  name: string;
  render: () => JSX.Element;
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
  { name: "WNS", render: () => (
    <div className="flex items-baseline">
      <Word className="text-[1.4rem] text-neutral-900">WNS</Word>
      <span className="ml-0.5 inline-block h-2 w-2 rounded-sm bg-red-600" />
    </div>
  )},
  { name: "MQUBE", render: () => (
    <div className="flex items-center gap-1">
      <span className="grid h-6 w-6 place-items-center rounded-md border-2 border-red-500 text-red-500 font-black text-xs">M</span>
      <Word className="text-[1.1rem] text-neutral-900">QUBE</Word>
    </div>
  )},
  { name: "Protiviti", render: () => (
    <Word weight={400} className="text-[1.15rem] italic text-neutral-900">protiviti</Word>
  )},
  { name: "Nasdaq", render: () => (
    <div className="flex items-center gap-1">
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden><path d="M4 18 L12 4 L20 18 Z" fill="#00B4E5" /></svg>
      <Word className="text-[1.15rem] text-[#0e7ea8]">Nasdaq</Word>
    </div>
  )},
  { name: "LSE", render: () => (
    <div className="flex flex-col items-center leading-tight">
      <div className="grid h-6 w-6 place-items-center rounded-sm bg-[#1d2a5b] text-white text-[0.5rem] font-bold">LSE</div>
      <span className="mt-0.5 text-[0.5rem] font-bold uppercase text-[#1d2a5b]">London</span>
    </div>
  )},
  { name: "Jasper", render: () => (
    <Word className="text-[1.3rem] italic text-[#6c7ae0]">JASPER</Word>
  )},
  { name: "Barclays", render: () => (
    <div className="flex items-center gap-1">
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden><path d="M12 3 C7 7 4 12 3 21 C8 18 12 16 21 21 C18 12 17 7 12 3 Z" fill="#00AEEF" /></svg>
      <Word className="text-[1.05rem] text-[#00AEEF]">BARCLAYS</Word>
    </div>
  )},
  { name: "Goldman", render: () => (
    <Word className="text-[0.95rem] text-neutral-900 text-center leading-tight">GOLDMAN<br/><span className="text-gold-deep">SACHS</span></Word>
  )},
  { name: "Deloitte", render: () => (
    <div className="flex items-baseline">
      <Word className="text-[1.25rem] text-neutral-900">Deloitte</Word>
      <span className="ml-0.5 h-1.5 w-1.5 rounded-full bg-green-500" />
    </div>
  )},
];

// Hand-tuned positions for an organic scatter (percentages)
// Each bubble has unique top/left, size, drift animation and duration.
type Pos = {
  top: string; left: string; size: number;
  drift: "drift-a" | "drift-b" | "drift-c" | "drift-d" | "drift-e";
  duration: number; delay: number;
};

const POSITIONS: Pos[] = [
  { top: "8%",  left: "6%",  size: 132, drift: "drift-a", duration: 14, delay: 0 },
  { top: "18%", left: "32%", size: 112, drift: "drift-c", duration: 18, delay: 1.2 },
  { top: "4%",  left: "58%", size: 124, drift: "drift-b", duration: 16, delay: 0.6 },
  { top: "14%", left: "82%", size: 116, drift: "drift-d", duration: 20, delay: 2.1 },
  { top: "44%", left: "16%", size: 128, drift: "drift-e", duration: 17, delay: 0.9 },
  { top: "52%", left: "46%", size: 144, drift: "drift-a", duration: 22, delay: 1.6 },
  { top: "48%", left: "74%", size: 120, drift: "drift-b", duration: 15, delay: 0.3 },
  { top: "76%", left: "26%", size: 118, drift: "drift-d", duration: 19, delay: 2.4 },
  { top: "78%", left: "62%", size: 134, drift: "drift-c", duration: 21, delay: 1.0 },
];

// Mobile-friendly subset (5 bubbles, less overlap)
const MOBILE_POSITIONS: Pos[] = [
  { top: "6%",  left: "8%",  size: 96,  drift: "drift-a", duration: 16, delay: 0 },
  { top: "20%", left: "55%", size: 104, drift: "drift-c", duration: 18, delay: 0.8 },
  { top: "44%", left: "18%", size: 100, drift: "drift-b", duration: 17, delay: 1.4 },
  { top: "52%", left: "60%", size: 108, drift: "drift-d", duration: 20, delay: 0.5 },
  { top: "76%", left: "32%", size: 110, drift: "drift-e", duration: 19, delay: 1.9 },
];

const Bubble = ({ logo, pos, className = "" }: { logo: Logo; pos: Pos; className?: string }) => {
  const style: CSSProperties = {
    top: pos.top,
    left: pos.left,
    width: pos.size,
    height: pos.size,
    animation: `${pos.drift} ${pos.duration}s ease-in-out ${pos.delay}s infinite`,
  };
  return (
    <div className={`bubble-float-wrap absolute ${className}`} style={style} title={logo.name} aria-label={logo.name}>
      <div className="bubble-glass grid h-full w-full place-items-center rounded-full">
        <div className="px-2 text-center">{logo.render()}</div>
      </div>
    </div>
  );
};

export const PlacementCompanies = () => {
  return (
    <section className="relative overflow-hidden bg-placements py-20 sm:py-24 text-white">
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

        {/* Floating bubbles canvas */}
        <Reveal delay={150}>
          <div className="relative mx-auto mt-14 h-[680px] sm:h-[620px] w-full max-w-6xl">
            {/* Desktop / tablet scatter */}
            <div className="absolute inset-0 hidden sm:block">
              {LOGOS.map((logo, i) => (
                <Bubble key={`d-${logo.name}`} logo={logo} pos={POSITIONS[i]} />
              ))}
            </div>
            {/* Mobile reduced set */}
            <div className="absolute inset-0 sm:hidden">
              {LOGOS.slice(0, MOBILE_POSITIONS.length).map((logo, i) => (
                <Bubble key={`m-${logo.name}`} logo={logo} pos={MOBILE_POSITIONS[i]} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center text-sm text-white/60">
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
