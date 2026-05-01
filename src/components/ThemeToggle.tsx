import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle color mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 backdrop-blur transition-all hover:border-gold/60 hover:shadow-card-soft",
        className
      )}
    >
      <Sun className={cn("h-4 w-4 transition-all", isDark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100 text-gold")} />
      <Moon className={cn("absolute h-4 w-4 transition-all", isDark ? "scale-100 rotate-0 opacity-100 text-gold" : "scale-0 rotate-90 opacity-0")} />
    </button>
  );
};

export default ThemeToggle;
