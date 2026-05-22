import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import b1 from "@/assets/banners/banner-1.png";
import b2 from "@/assets/banners/banner-2.png";
import b3 from "@/assets/banners/banner-3.png";
import b4 from "@/assets/banners/banner-4.png";
import b5 from "@/assets/banners/banner-5.png";
import b6 from "@/assets/banners/banner-6.png";
import b7 from "@/assets/banners/banner-7.png";

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
      className="relative w-full bg-secondary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Featured course banners"
    >
      <div className="relative w-full overflow-hidden aspect-[16/7] sm:aspect-[16/6] lg:aspect-[21/8] max-h-[78vh]">
        {/* Sliding track */}
        <div
          className="flex h-full w-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {BANNERS.map((src, idx) => (
            <div key={src} className="relative h-full w-full flex-shrink-0">
              <img
                src={src}
                alt={`Course banner ${idx + 1}`}
                loading={idx === 0 ? "eager" : "lazy"}
                draggable={false}
                className="h-full w-full object-cover object-center select-none"
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={() => go(i - 1)}
          aria-label="Previous banner"
          className="absolute left-3 sm:left-5 top-1/2 z-10 -translate-y-1/2 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/15 hover:bg-gold hover:text-secondary hover:border-gold transition-all"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => go(i + 1)}
          aria-label="Next banner"
          className="absolute right-3 sm:right-5 top-1/2 z-10 -translate-y-1/2 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/15 hover:bg-gold hover:text-secondary hover:border-gold transition-all"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 z-10 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/40 backdrop-blur-md px-3 py-1.5 border border-white/10">
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
    </section>
  );
};

export default CourseBanners;
