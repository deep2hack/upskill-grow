import { useEffect, useState, useRef } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

type Tick = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  pct: number;
};

const SEED: Omit<Tick, "change" | "pct">[] = [
  { symbol: "NIFTY 50", name: "NSE", price: 24820.5 },
  { symbol: "SENSEX", name: "BSE", price: 81245.3 },
  { symbol: "BANKNIFTY", name: "NSE", price: 54320.75 },
  { symbol: "FINNIFTY", name: "NSE", price: 25640.2 },
  { symbol: "RELIANCE", name: "NSE", price: 2945.6 },
  { symbol: "TCS", name: "NSE", price: 4120.4 },
  { symbol: "HDFCBANK", name: "NSE", price: 1678.25 },
  { symbol: "INFY", name: "NSE", price: 1845.9 },
  { symbol: "ICICIBANK", name: "NSE", price: 1265.5 },
  { symbol: "SBIN", name: "NSE", price: 825.7 },
  { symbol: "BHARTIARTL", name: "NSE", price: 1582.3 },
  { symbol: "LT", name: "NSE", price: 3690.85 },
  { symbol: "ITC", name: "NSE", price: 478.4 },
  { symbol: "HINDUNILVR", name: "NSE", price: 2615.6 },
  { symbol: "AXISBANK", name: "NSE", price: 1198.2 },
  { symbol: "KOTAKBANK", name: "NSE", price: 1755.0 },
  { symbol: "MARUTI", name: "NSE", price: 12860.5 },
  { symbol: "ADANIENT", name: "NSE", price: 2480.1 },
];

const formatPrice = (n: number) =>
  n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const StockTicker = () => {
  const baseRef = useRef(SEED.map((s) => s.price));
  const [ticks, setTicks] = useState<Tick[]>(() =>
    SEED.map((s) => ({ ...s, change: 0, pct: 0 }))
  );

  useEffect(() => {
    const update = () => {
      setTicks((prev) =>
        prev.map((t, i) => {
          const base = baseRef.current[i];
          // small random walk
          const drift = (Math.random() - 0.5) * base * 0.0015;
          const newPrice = Math.max(0.01, t.price + drift);
          const change = newPrice - base;
          const pct = (change / base) * 100;
          return { ...t, price: newPrice, change, pct };
        })
      );
    };
    update();
    const id = setInterval(update, 2000);
    return () => clearInterval(id);
  }, []);

  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center gap-8 pr-8">
      {ticks.map((t, i) => {
        const up = t.change >= 0;
        return (
          <div key={`${key}-${i}`} className="flex items-center gap-2 text-sm whitespace-nowrap">
            <span className="font-semibold text-white tracking-wide">{t.symbol}</span>
            <span className="text-white/90 tabular-nums">{formatPrice(t.price)}</span>
            <span
              className={`inline-flex items-center gap-0.5 tabular-nums font-medium ${
                up ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {up ? "+" : ""}
              {formatPrice(t.change)} ({up ? "+" : ""}
              {t.pct.toFixed(2)}%)
            </span>
            <span className="text-white/20">|</span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-black">
      <div className="absolute left-0 top-0 z-10 hidden h-full items-center gap-2 bg-gradient-to-r from-black via-black/95 to-transparent px-4 sm:flex">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">Live Market</span>
      </div>

      <div className="flex py-2.5 ticker-track">
        {row("a")}
        {row("b")}
      </div>

      <p className="sr-only">Indicative live market prices for NIFTY, SENSEX, BANKNIFTY and major Indian stocks.</p>
    </div>
  );
};

export default StockTicker;
