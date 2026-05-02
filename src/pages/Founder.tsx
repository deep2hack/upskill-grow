import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Target, TrendingUp, Heart, Award, BookOpen, Mic, Users, ShieldCheck, Star, Quote, MessageCircle, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import portrait from "@/assets/founder-prabjot.webp";
import portraitBW from "@/assets/founder-portrait-bw.jpg";
import training from "@/assets/founder-training.jpg";
import speaking from "@/assets/founder-speaking.jpg";
import bookMoment from "@/assets/founder-book-moment.jpg";
import media from "@/assets/founder-media.jpg";
import bookCover from "@/assets/mind-over-markets-book.png";

const differentiators = [
  { icon: Target, t: "Outcome-First Mentorship", d: "Every session is engineered for career transformation, not just content delivery." },
  { icon: TrendingUp, t: "Real Market Practitioner", d: "15+ years of hands-on trading, research and capital-market experience." },
  { icon: Heart, t: "Empathy + Expertise", d: "Knows the learner's struggle — bridges the gap between theory and reality." },
  { icon: Sparkles, t: "Beyond the Classroom", d: "Live trade rooms, mentorship cohorts and post-program career support." },
];

const strengths = [
  { icon: BookOpen, t: "Educator", d: "Translates complex finance into clear, actionable frameworks." },
  { icon: Mic, t: "Speaker", d: "Keynote sessions across India on markets, mindset and money." },
  { icon: Award, t: "Author", d: "Mind Over Markets — a guide to disciplined, profitable trading." },
  { icon: Users, t: "Community Builder", d: "10,000+ learner network spanning India and the diaspora." },
];

const achievements = [
  { k: "15+", v: "Years of experience" },
  { k: "10,000+", v: "Learners mentored" },
  { k: "120+", v: "Hiring partners" },
  { k: "1", v: "Published book" },
];

const trust = [
  { icon: ShieldCheck, t: "Risk-First Philosophy", d: "Capital protection before strategy — the way professionals actually trade." },
  { icon: GraduationCap, t: "Mentor, Not Influencer", d: "Long-term student outcomes, not viral content." },
  { icon: Star, t: "4.9/5 Average Rating", d: "From thousands of completed cohorts." },
];

const gallery = [
  { src: training, alt: "Training session with learners" },
  { src: speaking, alt: "Keynote on stage" },
  { src: bookMoment, alt: "With the published book" },
  { src: media, alt: "Television media feature" },
  { src: portraitBW, alt: "Editorial black & white portrait" },
  { src: portrait, alt: "Founder portrait" },
];

