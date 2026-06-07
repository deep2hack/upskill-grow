import { useState } from "react";
import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { submitToSheets } from "@/lib/sheets";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import {
  Sparkles, CheckCircle2, Loader2, TrendingUp, ShieldCheck, GraduationCap,
  Briefcase, Rocket, Users, Wallet, Building2, Award, BarChart3,
} from "lucide-react";

const EXPERIENCES = [
  "No Business Experience", "Coaching Institute Owner", "Entrepreneur",
  "Education Professional", "Trainer", "Business Owner", "Investor",
  "Corporate Professional", "Other",
];
const BUDGETS = [
  "Below ₹2 Lakhs", "₹2 Lakhs – ₹5 Lakhs", "₹5 Lakhs – ₹10 Lakhs",
  "₹10 Lakhs – ₹20 Lakhs", "Above ₹20 Lakhs",
];
const TIMELINES = [
  "Immediately", "Within 1 Month", "Within 3 Months", "Within 6 Months", "Just Exploring",
];

const BENEFITS = [
  { icon: ShieldCheck, t: "Recession-Proof Business Model" },
  { icon: TrendingUp, t: "High Profit Margin Premium Courses" },
  { icon: BarChart3, t: "Stock Market, Forex, Crypto & AI Programs" },
  { icon: Briefcase, t: "Placement-Oriented Courses" },
  { icon: GraduationCap, t: "Founder-Led Training Model" },
  { icon: Rocket, t: "Hybrid Learning (Live + Recorded)" },
  { icon: Users, t: "Continuous Student Demand" },
  { icon: Sparkles, t: "Marketing & Admission Support" },
  { icon: Award, t: "Career-Focused Education System" },
  { icon: Building2, t: "Limited Franchise Opportunities Available" },
];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[+]?[\d\s-]{10,15}$/;

