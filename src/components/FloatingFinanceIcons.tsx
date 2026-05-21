import { TrendingUp, DollarSign, LineChart, CandlestickChart, PieChart, Bitcoin, Banknote, BarChart3, Coins, Percent } from "lucide-react";

type Item = {
  Icon: React.ComponentType<{ className?: string }>;
  top: string;
  left: string;
  size: string;
  color: string;
  delay: string;
  duration: string;
  anim: string;
};

const ITEMS: Item[] = [
  { Icon: TrendingUp,       top: "8%",  left: "6%",  size: "h-20 w-20 sm:h-28 sm:w-28", color: "text-gold",    delay: "0s",   duration: "14s", anim: "drift-a" },
  { Icon: CandlestickChart, top: "22%", left: "88%", size: "h-24 w-24 sm:h-32 sm:w-32", color: "text-primary-glow", delay: "1.5s", duration: "17s", anim: "drift-b" },
  { Icon: DollarSign,       top: "55%", left: "4%",  size: "h-16 w-16 sm:h-24 sm:w-24", color: "text-gold",    delay: "2s",   duration: "13s", anim: "drift-c" },
  { Icon: LineChart,        top: "72%", left: "82%", size: "h-20 w-20 sm:h-28 sm:w-28", color: "text-primary-glow", delay: "0.8s", duration: "16s", anim: "drift-d" },
  { Icon: Bitcoin,          top: "38%", left: "48%", size: "h-20 w-20 sm:h-24 sm:w-24", color: "text-gold",    delay: "3s",   duration: "18s", anim: "drift-e" },
  { Icon: PieChart,         top: "88%", left: "30%", size: "h-16 w-16 sm:h-20 sm:w-20", color: "text-primary-glow", delay: "1s",   duration: "15s", anim: "drift-a" },
  { Icon: Banknote,         top: "15%", left: "55%", size: "h-16 w-16 sm:h-20 sm:w-20", color: "text-gold",    delay: "2.5s", duration: "19s", anim: "drift-b" },
  { Icon: BarChart3,        top: "62%", left: "62%", size: "h-16 w-16 sm:h-24 sm:w-24", color: "text-gold",    delay: "0.4s", duration: "14s", anim: "drift-c" },
  { Icon: Coins,            top: "30%", left: "22%", size: "h-14 w-14 sm:h-20 sm:w-20", color: "text-primary-glow", delay: "1.8s", duration: "16s", anim: "drift-d" },
  { Icon: Percent,          top: "80%", left: "12%", size: "h-14 w-14 sm:h-20 sm:w-20", color: "text-gold",    delay: "2.2s", duration: "17s", anim: "drift-e" },
];

export const FloatingFinanceIcons = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden hidden sm:block"
      aria-hidden="true"
    >
      {ITEMS.map(({ Icon, top, left, size, color, delay, duration, anim }, idx) => (
        <div
          key={idx}
          className={`absolute opacity-[0.07] ${color} blur-[1px]`}
          style={{
            top,
            left,
            animation: `${anim} ${duration} ease-in-out infinite`,
            animationDelay: delay,
            filter: "drop-shadow(0 0 24px currentColor)",
          }}
        >
          <Icon className={`${size}`} />
        </div>
      ))}
    </div>
  );
};

export default FloatingFinanceIcons;
