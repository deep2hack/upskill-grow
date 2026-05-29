import { useEffect, useRef, useState } from "react";

type CounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export const Counter = ({ end, duration = 1800, suffix = "", prefix = "", className }: CounterProps) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const startTime = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - startTime) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.floor(eased * end));
              if (p < 1) requestAnimationFrame(tick);
              else setValue(end);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
};

export default Counter;
