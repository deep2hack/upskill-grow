import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp, BarChart3, LineChart, BookOpen, Bitcoin, ShieldCheck, Brain, Search,
  PieChart, MessageSquare, Database, Briefcase, Award, FileText, Linkedin, Users,
  Bell, Target, ClipboardList, GraduationCap, Mic, Building2, CheckCircle2,
  ArrowRight, Star, Quote, Play, Sparkles, Trophy, Rocket, ShieldCheck as Shield,
} from "lucide-react";
import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import TradingBackdrop from "@/components/TradingBackdrop";
import PlacementCompanies from "@/components/PlacementCompanies";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import placementVideo from "@/assets/placement-guarantee.mp4.asset.json";
import AutoplayVideo from "@/components/AutoplayVideo";

const heroStats = [
  { end: 8500, suffix: "+", label: "Students Trained" },
  { end: 120, suffix: "+", label: "Placement Partners" },
  { end: 4200, suffix: "+", label: "Successful Placements" },
  { end: 25, suffix: "+", label: "Courses Offered" },
];

const skills = [
  { icon: TrendingUp, label: "Stock Market Analysis" },
  { icon: LineChart, label: "Financial Research" },
  { icon: BookOpen, label: "Fundamental Analysis" },
  { icon: BarChart3, label: "Technical Analysis" },
  { icon: PieChart, label: "Forex Trading" },
  { icon: Bitcoin, label: "Crypto Trading" },
  { icon: Sparkles, label: "Smart Money Concepts" },
  { icon: ShieldCheck, label: "Risk Management" },
  { icon: Brain, label: "AI Tools for Finance" },
  { icon: Search, label: "Market Research" },
  { icon: Database, label: "Data Interpretation" },
  { icon: MessageSquare, label: "Professional Communication" },
];

const highlights = [
  { icon: Briefcase, k: "100%", v: "Placement Assistance" },
  { icon: GraduationCap, k: "Live", v: "Industry-Relevant Training" },
  { icon: Mic, k: "200+", v: "Mock Interviews / yr" },
  { icon: FileText, k: "1:1", v: "Resume Building" },
  { icon: Linkedin, k: "Pro", v: "LinkedIn Optimization" },
  { icon: Users, k: "Lifetime", v: "Career Mentorship" },
  { icon: Bell, k: "Daily", v: "Job Alerts" },
  { icon: Target, k: "Dedicated", v: "Hiring Support" },
];

const timeline = [
  { icon: ClipboardList, t: "Skill Assessment", d: "Diagnostic test to map strengths, gaps and the right learning track." },
  { icon: FileText, t: "Resume Building", d: "Recruiter-friendly resume crafted with quantified, finance-led wins." },
  { icon: Linkedin, t: "LinkedIn Optimization", d: "Headline, About, banner and keyword strategy for inbound recruiter views." },
  { icon: GraduationCap, t: "Technical Training", d: "Live + recorded mastery in markets, research, valuation & strategy." },
  { icon: Mic, t: "Mock Interviews", d: "Domain + behavioural rounds with mentors from buy-side & sell-side." },
  { icon: Users, t: "HR Preparation", d: "Salary negotiation, fitment narratives and round-2 coaching." },
  { icon: Building2, t: "Placement Drives", d: "Curated drives with our 120+ hiring partners every month." },
  { icon: Briefcase, t: "Final Interviews", d: "Real-time prep cells, panel simulations and offer-stage support." },
  { icon: Trophy, t: "Job Placement Support", d: "Onboarding readiness and 90-day post-joining mentorship." },
];

const jobRoles = [
  "Financial Analyst", "Equity Research Analyst", "Market Research Analyst",
  "Investment Analyst", "Trading Analyst", "Business Analyst",
  "Risk Analyst", "Research Associate", "Data Analyst",
  "Portfolio Analyst", "Wealth Management Associate", "Financial Consultant",
];

