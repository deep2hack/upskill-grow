import { useEffect } from "react";

/**
 * Scroll-based reveal: any element with `data-reveal` becomes visible
 * (translateY + opacity) as it enters the viewport. Stagger via
 * `data-reveal-delay="120"` (ms). Respects prefers-reduced-motion.
 */
export const useReveal = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduce) {
      els.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.revealDelay ?? 0);
            window.setTimeout(() => el.classList.add("is-revealed"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

export default useReveal;
