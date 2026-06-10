import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp, BarChart3, LineChart, BookOpen, Bitcoin, ShieldCheck, Brain, Search,
  PieChart, MessageSquare, Database, Briefcase, Award, FileText, Linkedin, Users,
  Bell, Target, ClipboardList, GraduationCap, Mic, Building2, CheckCircle2,
  ArrowRight, Star, Quote, Play, Sparkles, Trophy, Rocket, ShieldCheck as Shield,
  Banknote, Coins, Wallet, Activity, Layers, Landmark, Flame, FolderKanban,
  BarChart, GanttChart, Presentation,
} from "lucide-react";
import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import TradingBackdrop from "@/components/TradingBackdrop";
import PlacementCompanies from "@/components/PlacementCompanies";
import PlacementMarquee from "@/components/PlacementMarquee";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import placementVideo from "@/assets/placement-guarantee.mp4.asset.json";
import certificateSample from "@/assets/certificate-sample.jpg.asset.json";
import AutoplayVideo from "@/components/AutoplayVideo";
import AlumniShorts from "@/components/AlumniShorts";

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

type Role = {
  name: string;
  icon: any;
  salary: string;
  growth: string;
  hot?: boolean;
};

type RoleCategory = {
  key: string;
  title: string;
  emoji: string;
  accent: string;
  roles: Role[];
};

const roleCategories: RoleCategory[] = [
  {
    key: "finance",
    title: "Finance & Investment Roles",
    emoji: "📊",
    accent: "from-[hsl(222_75%_30%)] to-[hsl(222_85%_18%)]",
    roles: [
      { name: "Credit Analyst", icon: ShieldCheck, salary: "₹4–9 LPA", growth: "+18%" },
      { name: "Financial Analyst", icon: LineChart, salary: "₹5–12 LPA", growth: "+24%", hot: true },
      { name: "Investment Banking Analyst", icon: Landmark, salary: "₹8–22 LPA", growth: "+28%", hot: true },
      { name: "Financial Modelling Analyst", icon: BarChart3, salary: "₹6–14 LPA", growth: "+22%" },
      { name: "Merger & Acquisition Analyst", icon: Layers, salary: "₹9–20 LPA", growth: "+26%" },
      { name: "Fund Manager", icon: Wallet, salary: "₹12–35 LPA", growth: "+30%", hot: true },
      { name: "Wealth Analyst", icon: Banknote, salary: "₹5–13 LPA", growth: "+20%" },
    ],
  },
  {
    key: "stock",
    title: "Stock Market & Trading Roles",
    emoji: "📈",
    accent: "from-[hsl(43_85%_45%)] to-[hsl(28_75%_28%)]",
    roles: [
      { name: "Stock Market Analyst", icon: TrendingUp, salary: "₹5–14 LPA", growth: "+25%", hot: true },
      { name: "Technical Analyst", icon: Activity, salary: "₹4–11 LPA", growth: "+21%" },
      { name: "Derivative Analyst", icon: BarChart, salary: "₹6–15 LPA", growth: "+23%" },
      { name: "Commodity Analyst", icon: Coins, salary: "₹4–10 LPA", growth: "+17%" },
    ],
  },
  {
    key: "research",
    title: "Research & Strategy Roles",
    emoji: "🔍",
    accent: "from-[hsl(200_70%_35%)] to-[hsl(222_85%_18%)]",
    roles: [
      { name: "Research Analyst", icon: Search, salary: "₹5–12 LPA", growth: "+22%", hot: true },
      { name: "Market Research Analyst", icon: PieChart, salary: "₹4–10 LPA", growth: "+19%" },
      { name: "Business Analyst", icon: Briefcase, salary: "₹6–16 LPA", growth: "+27%", hot: true },
    ],
  },
];

type CapstoneCategory = {
  key: string;
  title: string;
  emoji: string;
  icon: any;
  accent: string;
  projects: string[];
};

const capstoneCategories: CapstoneCategory[] = [
  {
    key: "fin",
    title: "Financial Analytics Module",
    emoji: "📊",
    icon: LineChart,
    accent: "from-[hsl(222_75%_30%)] to-[hsl(222_85%_18%)]",
    projects: [
      "Credit Risk Analysis for Loan Portfolio",
      "Valuation of Listed Companies Using DCF Model",
      "Bank Performance Analysis Using CAMEL Framework",
      "Stock Market Prediction Using Financial Ratios",
      "Earnings Manipulation Detection Using Beneish M-Score",
      "FinTech Adoption Analysis in Tier-2 Cities",
      "Portfolio Optimization Using Sharpe Ratio",
    ],
  },
  {
    key: "mr",
    title: "Market Research Module",
    emoji: "📈",
    icon: Search,
    accent: "from-[hsl(43_85%_45%)] to-[hsl(28_75%_28%)]",
    projects: [
      "Consumer Behaviour Study for Digital Banking",
      "Demand Forecasting for Electric Two-Wheelers",
      "Competitor Analysis for EdTech Startups",
      "Customer Retention Analysis for a Mobile Operator",
      "Market Entry Strategy for a Global Brand in India",
      "Study of ESG Awareness Among Urban Investors",
      "Mystery Shopping Audit for Financial Services",
    ],
  },
  {
    key: "tableau",
    title: "Tableau & Data Visualization",
    emoji: "📉",
    icon: Presentation,
    accent: "from-[hsl(200_70%_35%)] to-[hsl(222_85%_18%)]",
    projects: [
      "Interactive Dashboard for Mutual Fund Performance",
      "Bank Branch-Wise Profitability Dashboard",
      "Financial KPI Dashboard",
      "Stock Market Trend Analysis Dashboard",
      "Market Research Insights Dashboard",
      "Customer Analytics Dashboard",
    ],
  },
];

