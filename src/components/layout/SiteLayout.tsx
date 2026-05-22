import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useReveal } from "@/hooks/use-reveal";

const PAGE_RELOAD_EVENT = "upskiller:navigation-start";
const PAGE_RELOAD_FLAG = "upskiller:pending-page-reload";

export const SiteLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  useEffect(() => {
    let navigating = false;

    const startReloadNavigation = (navigate: () => void) => {
      if (navigating) return;
      navigating = true;

      sessionStorage.setItem(PAGE_RELOAD_FLAG, "1");
      window.dispatchEvent(new Event(PAGE_RELOAD_EVENT));

      window.setTimeout(() => {
        navigate();
      }, 110);
    };

    const handler = (e: MouseEvent) => {
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = (e.target as HTMLElement | null)?.closest("a");
      if (!target) return;

      const anchor = target as HTMLAnchorElement;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;
      if (anchor.getAttribute("rel")?.includes("external")) return;

      const href = anchor.getAttribute("href");
      if (!href) return;
      if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;

      const nextLocation = url.pathname + url.search + url.hash;
      const currentLocation = window.location.pathname + window.location.search + window.location.hash;
      if (nextLocation === currentLocation) return;

      e.preventDefault();
      e.stopPropagation();

      startReloadNavigation(() => {
        window.location.assign(url.toString());
      });
    };

    const handlePopState = () => {
      startReloadNavigation(() => {
        window.location.reload();
      });
    };

    document.addEventListener("click", handler, true);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handler, true);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Re-init scroll reveal on every route change
  useReveal();

  return (
    <div key={pathname} className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
