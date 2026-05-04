import { BookOpen, Wrench, TrendingUp, Target, Briefcase } from "lucide-react";
import Reveal from "@/components/Reveal";

const steps = [
  { icon: BookOpen, title: "Learn Basics", desc: "Master market fundamentals, terminology & how the system really works." },
  { icon: Wrench, title: "Practical Training", desc: "Hands-on drills, paper trading and live market observation with mentors." },
  { icon: TrendingUp, title: "Advanced Skills", desc: "Derivatives, options, technical analysis and quantitative strategies." },
  { icon: Target, title: "Placement Prep", desc: "Resume reviews, mock interviews and interview drills with industry experts." },
  { icon: Briefcase, title: "Job Placement", desc: "Direct referrals to our 120+ hiring partners across finance & markets." },
];

export const CareerPath = () => {
  return (
    <section className="relative overflow-hidden bg-[hsl(220_22%_5%)] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_50%_at_50%_0%,hsl(var(--primary-glow)/0.18),transparent_60%)]" />

      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Roadmap to Success</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            Your <span className="bg-gold-gradient bg-clip-text text-transparent">Career Path</span>
          </h2>
          <p className="mt-4 text-white/70">
            From your very first lesson to your first paycheck — a clear, mentored journey.
          </p>
        </Reveal>

        {/* Desktop horizontal timeline */}
        <div className="relative mt-16 hidden lg:block">
          <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="grid grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 150}>
                <div className="group relative flex flex-col items-center text-center">
                  <div className="relative grid h-16 w-16 place-items-center rounded-full border border-gold/40 bg-black shadow-[0_0_30px_-5px_hsl(var(--gold)/0.6)] transition-all duration-300 group-hover:scale-110 group-hover:border-gold group-hover:shadow-[0_0_40px_-2px_hsl(var(--gold)/0.9)]">
                    <s.icon className="h-7 w-7 text-gold" />
                    <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-gold-gradient text-[0.65rem] font-bold text-secondary">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg text-gold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile/tablet vertical timeline */}
        <div className="relative mt-12 lg:hidden">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          <div className="space-y-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <div className="group relative flex gap-5">
                  <div className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/40 bg-black shadow-[0_0_20px_-4px_hsl(var(--gold)/0.6)] transition-all duration-300 group-hover:scale-110">
                    <s.icon className="h-6 w-6 text-gold" />
                    <span className="absolute -top-1.5 -right-1.5 grid h-5 w-5 place-items-center rounded-full bg-gold-gradient text-[0.6rem] font-bold text-secondary">
                      {i + 1}
                    </span>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm flex-1">
                    <h3 className="font-display text-lg text-gold">{s.title}</h3>
                    <p className="mt-1 text-sm text-white/70 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPath;
