type Props = {
  /** Color of the section the divider visually "fills into" (the next section's background). */
  fill?: string;
  /** Flip vertically (use when transitioning from a dark section above to a light section below). */
  flip?: boolean;
  variant?: "wave" | "curve" | "angle";
  className?: string;
};

/**
 * A premium SVG section divider. Place at top or bottom of a section.
 * Use `fill` to match the adjacent section background color.
 */
const SectionDivider = ({ fill = "hsl(var(--background))", flip = false, variant = "wave", className = "" }: Props) => {
  const paths: Record<NonNullable<Props["variant"]>, string> = {
    wave: "M0,40 C240,90 480,0 720,30 C960,60 1200,100 1440,50 L1440,100 L0,100 Z",
    curve: "M0,60 C360,0 1080,120 1440,40 L1440,100 L0,100 Z",
    angle: "M0,100 L1440,0 L1440,100 Z",
  };
  return (
    <div
      aria-hidden
      className={`pointer-events-none relative z-[1] -mt-px w-full leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block h-[60px] w-full sm:h-[80px]">
        <path d={paths[variant]} fill={fill} />
      </svg>
    </div>
  );
};

export default SectionDivider;
