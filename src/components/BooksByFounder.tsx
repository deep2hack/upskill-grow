import { Star, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import bookCover from "@/assets/mind-over-markets-cover.png";

const AMAZON_URL = "https://www.amazon.in/MIND-OVER-MARKETS-PRABHJOT-SINGH/dp/9367833865";

export const BooksByFounder = () => {
  return (
    <section className="relative overflow-hidden bg-[hsl(220_22%_5%)] py-20 text-white">
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold inline-flex items-center gap-2 justify-center">
            <BookOpen className="h-4 w-4" /> Book by the Founder
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            Featured <span className="bg-gold-gradient bg-clip-text text-transparent">Bestseller</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="group relative rounded-3xl border border-gold/30 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 sm:p-12 backdrop-blur-md shadow-[0_30px_80px_-20px_hsl(var(--gold)/0.35)] transition-all duration-500 hover:border-gold/60 hover:shadow-[0_40px_100px_-20px_hsl(var(--gold)/0.5)]">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-gold/0 via-gold/0 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-gold/10 group-hover:to-primary/20" />

              <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
                <div className="relative mx-auto flex h-72 sm:h-80 items-end justify-center">
                  <div className="absolute -inset-6 rounded-full bg-gold/20 blur-3xl opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                  <img
                    src={bookCover}
                    alt="Mind Over Markets — book by Prabjot Singh"
                    loading="lazy"
                    className="relative h-full w-auto object-contain drop-shadow-2xl transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-110"
                  />
                </div>

                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-[0.65rem] uppercase tracking-wider text-gold">
                      Bestseller
                    </span>
                    <div className="flex items-center gap-1 text-gold">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span className="text-xs font-semibold">4.9</span>
                    </div>
                  </div>
                  <h3 className="mt-3 font-display text-2xl sm:text-3xl text-gold">Mind Over Markets</h3>
                  <p className="mt-1 text-sm text-white/60">by Prabjot Singh</p>
                  <p className="mt-4 text-white/75 leading-relaxed">
                    A practical, mindset-driven approach to mastering price action trading — from basics to brilliance.
                    Learn to read markets, make high-probability decisions, and trade with confidence.
                  </p>

                  <div className="mt-6 flex justify-center sm:justify-start">
                    <Button asChild variant="premium" size="lg">
                      <a href={AMAZON_URL} target="_blank" rel="noreferrer">
                        Buy on Amazon <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default BooksByFounder;
