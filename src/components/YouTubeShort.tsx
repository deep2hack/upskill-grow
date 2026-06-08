import { useEffect, useRef, useState } from "react";

type Props = {
  videoId: string;
  title: string;
};

/**
 * Vertical YouTube Shorts-style player.
 * Auto-plays when in viewport, pauses when out, muted+looped.
 */
const YouTubeShort = ({ videoId, title }: Props) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Build src once iframe is mounted with JS API enabled
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`;

  useEffect(() => {
    if (!containerRef.current) return;
    const post = (func: "playVideo" | "pauseVideo") => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func, args: [] }),
        "*"
      );
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) post("playVideo");
        else post("pauseVideo");
      },
      { threshold: 0.5 }
    );
    io.observe(containerRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[9/16] w-[260px] sm:w-[280px] shrink-0 overflow-hidden rounded-3xl border-2 border-gold/40 bg-black shadow-[0_20px_60px_-15px_hsl(43_95%_55%/0.45)] transition-all duration-500 hover:scale-[1.03] hover:border-gold hover:shadow-[0_30px_80px_-15px_hsl(43_95%_55%/0.75)]"
    >
      <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-br from-gold/40 via-primary/30 to-gold/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
      {!loaded && (
        <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_center,hsl(222_75%_18%),hsl(222_85%_6%))]">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        loading="lazy"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        onLoad={() => setLoaded(true)}
        className="relative h-full w-full"
      />
      <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-gold/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[hsl(222_85%_12%)] shadow-lg">
        Alumni Story
      </div>
    </div>
  );
};

export default YouTubeShort;
