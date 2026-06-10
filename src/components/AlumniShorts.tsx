import { useRef } from "react";
import { ChevronLeft, ChevronRight, Trophy, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import YouTubeShort from "@/components/YouTubeShort";

const ALUMNI = [
  { id: "-gqcXV8zH8s", t: "Placement Alumni Success Story 1" },
  { id: "ARv7--onbvA", t: "Alumni Placement Success Story 2" },
  { id: "PckDc1bjtx8", t: "Placement Alumni Success Story 3" },
  { id: "5A6f1SgnBdc", t: "Placement Alumni Success Story 4" },
  { id: "g78KnMUlye4", t: "Kolkata Alumni Success Story" },
];

const AlumniShorts = ({ layout = "row" }: { layout?: "row" | "grid" }) => {
  const scroller = useRef<HTMLDivElement | null>(null);
  const scroll = (dir: 1 | -1) => {
    if (!scroller.current) return;
    scroller.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[hsl(222_85%_5%)] py-20 text-primary-foreground">
      {/* premium finance backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,hsl(43_95%_55%/0.18),transparent_55%),radial-gradient(circle_at_90%_85%,hsl(222_75%_45%/0.28),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(hsl(43_95%_55%)_1px,transparent_1px),linear-gradient(90deg,hsl(43_95%_55%)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            <Trophy className="h-3 w-3" /> Placement Alumni Testimonials
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
            Our <span className="bg-gold-gradient bg-clip-text text-transparent">Successful Placement Alumni</span>
          </h2>
          <p className="mt-4 text-primary-foreground/75">
            Hear directly from our students who transformed their careers through Upskiller Academy & Magnum Educorporates.
          </p>
          <p className="mt-3 text-sm text-primary-foreground/60">
            Real students. Real careers. Real success stories. Explore how our alumni secured opportunities in leading companies through skill-focused training, live projects, and placement support.
          </p>
        </Reveal>

        {layout === "grid" ? (
          <div className="mt-12 grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ALUMNI.map((a, i) => (
              <Reveal key={a.id} delay={i * 90}>
                <div className="flex flex-col items-center">
                  <YouTubeShort videoId={a.id} title={a.t} />
                  <div className="mt-3 text-center">
                    <p className="font-display text-sm text-white/90">{a.t}</p>
                    <p className="mt-1 inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-gold/80">
                      <Sparkles className="h-3 w-3" /> Verified Placement
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="relative mt-12">
            {/* arrows */}
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="absolute -left-2 top-1/2 z-10 hidden -translate-y-1/2 md:grid h-11 w-11 place-items-center rounded-full bg-black/70 text-white ring-1 ring-gold/40 hover:bg-black hover:ring-gold transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 md:grid h-11 w-11 place-items-center rounded-full bg-black/70 text-white ring-1 ring-gold/40 hover:bg-black hover:ring-gold transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div
              ref={scroller}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {ALUMNI.map((a, i) => (
                <Reveal key={a.id} delay={i * 90} className="snap-center">
                  <div className="flex flex-col items-center">
                    <YouTubeShort videoId={a.id} title={a.t} />
                    <div className="mt-3 text-center">
                      <p className="font-display text-sm text-white/90">{a.t}</p>
                      <p className="mt-1 inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-gold/80">
                        <Sparkles className="h-3 w-3" /> Verified Placement
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AlumniShorts;
