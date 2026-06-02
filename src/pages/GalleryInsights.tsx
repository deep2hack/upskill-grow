import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Camera, BookOpen, TrendingUp, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
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

type GalleryItem = {
  id: number;
  title: string;
  category: "Activity" | "Event" | "Success" | "Workshop" | "Update";
  span: "tall" | "wide" | "square";
  src: string;
};

const url = (a: any) => a.url as string;
const gallery: GalleryItem[] = [
  { id: 1, title: "Campus Seminar — Stock Market Awareness", category: "Event", span: "tall", src: url(g1) },
  { id: 2, title: "Live NSE Walkthrough Workshop", category: "Workshop", span: "wide", src: url(g2) },
  { id: 3, title: "Investor Awareness Drive", category: "Activity", span: "square", src: url(g3) },
  { id: 4, title: "Cohort Graduation Group Photo", category: "Success", span: "square", src: url(g4) },
  { id: 5, title: "Keynote — Markets in a Connected World", category: "Workshop", span: "tall", src: url(g1) },
  { id: 6, title: "SRM University Felicitation", category: "Event", span: "square", src: url(g6) },
  { id: 7, title: "Guest Lecture — Personal Finance", category: "Workshop", span: "wide", src: url(g7) },
  { id: 8, title: "Live Stock Analysis Session", category: "Activity", span: "square", src: url(g8) },
  { id: 9, title: "Trading Strategies Bootcamp", category: "Workshop", span: "square", src: url(g9) },
];

const posts = [
  { t: "Options Greeks for Beginners — without the math headache", d: "A practical lens on Delta, Gamma, Theta and Vega — built around real trade examples.", date: "Apr 24, 2026", read: "8 min", tag: "Derivatives" },
  { t: "How to read an annual report in 30 minutes", d: "A repeatable framework analysts use to extract signal from 200-page reports.", date: "Apr 18, 2026", read: "10 min", tag: "Research" },
  { t: "The risk-first trading mindset", d: "Why position sizing matters more than your strategy — a deep dive.", date: "Apr 10, 2026", read: "6 min", tag: "Trading" },
  { t: "Equity research career roadmap (2026)", d: "Exactly what you need to break into buy-side or sell-side research roles.", date: "Apr 02, 2026", read: "12 min", tag: "Careers" },
  { t: "Volatility regimes & strategy selection", d: "Choosing the right options strategy for the right vol regime.", date: "Mar 26, 2026", read: "9 min", tag: "Strategy" },
  { t: "DCF that actually makes sense", d: "Build your first three-statement model and DCF without copying templates.", date: "Mar 20, 2026", read: "11 min", tag: "Valuation" },
];

const categories = ["All", "Activity", "Event", "Success", "Workshop", "Update"] as const;

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
};

const GalleryInsights = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

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
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border/60 transition-all hover:border-gold/50 hover:shadow-elegant",
                spanClasses[g.span]
              )}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-90 transition-transform duration-700 group-hover:scale-110", categoryGradient[g.category])} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(0_0%_100%/0.18),transparent_60%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="inline-flex rounded-full bg-gold/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur">
                  {g.category}
                </span>
                <p className="mt-2 font-display text-base leading-tight text-white drop-shadow">{g.title}</p>
              </div>
            </Reveal>
          ))}
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
    </>
  );
};

export default GalleryInsights;
