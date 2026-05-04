import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Award, Clock, Users, GraduationCap, LineChart, ShieldCheck, Star, TrendingUp, BookOpen, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import { courses, formatINR } from "@/data/courses";
import { SITE } from "@/data/site";
import { buildWhatsAppUrl, courseEnquiryMessage } from "@/lib/whatsapp";
import HeroScene from "@/components/three/HeroScene";
import AmbientBackdrop from "@/components/three/AmbientBackdrop";
import PlacementCompanies from "@/components/PlacementCompanies";
import StockTicker from "@/components/StockTicker";
import FounderSection from "@/components/FounderSection";
import MarketInsights from "@/components/MarketInsights";
import SectionDivider from "@/components/SectionDivider";
import BooksByFounder from "@/components/BooksByFounder";
import LimitedTimeOffer from "@/components/LimitedTimeOffer";
import CareerPath from "@/components/CareerPath";
import Reveal from "@/components/Reveal";

const stats = [
  { k: "10,000+", v: "Learners trained" },
  { k: "20+", v: "Industry mentors" },
  { k: "95%", v: "Completion rate" },
  { k: "4.9/5", v: "Avg. rating" },
];

const usps = [
  { icon: GraduationCap, title: "Mentor-led, not pre-recorded", desc: "Live sessions with practitioners — Q&A, drills, journals." },
  { icon: LineChart, title: "Built for outcomes", desc: "Frameworks, models and live trade rooms — not just theory." },
  { icon: ShieldCheck, title: "Risk-first philosophy", desc: "We teach capital protection before strategy selection." },
  { icon: Award, title: "Industry-recognised certs", desc: "Earn certifications respected by employers and brokers." },
];

const homeFaqs = [
  { q: "Are classes live or recorded?", a: "Live, mentor-led — with lifetime access to recordings for revision." },
  { q: "Do you offer placement support?", a: "Our advanced certifications include resume reviews, mock interviews and referrals." },
  { q: "How do I enroll?", a: "Tap any Enroll button — you'll be connected to our advisor on WhatsApp." },
  { q: "Do you offer a beginner course?", a: "Yes — start with our Stock Market Foundation Program." },
];