const Franchise = () => {
  const [f, setF] = useState({
    name: "", email: "", phone: "", city: "", state: "",
    experience: "", budget: "", timeline: "", comments: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const u = (k: keyof typeof f) => (v: string) => setF((p) => ({ ...p, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    const name = f.name.trim();
    const email = f.email.trim();
    const phone = f.phone.trim();
    if (!name || !email || !phone || !f.city.trim() || !f.state.trim()) {
      toast({ title: "Required fields missing", description: "Name, email, phone, city and state are required." });
      return;
    }
    if (!emailRe.test(email)) {
      toast({ title: "Invalid email" });
      return;
    }
    if (!phoneRe.test(phone)) {
      toast({ title: "Invalid phone number" });
      return;
    }
    setLoading(true);
    try {
      await submitToSheets({
        formType: "franchise",
        name, email, phone,
        city: f.city.trim(),
        state: f.state.trim(),
        experience: f.experience,
        budget: f.budget,
        timeline: f.timeline,
        comments: f.comments.trim(),
        page: typeof window !== "undefined" ? window.location.href : "",
      });
      setDone(true);
      toast({ title: "Thank you!", description: "Our franchise team will contact you shortly." });
      setTimeout(() => {
        const msg = `Hi, I'm interested in the Magnum Educorporates & Upskiller Academy franchise.\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCity: ${f.city}, ${f.state}\nBudget: ${f.budget}\nTimeline: ${f.timeline}`;
        window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
      }, 1500);
    } catch (err) {
      console.error(err);
      toast({ title: "Could not submit", description: "Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Franchise Opportunity — Upskiller Academy & Magnum Educorporates"
        description="Own a Magnum Educorporates & Upskiller Academy franchise — India's fastest-growing financial education, stock market, research & career training ecosystem."
      />

      <section className="relative overflow-hidden bg-hero text-primary-foreground">
        {/* Premium animated background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-primary-glow/40 blur-3xl" style={{ animation: "float-y 8s ease-in-out infinite" }} />
          <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-gold/15 blur-3xl" style={{ animation: "drift-c 14s ease-in-out infinite" }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,hsl(222_75%_6%/0.7)_100%)]" />
          {/* Subtle finance grid */}
          <svg className="absolute inset-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(43 95% 55%)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container relative py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* LEFT — Hero copy */}
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-3 py-1 text-xs font-semibold text-gold uppercase tracking-[0.2em]">
                <Sparkles className="h-3.5 w-3.5" /> Franchise Opportunity
              </div>
              <h1 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Build Wealth Through Education —{" "}
                <span className="bg-gold-gradient bg-clip-text text-transparent">
                  Own a Magnum Educorporates & Upskiller Academy Franchise
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-primary-foreground/80 max-w-xl">
                Become a part of India's fastest-growing Financial Education, Stock Market,
                Research & Career Training Ecosystem.
              </p>

              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {BENEFITS.map((b, i) => (
                  <Reveal key={b.t} delay={i * 40}>
                    <li className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md px-4 py-3 hover:border-gold/40 hover:bg-white/[0.07] transition-all">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gold/15 text-gold border border-gold/30">
                        <b.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-primary-foreground/90">{b.t}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-primary-foreground/70">
                <span className="flex items-center gap-2"><Wallet className="h-4 w-4 text-gold" /> Low Capex, High ROI</span>
                <span className="flex items-center gap-2"><Users className="h-4 w-4 text-gold" /> Pan-India Network</span>
                <span className="flex items-center gap-2"><Award className="h-4 w-4 text-gold" /> MSME Certified</span>
              </div>
            </Reveal>

            {/* RIGHT — Glassmorphism form */}
            <Reveal delay={120}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gold/20 blur-2xl opacity-50" />
                <div className="relative rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-2xl p-6 sm:p-8 shadow-[0_30px_80px_-20px_hsl(222_75%_5%/0.6)]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">Franchise Registration</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-primary-foreground">
                    Apply For Franchise
                  </h2>
                  <p className="mt-1 text-sm text-primary-foreground/70">
                    Fill the form below — our partnership team will reach out within 24 hours.
                  </p>

                  {done ? (
                    <div className="mt-8 grid place-items-center text-center gap-3 py-6">
                      <div className="grid h-14 w-14 place-items-center rounded-full bg-gold/20 text-gold border border-gold/40">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="font-display text-xl text-primary-foreground">Thank you!</h3>
                      <p className="text-sm text-primary-foreground/75">
                        Our franchise team will contact you shortly. Redirecting to WhatsApp…
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field label="Full Name *">
                          <Input value={f.name} onChange={(e) => u("name")(e.target.value)} placeholder="Your full name" maxLength={100} required disabled={loading} className="bg-white/90 text-foreground" />
                        </Field>
                        <Field label="Email Address *">
                          <Input type="email" value={f.email} onChange={(e) => u("email")(e.target.value)} placeholder="you@example.com" maxLength={255} required disabled={loading} className="bg-white/90 text-foreground" />
                        </Field>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field label="Phone Number *">
                          <Input value={f.phone} onChange={(e) => u("phone")(e.target.value)} placeholder="10-digit mobile" inputMode="tel" maxLength={20} required disabled={loading} className="bg-white/90 text-foreground" />
                        </Field>
                        <Field label="City *">
                          <Input value={f.city} onChange={(e) => u("city")(e.target.value)} placeholder="City" maxLength={80} required disabled={loading} className="bg-white/90 text-foreground" />
                        </Field>
                      </div>
                      <Field label="State *">
                        <Input value={f.state} onChange={(e) => u("state")(e.target.value)} placeholder="State" maxLength={80} required disabled={loading} className="bg-white/90 text-foreground" />
                      </Field>

                      <Field label="Business Experience">
                        <Select value={f.experience} onValueChange={u("experience")} disabled={loading}>
                          <SelectTrigger className="bg-white/90 text-foreground"><SelectValue placeholder="Select Your Business Experience" /></SelectTrigger>
                          <SelectContent>
                            {EXPERIENCES.map((x) => <SelectItem key={x} value={x}>{x}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </Field>

                      <Field label="Investment Budget">
                        <Select value={f.budget} onValueChange={u("budget")} disabled={loading}>
                          <SelectTrigger className="bg-white/90 text-foreground"><SelectValue placeholder="Select Your Investment Budget" /></SelectTrigger>
                          <SelectContent>
                            {BUDGETS.map((x) => <SelectItem key={x} value={x}>{x}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </Field>

                      <Field label="How Soon Are You Planning To Start?">
                        <Select value={f.timeline} onValueChange={u("timeline")} disabled={loading}>
                          <SelectTrigger className="bg-white/90 text-foreground"><SelectValue placeholder="Select timeline" /></SelectTrigger>
                          <SelectContent>
                            {TIMELINES.map((x) => <SelectItem key={x} value={x}>{x}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </Field>

                      <Field label="Message / Comments">
                        <Textarea
                          value={f.comments}
                          onChange={(e) => u("comments")(e.target.value)}
                          placeholder="Tell us about your business goals and preferred franchise location."
                          maxLength={1000}
                          rows={4}
                          disabled={loading}
                          className="bg-white/90 text-foreground"
                        />
                      </Field>

                      <Button
                        type="submit"
                        variant="premium"
                        size="lg"
                        disabled={loading}
                        className="mt-2 w-full transition-transform hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px_hsl(43_95%_55%/0.8)]"
                      >
                        {loading ? (<><Loader2 className="animate-spin" /> Submitting…</>) : "Apply For Franchise"}
                      </Button>
                      <p className="text-[11px] text-primary-foreground/60 text-center">
                        By submitting you agree to our Privacy Policy & Terms.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="grid gap-1.5">
    <Label className="text-primary-foreground/85 text-xs font-semibold uppercase tracking-wider">{label}</Label>
    {children}
  </div>
);

export default Franchise;
