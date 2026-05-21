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
const INTERVAL = 5000;

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
      className="relative w-full bg-secondary py-8 sm:py-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Featured course banners"
    >
      <div className="container relative">
        <div className="mx-auto max-w-6xl text-center mb-5 sm:mb-6">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Featured Programs</p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl text-secondary-foreground">
            Explore our <span className="text-gold">mastery</span> programs
          </h2>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="relative aspect-[21/9] sm:aspect-[24/9] lg:aspect-[24/8] w-full overflow-hidden rounded-2xl border border-gold/20 bg-black shadow-elegant ring-1 ring-white/5">
            {BANNERS.map((src, idx) => {
              const active = idx === i;
              return (
                <div
                  key={src}
                  className="absolute inset-0 transition-[opacity,filter] duration-1000 ease-out will-change-[opacity]"
                  style={{
                    opacity: active ? 1 : 0,
                    filter: active ? "blur(0px)" : "blur(8px)",
                    zIndex: active ? 2 : 1,
                  }}
                  aria-hidden={!active}
                >
                  <img
                    src={src}
                    alt={`Course banner ${idx + 1}`}
                    loading={idx === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
                </div>
              );
            })}

            <button
              onClick={() => go(i - 1)}
              aria-label="Previous banner"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full bg-black/40 text-white border border-white/15 hover:bg-gold hover:text-secondary hover:border-gold transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(i + 1)}
              aria-label="Next banner"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full bg-black/40 text-white border border-white/15 hover:bg-gold hover:text-secondary hover:border-gold transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute bottom-3 sm:bottom-4 left-1/2 z-10 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/40 px-3 py-1.5 border border-white/10">
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
