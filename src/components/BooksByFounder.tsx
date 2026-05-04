import { Star, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import bookMind from "@/assets/mind-over-markets-book.png";
import bookTrading from "@/assets/book-trading-mastery.png";
import bookWealth from "@/assets/book-wealth-revolution.png";

const books = [
  {
    title: "Mind Over Markets",
    cover: bookMind,
    desc: "A trader's guide to mastering psychology, discipline and decision-making in volatile markets.",
    rating: 4.9,
    highlight: "Bestseller",
  },
  {
    title: "Trading Mastery",
    cover: bookTrading,
    desc: "Frameworks, setups and risk models distilled from 15+ years of professional trading.",
    rating: 4.8,
    highlight: "New Release",
  },
  {
    title: "Wealth Revolution",
    cover: bookWealth,
    desc: "Build long-term wealth using value investing, compounding and portfolio architecture.",
    rating: 4.7,
    highlight: "Editor's Pick",
  },
];

export const BooksByFounder = () => {
  return (
    <section className="relative overflow-hidden bg-[hsl(220_22%_5%)] py-20 text-white">
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold inline-flex items-center gap-2 justify-center">
            <BookOpen className="h-4 w-4" /> Books by the Founder
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            Wisdom in <span className="bg-gold-gradient bg-clip-text text-transparent">Print</span>
          </h2>
          <p className="mt-4 text-white/70">
            Three powerful reads from Prabjot Singh — distilling decades of market experience into actionable insights.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((b, i) => (
            <Reveal key={b.title} delay={i * 140}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_30px_60px_-20px_hsl(var(--gold)/0.4)]">
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-gold/0 via-gold/0 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-gold/10 group-hover:to-primary/20" />

                <div className="relative mx-auto flex h-64 items-end justify-center">
                  <div className="absolute bottom-0 h-3 w-32 rounded-full bg-black/60 blur-md transition-all duration-500 group-hover:w-40 group-hover:bg-gold/40" />
                  <img
                    src={b.cover}
                    alt={`${b.title} book cover by Prabjot Singh`}
                    width={512}
                    height={768}
                    loading="lazy"
                    className="relative h-full w-auto object-contain drop-shadow-2xl transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-110"
                  />
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-[0.65rem] uppercase tracking-wider text-gold">
                    {b.highlight}
                  </span>
                  <div className="flex items-center gap-1 text-gold">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <span className="text-xs font-semibold">{b.rating}</span>
                  </div>
                </div>

                <h3 className="mt-3 font-display text-xl text-gold">{b.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{b.desc}</p>

                <div className="mt-5 flex gap-2">
                  <Button asChild variant="premium" size="sm" className="flex-1">
                    <a href={buildWhatsAppUrl(`I'd like details about the book: ${b.title}`)} target="_blank" rel="noreferrer">
                      View Details
                    </a>
                  </Button>
                  <Button asChild variant="outlineGold" size="sm" className="flex-1 text-white border-gold/40 hover:text-white">
                    <a href={buildWhatsAppUrl(`I'd like to buy: ${b.title}`)} target="_blank" rel="noreferrer">
                      Buy Now <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksByFounder;
