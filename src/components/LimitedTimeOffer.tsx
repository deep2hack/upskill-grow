import { useEffect, useState } from "react";
import { Flame, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <div className="relative grid h-16 w-16 sm:h-20 sm:w-20 place-items-center rounded-xl border border-gold/40 bg-black/60 backdrop-blur-md shadow-[0_0_30px_-5px_hsl(var(--gold)/0.5)]">
      <div className="absolute inset-0 rounded-xl bg-gold/5 animate-pulse" />
      <span className="relative font-display text-2xl sm:text-3xl font-bold text-gold tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="mt-2 text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] text-white/60">{label}</span>
  </div>
);

export const LimitedTimeOffer = () => {
  // Offer ends 7 days from now (rolling)
  const target = (() => {
    const t = new Date();
    t.setDate(t.getDate() + 7);
    t.setHours(23, 59, 59, 0);
    return t.getTime();
  })();
  const { days, hours, mins, secs } = useCountdown(target);

  return (
    <section className="relative overflow-hidden bg-[hsl(220_22%_4%)] py-16 text-white">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_50%,hsl(var(--gold)/0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute -inset-1 opacity-30 [background:linear-gradient(90deg,transparent,hsl(var(--gold)/0.4),transparent)] blur-2xl animate-pulse" />

      <div className="container relative">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-gold/30 bg-gradient-to-br from-black/70 via-black/50 to-black/70 p-8 sm:p-10 text-center backdrop-blur-md shadow-[0_30px_80px_-20px_hsl(var(--gold)/0.45)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-gold">
              <Flame className="h-3.5 w-3.5 animate-pulse" /> Limited Time Offer
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
              Get <span className="bg-gold-gradient bg-clip-text text-transparent">50% OFF</span> on All Programs
            </h2>
            <p className="mt-3 text-white/70">
              Hurry! Offer ends soon — secure your seat in the next live cohort at half the price.
            </p>

            <div className="mt-8 flex justify-center gap-3 sm:gap-5">
              <TimeBox value={days} label="Days" />
              <TimeBox value={hours} label="Hours" />
              <TimeBox value={mins} label="Minutes" />
              <TimeBox value={secs} label="Seconds" />
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="premium" size="lg">
                <a href={buildWhatsAppUrl("I'd like to claim the 50% limited time offer.")} target="_blank" rel="noreferrer">
                  Enroll Now <ArrowRight className="ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default LimitedTimeOffer;
