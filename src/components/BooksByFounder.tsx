import { Star, ExternalLink, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/Reveal";
import TradingBackdrop from "@/components/TradingBackdrop";
import bookCover from "@/assets/mind-over-markets-cover.png";
import mmbCover from "@/assets/market-mastery-bible-cover.png";

const AMAZON_URL = "https://www.amazon.in/MIND-OVER-MARKETS-PRABHJOT-SINGH/dp/9367833865";
const MMB_BUY_URL = "#";

const mmbHighlights = [
  "Stock Market",
  "Crypto",
  "Forex",
  "Commodity",
  "Smart Money Concepts",
  "Price Action",
  "Psychology",
  "Trading Strategies",
];

export const BooksByFounder = () => {
  return (
    <section className="relative overflow-hidden bg-[hsl(220_30%_5%)] py-20 text-white">
      {/* Animated trading backdrop */}
      <TradingBackdrop className="opacity-40" />

      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />

      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold inline-flex items-center gap-2 justify-center">
            <BookOpen className="h-4 w-4" /> Books by the Founder
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            Featured <span className="bg-gold-gradient bg-clip-text text-transparent">Bestsellers</span>
          </h2>
          <p className="mt-3 text-white/65">
            Flagship books trusted by thousands of traders — from foundational mindset to a complete trading university.
          </p>
        </Reveal>

        {/* === FEATURED: Market Mastery Bible === */}
        <Reveal delay={100}>
          <div className="relative mx-auto mt-14 max-w-5xl">
            {/* Outer glow */}
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-gold/20 via-primary/30 to-gold/20 blur-2xl opacity-70" />

            <div className="group relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-[hsl(220_45%_8%)] via-[hsl(220_40%_6%)] to-[hsl(220_30%_4%)] p-8 sm:p-12 shadow-[0_40px_120px_-30px_hsl(var(--gold)/0.55)] backdrop-blur-md transition-all duration-500 hover:border-gold/70 hover:shadow-[0_50px_140px_-25px_hsl(var(--gold)/0.7)]">
              {/* Decorative corner shimmers */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />

              <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
                {/* Book cover with floating animation */}
                <div className="relative mx-auto flex h-[26rem] sm:h-[30rem] items-center justify-center">
                  <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-gold/30 via-primary/30 to-gold/20 blur-3xl opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                  <img
                    src={mmbCover}
                    alt="Market Mastery Bible — The Complete Trading University by Upskiller Academy"
                    loading="lazy"
                    className="relative h-full w-auto object-contain drop-shadow-[0_25px_60px_rgba(255,200,80,0.35)] animate-float transition-transform duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Details */}
                <div className="text-center lg:text-left">
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                    <Badge className="bg-gradient-to-r from-gold to-gold-deep text-secondary border-0">
                      <Sparkles className="mr-1 h-3 w-3" /> Flagship
                    </Badge>
                    <span className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-[0.65rem] uppercase tracking-wider text-gold">
                      All-in-One Bible
                    </span>
                    <div className="flex items-center gap-1 text-gold">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span className="text-xs font-semibold">5.0</span>
                    </div>
                  </div>

                  <h3 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
                    <span className="bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent">
                      Market Mastery Bible
                    </span>
                  </h3>
                  <p className="mt-2 text-sm sm:text-base uppercase tracking-[0.2em] text-white/70">
                    The Complete Trading University
                  </p>

                  <p className="mt-5 text-white/75 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    One book. Every market. Every secret. Every strategy. Your journey from learner to legend starts here —
                    a complete guide covering every aspect of modern trading.
                  </p>

                  {/* Highlights */}
                  <ul className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
                    {mmbHighlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full border border-gold/30 bg-white/[0.04] px-3 py-1 text-xs text-white/85 backdrop-blur transition-colors hover:border-gold/60 hover:bg-gold/10 hover:text-gold"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-3">
                    <Button asChild variant="premium" size="lg">
                      <a href={MMB_BUY_URL}>
                        Buy Now <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="bg-transparent text-white border-gold/40 hover:bg-gold/10 hover:text-gold hover:border-gold/70"
                    >
                      <a href={MMB_BUY_URL}>View Details</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* === Existing: Mind Over Markets === */}
        <Reveal delay={180}>
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="group relative rounded-3xl border border-gold/30 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 sm:p-12 backdrop-blur-md shadow-[0_30px_80px_-20px_hsl(var(--gold)/0.35)] transition-all duration-500 hover:border-gold/60 hover:shadow-[0_40px_100px_-20px_hsl(var(--gold)/0.5)]">
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
