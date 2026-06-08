import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Calendar, Clock, Camera, BookOpen, TrendingUp, Sparkles, Award, Newspaper, X } from "lucide-react";
import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import AutoplayVideo from "@/components/AutoplayVideo";
import SpotlightMedia from "@/components/SpotlightMedia";
import chairmanVideo from "@/assets/chairman.mp4.asset.json";
import { cn } from "@/lib/utils";

import g1 from "@/assets/gallery/g1.jpg.asset.json";
import g2 from "@/assets/gallery/g2.jpg.asset.json";
import g3 from "@/assets/gallery/g3.jpg.asset.json";
import g4 from "@/assets/gallery/g4.jpg.asset.json";
import g5 from "@/assets/gallery/g5.jpg.asset.json";
import g6 from "@/assets/gallery/g6.jpg.asset.json";
import g7 from "@/assets/gallery/g7.jpg.asset.json";
import g8 from "@/assets/gallery/g8.jpg.asset.json";
import g9 from "@/assets/gallery/g9.jpg.asset.json";
import c1 from "@/assets/gallery/c1.jpg.asset.json";
import c2 from "@/assets/gallery/c2.jpg.asset.json";
import c3 from "@/assets/gallery/c3.jpg.asset.json";
import c4 from "@/assets/gallery/c4.jpg.asset.json";
import c5 from "@/assets/gallery/c5.jpg.asset.json";
import c6 from "@/assets/gallery/c6.jpg.asset.json";
import c7 from "@/assets/gallery/c7.jpg.asset.json";
import c8 from "@/assets/gallery/c8.jpg.asset.json";
import c9 from "@/assets/gallery/c9.jpg.asset.json";
import c10 from "@/assets/gallery/c10.jpg.asset.json";
import mediaPrint1 from "@/assets/media/media-print1.jpg.asset.json";
import mediaPrint2 from "@/assets/media/media-print2.jpg.asset.json";
import mediaPrint3 from "@/assets/media/media-print3.jpg.asset.json";

type GalleryItem = {
  id: number;
  title: string;
  category: "Activity" | "Event" | "Success" | "Workshop" | "Update" | "Campus" | "Media";
  span: "tall" | "wide" | "square";
  src: string;
};

const url = (a: any) => a.url as string;
const gallery: GalleryItem[] = [
  { id: 1, title: "Campus Seminar — Stock Market Awareness", category: "Event", span: "tall", src: url(g1) },
  { id: 2, title: "Live NSE Walkthrough Workshop", category: "Workshop", span: "wide", src: url(g2) },
  { id: 3, title: "Investor Awareness Drive", category: "Activity", span: "square", src: url(g3) },
  { id: 4, title: "Cohort Graduation Group Photo", category: "Success", span: "square", src: url(g4) },
  { id: 5, title: "Keynote — Markets in a Connected World", category: "Workshop", span: "tall", src: url(g5) },
  { id: 6, title: "SRM University Felicitation", category: "Event", span: "square", src: url(g6) },
  { id: 7, title: "Guest Lecture — Personal Finance", category: "Workshop", span: "wide", src: url(g7) },
  { id: 8, title: "Live Stock Analysis Session", category: "Activity", span: "square", src: url(g8) },
  { id: 9, title: "Trading Strategies Bootcamp", category: "Workshop", span: "square", src: url(g9) },
  { id: 10, title: "Premium Classroom — Smart Board Setup", category: "Campus", span: "wide", src: url(c1) },
  { id: 11, title: "Acoustic Lecture Hall", category: "Campus", span: "square", src: url(c2) },
  { id: 12, title: "Live Streaming Studio Classroom", category: "Campus", span: "tall", src: url(c3) },
  { id: 13, title: "Interactive Smart Display", category: "Campus", span: "square", src: url(c4) },
  { id: 14, title: "Premium Seating — Training Room", category: "Campus", span: "square", src: url(c5) },
  { id: 15, title: "Founder's Cabin — Bull & Bear Wall", category: "Campus", span: "wide", src: url(c6) },
  { id: 16, title: "Cohort Classroom — Side View", category: "Campus", span: "square", src: url(c7) },
  { id: 17, title: "Hikvision Interactive Panel", category: "Campus", span: "square", src: url(c8) },
  { id: 18, title: "Full Classroom Walkthrough", category: "Campus", span: "tall", src: url(c9) },
  { id: 19, title: "Reception & Wall of Fame", category: "Campus", span: "wide", src: url(c10) },
  { id: 20, title: "Media Feature — Print Coverage", category: "Media", span: "tall", src: url(mediaPrint1) },
  { id: 21, title: "Media Feature — Press Highlight", category: "Media", span: "square", src: url(mediaPrint2) },
  { id: 22, title: "Media Feature — Newspaper Spotlight", category: "Media", span: "wide", src: url(mediaPrint3) },
];

