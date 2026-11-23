"use client";

import { useEffect, useRef } from "react";

/** Fired by the film lightbox so the grid films stop while one film is in focus. */
export const PLAYGROUND_PAUSE = "playground:pause";
export const PLAYGROUND_RESUME = "playground:resume";

/**
 * A silent prototype film that only downloads and plays while it is on screen.
 * - preload="none" + poster: nothing heavy loads until the visitor scrolls to it.
 * - Pauses when scrolled away, so it never runs in the background.
 * - Pauses while a film is open in the lightbox, and resumes after.
 * - Visitors with "reduce motion" switched on just see the poster frame.
 */
export default function PlaygroundVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let onScreen = false;
    let held = false; // true while the lightbox is open
    const play = () => {
      if (onScreen && !held) {
        video.play().catch(() => {
          // Autoplay can be refused (e.g. low-power mode); the poster stays visible.
        });
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen) play();
        else video.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(video);

    const pause = () => {
      held = true;
      video.pause();
    };
    const resume = () => {
      held = false;
      play();
    };
    window.addEventListener(PLAYGROUND_PAUSE, pause);
    window.addEventListener(PLAYGROUND_RESUME, resume);

    return () => {
      observer.disconnect();
      window.removeEventListener(PLAYGROUND_PAUSE, pause);
      window.removeEventListener(PLAYGROUND_RESUME, resume);
    };
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
      aria-hidden="true"
      tabIndex={-1}
      className="absolute inset-0 size-full object-cover pointer-events-none"
    />
  );
}
