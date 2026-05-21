import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import b1 from "@/assets/banners/banner-1.jpeg";
import b2 from "@/assets/banners/banner-2.jpeg";
import b3 from "@/assets/banners/banner-3.jpeg";
import b4 from "@/assets/banners/banner-4.jpeg";
import b5 from "@/assets/banners/banner-5.jpeg";
import b6 from "@/assets/banners/banner-6.jpeg";
import b7 from "@/assets/banners/banner-7.jpeg";

const BANNERS = [b1, b2, b3, b4, b5, b6, b7];
const INTERVAL = 4500;

export const CourseBanners = () => {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % BANNERS.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused]);

  const go = (n: number) => setI((n + BANNERS.length) % BANNERS.length);

  return (
    <section
      className="relative w-full bg-secondary py-6 sm:py-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Featured course banners"
    >
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(60%_60%_at_50%_0%,hsl(var(--gold)/0.18),transparent_70%),radial-gradient(50%_50%_at_50%_100%,hsl(var(--primary-glow)/0.18),transparent_70%)] pointer-events-none" />

      <div className="container relative">
        <div className="mx-auto max-w-6xl text-center mb-4 sm:mb-5">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Featured Programs</p>
          <h2 className="mt-1 font-display text-xl sm:text-2xl lg:text-3xl text-secondary-foreground">
            Explore our <span className="text-gold">mastery</span> programs
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] w-full overflow-hidden rounded-2xl border border-gold/20 bg-black shadow-elegant ring-1 ring-white/5">
            {BANNERS.map((src, idx) => {
              const active = idx === i;
              return (
                <div
                  key={src}
                  className="absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    opacity: active ? 1 : 0,
                    filter: active ? "blur(0px)" : "blur(12px)",
                    zIndex: active ? 2 : 1,
                  }}
                  aria-hidden={!active}
                >
                  <img
                    src={src}
                    alt={`Course banner ${idx + 1}`}
                    loading={idx === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-contain object-center bg-black"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
                </div>
              );
            })}

            <button
              onClick={() => go(i - 1)}
              aria-label="Previous banner"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 grid h-9 w-9 sm:h-11 sm:w-11 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/15 hover:bg-gold hover:text-secondary hover:border-gold transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(i + 1)}
              aria-label="Next banner"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 grid h-9 w-9 sm:h-11 sm:w-11 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/15 hover:bg-gold hover:text-secondary hover:border-gold transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md px-3 py-1.5 border border-white/10">
              {BANNERS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => go(idx)}
                  aria-label={`Go to banner ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === i ? "w-8 bg-gold" : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseBanners;
