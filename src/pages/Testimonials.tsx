import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import SEO from "@/components/SEO";

const stories = [
  { n: "Rohit Sharma", c: "Pro Trader Program", q: "I went from random trades to a structured playbook. Risk management mindset is the biggest gift this program gave me." },
  { n: "Aisha Khan", c: "Financial Analysis Certifications", q: "Cracked an analyst role within 3 months of finishing. The capstone project on my resume was a real conversation starter." },
  { n: "Vikram Pillai", c: "Certification into Derivative Analysis", q: "Mentors actually trade. The Greeks finally clicked, and adjustments don't scare me anymore." },
  { n: "Sneha Reddy", c: "Chartered Stock Analysis Program", q: "I now read annual reports the way fund managers do. Built three valuation models from scratch already." },
  { n: "Mohammed Aslam", c: "Certification into Finance & Market Research", q: "From a non-finance background to writing institutional-grade research notes — surreal journey." },
  { n: "Pooja Nair", c: "Stock Market Foundation Program", q: "The clearest beginner program I've found. No jargon, just structure. Highly recommend." },
];

const Testimonials = () => (
  <>
    <SEO title="Testimonials — Upskiller Academy" description="Real stories from Upskiller Academy alumni — traders, analysts and learners." canonical="https://www.upskilleracademy.com/testimonials" />
    <section className="bg-hero text-primary-foreground">
      <div className="container py-16 lg:py-20">
        <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20">Stories</Badge>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl max-w-3xl">Outcomes that speak for themselves.</h1>
        <p className="mt-4 max-w-2xl text-primary-foreground/80">
          Hear from traders, analysts and students who upskilled with us.
        </p>
      </div>
    </section>
    <section className="container py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {stories.map((t) => (
        <Card key={t.n} className="border-border/60 hover:border-gold/60 transition-colors">
          <CardContent className="p-6">
            <Quote className="h-6 w-6 text-gold" />
            <p className="mt-3 text-sm text-foreground/85 leading-relaxed">"{t.q}"</p>
            <div className="mt-4 flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-3 font-medium">{t.n}</p>
            <p className="text-xs text-muted-foreground">{t.c}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  </>
);

export default Testimonials;