const projectImpactSkills = [
  "Financial Analysis", "Equity Research", "Market Research", "Business Analytics",
  "Tableau & Data Visualization", "Investment Research", "Banking & FinTech Analysis",
];

const projectImpactOutcomes = [
  { icon: FileText, t: "Strong Resume" },
  { icon: Mic, t: "Interview Readiness" },
  { icon: Building2, t: "Industry Experience" },
  { icon: FolderKanban, t: "Portfolio Showcase" },
  { icon: Trophy, t: "Job Placement Confidence" },
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
                <AutoplayVideo src={(placementVideo as any).url} muted={false} />
                <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gold/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[hsl(222_85%_12%)] shadow-lg">
                  <Shield className="h-3 w-3" /> 100% Placement
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Alumni Success Story Shorts */}
      <AlumniShorts />


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

      {/* Placement Partners — animated marquee */}
      <PlacementMarquee />



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

      {/* Career Opportunities & Job Roles */}
      <section className="relative overflow-hidden bg-hero py-20 text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,hsl(43_95%_55%/0.18),transparent_55%),radial-gradient(circle_at_85%_90%,hsl(222_75%_45%/0.25),transparent_55%)]" />
        <div className="container relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20">💼 Career Opportunities</Badge>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
              High-growth <span className="bg-gold-gradient bg-clip-text text-transparent">job roles</span> after Upskiller
            </h2>
            <p className="mt-3 text-primary-foreground/75">
              Across finance, capital markets, research and strategy — the roles our learners actively step into.
            </p>
          </Reveal>

          <div className="mt-14 space-y-14">
            {roleCategories.map((cat) => (
              <div key={cat.key}>
                <Reveal className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-gold font-bold">{cat.emoji} Category</p>
                    <h3 className="mt-1 font-display text-2xl sm:text-3xl">{cat.title}</h3>
                  </div>
                  <span className="rounded-full border border-gold/30 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur">
                    {cat.roles.length} Roles
                  </span>
                </Reveal>

                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {cat.roles.map((r, i) => (
                    <Reveal key={r.name} delay={i * 80}>
                      <div
                        className={cn(
                          "group relative h-full overflow-hidden rounded-2xl border border-gold/20 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500",
                          "hover:-translate-y-2 hover:[transform:perspective(900px)_rotateX(2deg)_translateY(-8px)] hover:border-gold/70",
                          "hover:shadow-[0_25px_60px_-15px_hsl(43_95%_55%/0.45),0_0_0_1px_hsl(43_95%_55%/0.35)_inset]"
                        )}
                      >
                        {/* gradient glow */}
                        <div className={cn("pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-70", cat.accent)} />
                        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:linear-gradient(135deg,hsl(43_95%_55%/0.08),transparent_60%)]" />

                        <div className="relative flex items-start justify-between">
                          <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                            <r.icon className="h-6 w-6" />
                          </span>
                          {r.hot && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[hsl(222_85%_12%)] shadow-[0_0_18px_hsl(43_95%_55%/0.55)]">
                              <Flame className="h-3 w-3" /> Most Demanding
                            </span>
                          )}
                        </div>

                        <h4 className="relative mt-5 font-display text-lg leading-tight">{r.name}</h4>
                        <p className="relative mt-1 text-[11px] uppercase tracking-[0.18em] text-primary-foreground/55">
                          {cat.title.split(" ")[0]} • Industry
                        </p>

                        <div className="relative mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-4 text-xs">
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-primary-foreground/55">Salary</p>
                            <p className="mt-0.5 font-display text-sm text-gold">{r.salary}</p>
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-primary-foreground/55">Growth</p>
                            <p className="mt-0.5 inline-flex items-center gap-1 font-display text-sm text-emerald-400">
                              <TrendingUp className="h-3 w-3" /> {r.growth}
                            </p>
                          </div>
                        </div>

                        <span className="absolute right-4 bottom-4 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-400/30">
                          High Demand
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Industry & Capstone Projects */}
      <section className="container py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge className="bg-gold/15 text-gold border-gold/30 hover:bg-gold/15">🚀 Live Industry Projects</Badge>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            Capstone projects that build a{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">portfolio-ready</span> resume
          </h2>
          <p className="mt-3 text-muted-foreground">
            Real-world projects you'll execute during the program — practical skills, recruiter-ready outcomes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {capstoneCategories.map((cat, ci) => (
            <Reveal key={cat.key} delay={ci * 100}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-[hsl(222_85%_12%)] via-[hsl(222_70%_16%)] to-[hsl(222_85%_10%)] p-7 text-primary-foreground shadow-elegant transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_30px_70px_-20px_hsl(43_95%_55%/0.4)]">
                <div className={cn("pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-60", cat.accent)} />

                <div className="relative flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/30">
                    <cat.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-gold font-bold">{cat.emoji} Module</p>
                    <h3 className="font-display text-lg leading-tight">{cat.title}</h3>
                  </div>
                </div>

                <ul className="relative mt-6 space-y-2.5">
                  {cat.projects.map((p, i) => (
                    <li
                      key={p}
                      className="group/item flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.03] p-3 text-sm transition-all hover:border-gold/40 hover:bg-white/[0.07]"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-gold/15 text-[10px] font-bold text-gold ring-1 ring-gold/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-primary-foreground/85 leading-snug">{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] uppercase tracking-[0.2em]">
                  <span className="text-primary-foreground/55">{cat.projects.length} Projects</span>
                  <span className="text-gold font-bold">Capstone Ready ✓</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Why These Projects Matter */}
        <Reveal delay={120} className="mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-[hsl(222_85%_12%)] to-[hsl(222_70%_20%)] p-8 sm:p-12 text-primary-foreground">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[hsl(222_75%_45%/0.25)] blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-2">
              <div>
                <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20">💼 Career Impact</Badge>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl">
                  Why these projects <span className="bg-gold-gradient bg-clip-text text-transparent">matter</span>
                </h3>
                <p className="mt-3 text-primary-foreground/80 max-w-lg">
                  Students gain hands-on, recruiter-relevant exposure across the modern finance & analytics stack.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {projectImpactSkills.map((s) => (
                    <span key={s} className="rounded-full border border-gold/30 bg-white/5 px-3 py-1.5 text-xs backdrop-blur">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gold font-bold">Projects help you build</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {projectImpactOutcomes.map((o, i) => (
                    <Reveal key={o.t} delay={i * 70}>
                      <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:bg-white/[0.08]">
                        <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold/15 text-gold ring-1 ring-gold/30">
                          <o.icon className="h-5 w-5" />
                        </span>
                        <span className="font-display text-sm">{o.t}</span>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
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
              <div className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-border/60 bg-black transition-all hover:border-gold/60 hover:shadow-elegant">
                <AutoplayVideo src={(placementVideo as any).url} controls={false} className="absolute inset-0" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
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

      {/* Certificate Sample */}
      <section className="relative overflow-hidden bg-[hsl(222_85%_6%)] py-20 text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,hsl(43_95%_55%/0.18),transparent_55%),radial-gradient(circle_at_15%_85%,hsl(222_75%_45%/0.22),transparent_55%)]" />
        <div className="container relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20 gap-1">
              <Award className="h-3.5 w-3.5" /> Government-Recognized Certification
            </Badge>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
              Earn an{" "}
              <span className="bg-gold-gradient bg-clip-text text-transparent">Industry-Valued Certificate</span>
            </h2>
            <p className="mt-5 text-primary-foreground/80 max-w-lg">
              Every graduate receives a co-branded Certificate of Achievement from Upskiller Academy & Magnum Educorporates — recognized by the Ministry of MSME, Government of India.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Co-branded with MSME (Ministry of Micro, Small & Medium Enterprises)",
                "Includes Live Projects, Assignments & Assessments",
                "Unique Student Code for lifetime verification",
                "Grade-based achievement (A / A+) on capstone",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-primary-foreground/85">{p}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="premium" size="lg" className="mt-7">
              <a href={buildWhatsAppUrl("Hi, I want details about the certification program.")} target="_blank" rel="noreferrer">
                Get Certified <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/40 via-primary/30 to-gold/40 opacity-60 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-2xl border-2 border-gold/40 bg-white shadow-[0_30px_80px_-20px_hsl(43_95%_55%/0.5)] transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]">
                <img
                  src={(certificateSample as any).url}
                  alt="Sample Certificate of Achievement — Chartered Stock Analysis Program"
                  loading="lazy"
                  className="block w-full h-auto"
                />
                <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gold/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[hsl(222_85%_12%)] shadow-lg">
                  <Award className="h-3 w-3" /> Sample Certificate
                </div>
              </div>
            </div>
          </Reveal>
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
