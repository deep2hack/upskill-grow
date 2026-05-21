import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useReveal } from "@/hooks/use-reveal";
import FloatingFinanceIcons from "@/components/FloatingFinanceIcons";

export const SiteLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  // Re-init scroll reveal on every route change
  useReveal();

  return (
    <div key={pathname} className="relative flex min-h-screen flex-col">
      <FloatingFinanceIcons />
      <Navbar />
      <main className="relative z-10 flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
