import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const useCountdown = (target: number) => {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const totalSec = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSec / 86400),
    hours: Math.floor((totalSec % 86400) / 3600),
    mins: Math.floor((totalSec % 3600) / 60),
    secs: totalSec % 60,
  };
};

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-full aspect-square flex items-center justify-center rounded-xl bg-neutral-800/50 border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
      <span className="font-display text-2xl md:text-4xl font-bold text-gold tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="mt-2 text-[10px] md:text-xs uppercase tracking-widest text-neutral-500 font-medium">
      {label}
    </span>
  </div>
);

export const LimitedTimeOffer = () => {
  const target = (() => {
    const t = new Date();
    t.setDate(t.getDate() + 7);
    t.setHours(23, 59, 59, 0);
    return t.getTime();
  })();
  const { days, hours, mins, secs } = useCountdown(target);

  return (
    <section className="relative overflow-hidden bg-[#050505] px-4 py-20 text-white">
      <div className="container">
        <Reveal>
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Ambient radial gold glow behind the card */}
            <div className="pointer-events-none absolute -inset-16 rounded-full bg-gold/15 blur-[120px] opacity-70" />
            <div className="pointer-events-none absolute inset-0 rounded-full bg-gold/10 blur-3xl opacity-60" />

            {/* Main Offer Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900 to-black p-8 md:p-14 text-center shadow-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-xs font-semibold uppercase tracking-widest text-gold mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
                </span>
                Limited Time Offer
              </div>

              <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
                Get{" "}
                <span className="bg-gradient-to-r from-yellow-200 via-gold to-yellow-200 bg-clip-text text-transparent drop-shadow-sm">
                  50% OFF
                </span>{" "}
                on All Programs
              </h2>

              <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                Hurry! Offer ends soon — secure your seat in the next live cohort at half the price.
              </p>

              {/* Countdown */}
              <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-lg mx-auto mb-12">
                <TimeBox value={days} label="Days" />
                <TimeBox value={hours} label="Hours" />
                <TimeBox value={mins} label="Minutes" />
                <TimeBox value={secs} label="Seconds" />
              </div>

              {/* CTA */}
              <a
                href={buildWhatsAppUrl("I'd like to claim the 50% limited time offer.")}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full text-black font-bold text-lg shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.55)] transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Corner decorations */}
              <div className="pointer-events-none absolute top-0 right-0 p-4 opacity-10">
                <div className="w-24 h-24 border-r-2 border-t-2 border-gold rounded-tr-3xl" />
              </div>
              <div className="pointer-events-none absolute bottom-0 left-0 p-4 opacity-10">
                <div className="w-24 h-24 border-l-2 border-b-2 border-gold rounded-bl-3xl" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default LimitedTimeOffer;
