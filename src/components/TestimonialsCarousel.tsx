import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

const initials = (n: string) =>
  n
    .replace(/\([^)]*\)/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const Card = ({ t }: { t: Testimonial }) => (
  <article
    className={cn(
      "group relative h-full overflow-hidden rounded-2xl p-6 sm:p-7",
      "border border-white/10 bg-white/[0.04] backdrop-blur-xl",
      "shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]",
      "transition-all duration-500 hover:-translate-y-1 hover:border-gold/50",
      "hover:shadow-[0_30px_80px_-20px_hsl(var(--gold)/0.45)]",
    )}
  >
    {/* royal blue + gold glows */}
    <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/30 blur-3xl opacity-60 transition-opacity group-hover:opacity-90" />
    <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-gold/20 blur-3xl opacity-50 transition-opacity group-hover:opacity-80" />

    <Quote className="absolute right-5 top-5 h-10 w-10 text-gold/15 group-hover:text-gold/30 transition-colors" />

    <div className="relative flex items-center gap-4">
      <div className="relative shrink-0">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-gold via-primary to-gold opacity-70 blur-md" />
        <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-gold/70 ring-offset-2 ring-offset-[hsl(220_30%_8%)] bg-gradient-to-br from-primary/40 to-gold/30 flex items-center justify-center text-white font-semibold">
          {t.avatar ? (
            <img
              src={t.avatar}
              alt={`${t.name} — Upskiller Academy student`}
              loading="lazy"
              className="h-full w-full object-cover object-top scale-110"
            />
          ) : (
            <span className="text-base">{initials(t.name)}</span>
          )}
        </div>
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-white truncate">{t.name}</p>
        <div className="mt-1 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-3.5 w-3.5",
                i < t.rating ? "fill-gold text-gold" : "text-white/20",
              )}
            />
          ))}
        </div>
      </div>
    </div>

    <p className="relative mt-5 text-sm leading-relaxed text-white/80">
      "{t.review}"
    </p>
  </article>
);

type Props = {
  className?: string;
  /** items shown on lg screens */
  perView?: 3 | 4;
};

export const TestimonialsCarousel = ({ className, perView = 3 }: Props) => {
  const autoplay = useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false },
    [autoplay.current],
  );

  useEffect(() => {
    if (!embla) return;
    embla.reInit();
  }, [embla]);

  const basis =
    perView === 4
      ? "basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
      : "basis-full sm:basis-1/2 lg:basis-1/3";

  return (
    <div className={cn("relative", className)}>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[hsl(220_30%_5%)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[hsl(220_30%_5%)] to-transparent" />

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex -ml-4">
          {testimonials.map((t, i) => (
            <div key={i} className={cn("pl-4 shrink-0 grow-0", basis)}>
              <Card t={t} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
