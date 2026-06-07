import Reveal from "@/components/Reveal";

type Company = {
  name: string;
  short: string;
  tag?: string;
  domain: string; // for logo + redirect
};

const COMPANIES: Company[] = [
  { name: "McKinsey Knowledge Centre", short: "McKc", tag: "Consulting", domain: "mckinsey.com" },
  { name: "Ernst & Young", short: "EY", tag: "Big 4", domain: "ey.com" },
  { name: "Louis Dreyfus Group", short: "LDC", tag: "Commodities", domain: "ldc.com" },
  { name: "Visible Alpha", short: "Visible Alpha", tag: "Research", domain: "visiblealpha.com" },
  { name: "Moody's Shared Services India", short: "Moody's SSI", tag: "Ratings", domain: "moodys.com" },
  { name: "Ameriprise Financial Services", short: "Ameriprise", tag: "Wealth", domain: "ameriprise.com" },
  { name: "Boston Analytics", short: "Boston", tag: "Analytics", domain: "bostonanalytics.com" },
  { name: "Moody's Analytics", short: "Moody's", tag: "Analytics", domain: "moodysanalytics.com" },
  { name: "India Ratings & Research", short: "Ind. Ratings", tag: "Ratings", domain: "indiaratings.co.in" },
  { name: "Fin Advisor", short: "Fin Advisor", tag: "Advisory", domain: "finadvisor.com" },
  { name: "Bank of America", short: "BofA", tag: "Banking", domain: "bankofamerica.com" },
  { name: "Trefis", short: "Trefis", tag: "Research", domain: "trefis.com" },
  { name: "Genpact Headstrong", short: "Genpact", tag: "Analytics", domain: "genpact.com" },
  { name: "EXL", short: "EXL", tag: "Analytics", domain: "exlservice.com" },
  { name: "CRISIL", short: "CRISIL", tag: "Ratings", domain: "crisil.com" },
  { name: "The Smart Cube", short: "Smart Cube", tag: "Research", domain: "thesmartcube.com" },
  { name: "Moody's Investors Service", short: "Moody's IS", tag: "Ratings", domain: "moodys.com" },
  { name: "Helm Analytics", short: "Helm", tag: "Analytics", domain: "helm-analytics.com" },
  { name: "Fiserv", short: "Fiserv", tag: "FinTech", domain: "fiserv.com" },
  { name: "Tectura", short: "Tectura", tag: "Consulting", domain: "tectura.com" },
  { name: "Mazars", short: "Mazars", tag: "Audit", domain: "mazars.com" },
  { name: "Pulsar Knowledge Centre", short: "Pulsar", tag: "Research", domain: "pulsarknowledge.com" },
  { name: "ONICRA", short: "ONICRA", tag: "Ratings", domain: "onicra.com" },
  { name: "Dion Global", short: "Dion", tag: "FinTech", domain: "dionglobal.com" },
  { name: "Evalueserve", short: "Evalueserve", tag: "Research", domain: "evalueserve.com" },
  { name: "WNS", short: "WNS", tag: "BPM", domain: "wns.com" },
  { name: "Copal Amba", short: "Copal", tag: "Research", domain: "moodys.com" },
  { name: "BlackRock", short: "BlackRock", tag: "Asset Mgmt", domain: "blackrock.com" },
  { name: "Protiviti", short: "Protiviti", tag: "Consulting", domain: "protiviti.com" },
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
            const dur = 9 + ((i * 7) % 9);
            const delay = -((i * 1.3) % dur);
            const size =
              c.short.length > 10
                ? "h-32 w-32 sm:h-36 sm:w-36"
                : c.short.length > 6
                ? "h-28 w-28 sm:h-32 sm:w-32"
                : "h-24 w-24 sm:h-28 sm:w-28";
            const logoUrl = `https://logo.clearbit.com/${c.domain}`;
            const siteUrl = `https://${c.domain}`;
            const initials = c.short
              .split(/\s+/)
              .map((w) => w[0])
              .join("")
              .slice(0, 3)
              .toUpperCase();
            return (
              <Reveal key={c.name} delay={(i % 12) * 50}>
                <a
                  href={siteUrl}
                  target="_blank"
                  rel="noopener noreferrer external"
                  className="group relative block"
                  style={{
                    animation: `${anim} ${dur}s ease-in-out ${delay}s infinite`,
                    willChange: "transform",
                  }}
                  title={`Visit ${c.name}`}
                  aria-label={`Visit ${c.name}`}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-gold/25 blur-2xl opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
                  <div
                    className={`relative grid ${size} place-items-center rounded-full border border-gold/30 bg-gradient-to-br from-white/95 via-white/80 to-white/70 backdrop-blur-xl shadow-[inset_0_1px_0_hsl(48_100%_85%/0.4),0_18px_45px_-12px_hsl(43_95%_55%/0.45)] transition-all duration-500 hover:scale-110 hover:border-gold hover:shadow-[inset_0_1px_0_hsl(48_100%_85%/0.6),0_25px_60px_-10px_hsl(43_95%_55%/0.7)] overflow-hidden`}
                  >
                    <span className="pointer-events-none absolute left-3 top-3 h-5 w-8 rounded-full bg-white/60 blur-md z-10" />
                    <img
                      src={logoUrl}
                      alt={`${c.name} logo`}
                      loading="lazy"
                      className="relative z-[1] max-h-[60%] max-w-[75%] object-contain"
                      onError={(e) => {
                        const img = e.currentTarget;
                        img.style.display = "none";
                        const fb = img.nextElementSibling as HTMLElement | null;
                        if (fb) fb.style.display = "flex";
                      }}
                    />
                    <div
                      className="relative z-[1] hidden flex-col items-center justify-center px-2 text-center leading-tight"
                    >
                      <span className="font-display font-bold text-[hsl(222_75%_22%)] text-sm sm:text-base">
                        {initials}
                      </span>
                      <span className="mt-0.5 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[hsl(43_95%_40%)]">
                        {c.short}
                      </span>
                    </div>
                    {c.tag && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 text-[7px] sm:text-[8px] font-bold uppercase tracking-wider text-[hsl(43_95%_30%)] bg-white/70 rounded-full px-1.5 py-0.5 z-[2] whitespace-nowrap">
                        {c.tag}
                      </span>
                    )}
                  </div>
                </a>
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
