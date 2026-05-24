import { useEffect, useRef } from "react";

/**
 * Premium animated intraday-trading background:
 * - Fast scrolling candlesticks with strong glow
 * - Glowing EMA / trend wave
 * - Animated support & resistance lines
 * - Buy / Sell signal flashes
 * - Momentum spikes & glowing particles
 * - Floating tickers in royal blue & gold
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

    // === Candles (intraday — sharper drifts) ===
    const candleCount = isMobile ? 70 : 140;
    const candleWidth = isMobile ? 9 : 12;
    const gap = 3;
    type Candle = { o: number; c: number; h: number; l: number; signal?: "buy" | "sell" };
    const candles: Candle[] = [];
    let price = 100;
    for (let i = 0; i < candleCount * 2; i++) {
      // Inject occasional momentum spikes
      const spike = Math.random() < 0.08 ? (Math.random() < 0.5 ? -1 : 1) * (3 + Math.random() * 5) : 0;
      const drift = (Math.random() - 0.48) * 4 + spike;
      const o = price;
      const c = price + drift;
      const h = Math.max(o, c) + Math.random() * 2.5;
      const l = Math.min(o, c) - Math.random() * 2.5;
      const sig = Math.abs(spike) > 4 ? (spike > 0 ? "buy" : "sell") : undefined;
      candles.push({ o, c, h, l, signal: sig });
      price = c;
    }

    // === Floating tickers ===
    const tickers = [
      "NIFTY 22,540 ▲", "BANKNIFTY 48,210 ▲", "RELIANCE 2,945 ▲",
      "TCS 4,120 ▼", "INFY 1,870 ▲", "HDFC 1,632 ▼",
      "EUR/USD 1.0824 ▲", "BTC 67,340 ▲", "GOLD 2,345 ▲",
      "SENSEX 74,210 ▲", "CRUDE 78.45 ▼", "SILVER 29.8 ▲",
    ];
    type Tick = { text: string; x: number; y: number; vx: number; alpha: number; color: string };
    const tickColors = [
      "rgba(255, 200, 80, ALPHA)",   // gold
      "rgba(96, 165, 250, ALPHA)",   // neon blue
      "rgba(74, 222, 128, ALPHA)",   // green
      "rgba(248, 113, 113, ALPHA)",  // red
      "rgba(251, 146, 60, ALPHA)",   // orange
    ];
    const ticks: Tick[] = tickers.map((t, i) => ({
      text: t,
      x: Math.random() * width,
      y: 40 + ((i * 71) % Math.max(height - 80, 200)),
      vx: 0.3 + Math.random() * 0.5,
      alpha: 0.45 + Math.random() * 0.35,
      color: tickColors[i % tickColors.length],
    }));

    // === Glowing particles ===
    type Particle = { x: number; y: number; vx: number; vy: number; r: number; hue: string; life: number };
    const particles: Particle[] = [];
    const particleHues = [
      "rgba(255, 200, 80, A)", "rgba(96, 165, 250, A)",
      "rgba(74, 222, 128, A)", "rgba(248, 113, 113, A)",
    ];
    const spawnParticle = () => {
      particles.push({
        x: Math.random() * width,
        y: height + 10,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -(0.3 + Math.random() * 0.8),
        r: 1 + Math.random() * 2.5,
        hue: particleHues[Math.floor(Math.random() * particleHues.length)],
        life: 1,
      });
    };
    for (let i = 0; i < (isMobile ? 18 : 40); i++) {
      spawnParticle();
      particles[particles.length - 1].y = Math.random() * height;
    }

    let offset = 0;
    let lastT = performance.now();
    let frame = 0;

    const draw = (t: number) => {
      const dt = Math.min(64, t - lastT);
      lastT = t;
      frame++;
      ctx.clearRect(0, 0, width, height);

      // === Grid (gold + blue tint) ===
      ctx.lineWidth = 1;
      const gridY = 60;
      ctx.strokeStyle = "rgba(212, 169, 58, 0.10)";
      for (let y = 0; y < height; y += gridY) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      const gridX = 80;
      const gridOffset = (offset * 0.4) % gridX;
      ctx.strokeStyle = "rgba(96, 165, 250, 0.08)";
      for (let x = -gridOffset; x < width; x += gridX) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // === Compute visible price range ===
      const step = candleWidth + gap;
      offset += (reduce ? 0 : dt * 0.06); // faster intraday feel
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
      const chartTop = height * 0.18;
      const chartH = height * 0.64;
      const yFor = (p: number) => chartTop + (1 - (p - min) / (max - min)) * chartH;

      // === Support & resistance lines (animated dashed) ===
      const supportP = min + (max - min) * 0.22;
      const resistP = min + (max - min) * 0.78;
      ctx.save();
      ctx.setLineDash([8, 6]);
      ctx.lineDashOffset = -(offset * 0.5);
      ctx.lineWidth = 1.2;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(74, 222, 128, 0.6)";
      ctx.strokeStyle = "rgba(74, 222, 128, 0.5)";
      ctx.beginPath(); ctx.moveTo(0, yFor(supportP)); ctx.lineTo(width, yFor(supportP)); ctx.stroke();
      ctx.shadowColor = "rgba(248, 113, 113, 0.6)";
      ctx.strokeStyle = "rgba(248, 113, 113, 0.5)";
      ctx.beginPath(); ctx.moveTo(0, yFor(resistP)); ctx.lineTo(width, yFor(resistP)); ctx.stroke();
      ctx.restore();

      // === EMA / trend wave (glowing gold) ===
      ctx.save();
      ctx.shadowBlur = 24;
      ctx.shadowColor = "rgba(255, 200, 80, 0.9)";
      ctx.strokeStyle = "rgba(255, 210, 100, 0.85)";
      ctx.lineWidth = 2.2;
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

      // === Secondary neon-blue wave (slight offset for parallax) ===
      ctx.save();
      ctx.shadowBlur = 18;
      ctx.shadowColor = "rgba(96, 165, 250, 0.8)";
      ctx.strokeStyle = "rgba(96, 165, 250, 0.55)";
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      for (let i = 0; i < visible; i++) {
        const c = candles[(startIdx + i) % candles.length];
        const x = startPx + i * step + candleWidth / 2;
        const y = yFor((c.h + c.l) / 2) + Math.sin((i + frame * 0.05) * 0.3) * 4;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      // === Candles (brighter) ===
      for (let i = 0; i < visible; i++) {
        const c = candles[(startIdx + i) % candles.length];
        const x = startPx + i * step;
        const cx = x + candleWidth / 2;
        const bullish = c.c >= c.o;
        const color = bullish ? "rgba(74, 222, 128, 0.92)" : "rgba(248, 113, 113, 0.92)";
        const wickColor = bullish ? "rgba(74, 222, 128, 0.7)" : "rgba(248, 113, 113, 0.7)";

        ctx.save();
        ctx.shadowBlur = 8;
        ctx.shadowColor = bullish ? "rgba(74, 222, 128, 0.7)" : "rgba(248, 113, 113, 0.7)";

        ctx.strokeStyle = wickColor;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(cx, yFor(c.h));
        ctx.lineTo(cx, yFor(c.l));
        ctx.stroke();

        const yO = yFor(c.o);
        const yC = yFor(c.c);
        const top = Math.min(yO, yC);
        const bh = Math.max(2, Math.abs(yC - yO));
        ctx.fillStyle = color;
        ctx.fillRect(x, top, candleWidth, bh);
        ctx.restore();

        // === Signal flashes (buy/sell) ===
        if (c.signal) {
          const pulse = 0.5 + 0.5 * Math.sin(frame * 0.15 + i);
          const sigColor = c.signal === "buy" ? "rgba(74, 222, 128," : "rgba(248, 113, 113,";
          ctx.save();
          ctx.shadowBlur = 20;
          ctx.shadowColor = `${sigColor} ${0.7 + pulse * 0.3})`;
          ctx.fillStyle = `${sigColor} ${0.45 + pulse * 0.4})`;
          ctx.beginPath();
          const sy = c.signal === "buy" ? yFor(c.l) + 12 : yFor(c.h) - 12;
          ctx.arc(cx, sy, 3 + pulse * 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      // === Glowing particles ===
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        if (!reduce) {
          p.x += p.vx * (dt / 16);
          p.y += p.vy * (dt / 16);
        }
        p.life -= 0.0025 * (dt / 16);
        if (p.life <= 0 || p.y < -10) {
          particles.splice(i, 1);
          if (particles.length < (isMobile ? 18 : 40)) spawnParticle();
          continue;
        }
        const a = Math.max(0, Math.min(1, p.life)) * 0.7;
        ctx.save();
        ctx.shadowBlur = 12;
        const col = p.hue.replace("A", String(a));
        ctx.shadowColor = col;
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      if (particles.length < (isMobile ? 18 : 40) && Math.random() < 0.15) spawnParticle();

      // === Floating tickers (colorful) ===
      ctx.font = "700 12px ui-monospace, SFMono-Regular, Menlo, monospace";
      for (const tk of ticks) {
        if (!reduce) tk.x -= tk.vx * (dt / 16);
        if (tk.x < -180) {
          tk.x = width + Math.random() * 200;
          tk.y = 40 + Math.random() * Math.max(height - 80, 200);
        }
        ctx.save();
        ctx.shadowBlur = 10;
        const col = tk.color.replace("ALPHA", String(tk.alpha));
        ctx.shadowColor = col;
        ctx.fillStyle = col;
        ctx.fillText(tk.text, tk.x, tk.y);
        ctx.restore();
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
      {/* Subtle vignette to keep text readable */}
      <div className="absolute inset-0 [background:radial-gradient(70%_70%_at_50%_50%,transparent,hsl(var(--background)/0.45))]" />
    </div>
  );
};

export default TradingBackdrop;
