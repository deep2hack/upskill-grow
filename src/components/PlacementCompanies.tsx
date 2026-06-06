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
  { name: "Boston Analytics", short: "Boston Analytics", tag: "Analytics" },
  { name: "Moody's Analytics", short: "Moody's Analytics", tag: "Analytics" },
  { name: "India Ratings & Research", short: "India Ratings", tag: "Ratings" },
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
  { name: "Copal Amba", short: "Copal Amba", tag: "Research" },
  { name: "BlackRock", short: "BlackRock", tag: "Asset Mgmt" },
  { name: "Protiviti", short: "Protiviti", tag: "Consulting" },
];

export const PlacementCompanies = () => {
  return (
    <section className="relative overflow-hidden bg-placements py-16 sm:py-20 text-white">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[80%] -translate-x-1/2 rounded-full bg-[hsl(48_100%_60%/0.18)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[hsl(44_95%_55%/0.12)] blur-3xl" />

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

        <div className="mt-10 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {COMPANIES.map((c, i) => (
            <Reveal key={c.name} delay={(i % 10) * 40}>
              <div
                className="group relative h-full overflow-hidden rounded-2xl border border-gold/20 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:bg-white/[0.08] hover:shadow-[0_18px_40px_-15px_hsl(43_95%_55%/0.45)]"
                title={c.name}
                aria-label={c.name}
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/15 blur-2xl opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col justify-between gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gold/15 text-gold ring-1 ring-gold/30 font-display text-sm font-bold">
                      {c.short.charAt(0)}
                    </span>
                    {c.tag && (
                      <span className="rounded-full bg-white/5 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gold/80 ring-1 ring-gold/20">
                        {c.tag}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="font-display text-sm sm:text-base leading-tight text-white">{c.short}</p>
                    {c.short !== c.name && (
                      <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/55 line-clamp-1">{c.name}</p>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center text-sm text-white/60">
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