const posts = [
  { t: "Options Greeks for Beginners — without the math headache", d: "A practical lens on Delta, Gamma, Theta and Vega — built around real trade examples.", date: "Apr 24, 2026", read: "8 min", tag: "Derivatives" },
  { t: "How to read an annual report in 30 minutes", d: "A repeatable framework analysts use to extract signal from 200-page reports.", date: "Apr 18, 2026", read: "10 min", tag: "Research" },
  { t: "The risk-first trading mindset", d: "Why position sizing matters more than your strategy — a deep dive.", date: "Apr 10, 2026", read: "6 min", tag: "Trading" },
  { t: "Equity research career roadmap (2026)", d: "Exactly what you need to break into buy-side or sell-side research roles.", date: "Apr 02, 2026", read: "12 min", tag: "Careers" },
  { t: "Volatility regimes & strategy selection", d: "Choosing the right options strategy for the right vol regime.", date: "Mar 26, 2026", read: "9 min", tag: "Strategy" },
  { t: "DCF that actually makes sense", d: "Build your first three-statement model and DCF without copying templates.", date: "Mar 20, 2026", read: "11 min", tag: "Valuation" },
];

const categories = ["All", "Campus", "Media", "Activity", "Event", "Success", "Workshop", "Update"] as const;

const spanClasses: Record<GalleryItem["span"], string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};

const categoryGradient: Record<GalleryItem["category"], string> = {
  Activity: "from-[hsl(222_75%_30%)] to-[hsl(222_85%_18%)]",
  Event: "from-[hsl(265_55%_30%)] to-[hsl(222_85%_18%)]",
  Success: "from-[hsl(43_85%_45%)] to-[hsl(28_75%_30%)]",
  Workshop: "from-[hsl(200_70%_35%)] to-[hsl(222_85%_18%)]",
  Update: "from-[hsl(222_60%_22%)] to-[hsl(222_85%_12%)]",
  Campus: "from-[hsl(28_80%_45%)] to-[hsl(222_85%_18%)]",
  Media: "from-[hsl(355_70%_40%)] to-[hsl(222_85%_18%)]",
};