const demandingJobs = [
  { t: "Financial Analyst", demand: 96 },
  { t: "Equity Research Analyst", demand: 92 },
  { t: "Market Research Executive", demand: 88 },
  { t: "Investment Analyst", demand: 90 },
  { t: "Trading Analyst", demand: 85 },
  { t: "Business Analyst", demand: 94 },
  { t: "Data Analyst", demand: 97 },
  { t: "Risk Analyst", demand: 83 },
  { t: "AI Research Associate", demand: 89 },
  { t: "FinTech Analyst", demand: 91 },
];

const certs = [
  { t: "Certified Market Analyst", d: "Industry-recognized completion" },
  { t: "Equity Research Pro", d: "Capstone + sector report verified" },
  { t: "Derivatives & Options Specialist", d: "Live strategy assessments" },
  { t: "Smart Money Trader", d: "Institutional concepts mastery" },
  { t: "Risk Management Practitioner", d: "Position sizing & VaR" },
  { t: "AI-for-Finance Associate", d: "LLM-assisted research toolkit" },
];

const banners = [
  { eyebrow: "Now Hiring", h: "Equity Research Cohort '26", s: "12 partner firms · ₹6–14 LPA · Apply this week" },
  { eyebrow: "Success", h: "Aditi placed at WNS — Financial Analyst", s: "From a small town to a global analytics leader in 6 months." },
  { eyebrow: "Career", h: "Open House: Investment Banking Roles", s: "Meet recruiters from 8 marquee firms — RSVP now." },
  { eyebrow: "Hiring Partner", h: "London Stock Exchange Drive", s: "Exclusive shortlists for Upskiller Academy learners." },
];

const successStories = [
  { name: "Mayank Verma", role: "Trading Analyst → Jasper Capital", quote: "From confused commerce grad to a confident trading analyst in 5 months — the mentorship was unreal.", growth: "3.2 LPA → 9.5 LPA" },
  { name: "Aditi Sharma", role: "Financial Analyst → WNS", quote: "The resume + mock interview cell got me 4 offers in 3 weeks. I picked WNS for the global exposure.", growth: "Fresher → 7.8 LPA" },
  { name: "Devesh Kapoor", role: "Equity Research → Ken Research", quote: "I learned how analysts actually think — not just textbook stuff. Capstone reports won me the interview.", growth: "Fresher → 8.4 LPA" },
  { name: "Harshita Singh", role: "Data Analyst → MQube", quote: "AI tools, Excel mastery and live projects — exactly what hiring managers asked me about.", growth: "2.4 LPA → 11 LPA" },
];

const videos = [
  { t: "Aditi's Placement Story", d: "From classroom to WNS in 6 months", k: "Success" },
  { t: "Inside a Live Trading Day", d: "Behind-the-scenes from our cohort floor", k: "Training" },
  { t: "Recruiter AMA — Equity Research", d: "What hiring managers actually look for", k: "Career" },
  { t: "London Stock Exchange Visit", d: "Cohort visits our hiring partner", k: "Company" },
];

