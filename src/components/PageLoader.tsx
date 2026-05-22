import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

export const PageLoader = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setLoading(true);
    setMounted(true);
    const showTimer = setTimeout(() => setLoading(false), 700);
    const unmountTimer = setTimeout(() => setMounted(false), 1200);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(unmountTimer);
    };
  }, [pathname]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!loading}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--gold)/0.15),transparent_60%)]" />

      <div className="relative flex flex-col items-center gap-6">
        {/* Rotating ring */}
        <div className="relative h-28 w-28 sm:h-32 sm:w-32">
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent animate-spin"
            style={{
              borderTopColor: "hsl(var(--gold))",
              borderRightColor: "hsl(var(--gold) / 0.3)",
              animationDuration: "1.6s",
            }}
          />
          <div
            className="absolute inset-2 rounded-full border border-gold/20 animate-ping"
            style={{ animationDuration: "2s" }}
          />
          {/* Logo */}
          <div className="absolute inset-3 rounded-full overflow-hidden ring-2 ring-gold/40 shadow-[0_0_40px_hsl(var(--gold)/0.5)] bg-secondary animate-pulse">
            <img
              src={logo}
              alt="Loading"
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