const Home = () => {
  const featured = courses.filter((c) => c.featured);

  return (
    <>
      <SEO
        title="Upskiller Academy — Premier Stock Market & Finance Training Institute"
        description="Mentor-led certifications in trading, derivatives, financial analysis and market research. Live online classes, lifetime access, WhatsApp enrollment."
        canonical="https://www.upskilleracademy.com/"
      />

      {/* LIVE TICKER */}
      <StockTicker />

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(70%_60%_at_80%_10%,hsl(var(--gold)/0.35),transparent_60%),radial-gradient(50%_50%_at_10%_90%,hsl(var(--primary-glow)/0.5),transparent_60%)]" />
        <div className="absolute inset-0 hidden lg:block opacity-70">
          <HeroScene />
        </div>
        <div className="container relative py-20 lg:py-28 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6 animate-fade-up">
            <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20">
              ★ Trusted by 10,000+ learners
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Build a <span className="text-gold">winning</span> career in
              markets & finance.
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl">
              Practitioner-led certifications in trading, derivatives, equity research
              and financial analysis. Learn the way professionals actually work.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="premium" size="lg">
                <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
                  Enroll on WhatsApp <ArrowRight className="ml-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-gold" /> Live mentor sessions</span>
              <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-gold" /> Lifetime recordings</span>
              <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-gold" /> Industry-recognised</span>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur p-6 shadow-elegant">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.2em] text-gold">Next Live Batch</p>
                <Badge variant="secondary" className="bg-gold text-secondary hover:bg-gold">Limited Seats</Badge>
              </div>
              <h3 className="mt-3 font-display text-2xl">Pro Trader Program</h3>
              <p className="mt-1 text-sm text-primary-foreground/75">
                6-month flagship mentorship — price action, options, risk & live execution.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {[{ i: Clock, t: "6 months" }, { i: Users, t: "Live cohort" }, { i: TrendingUp, t: "Live trades" }].map(({ i: I, t }) => (
                  <div key={t} className="rounded-lg border border-primary-foreground/15 p-3">
                    <I className="h-5 w-5 mx-auto text-gold" />
                    <p className="mt-1 text-xs text-primary-foreground/80">{t}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <p className="text-xs text-primary-foreground/60 line-through">{formatINR(90000)}</p>
                  <p className="font-display text-3xl text-gold">{formatINR(80000)}</p>
                </div>
                <Button asChild variant="premium">
                  <a href={buildWhatsAppUrl(courseEnquiryMessage("Pro Trader Program"))} target="_blank" rel="noreferrer">
                    Reserve Seat
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="container relative pb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 backdrop-blur">
            {stats.map((s) => (
              <div key={s.v} className="text-center">
                <p className="font-display text-2xl text-gold">{s.k}</p>
                <p className="text-xs text-primary-foreground/70 mt-1">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="container py-20">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Why Upskiller</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">A serious place to learn markets.</h2>
          <p className="mt-3 text-muted-foreground">
            We're not an info-product factory. We're a coaching house — small cohorts, real mentors, structured outcomes.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map(({ icon: I, title, desc }, i) => (
            <Reveal key={title} delay={i * 110}>
              <Card className="h-full border-border/60 hover:border-gold/60 hover:shadow-card-soft transition-all">
                <CardHeader>
                  <div className="grid h-11 w-11 place-items-center rounded-md bg-gold-gradient text-secondary shadow-gold">
                    <I className="h-5 w-5" />
                  </div>
                  <CardTitle className="font-display text-lg mt-3">{title}</CardTitle>
                  <CardDescription>{desc}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About Founder */}
      <FounderSection />

      {/* Live Market Insights */}
      <MarketInsights />

      {/* Books by Founder */}
      <BooksByFounder />

      {/* Career Path */}
      <CareerPath />

      {/* Limited Time Offer */}
      <LimitedTimeOffer />

      {/* Placement Companies */}
      <PlacementCompanies />
      <SectionDivider fill="hsl(var(--muted) / 0.4)" />

      {/* Featured Courses */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Programs</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">Featured Certifications</h2>
            </div>
            <Button asChild variant="outlineGold"><Link to="/courses">View all courses <ArrowRight /></Link></Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((c, i) => (
              <Reveal key={c.slug} delay={i * 130}>
                <Card className="group flex h-full flex-col border-border/60 hover:border-gold/60 hover:shadow-elegant transition-all tilt-3d">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/10">{c.level}</Badge>
                      <Badge className="bg-gold text-secondary hover:bg-gold">Live Cohort</Badge>
                    </div>
                    <CardTitle className="font-display text-xl mt-3">{c.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{c.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {c.duration}</span>
                      <span className="inline-flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" /> {c.mode}</span>
                    </div>
                    <div className="mt-4 flex items-end justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground line-through">{formatINR(c.mrp)}</p>
                        <p className="font-display text-2xl text-gold-deep">{formatINR(c.price)}</p>
                      </div>
                      <Button asChild variant="premium" size="sm">
                        <Link to={`/courses/${c.slug}`}>Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">How it works</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl max-w-2xl">From your first call to your first profitable strategy.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            { n: "01", t: "Enquire", d: "Connect with us on WhatsApp for the brochure & batch dates." },
            { n: "02", t: "Counselling", d: "Free advisor call to map your goals to the right program." },
            { n: "03", t: "Learn Live", d: "Join the cohort — live mentor sessions, drills, journals." },
            { n: "04", t: "Get Certified", d: "Complete capstone & receive your industry certification." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 110}>
              <Card className="h-full border-border/60 hover:border-gold/60 transition-all">
                <CardHeader>
                  <span className="font-display text-3xl bg-gold-gradient bg-clip-text text-transparent">{s.n}</span>
                  <CardTitle className="font-display text-lg mt-2">{s.t}</CardTitle>
                  <CardDescription>{s.d}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Testimonials</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Trusted by learners across India.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { n: "Rohit S.", r: "The Pro Trader Program completely changed my approach. Risk-first, process-led — finally consistent." },
              { n: "Aisha K.", r: "I cracked an analyst role within 3 months of finishing the Financial Analysis certification." },
              { n: "Vikram P.", r: "Mentors are real practitioners. Their live trade rooms are pure gold." },
            ].map((t, i) => (
              <Reveal key={t.n} delay={i * 130}>
                <Card className="h-full border-border/60">
                  <CardContent className="p-6">
                    <div className="flex gap-0.5 text-gold">
                      {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/85">"{t.r}"</p>
                    <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{t.n}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outlineGold"><Link to="/testimonials">Read more stories <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-20 grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">FAQs</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Quick answers, before you enroll.</h2>
          <p className="mt-3 text-muted-foreground">Still have questions? Our advisors are one tap away on WhatsApp.</p>
          <Button asChild variant="premium" className="mt-6">
            <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
              <MessageCircle /> Chat with an Advisor
            </a>
          </Button>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {homeFaqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final CTA */}
      <section className="container pb-20">
        <div className="rounded-2xl bg-hero text-primary-foreground p-8 sm:p-12 shadow-elegant relative overflow-hidden">
          <AmbientBackdrop className="opacity-60" />
          <div className="absolute inset-0 opacity-30 [background:radial-gradient(60%_60%_at_80%_20%,hsl(var(--gold)/0.4),transparent_60%)]" />
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl">Ready to upskill?</h3>
              <p className="mt-2 text-primary-foreground/80 max-w-xl">
                Get the brochure, fees and next batch dates instantly on WhatsApp.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild variant="premium" size="lg">
                <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">Enroll on WhatsApp</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href={SITE.phoneHref}>Call Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
