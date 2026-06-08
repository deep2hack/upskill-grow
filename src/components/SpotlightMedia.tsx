import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Play, X, Newspaper, Trophy, GraduationCap, Building2, TrendingUp, Award, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

const FEATURED_ID = "5o0gupHT6cg";
const FEATURED_THUMB = `https://img.youtube.com/vi/${FEATURED_ID}/maxresdefault.jpg`;

const HEADLINES = [
  { icon: Trophy, tag: "Placements", t: "4200+ Career Placements Powered by Skill-First Training", d: "Marquee finance and consulting firms continue to hire from Upskiller Academy cohorts month after month." },
  { icon: GraduationCap, tag: "Student Success", t: "From Tier-3 Colleges to Global Analytics Floors", d: "Alumni share how live projects and mentorship turned them into recruiter-ready professionals." },
  { icon: Building2, tag: "Industry Recognition", t: "Magnum Educorporates Recognised as a Rising Edu-Brand", d: "An ecosystem trusted by 120+ hiring partners across India and global markets." },
  { icon: TrendingUp, tag: "Career Transformation", t: "Average Packages Climb to ₹8 LPA for Top Performers", d: "Capstone-led research and interview cells driving real outcomes in 2026." },
  { icon: Newspaper, tag: "Financial Education", t: "Investor Awareness Drives Reach 25,000+ Learners", d: "Educational impact extends beyond classrooms into community-led financial literacy." },
  { icon: Award, tag: "Academy Milestones", t: "Chairman Honour — Municipal Affairs Committee", d: "Civic leadership recognition for our founder strengthens the academy's public mission." },
  { icon: Sparkles, tag: "Alumni Achievements", t: "Alumni Featured Across Leading Financial Newsrooms", d: "Student-led research getting picked up by industry portals and media platforms." },
];

const SpotlightMedia = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[hsl(222_85%_6%)] py-20 text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,hsl(43_95%_55%/0.18),transparent_55%),radial-gradient(circle_at_85%_90%,hsl(222_75%_45%/0.25),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(hsl(43_95%_55%)_1px,transparent_1px),linear-gradient(90deg,hsl(43_95%_55%)_1px,transparent_1px)] [background-size:38px_38px]" />

      <div className="container relative">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge className="bg-gold/15 text-gold border-gold/30 hover:bg-gold/15 gap-1">
            <Newspaper className="h-3.5 w-3.5" /> Media Highlights & Success Headlines
          </Badge>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
            In The <span className="bg-gold-gradient bg-clip-text text-transparent">Spotlight</span>
          </h2>
          <p className="mt-4 text-primary-foreground/75">
            Celebrating student success, placement achievements, industry recognition, and educational excellence.
          </p>
        </Reveal>

        {/* News ticker */}
        <Reveal delay={120} className="mt-8 overflow-hidden rounded-full border border-gold/30 bg-black/40 backdrop-blur">
          <div className="flex animate-[ticker_40s_linear_infinite] whitespace-nowrap py-2 text-xs text-gold/90">
            {[...HEADLINES, ...HEADLINES].map((h, i) => (
              <span key={i} className="mx-6 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="font-semibold uppercase tracking-wider">{h.tag}</span>
                <span className="text-white/70">— {h.t}</span>
              </span>
            ))}
          </div>
        </Reveal>

        {/* Featured + headlines grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Featured video card */}
          <Reveal className="lg:col-span-7">
            <article className="group relative overflow-hidden rounded-3xl border border-gold/30 bg-white/[0.03] backdrop-blur-xl transition-all hover:border-gold hover:shadow-[0_30px_80px_-20px_hsl(43_95%_55%/0.6)]">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative block aspect-video w-full overflow-hidden"
                aria-label="Watch featured video"
              >
                <img
                  src={FEATURED_THUMB}
                  alt="Upskiller Academy & Magnum Educorporates"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${FEATURED_ID}/hqdefault.jpg`; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gold/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[hsl(222_85%_12%)] shadow-lg">
                  <Newspaper className="h-3 w-3" /> Featured Media
                </span>
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-gold/95 text-[hsl(222_85%_12%)] shadow-[0_10px_30px_-5px_hsl(43_95%_55%/0.8)] transition-transform duration-500 group-hover:scale-110">
                    <Play className="h-9 w-9 fill-current" />
                  </span>
                </div>
              </button>
              <div className="p-6">
                <h3 className="font-display text-xl sm:text-2xl text-white">
                  Upskiller Academy & Magnum Educorporates – Success Stories & Achievements
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  A spotlight on placements, milestones and the journey that's powering India's next generation of finance professionals.
                </p>
                <button
                  onClick={() => setOpen(true)}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-[hsl(222_85%_12%)] shadow-[0_10px_30px_-5px_hsl(43_95%_55%/0.7)] transition-all hover:scale-105 hover:shadow-[0_15px_40px_-5px_hsl(43_95%_55%/0.9)]"
                >
                  <Play className="h-4 w-4 fill-current" /> Watch Now
                </button>
              </div>
            </article>
          </Reveal>

          {/* Headline cards */}
          <div className="grid gap-4 lg:col-span-5 sm:grid-cols-2 lg:grid-cols-1">
            {HEADLINES.slice(0, 4).map((h, i) => (
              <Reveal key={h.t} delay={i * 80}>
                <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-gold/60 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_-15px_hsl(43_95%_55%/0.45)]">
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/30 transition-transform group-hover:scale-110">
                      <h.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold/90">{h.tag}</span>
                      <h4 className="mt-1 font-display text-base leading-snug text-white">{h.t}</h4>
                      <p className="mt-1.5 text-xs text-white/60 line-clamp-2">{h.d}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Academy Achievements */}
        <Reveal delay={120} className="mt-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            <Trophy className="h-3 w-3" /> Academy Achievements
          </span>
          <h3 className="mt-4 font-display text-2xl sm:text-3xl">A track record built on real outcomes</h3>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HEADLINES.slice(3).map((h, i) => (
            <Reveal key={h.t} delay={i * 70}>
              <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_20px_60px_-15px_hsl(43_95%_55%/0.45)]">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold/15 text-gold ring-1 ring-gold/30">
                    <h.icon className="h-5 w-5" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold/90">{h.tag}</span>
                </div>
                <h4 className="mt-3 font-display text-base text-white">{h.t}</h4>
                <p className="mt-1.5 text-xs text-white/60">{h.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox / modal video */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-4xl p-0 border-gold/30 bg-black overflow-hidden [&>button]:hidden">
          <div className="relative aspect-video bg-black">
            {open && (
              <iframe
                src={`https://www.youtube.com/embed/${FEATURED_ID}?autoplay=1&rel=0`}
                title="Upskiller Academy & Magnum Educorporates"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            )}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-black/70 text-white ring-1 ring-white/20 hover:bg-black hover:ring-gold"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SpotlightMedia;
