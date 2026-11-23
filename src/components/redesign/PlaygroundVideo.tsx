"use client";

import { useEffect, useRef } from "react";

/**
 * A silent prototype film that only downloads and plays while it is on screen.
 * - preload="none" + poster: nothing heavy loads until the visitor scrolls to it.
 * - Pauses when scrolled away, so it never runs in the background.
 * - Visitors with "reduce motion" switched on just see the poster frame.
 */
export default function PlaygroundVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay can be refused (e.g. low-power mode); the poster stays visible.
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      className="absolute inset-0 size-full object-cover"
    />
  );
}
