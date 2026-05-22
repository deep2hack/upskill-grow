import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpeg";
import { PAGE_RELOAD_EVENT, PAGE_RELOAD_FLAG } from "@/lib/page-transition";

export const PageLoader = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(() => sessionStorage.getItem(PAGE_RELOAD_FLAG) === "1");
  const [mounted, setMounted] = useState(() => sessionStorage.getItem(PAGE_RELOAD_FLAG) === "1");

  useEffect(() => {
    const hasPendingReload = sessionStorage.getItem(PAGE_RELOAD_FLAG) === "1";
    if (!hasPendingReload) return;

    setMounted(true);
    setLoading(true);

    const fadeTimer = setTimeout(() => setLoading(false), 720);
    const unmountTimer = setTimeout(() => {
      setMounted(false);
      sessionStorage.removeItem(PAGE_RELOAD_FLAG);
    }, 1250);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [pathname]);

  useEffect(() => {
    const startLoading = () => {
      setMounted(true);
      setLoading(true);
    };

    window.addEventListener(PAGE_RELOAD_EVENT, startLoading);
    return () => window.removeEventListener(PAGE_RELOAD_EVENT, startLoading);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background transition-opacity duration-500 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!loading}
      role="status"
      aria-live="polite"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--gold)/0.16),transparent_58%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--secondary)/0.94)_100%)] opacity-80" />

      <div className="relative flex flex-col items-center gap-6">
        <div className="relative h-28 w-28 sm:h-32 sm:w-32">
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent animate-spin"
            style={{
              borderTopColor: "hsl(var(--gold))",
              borderRightColor: "hsl(var(--gold) / 0.26)",
              animationDuration: "2.1s",
            }}
          />
          <div
            className="absolute inset-2 rounded-full border border-gold/20 animate-ping"
            style={{ animationDuration: "2.4s" }}
          />
          <div className="absolute inset-[10px] rounded-full overflow-hidden ring-2 ring-gold/40 shadow-[0_0_50px_hsl(var(--gold)/0.45)] bg-secondary/95 animate-pulse">
            <img
              src={logo}
              alt="Upskiller Academy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="text-center">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-foreground/80">
            Upskiller <span className="text-gold">Academy</span>
          </p>
          <div className="mt-3 mx-auto h-[2px] w-24 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-1/3 bg-gold-gradient animate-[loader-slide_1.2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes loader-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