const GalleryInsights = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const filtered = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);
  const activeItem = lightboxIdx !== null ? filtered[lightboxIdx] : null;

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowRight") setLightboxIdx((i) => (i === null ? null : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft") setLightboxIdx((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, filtered.length]);


  return (
    <>
      <SEO
        title="Gallery & Insights — Upskiller Academy"
        description="Activities, events, success stories and expert insights from the Upskiller Academy community."
        canonical="https://www.upskilleracademy.com/gallery-insights"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,hsl(43_95%_55%/0.18),transparent_60%),radial-gradient(circle_at_85%_90%,hsl(222_75%_45%/0.25),transparent_60%)]" />
        <div className="container relative py-16 lg:py-24">
          <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20">Gallery & Insights</Badge>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
            Moments, milestones &{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">market wisdom.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Step inside the academy — student activities, events, success stories, training highlights and editorial-grade insights from our mentors.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            {[
              { icon: Camera, label: "Activities & Events" },
              { icon: Sparkles, label: "Success Stories" },
              { icon: BookOpen, label: "Editorial Insights" },
              { icon: TrendingUp, label: "Market Updates" },
            ].map((p) => (
              <span key={p.label} className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 backdrop-blur">
                <p.icon className="h-3.5 w-3.5 text-gold" /> {p.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery (masonry) */}
      {/* Featured: Chairman — Municipal Affairs Committee */}
      <section className="container pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Badge className="bg-gold/15 text-gold border-gold/30 hover:bg-gold/15 gap-1">
              <Award className="h-3.5 w-3.5" /> Civic Leadership
            </Badge>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
              Chairman —{" "}
              <span className="bg-gold-gradient bg-clip-text text-transparent">Municipal Affairs Committee</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              A proud moment from our founder's civic journey — appointed Chairman of the Municipal Affairs Committee, contributing leadership beyond classrooms to community and public policy.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-gold" /> Civic recognition & honor</li>
              <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-gold" /> Community-led leadership</li>
              <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-gold" /> A milestone for the academy family</li>
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative group mx-auto w-full max-w-[360px]">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold/40 via-primary/30 to-gold/40 opacity-70 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-3xl border-2 border-gold/40 bg-black shadow-[0_30px_80px_-20px_hsl(43_95%_55%/0.4)]">
                <AutoplayVideo src={(chairmanVideo as any).url} />
                <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gold/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[hsl(222_85%_12%)] shadow-lg">
                  <Award className="h-3 w-3" /> Chairman
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery (masonry) */}
      <section className="container py-16">

        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Inside the academy</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Activities, events & moments</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all",
                  filter === c
                    ? "border-gold bg-gold/15 text-gold shadow-[0_0_20px_hsl(43_95%_55%/0.25)]"
                    : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((g, i) => (
            <Reveal
              key={g.id}
              delay={i * 60}
              className={cn("group", spanClasses[g.span])}
            >
              <button
                type="button"
                onClick={() => setLightboxIdx(i)}
                className="relative h-full w-full overflow-hidden rounded-2xl border border-border/60 transition-all hover:border-gold/50 hover:shadow-elegant focus:outline-none focus:ring-2 focus:ring-gold cursor-zoom-in"
                aria-label={`Open ${g.title}`}
              >
                <img
                  src={g.src}
                  alt={g.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                  <span className="inline-flex rounded-full bg-gold/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur">
                    {g.category}
                  </span>
                  <p className="mt-2 font-display text-base leading-tight text-white drop-shadow">{g.title}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={lightboxIdx !== null} onOpenChange={(o) => !o && setLightboxIdx(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-5xl p-0 border-gold/30 bg-black/95 overflow-hidden [&>button]:hidden">
          {activeItem && (
            <div className="relative">
              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="block w-full max-h-[85vh] object-contain bg-black"
              />
              <button
                onClick={() => setLightboxIdx(null)}
                className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-black/70 text-white ring-1 ring-white/20 hover:bg-black hover:ring-gold"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <button
                onClick={() => setLightboxIdx((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length))}
                className="absolute left-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-black/60 text-white ring-1 ring-white/20 hover:bg-black hover:ring-gold text-2xl"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={() => setLightboxIdx((i) => (i === null ? null : (i + 1) % filtered.length))}
                className="absolute right-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-black/60 text-white ring-1 ring-white/20 hover:bg-black hover:ring-gold text-2xl"
                aria-label="Next"
              >
                ›
              </button>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5 text-white">
                <span className="inline-flex rounded-full bg-gold/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">
                  {activeItem.category}
                </span>
                <p className="mt-2 font-display text-lg">{activeItem.title}</p>
                <p className="mt-1 text-xs text-white/60">{(lightboxIdx ?? 0) + 1} / {filtered.length}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Insights / Blog */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Editorial</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Insights from our mentors</h2>
            <p className="mt-3 text-muted-foreground">
              Practical articles on markets, strategy, valuation and careers.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <Card className="group h-full border-border/60 hover:border-gold/60 hover:shadow-card-soft transition-all cursor-pointer overflow-hidden">
                  <div className="relative aspect-[16/9] bg-hero overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(43_95%_55%/0.25),transparent_60%)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur">
                      {p.tag}
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{p.date}</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.read}</span>
                    </div>
                    <h3 className="mt-3 font-display text-lg group-hover:text-primary transition-colors">{p.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.d}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryInsights;
