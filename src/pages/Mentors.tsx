import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin } from "lucide-react";
import SEO from "@/components/SEO";

const mentors = [
  { name: "Rahul Mehta", role: "Lead Mentor — Trading", bio: "15+ yrs as a prop & options trader. Specialises in volatility & expiry strategies.", initials: "RM" },
  { name: "Anita Sharma", role: "Head — Equity Research", bio: "Ex buy-side analyst. Has covered BFSI & consumer for top AMCs.", initials: "AS" },
  { name: "Karan Patel", role: "Mentor — Derivatives", bio: "Active F&O trader. Builds and back-tests strategies for institutional desks.", initials: "KP" },
  { name: "Neha Singh", role: "Mentor — Financial Modelling", bio: "CFA, ex investment banking. Trains analysts in Excel & valuation.", initials: "NS" },
  { name: "Arjun Verma", role: "Mentor — Macro & Markets", bio: "Macro strategist with experience across asset classes.", initials: "AV" },
  { name: "Priya Iyer", role: "Mentor — Career & Placement", bio: "Helps learners crack interviews at AMCs, brokers and consulting firms.", initials: "PI" },
];

const Mentors = () => (
  <>
    <SEO title="Mentors — Upskiller Academy" description="Meet the practitioners behind Upskiller Academy — traders, analysts and researchers." canonical="https://www.upskilleracademy.com/mentors" />
    <section className="bg-hero text-primary-foreground">
      <div className="container py-16 lg:py-20">
        <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20">Mentors</Badge>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl max-w-3xl">Learn from market practitioners.</h1>
        <p className="mt-4 max-w-2xl text-primary-foreground/80">
          Our mentors don't just teach — they trade, research and build models every day. You learn what works in real markets.
        </p>
      </div>
    </section>
    <section className="container py-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {mentors.map((m) => (
        <Card key={m.name} className="border-border/60 hover:border-gold/60 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-hero text-primary-foreground font-display text-xl shadow-elegant">
                {m.initials}
              </div>
              <div>
                <h3 className="font-display text-lg">{m.name}</h3>
                <p className="text-xs uppercase tracking-wider text-gold">{m.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{m.bio}</p>
            <a href="#" className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary"><Linkedin className="h-3.5 w-3.5" /> LinkedIn</a>
          </CardContent>
        </Card>
      ))}
    </section>
  </>
);

export default Mentors;
