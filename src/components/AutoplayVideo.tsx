import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  controls?: boolean;
  muted?: boolean;
};

/**
 * Reels / Shorts style vertical (9:16) video.
 * - Autoplays when at least 50% visible in the viewport
 * - Pauses automatically when scrolled out of view
 * - Defaults to muted + loop + playsInline for cross-browser/mobile autoplay support.
 *   When `muted={false}`, attempts unmuted autoplay; falls back to muted if browser blocks it.
 */
const AutoplayVideo = ({ src, poster, className, controls = true, muted = true }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.muted = muted;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            el.play().catch(() => {
              if (!muted) {
                el.muted = true;
                el.play().catch(() => {});
              }
            });
          } else {
            el.pause();
          }
        });
      },
      { threshold: [0, 0.5, 1] }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [muted]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted={muted}
      loop
      playsInline
      preload="metadata"
      controls={controls}
      className={cn("aspect-[9/16] w-full h-full object-cover bg-black", className)}
    />
  );
};

export default AutoplayVideo;
