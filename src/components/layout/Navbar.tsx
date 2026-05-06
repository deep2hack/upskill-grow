import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS } from "@/data/site";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all",
        "bg-[hsl(215_55%_10%/0.85)] backdrop-blur-md supports-[backdrop-filter]:bg-[hsl(215_55%_10%/0.7)]",
        "border-b border-white/5",
        scrolled ? "shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]" : ""
      )}
    >
      <div className="container grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4">
        {/* LEFT — Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-hero text-primary-foreground font-display font-bold shadow-elegant">
            U
          </span>
          <span className="hidden sm:block leading-tight">
            <span className="block font-display text-base font-bold text-white">
              Upskiller <span className="text-gold">Academy</span>
            </span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-white/55">
              Markets · Finance · Career
            </span>
          </span>
        </Link>

        {/* CENTER — Links */}
        <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "group relative px-3 xl:px-4 py-2 text-[14px] font-medium tracking-wide transition-colors",
                  isActive ? "text-gold" : "text-white/85 hover:text-gold"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span>{l.label}</span>
                  <span
                    className={cn(
                      "pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-gold transition-transform duration-300 origin-left",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT — Actions */}
        <div className="hidden md:flex items-center gap-2 justify-end">
          <ThemeToggle className="border-white/10 bg-white/5 text-white hover:border-gold/60" />
          <Button asChild variant="premium" size="sm" className="gap-1.5">
            <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden xl:inline">Enroll on WhatsApp</span>
              <span className="xl:hidden">Enroll</span>
            </a>
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="lg:hidden flex items-center gap-2 justify-end md:hidden">
          <ThemeToggle className="border-white/10 bg-white/5 text-white" />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-[hsl(215_55%_10%/0.98)] backdrop-blur-md animate-fade-in">
          <nav className="container py-3 grid gap-1">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2.5 rounded-md text-sm font-medium tracking-wide",
                    isActive ? "bg-white/10 text-gold" : "text-white/85 hover:bg-white/5 hover:text-gold"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="grid gap-2 pt-2">
              <Button asChild variant="premium">
                <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4 mr-1.5" />
                  Enroll on WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
