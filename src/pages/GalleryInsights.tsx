import { useState, useEffect, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar, Clock, Camera, BookOpen, TrendingUp, Sparkles,
  GraduationCap, LineChart, Trophy, Briefcase, Mic2, X, ChevronLeft, ChevronRight,
} from "lucide-react";
import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

import g1 from "@/assets/gallery/1.jpg";
import g2 from "@/assets/gallery/2.jpg";
import g3 from "@/assets/gallery/3.jpg";
import g4 from "@/assets/gallery/4.jpg";
import g5 from "@/assets/gallery/5.jpg";
import s1 from "@/assets/gallery/submit1.jpg";
import s2 from "@/assets/gallery/submit2.jpg";
import s3 from "@/assets/gallery/submit3.jpg";
import s4 from "@/assets/gallery/submit4.jpg";

type Category =
  | "Classroom Training"
  | "Stock Market & Trading"
  | "Student Achievements"
  | "Placement Activities"
  | "Seminars & Events";

type GalleryItem = {
  id: number;
  src: string;
  title: string;
  category: Category;
  span: "tall" | "wide" | "square" | "big";
};

const gallery: GalleryItem[] = [
  { id: 1, src: g1, title: "Packed Seminar Hall — Career Guidance", category: "Seminars & Events", span: "big" },
  { id: 2, src: s3, title: "Live NSE Stock Quote Walk-through", category: "Stock Market & Trading", span: "tall" },
  { id: 3, src: g4, title: "Student Cohort — Group Photo", category: "Student Achievements", span: "square" },
  { id: 4, src: s1, title: "Award & Felicitation Ceremony", category: "Student Achievements", span: "square" },
  { id: 5, src: g2, title: "Live Trading & NSE Walk-through Session", category: "Stock Market & Trading", span: "wide" },
  { id: 6, src: s2, title: "Guest Lecture — Career in Markets", category: "Seminars & Events", span: "tall" },
  { id: 7, src: g5, title: "Workshop Closing — SRMU Cohort", category: "Student Achievements", span: "square" },
  { id: 8, src: s4, title: "Technical Charts Masterclass", category: "Stock Market & Trading", span: "square" },
  { id: 9, src: g3, title: "Interview Prep & Placement Round-up", category: "Placement Activities", span: "wide" },
  { id: 10, src: g4, title: "Classroom Training Session", category: "Classroom Training", span: "square" },
];

const posts = [
  { t: "Options Greeks for Beginners — without the math headache", d: "A practical lens on Delta, Gamma, Theta and Vega — built around real trade examples.", date: "Apr 24, 2026", read: "8 min", tag: "Derivatives" },
  { t: "How to read an annual report in 30 minutes", d: "A repeatable framework analysts use to extract signal from 200-page reports.", date: "Apr 18, 2026", read: "10 min", tag: "Research" },
  { t: "The risk-first trading mindset", d: "Why position sizing matters more than your strategy — a deep dive.", date: "Apr 10, 2026", read: "6 min", tag: "Trading" },
  { t: "Equity research career roadmap (2026)", d: "Exactly what you need to break into buy-side or sell-side research roles.", date: "Apr 02, 2026", read: "12 min", tag: "Careers" },
  { t: "Volatility regimes & strategy selection", d: "Choosing the right options strategy for the right vol regime.", date: "Mar 26, 2026", read: "9 min", tag: "Strategy" },
  { t: "DCF that actually makes sense", d: "Build your first three-statement model and DCF without copying templates.", date: "Mar 20, 2026", read: "11 min", tag: "Valuation" },
];

const categories: { name: "All" | Category; icon: typeof Camera }[] = [
  { name: "All", icon: Camera },
  { name: "Classroom Training", icon: GraduationCap },
  { name: "Stock Market & Trading", icon: LineChart },
  { name: "Student Achievements", icon: Trophy },
  { name: "Placement Activities", icon: Briefcase },
  { name: "Seminars & Events", icon: Mic2 },
];

const spanClasses: Record<GalleryItem["span"], string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
  big: "col-span-2 row-span-2",
};

const featured = [
  { src: g1, title: "200+ Students at Career Guidance Seminar", tag: "Flagship Event" },
  { src: s1, title: "Felicitation — Honouring Our Mentors", tag: "Award Ceremony" },
  { src: g2, title: "Live NSE Trading Walk-through", tag: "Trading Session" },
  { src: g5, title: "SRMU Cohort — Workshop Closing", tag: "Success Story" },
];

