import { Award, Target, Users, Heart, Building2, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const About = () => (
  <>
    <SEO
      title="About Us — Upskiller Academy"
      description="Upskiller Academy is a premier training institute building India's next generation of market professionals."
      canonical="https://www.upskilleracademy.com/about"
    />
    <section className="bg-hero text-primary-foreground">
      <div className="container py-16 lg:py-20">
        <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20">About Us</Badge>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl max-w-3xl">
          Building India's next generation of market professionals.
        </h1>
        <p className="mt-4 max-w-2xl text-primary-foreground/80">
          Upskiller Academy is a coaching house founded by market practitioners — built to bridge the
          gap between classroom finance and the real, fast-moving world of trading and analysis.
        </p>
      </div>
    </section>

    <section className="container py-16 grid gap-10 lg:grid-cols-2">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Our Story</p>
        <h2 className="mt-2 font-display text-3xl">From practitioners, for practitioners.</h2>
        <p className="mt-4 text-foreground/80 leading-relaxed">
          We started Upskiller Academy because the existing market education was either too academic
          or too theatrical. Real practitioners learn through structure, repetition, journaling and
          mentorship — and that's exactly what we deliver.
        </p>
        <p className="mt-4 text-foreground/80 leading-relaxed">
          Today, our cohorts include working professionals, students, traders and analysts —
          all united by one goal: to build durable skill in markets and finance.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { i: Building2, t: "Founded", d: "Built by market practitioners with 15+ years of trading & research experience." },
          { i: Users, t: "Cohorts", d: "Small, focused batches with personalised mentor attention." },
          { i: Award, t: "Certifications", d: "Recognised by industry, valuable on resumes & interviews." },
          { i: ShieldCheck, t: "Risk-first", d: "Capital protection is the first lesson, not the last." },
        ].map(({ i: I, t, d }) => (
          <Card key={t} className="border-border/60">
            <CardContent className="p-5">
              <I className="h-5 w-5 text-gold" />
              <p className="mt-2 font-display text-lg">{t}</p>
              <p className="text-sm text-muted-foreground">{d}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    <section className="bg-muted/40 py-16">
      <div className="container grid gap-10 md:grid-cols-2">
        {[
          { i: Target, t: "Our Mission", d: "Make world-class markets education accessible, structured and outcome-focused — for every Indian who wants to learn." },
          { i: Heart, t: "Our Values", d: "Honesty over hype. Structure over shortcuts. Mentorship over monologues. Risk before return." },
        ].map(({ i: I, t, d }) => (
          <Card key={t} className="border-border/60">
            <CardContent className="p-8">
              <I className="h-6 w-6 text-gold" />
              <h3 className="mt-3 font-display text-2xl">{t}</h3>
              <p className="mt-2 text-foreground/75 leading-relaxed">{d}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    <section className="container py-16 text-center">
      <h2 className="font-display text-3xl">Ready to start your journey?</h2>
      <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
        Speak to our advisor on WhatsApp — we'll help you choose the right program for your goals.
      </p>
      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        <Button asChild variant="premium" size="lg">
          <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
        </Button>
        <Button asChild variant="outlineGold" size="lg"><Link to="/courses">View Courses</Link></Button>
      </div>
    </section>
  </>
);

export default About;
