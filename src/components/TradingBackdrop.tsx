import { useEffect, useRef } from "react";

/**
 * Premium animated trading-themed background:
 * - Slow scrolling candlestick chart
 * - Glowing bullish trend line
 * - Floating ticker numbers
 * Royal blue + gold palette. Canvas-based for smooth performance.
 */
export const TradingBackdrop = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Candle data — generate a long random walk
    const candleCount = isMobile ? 60 : 120;
    const candleWidth = isMobile ? 10 : 14;
    const gap = 4;
    type Candle = { o: number; c: number; h: number; l: number };
    const candles: Candle[] = [];
    let price = 100;
    for (let i = 0; i < candleCount * 2; i++) {
      const drift = (Math.random() - 0.45) * 4;
      const o = price;
      const c = price + drift;
      const h = Math.max(o, c) + Math.random() * 2;
      const l = Math.min(o, c) - Math.random() * 2;
      candles.push({ o, c, h, l });
      price = c;
    }

    // Floating tickers
    const tickers = ["NIFTY 22,540 ▲", "BANKNIFTY 48,210 ▲", "RELIANCE 2,945", "TCS 4,120 ▼", "INFY 1,870 ▲", "HDFC 1,632", "EUR/USD 1.0824", "BTC 67,340 ▲", "GOLD 2,345 ▲", "SENSEX 74,210"];
    type Tick = { text: string; x: number; y: number; vx: number; alpha: number };
    const ticks: Tick[] = tickers.map((t, i) => ({
      text: t,
      x: Math.random() * width,
      y: 40 + ((i * 67) % Math.max(height - 80, 200)),
      vx: 0.15 + Math.random() * 0.25,
      alpha: 0.18 + Math.random() * 0.22,
    }));

    let offset = 0;
    let lastT = performance.now();

    const draw = (t: number) => {
      const dt = Math.min(64, t - lastT);
      lastT = t;
      ctx.clearRect(0, 0, width, height);

      // Background grid
      ctx.strokeStyle = "rgba(212, 169, 58, 0.06)";
      ctx.lineWidth = 1;
      const gridY = 60;
      for (let y = 0; y < height; y += gridY) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      const gridX = 80;
      const gridOffset = (offset * 0.3) % gridX;
      for (let x = -gridOffset; x < width; x += gridX) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Compute price range for visible candles
      const step = candleWidth + gap;
      offset += (reduce ? 0 : dt * 0.025);
      const startIdx = Math.floor(offset / step) % candles.length;
      const startPx = -((offset % step));

      let min = Infinity;
      let max = -Infinity;
      const visible = Math.ceil(width / step) + 2;
      for (let i = 0; i < visible; i++) {
        const c = candles[(startIdx + i) % candles.length];
        if (c.l < min) min = c.l;
        if (c.h > max) max = c.h;
      }
      const pad = (max - min) * 0.15 || 1;
      min -= pad;
      max += pad;
      const chartTop = height * 0.2;
      const chartH = height * 0.6;
      const yFor = (p: number) => chartTop + (1 - (p - min) / (max - min)) * chartH;

      // Trend line (glowing)
      ctx.save();
      ctx.shadowBlur = 18;
      ctx.shadowColor = "rgba(233, 198, 107, 0.7)";
      ctx.strokeStyle = "rgba(233, 198, 107, 0.55)";
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      for (let i = 0; i < visible; i++) {
        const c = candles[(startIdx + i) % candles.length];
        const x = startPx + i * step + candleWidth / 2;
        const y = yFor((c.o + c.c) / 2);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      // Candles
      for (let i = 0; i < visible; i++) {
        const c = candles[(startIdx + i) % candles.length];
        const x = startPx + i * step;
        const cx = x + candleWidth / 2;
        const bullish = c.c >= c.o;
        const color = bullish ? "rgba(76, 217, 123, 0.55)" : "rgba(239, 92, 92, 0.55)";
        const wickColor = bullish ? "rgba(76, 217, 123, 0.35)" : "rgba(239, 92, 92, 0.35)";

        // Wick
        ctx.strokeStyle = wickColor;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx, yFor(c.h));
        ctx.lineTo(cx, yFor(c.l));
        ctx.stroke();

        // Body
        const yO = yFor(c.o);
        const yC = yFor(c.c);
        const top = Math.min(yO, yC);
        const bh = Math.max(2, Math.abs(yC - yO));
        ctx.fillStyle = color;
        ctx.fillRect(x, top, candleWidth, bh);
      }

      // Floating tickers
      ctx.font = "600 11px ui-monospace, SFMono-Regular, Menlo, monospace";
      for (const tk of ticks) {
        if (!reduce) tk.x -= tk.vx * (dt / 16);
        if (tk.x < -160) {
          tk.x = width + Math.random() * 200;
          tk.y = 40 + Math.random() * Math.max(height - 80, 200);
        }
        ctx.fillStyle = `rgba(233, 198, 107, ${tk.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(59, 108, 243, 0.4)";
        ctx.fillText(tk.text, tk.x, tk.y);
        ctx.shadowBlur = 0;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <canvas ref={canvasRef} className="h-full w-full" />
      {/* Vignette to keep text readable */}
      <div className="absolute inset-0 [background:radial-gradient(60%_60%_at_50%_50%,transparent,hsl(var(--background)/0.35))]" />
    </div>
  );
};

export default TradingBackdrop;
