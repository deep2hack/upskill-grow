import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import SEO from "@/components/SEO";

const posts = [
  { t: "Options Greeks for Beginners — without the math headache", d: "A practical lens on Delta, Gamma, Theta and Vega — built around real trade examples.", date: "Apr 24, 2026", read: "8 min" },
  { t: "How to read an annual report in 30 minutes", d: "A repeatable framework analysts use to extract signal from 200-page reports.", date: "Apr 18, 2026", read: "10 min" },
  { t: "The risk-first trading mindset", d: "Why position sizing matters more than your strategy — a deep dive.", date: "Apr 10, 2026", read: "6 min" },
  { t: "Equity research career roadmap (2026)", d: "Exactly what you need to break into buy-side or sell-side research roles.", date: "Apr 02, 2026", read: "12 min" },
  { t: "Volatility regimes & strategy selection", d: "Choosing the right options strategy for the right vol regime.", date: "Mar 26, 2026", read: "9 min" },
  { t: "DCF that actually makes sense", d: "Build your first three-statement model and DCF without copying templates.", date: "Mar 20, 2026", read: "11 min" },
];

const Blog = () => (
  <>
    <SEO title="Blog — Upskiller Academy" description="Insights on trading, derivatives, equity research and finance careers from our mentors." canonical="https://www.upskilleracademy.com/blog" />
    <section className="bg-hero text-primary-foreground">
      <div className="container py-16 lg:py-20">
        <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20">Blog</Badge>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl max-w-3xl">Insights from our mentors.</h1>
        <p className="mt-4 max-w-2xl text-primary-foreground/80">
          Practical articles on markets, strategy, valuation and careers.
        </p>
      </div>
    </section>
    <section className="container py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <Card key={p.t} className="group border-border/60 hover:border-gold/60 hover:shadow-card-soft transition-all cursor-pointer">
          <div className="aspect-[16/9] bg-hero rounded-t-lg" />
          <CardContent className="p-6">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{p.date}</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.read}</span>
            </div>
            <h3 className="mt-3 font-display text-lg group-hover:text-primary">{p.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.d}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  </>
);

export default Blog;
