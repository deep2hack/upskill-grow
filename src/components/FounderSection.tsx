import { Briefcase, Building2, Mic, BookOpen, GraduationCap, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import bookCover from "@/assets/mind-over-markets-book.png";

const cards = [
  { icon: Briefcase, title: "Entrepreneur", desc: "Building ventures since 2008" },
  { icon: Building2, title: "Founder", desc: "Magnum Educorporates" },
  { icon: Mic, title: "Content Creator", desc: "Empowering audiences since 2005" },
  { icon: BookOpen, title: "Author", desc: "Mind Over Markets" },
  { icon: GraduationCap, title: "Educator", desc: "Mentor to 10,000+ learners" },
  { icon: Award, title: "Expertise", desc: "15+ years in markets & finance" },
];

export const FounderSection = () => {
  return (
    <section className="relative overflow-hidden bg-hero text-primary-foreground py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(60%_60%_at_15%_20%,hsl(var(--gold)/0.25),transparent_60%),radial-gradient(50%_50%_at_85%_80%,hsl(var(--primary-glow)/0.4),transparent_60%)]" />

      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">About Founder</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            Meet <span className="bg-gold-gradient bg-clip-text text-transparent">Prabjot Singh</span>
          </h2>
          <p className="mt-4 text-primary-foreground/75">
            With <strong className="text-gold">15+ years</strong> in Finance, Stock Markets & Research,
            Prabjot Singh has mentored thousands of traders, analysts and aspiring finance professionals.
            An entrepreneur, author and educator on a mission to make markets accessible.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[420px_1fr] lg:items-center">
          {/* Book showcase */}
          <Reveal delay={120}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-6 rounded-3xl bg-gold-gradient opacity-30 blur-2xl" />
              <div className="relative rounded-2xl border border-gold/30 bg-primary-foreground/5 p-6 backdrop-blur-sm shadow-elegant">
                <img
                  src={bookCover}
                  alt="Mind Over Markets — book by Prabjot Singh"
                  loading="lazy"
                  className="w-full rounded-lg shadow-gold transition-transform duration-500 hover:scale-[1.03]"
                />
                <div className="mt-5 text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">Authored Book</p>
                  <h3 className="mt-1 font-display text-2xl">Mind Over Markets</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70 italic">
                    "No one is born a great trader, one learns by trading."
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Cards grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map(({ icon: I, title, desc }, i) => (
              <Reveal key={title} delay={i * 90}>
                <Card className="group h-full border-primary-foreground/10 bg-primary-foreground/[0.04] backdrop-blur-sm transition-all duration-500 hover:scale-[1.04] hover:border-gold/50 hover:shadow-gold hover:bg-primary-foreground/[0.07]">
                  <CardContent className="p-5">
                    <div className="grid h-11 w-11 place-items-center rounded-md bg-gold-gradient text-secondary shadow-gold transition-transform duration-500 group-hover:scale-110">
                      <I className="h-5 w-5" />
                    </div>
                    <h4 className="mt-4 font-display text-lg text-primary-foreground">{title}</h4>
                    <p className="mt-1 text-sm text-primary-foreground/70">{desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200} className="mt-12 text-center">
          <Button asChild variant="premium" size="lg">
            <Link to="/courses">
              Explore Courses <ArrowRight className="ml-1" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default FounderSection;
