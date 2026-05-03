import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, Minus, Lightbulb, Activity, Star } from "lucide-react";
import Reveal from "@/components/Reveal";

type Sentiment = "Bullish" | "Bearish" | "Neutral";

const STOCKS = [
  { symbol: "RELIANCE", name: "Reliance Industries", sector: "Energy" },
  { symbol: "TCS", name: "Tata Consultancy Services", sector: "IT" },
  { symbol: "HDFCBANK", name: "HDFC Bank", sector: "Banking" },
  { symbol: "INFY", name: "Infosys", sector: "IT" },
  { symbol: "BHARTIARTL", name: "Bharti Airtel", sector: "Telecom" },
  { symbol: "LT", name: "Larsen & Toubro", sector: "Infra" },
  { symbol: "ICICIBANK", name: "ICICI Bank", sector: "Banking" },
];

const TIPS = [
  "Trade the plan, not the P&L. Discipline outperforms prediction.",
  "Position size before entry — risk first, reward second.",
  "Wait for confirmation. The best trades feel obvious in hindsight.",
  "Sector rotation > stock picking in choppy markets.",
  "Cut losers fast, let winners breathe. Asymmetry creates edge.",
  "Volatility is opportunity for the prepared, danger for the reactive.",
];

const SENTIMENTS: { label: Sentiment; insight: string }[] = [
  { label: "Bullish", insight: "Broad participation; benchmarks holding above key MAs." },
  { label: "Bearish", insight: "Risk-off tone; defensives outperforming cyclicals." },
  { label: "Neutral", insight: "Range-bound action; await breakout before sizing up." },
];

const pickByDay = <T,>(arr: T[]) => arr[Math.floor(Date.now() / 86400000) % arr.length];

const MarketInsights = () => {
  const [stock, setStock] = useState(() => pickByDay(STOCKS));
  const [tip, setTip] = useState(() => pickByDay(TIPS));
  const [sent, setSent] = useState(() => pickByDay(SENTIMENTS));
  const [price, setPrice] = useState(() => 1500 + Math.random() * 2500);
  const [pct, setPct] = useState(() => (Math.random() - 0.4) * 3);

  useEffect(() => {
    const id = setInterval(() => {
      setPrice((p) => Math.max(10, p + (Math.random() - 0.5) * p * 0.002));
      setPct((c) => c + (Math.random() - 0.5) * 0.05);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  // periodic rotation every 30s for liveliness
  useEffect(() => {
    const id = setInterval(() => {
      setStock(STOCKS[Math.floor(Math.random() * STOCKS.length)]);
      setTip(TIPS[Math.floor(Math.random() * TIPS.length)]);
      setSent(SENTIMENTS[Math.floor(Math.random() * SENTIMENTS.length)]);
    }, 30000);
    return () => clearInterval(id);
  }, []);

  const up = pct >= 0;

  const sentColor =
    sent.label === "Bullish"
      ? "text-emerald-400 border-emerald-400/30 bg-emerald-400/10"
      : sent.label === "Bearish"
      ? "text-red-400 border-red-400/30 bg-red-400/10"
      : "text-gold border-gold/30 bg-gold/10";

  const SentIcon = sent.label === "Bullish" ? TrendingUp : sent.label === "Bearish" ? TrendingDown : Minus;

  return (
    <section className="relative bg-[hsl(220_22%_5%)] py-16 text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_0%,hsl(44_95%_50%/0.12),transparent_60%)]" />
      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Live Market Insights</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Stay <span className="bg-gold-gradient bg-clip-text text-transparent">ahead of the tape</span>
          </h2>
          <p className="mt-3 text-white/60 text-sm">Daily expert reads, sentiment & a stock to watch — refreshed in real time.</p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {/* Stock of the Day */}
          <Reveal delay={80}>
            <div className="group h-full rounded-2xl border border-gold/20 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-gold">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold">
                <Star className="h-3.5 w-3.5" /> Stock of the Day
              </div>
              <h3 className="mt-3 font-display text-2xl">{stock.symbol}</h3>
              <p className="text-xs text-white/50">{stock.name} · {stock.sector}</p>
              <div className="mt-5 flex items-end justify-between">
                <p className="font-display text-3xl text-white tabular-nums">
                  ₹{price.toLocaleString("en-IN", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                </p>
                <span
                  className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-semibold ${
                    up ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-400" : "border-red-400/30 bg-red-400/10 text-red-400"
                  }`}
                >
                  {up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {up ? "+" : ""}{pct.toFixed(2)}%
                </span>
              </div>
            </div>
          </Reveal>

          {/* Market Sentiment */}
          <Reveal delay={160}>
            <div className="group h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold">
                <Activity className="h-3.5 w-3.5" /> Market Sentiment
              </div>
              <div className={`mt-3 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold ${sentColor}`}>
                <SentIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
                {sent.label}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/75">{sent.insight}</p>
              <div className="mt-5 flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className={`h-1.5 flex-1 rounded-full ${
                      sent.label === "Bullish"
                        ? i <= 4 ? "bg-emerald-400" : "bg-white/10"
                        : sent.label === "Bearish"
                        ? i <= 4 ? "bg-red-400" : "bg-white/10"
                        : i === 3 ? "bg-gold" : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          {/* Expert Tip */}
          <Reveal delay={240}>
            <div className="group h-full rounded-2xl border border-white/10 bg-gradient-to-br from-gold/[0.08] to-white/[0.01] p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-gold">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold">
                <Lightbulb className="h-3.5 w-3.5 transition-transform group-hover:scale-110 group-hover:rotate-6" /> Expert Tip
              </div>
              <p className="mt-4 font-display text-lg leading-snug text-white">"{tip}"</p>
              <p className="mt-4 text-xs uppercase tracking-wider text-white/50">— Upskiller Mentors Desk</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
