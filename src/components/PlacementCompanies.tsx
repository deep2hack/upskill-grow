import Reveal from "@/components/Reveal";

type Company = {
  name: string;
  short: string;
  tag?: string;
};

const COMPANIES: Company[] = [
  { name: "McKinsey Knowledge Centre", short: "McKc", tag: "Consulting" },
  { name: "Ernst & Young", short: "EY", tag: "Big 4" },
  { name: "Louis Dreyfus Group", short: "LDC", tag: "Commodities" },
  { name: "Visible Alpha", short: "Visible Alpha", tag: "Research" },
  { name: "Moody's Shared Services India", short: "Moody's SSI", tag: "Ratings" },
  { name: "Ameriprise Financial Services", short: "Ameriprise", tag: "Wealth" },
  { name: "Boston Analytics", short: "Boston", tag: "Analytics" },
  { name: "Moody's Analytics", short: "Moody's", tag: "Analytics" },
  { name: "India Ratings & Research", short: "Ind. Ratings", tag: "Ratings" },
  { name: "Fin Advisor", short: "Fin Advisor", tag: "Advisory" },
  { name: "Bank of America", short: "BofA", tag: "Banking" },
  { name: "Trefis", short: "Trefis", tag: "Research" },
  { name: "Genpact Headstrong", short: "Genpact", tag: "Analytics" },
  { name: "EXL", short: "EXL", tag: "Analytics" },
  { name: "CRISIL", short: "CRISIL", tag: "Ratings" },
  { name: "The Smart Cube", short: "Smart Cube", tag: "Research" },
  { name: "Moody's Investors Service", short: "Moody's IS", tag: "Ratings" },
  { name: "Helm Analytics", short: "Helm", tag: "Analytics" },
  { name: "Fiserv", short: "Fiserv", tag: "FinTech" },
  { name: "Tectura", short: "Tectura", tag: "Consulting" },
  { name: "Mazars", short: "Mazars", tag: "Audit" },
  { name: "Pulsar Knowledge Centre", short: "Pulsar", tag: "Research" },
  { name: "ONICRA", short: "ONICRA", tag: "Ratings" },
  { name: "Dion Global", short: "Dion", tag: "FinTech" },
  { name: "Evalueserve", short: "Evalueserve", tag: "Research" },
  { name: "WNS", short: "WNS", tag: "BPM" },
  { name: "Copal Amba", short: "Copal", tag: "Research" },
  { name: "BlackRock", short: "BlackRock", tag: "Asset Mgmt" },
  { name: "Protiviti", short: "Protiviti", tag: "Consulting" },
];

const driftAnims = ["drift-a", "drift-b", "drift-c", "drift-d", "drift-e"];

export const PlacementCompanies = () => {
  return (
    <section className="relative overflow-hidden bg-placements py-20 text-white">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[80%] -translate-x-1/2 rounded-full bg-[hsl(48_100%_60%/0.18)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[hsl(44_95%_55%/0.12)] blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-56 w-56 -translate-y-1/2 rounded-full bg-[hsl(222_75%_45%/0.18)] blur-3xl" />

      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Career Outcomes</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            Our <span className="bg-gold-gradient bg-clip-text text-transparent">Placement Companies</span>
          </h2>
          <p className="mt-4 text-white/70">
            Our learners have built careers at marquee finance, consulting, ratings and capital-market firms across the globe.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-5 sm:gap-7">
          {COMPANIES.map((c, i) => {
            const anim = driftAnims[i % driftAnims.length];
            const dur = 9 + ((i * 7) % 9); // 9–17s
            const delay = -((i * 1.3) % dur);
            const size =
              c.short.length > 10
                ? "h-32 w-32 sm:h-36 sm:w-36 text-[11px] sm:text-xs"
                : c.short.length > 6
                ? "h-28 w-28 sm:h-32 sm:w-32 text-xs sm:text-sm"
                : "h-24 w-24 sm:h-28 sm:w-28 text-sm sm:text-base";
            return (
              <Reveal key={c.name} delay={(i % 12) * 50}>
                <div
                  className="group relative"
                  style={{
                    animation: `${anim} ${dur}s ease-in-out ${delay}s infinite`,
                    willChange: "transform",
                  }}
                >
                  {/* Glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-gold/25 blur-2xl opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
                  {/* Bubble */}
                  <div
                    className={`relative grid ${size} place-items-center rounded-full border border-gold/30 bg-gradient-to-br from-white/15 via-white/5 to-white/[0.02] backdrop-blur-xl shadow-[inset_0_1px_0_hsl(48_100%_85%/0.25),0_18px_45px_-12px_hsl(43_95%_55%/0.45)] transition-all duration-500 hover:scale-110 hover:border-gold hover:shadow-[inset_0_1px_0_hsl(48_100%_85%/0.4),0_25px_60px_-10px_hsl(43_95%_55%/0.7)]`}
                    title={c.name}
                    aria-label={c.name}
                  >
                    {/* Specular highlight */}
                    <span className="pointer-events-none absolute left-3 top-3 h-5 w-8 rounded-full bg-white/35 blur-md" />
                    <div className="flex flex-col items-center px-2 text-center leading-tight">
                      <span className="font-display font-bold text-white drop-shadow">
                        {c.short}
                      </span>
                      {c.tag && (
                        <span className="mt-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-gold/90">
                          {c.tag}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200} className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center text-sm text-white/60">
          <span><span className="font-display text-lg text-gold">500+</span> Placements</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span><span className="font-display text-lg text-gold">{COMPANIES.length}+</span> Hiring Partners</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span><span className="font-display text-lg text-gold">8 LPA</span> Avg. Package</span>
        </Reveal>
      </div>
    </section>
  );
};

export default PlacementCompanies;
