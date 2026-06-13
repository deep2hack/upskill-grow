import Reveal from "@/components/Reveal";

type Company = { name: string; domain: string; size: number };

const ROW_1: Company[] = [
  { name: "McKinsey Knowledge Centre", domain: "mckinsey.com", size: 110 },
  { name: "Ernst & Young", domain: "ey.com", size: 100 },
  { name: "Louis Dreyfus Company", domain: "ldc.com", size: 120 },
  { name: "Visible Alpha", domain: "visiblealpha.com", size: 95 },
  { name: "Moody's", domain: "moodys.com", size: 130 },
  { name: "Ameriprise", domain: "ameriprise.com", size: 105 },
  { name: "Boston Analytics", domain: "bostonanalytics.com", size: 90 },
  { name: "CRISIL", domain: "crisil.com", size: 115 },
  { name: "BlackRock", domain: "blackrock.com", size: 125 },
  { name: "EXL", domain: "exlservice.com", size: 100 },
];

const ROW_2: Company[] = [
  { name: "Genpact", domain: "genpact.com", size: 115 },
  { name: "Evalueserve", domain: "evalueserve.com", size: 105 },
  { name: "WNS", domain: "wns.com", size: 95 },
  { name: "Protiviti", domain: "protiviti.com", size: 110 },
  { name: "Fiserv", domain: "fiserv.com", size: 120 },
  { name: "Mazars", domain: "mazars.com", size: 100 },
  { name: "Bank of America", domain: "bankofamerica.com", size: 130 },
  { name: "The Smart Cube", domain: "thesmartcube.com", size: 95 },
  { name: "Copal Amba", domain: "moodys.com", size: 105 },
  { name: "India Ratings", domain: "indiaratings.co.in", size: 110 },
];

const COLORS = [
  "linear-gradient(135deg, hsl(350 85% 60%), hsl(15 90% 55%))",
  "linear-gradient(135deg, hsl(200 85% 55%), hsl(230 80% 50%))",
  "linear-gradient(135deg, hsl(150 70% 45%), hsl(180 75% 40%))",
  "linear-gradient(135deg, hsl(280 70% 55%), hsl(320 75% 55%))",
  "linear-gradient(135deg, hsl(43 95% 55%), hsl(25 90% 50%))",
  "linear-gradient(135deg, hsl(190 80% 50%), hsl(160 75% 45%))",
  "linear-gradient(135deg, hsl(340 80% 55%), hsl(280 70% 50%))",
  "linear-gradient(135deg, hsl(50 95% 55%), hsl(85 70% 50%))",
  "linear-gradient(135deg, hsl(220 75% 55%), hsl(260 70% 55%))",
  "linear-gradient(135deg, hsl(10 85% 55%), hsl(345 80% 50%))",
];

const hashIdx = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h) % COLORS.length;
};

const Bubble = ({ c }: { c: Company }) => {
  const primary = `https://logo.clearbit.com/${c.domain}`;
  const fallback = `https://www.google.com/s2/favicons?domain=${c.domain}&sz=128`;
  const bg = COLORS[hashIdx(c.name)];
  return (
    <a
      href={`https://${c.domain}`}
      target="_blank"
      rel="noopener noreferrer external"
      title={c.name}
      aria-label={`Visit ${c.name}`}
      className="group relative shrink-0 mx-3 sm:mx-4 flex flex-col items-center"
      style={{ width: c.size }}
    >
      <span className="relative block" style={{ width: c.size, height: c.size }}>
        <span className="pointer-events-none absolute inset-0 rounded-full bg-gold/30 blur-2xl opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
        <span
          className="relative grid h-full w-full place-items-center rounded-full border border-white/40 backdrop-blur-xl shadow-[inset_0_1px_0_hsl(0_0%_100%/0.4),0_18px_45px_-12px_hsl(43_95%_55%/0.5)] transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:brightness-110 group-hover:shadow-[inset_0_1px_0_hsl(0_0%_100%/0.55),0_25px_60px_-10px_hsl(43_95%_55%/0.85)] overflow-hidden"
          style={{ backgroundImage: bg }}
        >
          <span className="pointer-events-none absolute left-3 top-2.5 h-3 w-6 rounded-full bg-white/60 blur-md z-10" />
          <span className="absolute inset-[10%] rounded-full bg-white/90 grid place-items-center overflow-hidden">
            <img
              src={primary}
              alt={`${c.name} logo`}
              loading="lazy"
              className="max-h-[80%] max-w-[80%] object-contain transition-all duration-500 group-hover:scale-110"
              onError={(e) => {
                const img = e.currentTarget;
                if (img.dataset.fb !== "1") {
                  img.dataset.fb = "1";
                  img.src = fallback;
                }
              }}
            />
          </span>
        </span>
      </span>
      <span
        className="mt-3 block w-full text-center text-[12px] sm:text-[13px] font-medium text-white/90 leading-tight transition-colors duration-300 group-hover:text-gold"
        style={{ maxWidth: c.size }}
      >
        {c.name}
      </span>
    </a>
  );
};

const Row = ({ items, direction, duration }: { items: Company[]; direction: "left" | "right"; duration: number }) => {
  const doubled = [...items, ...items];
  return (
    <div className="group relative overflow-hidden py-4">
      <div
        className="flex items-center w-max"
        style={{
          animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${duration}s linear infinite`,
          animationPlayState: "running",
          willChange: "transform",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.animationPlayState = "paused")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.animationPlayState = "running")}
      >
        {doubled.map((c, i) => (
          <Bubble key={`${c.domain}-${i}`} c={c} />
        ))}
      </div>
    </div>
  );
};

export const PlacementMarquee = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[hsl(222_78%_10%)] via-[hsl(222_80%_6%)] to-black py-20 text-white">
      <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-1/2 rounded-full bg-[hsl(43_95%_55%/0.18)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-1/2 rounded-full bg-[hsl(222_75%_45%/0.22)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(hsl(48_100%_70%/0.18)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative">
        <Reveal className="container mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Our Placement Partners</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            Trusted by{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">Leading Global Firms</span>
          </h2>
          <p className="mt-4 text-white/70">
            Students trained with us have successfully secured opportunities with leading global organizations.
          </p>
        </Reveal>

        <div className="mt-12 space-y-2">
          <Row items={ROW_1} direction="left" duration={45} />
          <Row items={ROW_2} direction="right" duration={55} />
        </div>
      </div>
    </section>
  );
};

export default PlacementMarquee;