const Founder = () => {
  return (
    <>
      <SEO
        title="Prabjot Singh — Founder, Upskiller Academy | When Education Meets Revolution"
        description="Meet Prabjot Singh — founder, author and educator with 15+ years in stock markets and finance. Explore her journey, mantra, books and impact."
        canonical="https://www.upskilleracademy.com/founder"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(60%_60%_at_85%_15%,hsl(var(--gold)/0.35),transparent_60%),radial-gradient(50%_50%_at_10%_90%,hsl(var(--primary-glow)/0.5),transparent_60%)]" />

        <div className="container relative grid gap-12 py-20 lg:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <Reveal>
              <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20">★ Founder · Upskiller Academy</Badge>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
                <span className="text-gold">Prabjot Singh</span><br />
                When <span className="bg-gold-gradient bg-clip-text text-transparent">Education</span> Meets <span className="bg-gold-gradient bg-clip-text text-transparent">Revolution</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-lg text-primary-foreground/80 max-w-xl">
                Author. Educator. Entrepreneur. With 15+ years in finance and stock markets, Prabjot is on a mission to solve unemployability in India through career-focused, mentor-led learning.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="premium" size="lg">
                  <Link to="/courses">Learn from the Founder <ArrowRight className="ml-1" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <a href={buildWhatsAppUrl("Hi, I'd like a free consultation with the founder's team.")} target="_blank" rel="noreferrer">
                    Get Free Consultation
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-8 rounded-[2rem] bg-gold-gradient opacity-30 blur-3xl animate-pulse" />
              <div className="relative overflow-hidden rounded-3xl border border-gold/30 shadow-elegant float-y">
                <img
                  src={portraitBW}
                  alt="Prabjot Singh — founder portrait"
                  className="h-[520px] w-full object-cover grayscale-[0.2] transition-transform duration-700 hover:scale-105"
                  width={1024}
                  height={1280}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-gold">Founder & CEO</p>
                  <p className="mt-1 font-display text-2xl">Prabjot Singh</p>
                  <p className="text-sm text-primary-foreground/70">Magnum Educorporates · Upskiller Academy</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-card-soft group">
              <img
                src={training}
                alt="Prabjot Singh training a stock market cohort"
                loading="lazy"
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-primary-foreground">
                <p className="text-xs uppercase tracking-[0.2em] text-gold">Live Training</p>
                <p className="mt-1 font-display text-lg">Mentor-led cohorts, real charts, real decisions.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">About the Founder</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">A career built on solving unemployability.</h2>
            <div className="mt-5 space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Prabjot Singh has spent over <strong className="text-gold-deep">15 years</strong> in finance, stock markets and research — first as a practitioner, then as an educator. What started as a personal mission to demystify markets evolved into <strong>Upskiller Academy</strong>, India's premier career-focused training institute.
              </p>
              <p>
                Her core belief: India doesn't have an education problem — it has an <em>employability</em> problem. Every program she designs is engineered to bridge that gap with real frameworks, live mentorship and post-program career support.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT MAKES HER DIFFERENT */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">What Makes Her Different</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Not another finance influencer.</h2>
            <p className="mt-3 text-muted-foreground">A practitioner-educator who has built ventures, taught thousands and authored work that lasts.</p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map(({ icon: I, t, d }, i) => (
              <Reveal key={t} delay={i * 110}>
                <Card className="h-full border-border/60 hover:border-gold/60 hover:shadow-card-soft transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="grid h-11 w-11 place-items-center rounded-md bg-gold-gradient text-secondary shadow-gold">
                      <I className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-lg">{t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STRENGTHS + IMAGE PARALLAX */}
      <section
        className="relative overflow-hidden py-24 text-primary-foreground bg-fixed"
        style={{ backgroundImage: `linear-gradient(180deg, hsl(220 22% 6% / 0.85), hsl(220 22% 6% / 0.85)), url(${speaking})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container relative">
          <Reveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Key Strengths</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Multifaceted. Grounded. Focused.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map(({ icon: I, t, d }, i) => (
              <Reveal key={t} delay={i * 110}>
                <div className="h-full rounded-xl border border-primary-foreground/15 bg-primary-foreground/[0.06] backdrop-blur-md p-6 transition-all hover:bg-primary-foreground/[0.1] hover:border-gold/50 hover:scale-[1.03]">
                  <div className="grid h-11 w-11 place-items-center rounded-md bg-gold-gradient text-secondary shadow-gold">
                    <I className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg">{t}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/75">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="container py-20">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Achievements & Impact</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Numbers that tell the story.</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5">
          {achievements.map((s, i) => (
            <Reveal key={s.v} delay={i * 100}>
              <div className="rounded-xl border border-border bg-card p-6 text-center hover:border-gold/60 hover:shadow-gold transition-all hover:-translate-y-1">
                <p className="font-display text-4xl bg-gold-gradient bg-clip-text text-transparent">{s.k}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MANTRA QUOTE */}
      <section className="relative overflow-hidden bg-hero text-primary-foreground py-20">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(60%_60%_at_50%_50%,hsl(var(--gold)/0.3),transparent_60%)]" />
        <div className="container relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto h-12 w-12 text-gold" />
            <p className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.15]">
              <span className="text-gold">"</span>
              No one is born a great trader — one learns by trading. Education isn't an event,
              it's a <span className="bg-gold-gradient bg-clip-text text-transparent">revolution</span> that begins inside you.
              <span className="text-gold">"</span>
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.28em] text-gold">— Prabjot Singh</p>
          </Reveal>
        </div>
      </section>

      {/* TRUST */}
      <section className="container py-20">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Why Students Trust Her</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Built on substance, not spectacle.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {trust.map(({ icon: I, t, d }, i) => (
            <Reveal key={t} delay={i * 120}>
              <Card className="h-full border-border/60 hover:border-gold/60 hover:shadow-card-soft transition-all group">
                <CardContent className="p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <I className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-xl">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MEDIA / GALLERY */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Media & Gallery</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Moments from the journey.</h2>
            <p className="mt-3 text-muted-foreground">Books, media features, training sessions and stage moments.</p>
          </Reveal>

          {/* Book showcase */}
          <Reveal delay={120}>
            <div className="mt-10 grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-card-soft">
              <div className="relative mx-auto">
                <div className="absolute -inset-6 rounded-3xl bg-gold-gradient opacity-25 blur-2xl" />
                <img src={bookCover} alt="Mind Over Markets — book cover" loading="lazy" className="relative w-56 sm:w-64 rounded-md shadow-gold transition-transform duration-500 hover:scale-105" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">Authored Book</p>
                <h3 className="mt-2 font-display text-3xl">Mind Over Markets</h3>
                <p className="mt-3 text-foreground/80">
                  A practical guide to the psychology, discipline and frameworks behind consistent trading. Required reading for every serious learner at Upskiller Academy.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Photo grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.src} delay={i * 90}>
                <div className="group relative overflow-hidden rounded-xl border border-border shadow-card-soft">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/10 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">Gallery</p>
                    <p className="mt-1 font-display text-base">{g.alt}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-hero text-primary-foreground p-10 sm:p-14 shadow-elegant">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(60%_60%_at_80%_20%,hsl(var(--gold)/0.4),transparent_60%)]" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="font-display text-3xl sm:text-4xl">Ready to learn from the founder?</h3>
                <p className="mt-3 text-primary-foreground/80 max-w-xl">
                  Explore mentor-led programs designed and led by Prabjot Singh — or request a free consultation to find the right fit.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="premium" size="lg">
                  <Link to="/courses">Explore Courses <ArrowRight className="ml-1" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <a href={buildWhatsAppUrl("Hi, I'd like a free consultation.")} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-1" /> Get Free Consultation
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
