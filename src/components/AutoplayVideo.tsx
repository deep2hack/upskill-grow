import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  controls?: boolean;
};

/**
 * Reels / Shorts style vertical (9:16) video.
 * - Autoplays when at least 50% visible in the viewport
 * - Pauses automatically when scrolled out of view
 * - Muted + loop + playsInline for cross-browser/mobile autoplay support
 */
const AutoplayVideo = ({ src, poster, className, controls = true }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        });
      },
      { threshold: [0, 0.5, 1] }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      controls={controls}
      className={cn("aspect-[9/16] w-full h-full object-cover bg-black", className)}
    />
  );
};

export default AutoplayVideo;