const GalleryInsights = () => {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const nextImg = useCallback(() => {
    setLightboxIdx((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);
  const prevImg = useCallback(() => {
    setLightboxIdx((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIdx, closeLightbox, nextImg, prevImg]);

  // Swipe support
  const [touchX, setTouchX] = useState<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => setTouchX(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (dx > 50) prevImg();
    else if (dx < -50) nextImg();
    setTouchX(null);
  };

  return (
    <>
      <SEO
        title="Gallery & Insights — Upskiller Academy"
        description="Training, workshops, trading sessions, placements, student achievements and editorial insights from Upskiller Academy."
        canonical="https://www.upskilleracademy.com/gallery-insights"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,hsl(43_95%_55%/0.18),transparent_60%),radial-gradient(circle_at_85%_90%,hsl(222_75%_45%/0.25),transparent_60%)]" />
        {/* animated trading ticker accents */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent animate-pulse" />
          <div className="absolute left-0 top-2/3 h-px w-full bg-gradient-to-r from-transparent via-primary-glow/50 to-transparent animate-pulse [animation-delay:.6s]" />
        </div>
        <div className="container relative py-16 lg:py-24">
          <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20">Gallery & Insights</Badge>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
            Life at{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">Upskiller Academy</span>
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80 text-lg">
            Training • Learning • Placements • Success Stories
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            {[
              { icon: GraduationCap, label: "Classroom Training" },
              { icon: LineChart, label: "Trading Sessions" },
              { icon: Trophy, label: "Student Achievements" },
              { icon: Briefcase, label: "Placements" },
              { icon: Mic2, label: "Seminars" },
            ].map((p) => (
              <span key={p.label} className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 backdrop-blur">
                <p.icon className="h-3.5 w-3.5 text-gold" /> {p.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery (masonry) */}
      <section className="container py-16">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Inside the academy</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Photo Gallery</h2>
            <p className="mt-2 text-muted-foreground max-w-xl">Real moments from training, trading floors, awards, placements and events — straight from our campuses.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(({ name, icon: I }) => (
              <button
                key={name}
                onClick={() => setFilter(name)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-all",
                  filter === name
                    ? "border-gold bg-gold/15 text-gold shadow-[0_0_20px_hsl(43_95%_55%/0.25)]"
                    : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
                )}
              >
                <I className="h-3.5 w-3.5" /> {name}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((g, i) => (
            <Reveal
              key={`${g.id}-${i}`}
              delay={i * 60}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-2xl border border-border/60 transition-all hover:border-gold/60 hover:shadow-elegant",
                spanClasses[g.span]
              )}
            >
              <button
                type="button"
                onClick={() => setLightboxIdx(i)}
                className="absolute inset-0 block h-full w-full"
                aria-label={`Open ${g.title}`}
              >
                <img
                  src={g.src}
                  alt={g.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Glassmorphism hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-white/0 backdrop-blur-0 transition-all duration-500 group-hover:bg-white/5 group-hover:backdrop-blur-[2px]" />
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

      {/* Featured Moments */}
      <section className="relative overflow-hidden bg-hero py-16 text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(43_95%_55%/0.15),transparent_60%)]" />
        <div className="container relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Featured</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Memories, Achievements & Success Stories</h2>
            <p className="mt-3 text-primary-foreground/75">
              The highlights that define our journey — moments worth celebrating.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-2xl border border-gold/20 shadow-elegant">
                  <img src={f.src} alt={f.title} loading="lazy" className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <span className="inline-flex rounded-full bg-gold/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur">
                      {f.tag}
                    </span>
                    <p className="mt-2 font-display text-base leading-tight text-white">{f.title}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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

      {/* Lightbox */}
      {lightboxIdx !== null && filtered[lightboxIdx] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in p-4"
          onClick={closeLightbox}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImg(); }}
            className="absolute left-3 sm:left-6 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImg(); }}
            className="absolute right-3 sm:right-6 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div
            className="relative max-h-[88vh] max-w-5xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIdx].src}
              alt={filtered[lightboxIdx].title}
              className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <div className="mt-3 text-center">
              <span className="inline-flex rounded-full bg-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur">
                {filtered[lightboxIdx].category}
              </span>
              <p className="mt-2 font-display text-lg text-white">{filtered[lightboxIdx].title}</p>
              <p className="mt-1 text-xs text-white/60">{lightboxIdx + 1} / {filtered.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryInsights;
