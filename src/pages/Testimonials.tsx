import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { testimonials } from "@/data/testimonials";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";

const initials = (n: string) =>
  n
    .replace(/\([^)]*\)/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const Testimonials = () => (
  <>
    <SEO
      title="Testimonials — Upskiller Academy"
      description="Real stories from Upskiller Academy alumni — traders, analysts and learners across India."
      canonical="https://www.upskilleracademy.com/testimonials"
    />

    {/* Hero */}
    <section className="relative overflow-hidden bg-[hsl(220_30%_5%)] text-white">
      <div className="pointer-events-none absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="container relative py-16 lg:py-20">
        <Badge className="bg-gold/20 text-gold border-gold/30 hover:bg-gold/20">Stories</Badge>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
          Outcomes that <span className="bg-gold-gradient bg-clip-text text-transparent">speak for themselves</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-white/75">
          Hear from traders, analysts and students who upskilled with us — real reviews from real learners.
        </p>
      </div>
    </section>

    {/* Auto-sliding carousel */}
    <section className="relative bg-[hsl(220_30%_5%)] pb-10 text-white">
      <div className="container">
        <TestimonialsCarousel />
      </div>
    </section>

    {/* Full grid */}
    <section className="relative bg-[hsl(220_30%_5%)] py-16 text-white">
      <div className="container">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-2xl sm:text-3xl">
            All <span className="bg-gold-gradient bg-clip-text text-transparent">reviews</span>
          </h2>
          <p className="text-sm text-white/60 hidden sm:block">{testimonials.length} verified stories</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={(i % 6) * 70}>
              <article
                className={cn(
                  "group relative h-full overflow-hidden rounded-2xl p-6",
                  "border border-white/10 bg-white/[0.04] backdrop-blur-xl",
                  "shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]",
                  "transition-all duration-500 hover:-translate-y-1 hover:border-gold/50",
                  "hover:shadow-[0_30px_80px_-20px_hsl(var(--gold)/0.45)]",
                )}
              >
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/30 blur-3xl opacity-60 transition-opacity group-hover:opacity-90" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-gold/20 blur-3xl opacity-50 transition-opacity group-hover:opacity-80" />
                <Quote className="absolute right-5 top-5 h-10 w-10 text-gold/15 group-hover:text-gold/30 transition-colors" />

                <div className="relative flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-gold via-primary to-gold opacity-70 blur-md" />
                    <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-gold/70 ring-offset-2 ring-offset-[hsl(220_30%_8%)] bg-gradient-to-br from-primary/40 to-gold/30 flex items-center justify-center text-white font-semibold">
                      {t.avatar ? (
                        <img src={t.avatar} alt={`${t.name} — Upskiller Academy student`} loading="lazy" className="h-full w-full object-cover object-top scale-110" />
                      ) : (
                        <span className="text-base">{initials(t.name)}</span>
                      )}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-white truncate">{t.name}</p>
                    <div className="mt-1 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className={cn("h-3.5 w-3.5", idx < t.rating ? "fill-gold text-gold" : "text-white/20")} />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="relative mt-5 text-sm leading-relaxed text-white/80">"{t.review}"</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Testimonials;