const Placements = () => {
  const [bannerIdx, setBannerIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setBannerIdx((i) => (i + 1) % banners.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <SEO
        title="Placement & Career Success — Upskiller Academy"
        description="Industry-oriented training with real placement support. 4200+ successful placements across 120+ partners including WNS, MQube, Protiviti, Nasdaq and more."
        canonical="https://www.upskilleracademy.com/placements"
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-hero text-primary-foreground">
        <TradingBackdrop />
        <div className="container relative py-20 lg:py-28">
          <Reveal className="max-w-3xl">
            <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20">Placement & Career Success</Badge>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Your Career{" "}
              <span className="bg-gold-gradient bg-clip-text text-transparent">Starts Here.</span>
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/80 max-w-2xl">
              Industry-Oriented Training with Real Placement Support — built around 120+ hiring partners across finance, capital markets and consulting.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="premium" size="lg">
                <a href={buildWhatsAppUrl("Hi, I'd like placement guidance.")} target="_blank" rel="noreferrer">
                  Get Free Career Consultation <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gold/40 bg-white/5 text-primary-foreground hover:bg-white/10">
                <a href="#timeline">See How It Works</a>
              </Button>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {heroStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="rounded-2xl border border-gold/25 bg-white/5 p-5 backdrop-blur-md">
                  <div className="font-display text-3xl text-gold">
                    <Counter end={s.end} suffix={s.suffix} />
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary-foreground/70">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 100% Placement Guarantee Video */}
      <section className="relative overflow-hidden bg-[hsl(222_85%_6%)] py-20 text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,hsl(43_95%_55%/0.18),transparent_55%),radial-gradient(circle_at_85%_80%,hsl(222_75%_45%/0.25),transparent_55%)]" />
        <div className="container relative grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20 gap-1">
              <Shield className="h-3.5 w-3.5" /> Our Promise
            </Badge>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05]">
              <span className="bg-gold-gradient bg-clip-text text-transparent">100% Placement</span>
              <br />Guarantee.
            </h2>
            <p className="mt-5 text-primary-foreground/80 max-w-lg">
              Train with us, finish your capstone and we guarantee placement support until you land your first finance role. No fine print — just real career outcomes.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Dedicated placement cell with 120+ hiring partners",
                "Unlimited mock interviews until you crack one",
                "Lifetime career mentorship & job alerts",
                "Resume + LinkedIn + Naukri optimization included",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-primary-foreground/85">{p}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="premium" size="lg" className="mt-7">
              <a href={buildWhatsAppUrl("Hi, I want to know about the 100% placement guarantee.")} target="_blank" rel="noreferrer">
                Claim Your Seat <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative group mx-auto w-full max-w-[360px]">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold/40 via-primary/30 to-gold/40 opacity-70 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-3xl border-2 border-gold/40 bg-black shadow-[0_30px_80px_-20px_hsl(43_95%_55%/0.4)]">
                <AutoplayVideo src={(placementVideo as any).url} />
                <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gold/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[hsl(222_85%_12%)] shadow-lg">
                  <Shield className="h-3 w-3" /> 100% Guarantee
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="container py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Skills You Will Gain</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">A complete finance & markets toolkit</h2>
          <p className="mt-3 text-muted-foreground">12 in-demand capabilities recruiters actively screen for.</p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((s, i) => (
            <Reveal key={s.label} delay={i * 50}>
              <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-5 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-gold/10 text-gold ring-1 ring-gold/30">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-base">{s.label}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Placement Highlights */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Placement Highlights</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">An end-to-end placement engine</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.v} delay={i * 60}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-[hsl(222_85%_12%)] to-[hsl(222_60%_18%)] p-6 text-primary-foreground shadow-card-soft">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/15 blur-2xl" />
                  <h.icon className="h-7 w-7 text-gold" />
                  <p className="mt-4 font-display text-2xl text-gold">{h.k}</p>
                  <p className="text-sm text-primary-foreground/80">{h.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="container py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Placement Activity Module</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Your 9-step journey to a finance job</h2>
        </Reveal>
        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/60 to-gold/0 md:left-1/2" />
          <ol className="space-y-8">
            {timeline.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={s.t} delay={i * 70}>
                  <li className={cn("relative md:grid md:grid-cols-2 md:items-center md:gap-10", left ? "" : "md:[&>*:first-child]:order-2")}>
                    <div className={cn("hidden md:block", left ? "md:text-right md:pr-10" : "md:text-left md:pl-10")}>
                      <p className="text-xs uppercase tracking-[0.28em] text-gold font-bold">Step {String(i + 1).padStart(2, "0")}</p>
                      <h3 className="mt-1 font-display text-2xl">{s.t}</h3>
                      <p className="mt-2 text-muted-foreground">{s.d}</p>
                    </div>
                    <div className={cn("relative md:flex", left ? "md:justify-start md:pl-10" : "md:justify-end md:pr-10")}>
                      <div className="absolute left-4 top-3 md:left-1/2 md:-translate-x-1/2">
                        <span className="relative grid h-9 w-9 place-items-center rounded-full bg-gold text-[hsl(222_85%_12%)] ring-4 ring-background shadow-[0_0_24px_hsl(43_95%_55%/0.6)]">
                          <s.icon className="h-4 w-4" />
                        </span>
                      </div>
                      <div className="ml-16 rounded-2xl border border-border/60 bg-card p-5 md:hidden">
                        <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold">Step {i + 1}</p>
                        <h3 className="mt-1 font-display text-lg">{s.t}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Job Roles */}
      <section className="bg-hero py-20 text-primary-foreground">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Job Roles Offered</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Roles our learners step into</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobRoles.map((r, i) => (
              <Reveal key={r} delay={i * 40}>
                <div className="group flex items-center gap-3 rounded-xl border border-gold/20 bg-white/5 p-4 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:bg-white/10">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold/15 text-gold ring-1 ring-gold/30">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  <span className="font-display">{r}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="container py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Certification</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Industry-recognized certificates</h2>
          <p className="mt-3 text-muted-foreground">Course-specific credentials that elevate your professional profile.</p>
        </Reveal>
        <div className="mt-10 -mx-4 overflow-x-auto pb-4">
          <div className="flex gap-5 px-4 snap-x">
            {certs.map((c, i) => (
              <Reveal key={c.t} delay={i * 60} className="snap-start shrink-0 w-[300px] sm:w-[340px]">
                <div className="relative h-[220px] overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-[hsl(222_75%_18%)] via-[hsl(222_60%_22%)] to-[hsl(222_85%_12%)] p-6 text-primary-foreground shadow-elegant">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,hsl(43_95%_55%/0.25),transparent_55%)]" />
                  <div className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-gold text-[hsl(222_85%_12%)] shadow-[0_0_20px_hsl(43_95%_55%/0.5)]">
                    <Award className="h-6 w-6" />
                  </div>
                  <p className="relative text-[10px] uppercase tracking-[0.28em] text-gold">Certificate of Completion</p>
                  <h3 className="relative mt-3 font-display text-xl leading-tight">{c.t}</h3>
                  <p className="relative mt-2 text-sm text-primary-foreground/75">{c.d}</p>
                  <div className="relative mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">
                    <span>Upskiller Academy</span>
                    <span>Verified ✓</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Companies — reuse existing floating bubbles */}
      <PlacementCompanies />

      {/* Naukri integration */}
      <section className="container py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-[hsl(222_85%_12%)] via-[hsl(222_70%_18%)] to-[hsl(222_85%_12%)] p-8 sm:p-12 text-primary-foreground shadow-elegant">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-[hsl(222_75%_45%/0.25)] blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-2">
              <div>
                <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20">Career Toolkit</Badge>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                  <span className="text-gold">Naukri.com</span> Integration
                </h2>
                <p className="mt-3 text-primary-foreground/80 max-w-lg">
                  We don't just train you — we get you discovered. Our team helps you build a recruiter-magnet Naukri presence and align every application to live hiring trends.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Resume building guidance — finance-led, recruiter-ready",
                    "Naukri profile optimization for higher visibility",
                    "Job application strategies that get callbacks",
                    "Live hiring trends across BFSI, consulting and fintech",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span className="text-primary-foreground/85">{p}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="premium" size="lg" className="mt-7">
                  <a href={buildWhatsAppUrl("Hi, I want help with my Naukri profile.")} target="_blank" rel="noreferrer">
                    Get Profile Audit <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-2xl border border-gold/30 bg-white/5 p-6 backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-display text-lg">Recruiter Inbox</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold">Live</span>
                  </div>
                  <div className="mt-4 space-y-3 text-sm">
                    {[
                      { c: "WNS Global", r: "Financial Analyst — 7.8 LPA", t: "2m" },
                      { c: "Ken Research", r: "Equity Analyst — 8.4 LPA", t: "14m" },
                      { c: "MQube", r: "Data Analyst — 11 LPA", t: "1h" },
                      { c: "Protiviti", r: "Risk Consultant — 9 LPA", t: "3h" },
                    ].map((m) => (
                      <div key={m.c} className="flex items-center justify-between rounded-lg bg-white/5 p-3 hover:bg-white/10 transition-colors">
                        <div>
                          <p className="font-medium">{m.c}</p>
                          <p className="text-xs text-primary-foreground/65">{m.r}</p>
                        </div>
                        <span className="text-[10px] text-primary-foreground/55">{m.t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Most demanding jobs */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Most Demanding Jobs for Freshers</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Where the freshest hiring is happening</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {demandingJobs.map((j, i) => (
              <Reveal key={j.t} delay={i * 50}>
                <div className="group rounded-xl border border-border/60 bg-card p-5 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant">
                  <div className="flex items-start justify-between">
                    <Rocket className="h-5 w-5 text-gold" />
                    <span className="rounded-full bg-gold/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">Hot</span>
                  </div>
                  <p className="mt-3 font-display text-base">{j.t}</p>
                  <div className="mt-3">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full bg-gold-gradient transition-all duration-1000 group-hover:opacity-100" style={{ width: `${j.demand}%` }} />
                    </div>
                    <p className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Demand · {j.demand}%</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="container py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Placement Video Showcase</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Stories worth pressing play on</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((v, i) => (
            <Reveal key={v.t} delay={i * 70}>
              <div className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border border-border/60 transition-all hover:border-gold/60 hover:shadow-elegant">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(222_85%_18%)] via-[hsl(222_60%_25%)] to-[hsl(222_85%_10%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(43_95%_55%/0.3),transparent_55%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gold text-[hsl(222_85%_12%)] shadow-[0_0_30px_hsl(43_95%_55%/0.7)] transition-transform group-hover:scale-110">
                    <Play className="ml-1 h-6 w-6 fill-current" />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-flex rounded-full bg-gold/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur">
                    {v.k}
                  </span>
                  <p className="mt-2 font-display text-lg text-white">{v.t}</p>
                  <p className="text-xs text-white/70">{v.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Banner carousel */}
      <section className="container pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-[hsl(222_85%_12%)] to-[hsl(222_75%_22%)] p-8 sm:p-12 text-primary-foreground">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[hsl(222_75%_45%/0.3)] blur-3xl" />
            <div className="relative min-h-[180px]">
              {banners.map((b, i) => (
                <div
                  key={b.h}
                  className={cn(
                    "absolute inset-0 flex flex-col justify-center transition-all duration-700",
                    i === bannerIdx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                  )}
                >
                  <span className="text-xs uppercase tracking-[0.28em] text-gold font-bold">{b.eyebrow}</span>
                  <h3 className="mt-2 font-display text-3xl sm:text-4xl max-w-3xl">{b.h}</h3>
                  <p className="mt-2 text-primary-foreground/80 max-w-2xl">{b.s}</p>
                </div>
              ))}
            </div>
            <div className="relative mt-4 flex items-center gap-2">
              {banners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setBannerIdx(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === bannerIdx ? "w-8 bg-gold" : "w-3 bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`Banner ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Success stories */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Success Stories</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Careers we helped build</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {successStories.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <Card className="h-full border-border/60 hover:border-gold/60 hover:shadow-elegant transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                        ))}
                      </div>
                      <span className="rounded-full bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">{s.growth}</span>
                    </div>
                    <Quote className="mt-4 h-6 w-6 text-gold/70" />
                    <p className="mt-2 text-base leading-relaxed text-foreground/90">"{s.quote}"</p>
                    <div className="mt-5 border-t border-border pt-4">
                      <p className="font-display text-base">{s.name}</p>
                      <p className="text-sm text-muted-foreground">{s.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-hero p-10 sm:p-14 text-center text-primary-foreground">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(43_95%_55%/0.3),transparent_60%)]" />
            <div className="relative">
              <Sparkles className="mx-auto h-8 w-8 text-gold" />
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
                Ready to land your <span className="bg-gold-gradient bg-clip-text text-transparent">dream finance role?</span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/80">
                Talk to our career team — get a personalized placement roadmap in 15 minutes.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Button asChild variant="premium" size="lg">
                  <a href={buildWhatsAppUrl("Hi, I want a free career consultation.")} target="_blank" rel="noreferrer">
                    Get Free Consultation <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-gold/40 bg-white/5 text-primary-foreground hover:bg-white/10">
                  <a href="/courses">Explore Courses</a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Placements;
