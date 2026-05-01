import { ReactNode, ElementType, CSSProperties } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Wrap any block to opt into scroll-based reveal.
 * Stagger lists by passing incremental `delay` values (e.g., index * 90).
 */
export const Reveal = ({ children, as: Tag = "div", delay = 0, className, style }: RevealProps) => (
  <Tag data-reveal data-reveal-delay={delay} className={cn("reveal", className)} style={style}>
    {children}
  </Tag>
);

export default Reveal;
