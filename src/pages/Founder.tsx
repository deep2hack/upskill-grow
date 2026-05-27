import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Sparkles, Target, TrendingUp, Heart, Award, BookOpen, Mic, Users,
  ShieldCheck, Star, Quote, MessageCircle, GraduationCap, Briefcase, Building2,
  Brain, Zap, Crown, Rocket, Globe, Newspaper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import TradingBackdrop from "@/components/TradingBackdrop";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import ReloadLink from "@/components/ReloadLink";

import portrait from "@/assets/founder-prabjot.webp";
import portraitBW from "@/assets/founder-portrait-bw.jpg";
import training from "@/assets/founder-training.jpg";
import speaking from "@/assets/founder-speaking.jpg";
import bookMoment from "@/assets/founder-book-moment.jpg";
import media from "@/assets/founder-media.jpg";
import mindOverMarkets from "@/assets/mind-over-markets-cover.png";
import marketMasteryBible from "@/assets/market-mastery-bible-cover.png";
import beyondTheCandle from "@/assets/beyond-the-candle-cover.png";

/* ────────────────  Animated Counter  ──────────────── */
const Counter = ({ to, suffix = "", duration = 1800 }: { to: number; suffix?: string; duration?: number }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setVal(Math.floor(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
};

/* ────────────────  Data  ──────────────── */
const counters = [
  { v: 15, suffix: "+", label: "Years of Experience" },
  { v: 10000, suffix: "+", label: "Students Mentored" },
  { v: 80, suffix: "%", label: "Founder-Led Training" },
  { v: 5, suffix: "+", label: "Career Programs" },
];

const differentiators = [
  { icon: Crown, t: "80% Founder-Led Training", d: "Live sessions, real-time mentorship and direct handholding — no ghost faculty, no robotic content." },
  { icon: Target, t: "Job-First Philosophy", d: "Every program is a career blueprint engineered around employer outcomes, not certificates." },
  { icon: TrendingUp, t: "Real-Time Curriculum", d: "Updated live with AI, market volatility and financial trends — your skills never expire." },
  { icon: Heart, t: "Hybrid Learning, Human Touch", d: "The Million Doubts Resolver model: 1-on-1 resolution, mentorship and emotional intelligence." },
  { icon: Sparkles, t: "Women Leadership with Purpose", d: "A female founder breaking into finance, tech and analytics — a symbol of possibility and power." },
  { icon: Building2, t: "Trainer-Led Franchise Model", d: "Every Magnum center is built under her personal mentorship — quality-first, scalable." },
];

const setApart = [
  { icon: Crown, t: "The Only Founder Who Trains You Personally", d: "80% of live sessions are conducted by Prabjot Mam herself. Every student is personally mentored for outcomes." },
  { icon: Rocket, t: "A Course Turned Career Generator", d: "The CFMRA Program — India's first 3-careers-in-1 job-assured program combining Stock Market, Financial Research and AI." },
  { icon: Brain, t: "AI + Finance + Market Research", d: "Learn what employers want today — real-time curriculum aligned with ChatGPT, financial data and live market shifts." },
  { icon: ShieldCheck, t: "Recession-Proof Career Education", d: "Trains for industries that grow even in slowdowns — analytics, fintech, research and AI." },
  { icon: Users, t: "One-on-One Doubt Solving", d: "No app-based isolation. Every learner gets human attention, live assessments and emotional mentorship." },
  { icon: Zap, t: "Real-Time Mentorship", d: "Direct access to a founder who is still in the market — not a content creator chasing virality." },
];

const legacy = [
  { icon: Award, t: "Non-MBA Career Alternative", d: "CFMRA delivers placement at a fraction of MBA cost and time — months, not years." },
  { icon: Globe, t: "Tier 2 & Tier 3 Empowerment", d: "Bringing high-quality, job-first education to India's smaller towns." },
  { icon: Users, t: "Women in Finance & Tech", d: "Building a generation of confident women professionals in high-income roles." },
  { icon: Briefcase, t: "India's Future Workforce", d: "Producing taxpayers, problem-solvers and professionals — not just toppers." },
];

const books = [
  { src: mindOverMarkets, t: "Mind Over Markets", s: "Mastering Price Action Trading from Basics to Brilliance" },
  { src: beyondTheCandle, t: "Beyond The Candle", s: "The Inner Game of Price Action That Changed Everything" },
  { src: marketMasteryBible, t: "Market Mastery Bible", s: "The Complete Trading University" },
];

const mediaItems = [
  { src: media, t: "Amar Ujala Feature", tag: "Print Media", d: "Honoured on International Women's Day for empowering youth and shaping careers." },
  { src: speaking, t: "Skill India Summit", tag: "Keynote", d: "National voice on employability, skill-based education and women in finance." },
  { src: bookMoment, t: "Author Recognition", tag: "Books", d: "Featured for contributions to youth financial literacy and trading psychology." },
];

/* ────────────────  Page  ──────────────── */
const Founder = () => {
  return (
    <>
      <SEO
        title="Prabjot Singh — Founder & Director, Magnum Educorporates | When Education Meets Revolution"
        description="Meet Prabjot Singh — Founder & Director of Magnum Educorporates & Upskiller Academy. 15+ years in finance, 10,000+ students mentored, India's first trainer-led, job-first EdTech ecosystem."
        canonical="https://www.upskilleracademy.com/founder"
      />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden bg-[hsl(220_45%_6%)] text-white">
        <TradingBackdrop className="opacity-40" />
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_85%_15%,hsl(var(--gold)/0.35),transparent_60%),radial-gradient(50%_50%_at_10%_90%,hsl(var(--primary-glow)/0.55),transparent_60%)]" />

        <div className="container relative grid gap-12 py-20 lg:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <Reveal>
              <Badge className="bg-gold/20 text-gold border-gold/40 hover:bg-gold/20 backdrop-blur">
                ★ Founder & Director · Magnum Educorporates
              </Badge>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
                <span className="bg-gradient-to-r from-gold via-amber-200 to-gold bg-clip-text text-transparent">
                  Prabjot Singh
                </span>
                <br />
                <span className="text-white/95">When Education Meets </span>
                <span className="bg-gold-gradient bg-clip-text text-transparent">Revolution</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-lg text-white/80 max-w-xl leading-relaxed">
                Career Catalyst · National Employability Crusader · Live Mentor to Thousands.
                The visionary founder of <strong className="text-gold">Magnum Educorporates</strong> &
                <strong className="text-gold"> Upskiller Academy</strong> — India's first trainer-led,
                job-first education ecosystem.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="premium" size="lg">
                  <ReloadLink to="/courses">Learn from the Founder <ArrowRight className="ml-1" /></ReloadLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white">
                  <a href={buildWhatsAppUrl("Hi, I'd like a free consultation with the founder's team.")} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-1" /> Free Consultation
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Portrait with glassmorphism card */}
          <Reveal delay={150}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-gold/40 via-primary/30 to-gold/30 blur-3xl animate-pulse" />
              <div className="relative overflow-hidden rounded-3xl border border-gold/40 shadow-elegant float-y backdrop-blur-md">
                <img
                  src={portraitBW}
                  alt="Prabjot Singh — Founder & Director, Magnum Educorporates"
                  className="h-[520px] w-full object-cover transition-transform duration-700 hover:scale-105"
                  width={1024}
                  height={1280}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                {/* Glassmorphism overlay */}
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-xl p-5">
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-gold">Founder & Director</p>
                  <p className="mt-1 font-display text-2xl text-white">Prabjot Singh</p>
                  <p className="text-xs text-white/75">Magnum Educorporates · Upskiller Academy</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Animated counters */}
        <div className="container relative pb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {counters.map((c, i) => (
              <Reveal key={c.label} delay={i * 100}>
                <div className="rounded-2xl border border-gold/30 bg-white/[0.04] backdrop-blur-xl p-6 text-center hover:border-gold/60 hover:bg-white/[0.07] hover:-translate-y-1 transition-all">
                  <p className="font-display text-3xl sm:text-4xl bg-gold-gradient bg-clip-text text-transparent">
                    <Counter to={c.v} suffix={c.suffix} />
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-white/75 uppercase tracking-wider">{c.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ STORY ═══════════════ */}
      <section className="relative overflow-hidden bg-[hsl(220_30%_5%)] text-white py-24">
        <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />

        <div className="container relative">
          <Reveal className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">The Story</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
              The Unmatched Journey of <span className="bg-gold-gradient bg-clip-text text-transparent">Prabjot Mam</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-gold/25 to-primary/30 blur-2xl opacity-70" />
                <img
                  src={portrait}
                  alt="Prabjot Singh portrait"
                  loading="lazy"
                  className="relative rounded-3xl border border-gold/30 shadow-elegant w-full h-[520px] object-cover float-y"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-6 text-white/85 leading-relaxed text-lg">
                <p>
                  In a world flooded with online courses and passive learning,
                  <strong className="text-gold"> Prabjot Mam dared to break the script.</strong> She didn't
                  just build an EdTech institute — she ignited a movement to solve India's biggest
                  silent crisis: <em className="text-gold">educated unemployability.</em>
                </p>

                <ul className="space-y-3 text-base">
                  <li className="flex gap-3"><span className="text-gold text-xl">🚩</span><span>Where others hand out certificates, she delivers <strong>careers</strong>.</span></li>
                  <li className="flex gap-3"><span className="text-gold text-xl">🎓</span><span>Where others teach theory, she cultivates <strong>skill</strong>.</span></li>
                  <li className="flex gap-3"><span className="text-gold text-xl">📈</span><span>Where others scale content, she scales <strong>people</strong>.</span></li>
                </ul>

                <p>
                  She is the only founder in the EdTech space who personally trains students, mentors
                  franchisees, and leads the transformation herself. No middle layers. No diluted
                  content. Just pure, expert-led revolution.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ KEY DIFFERENTIATORS ═══════════════ */}
      <section className="relative overflow-hidden bg-[hsl(220_35%_4%)] text-white py-24">
        <TradingBackdrop className="opacity-30" />
        <div className="container relative">
          <Reveal className="max-w-2xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Key Differentiators</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
              What She Has That <span className="bg-gold-gradient bg-clip-text text-transparent">No One Else</span> Offers
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map(({ icon: I, t, d }, i) => (
              <Reveal key={t} delay={i * 90}>
                <div className="group relative h-full rounded-2xl border border-gold/25 bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-md p-6 transition-all hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_25px_60px_-20px_hsl(var(--gold)/0.5)]">
                  <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-gold/0 via-gold/0 to-gold/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-secondary shadow-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <I className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-xl text-white">{t}</h3>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHAT SETS HER APART ═══════════════ */}
      <section className="relative overflow-hidden bg-[hsl(220_40%_6%)] text-white py-24">
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_20%_30%,hsl(var(--gold)/0.25),transparent_60%),radial-gradient(50%_50%_at_80%_70%,hsl(var(--primary-glow)/0.4),transparent_60%)]" />

        <div className="container relative">
          <Reveal className="max-w-2xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">What Sets Her Apart</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
              Everything. <span className="bg-gold-gradient bg-clip-text text-transparent">Literally.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {setApart.map(({ icon: I, t, d }, i) => (
              <Reveal key={t} delay={i * 80}>
                <Card className="group h-full border-gold/25 bg-white/[0.04] backdrop-blur-md hover:border-gold/60 hover:shadow-[0_30px_70px_-20px_hsl(var(--gold)/0.5)] transition-all hover:-translate-y-1">
                  <CardContent className="p-7 flex gap-5">
                    <div className="shrink-0 grid h-14 w-14 place-items-center rounded-2xl bg-gold-gradient text-secondary shadow-gold transition-transform duration-500 group-hover:scale-110">
                      <I className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-white">{t}</h3>
                      <p className="mt-2 text-sm text-white/75 leading-relaxed">{d}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ MANTRA QUOTE ═══════════════ */}
      <section className="relative overflow-hidden bg-hero text-primary-foreground py-24">
        <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(60%_60%_at_50%_50%,hsl(var(--gold)/0.35),transparent_60%)]" />
        <div className="container relative">
          <Reveal className="mx-auto max-w-4xl text-center">
            <Quote className="mx-auto h-14 w-14 text-gold" />
            <p className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.2]">
              <span className="text-gold">"</span>
              If your degree didn't give you a job,{" "}
              <span className="bg-gold-gradient bg-clip-text text-transparent">Magnum will.</span>
              <span className="text-gold">"</span>
            </p>
            <p className="mt-8 text-lg text-primary-foreground/80 max-w-2xl mx-auto italic">
              "We're not here to produce toppers. We're here to create taxpayers. Problem-solvers.
              Professionals." 
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.28em] text-gold">— Prabjot Singh</p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ LEGACY & VISION ═══════════════ */}
      <section className="relative overflow-hidden bg-[hsl(220_35%_5%)] text-white py-24">
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
        <div className="container relative">
          <Reveal className="max-w-2xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Legacy in the Making</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
              Building India's <span className="bg-gold-gradient bg-clip-text text-transparent">Future Workforce</span>
            </h2>
            <p className="mt-4 text-white/75">
              India's strongest non-MBA career alternative — an employability revolution from
              the ground up.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {legacy.map(({ icon: I, t, d }, i) => (
              <Reveal key={t} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-gold/25 bg-gradient-to-br from-white/[0.05] to-transparent p-6 backdrop-blur transition-all hover:border-gold/60 hover:-translate-y-1 hover:bg-white/[0.07]">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-secondary shadow-gold group-hover:scale-110 transition-transform">
                    <I className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg">{t}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ BOOKS & MEDIA ═══════════════ */}
      <section className="relative overflow-hidden bg-[hsl(220_30%_5%)] text-white py-24">
        <TradingBackdrop className="opacity-25" />
        <div className="container relative">
          <Reveal className="max-w-2xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Books by the Founder</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
              Published <span className="bg-gold-gradient bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="mt-4 text-white/70">
              Author of critically acclaimed books on stock market psychology and strategy.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {books.map(({ src, t, s }, i) => (
              <Reveal key={t} delay={i * 120}>
                <div className="group relative rounded-3xl border border-gold/25 bg-gradient-to-br from-white/[0.05] to-transparent p-6 text-center backdrop-blur-md transition-all hover:border-gold/60 hover:-translate-y-2 hover:shadow-[0_40px_100px_-25px_hsl(var(--gold)/0.6)]">
                  <div className="relative mx-auto flex h-72 items-center justify-center">
                    <div className="absolute -inset-6 rounded-full bg-gold/25 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={src}
                      alt={`${t} — book by Prabjot Singh`}
                      loading="lazy"
                      className="relative h-full w-auto object-contain drop-shadow-[0_25px_50px_rgba(255,200,80,0.35)] float-y transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-6 font-display text-xl bg-gradient-to-r from-gold via-amber-200 to-gold bg-clip-text text-transparent">
                    {t}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ MEDIA & RECOGNITION ═══════════════ */}
      <section className="relative overflow-hidden bg-[hsl(220_35%_4%)] text-white py-24">
        <div className="container relative">
          <Reveal className="max-w-2xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold inline-flex items-center gap-2 justify-center">
              <Newspaper className="h-4 w-4" /> Media & Recognition
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
              A National Voice for <span className="bg-gold-gradient bg-clip-text text-transparent">Employability</span>
            </h2>
            <p className="mt-4 text-white/70">
              Featured in media for contributions to youth financial literacy. Invited to investor
              panels, EdTech conferences, Skill India summits and women-in-leadership forums.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {mediaItems.map(({ src, t, tag, d }, i) => (
              <Reveal key={t} delay={i * 110}>
                <div className="group relative overflow-hidden rounded-2xl border border-gold/25 bg-white/[0.03] backdrop-blur-md transition-all hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_30px_70px_-20px_hsl(var(--gold)/0.45)]">
                  <div className="relative overflow-hidden">
                    <img src={src} alt={t} loading="lazy" className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
                    <Badge className="absolute top-3 left-3 bg-gold text-secondary border-0">{tag}</Badge>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-white">{t}</h3>
                    <p className="mt-2 text-sm text-white/70">{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="container py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-hero text-primary-foreground p-10 sm:p-14 shadow-elegant border border-gold/30">
            <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(60%_60%_at_80%_20%,hsl(var(--gold)/0.4),transparent_60%),radial-gradient(50%_50%_at_20%_80%,hsl(var(--primary-glow)/0.4),transparent_60%)]" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="font-display text-3xl sm:text-4xl">
                  Ready to learn from the <span className="bg-gold-gradient bg-clip-text text-transparent">founder herself?</span>
                </h3>
                <p className="mt-3 text-primary-foreground/80 max-w-xl">
                  Join a founder-led program designed by Prabjot Singh — or get a free consultation
                  on which path is right for you.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="premium" size="lg">
                  <ReloadLink to="/courses">Explore Courses <ArrowRight className="ml-1" /></ReloadLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <a href={buildWhatsAppUrl("Hi, I'd like a free consultation.")} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-1" /> Free Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Founder;
