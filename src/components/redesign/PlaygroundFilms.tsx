"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Maximize02Icon, VolumeHighIcon, VolumeOffIcon } from "@hugeicons/core-free-icons";
import posthog from "posthog-js";
import type { PlaygroundShot } from "@/data/homeContent";
import PlaygroundVideo, { PLAYGROUND_PAUSE, PLAYGROUND_RESUME } from "./PlaygroundVideo";

/**
 * Playground grid. Clicking a film opens it on its own in a lightbox
 * (native <dialog>: Esc closes, focus stays inside, the page behind is inert).
 * Only the opened film plays; the grid films pause until it is closed.
 *
 * Sound: grid films are always silent. A film with a sound track opens muted in
 * the lightbox, and the visitor turns the sound on with the "Sound on" button
 * (or the player's own volume control). Closing always mutes it again.
 */
export default function PlaygroundFilms({ shots }: { shots: PlaygroundShot[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const filmRef = useRef<HTMLVideoElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const [active, setActive] = useState<PlaygroundShot | null>(null);
  const [soundOn, setSoundOn] = useState(false);

  const open = (shot: PlaygroundShot, opener: HTMLButtonElement) => {
    openerRef.current = opener;
    setSoundOn(false);
    setActive(shot);
    window.dispatchEvent(new Event(PLAYGROUND_PAUSE));
    if (posthog.__loaded) posthog.capture("prototype_film_opened", { film: shot.caption.split(" · ")[0] });
  };

  const close = useCallback(() => dialogRef.current?.close(), []);

  const toggleSound = () => {
    const film = filmRef.current;
    if (!film) return;
    film.muted = !film.muted;
    if (!film.muted) {
      if (film.volume === 0) film.volume = 1;
      if (film.paused) film.play().catch(() => {});
      if (posthog.__loaded && active) posthog.capture("prototype_film_sound_on", { film: active.caption.split(" · ")[0] });
    }
  };

  // Show the dialog once the chosen film is rendered into it, and stop the page
  // behind from scrolling while it is open.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!active || !dialog) return;
    if (!dialog.open) dialog.showModal();
    const root = document.documentElement;
    root.classList.add("overflow-hidden");
    const film = filmRef.current;
    if (film) {
      film.muted = true; // always open muted; sound only when the visitor turns it on
      film.currentTime = 0;
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) film.play().catch(() => {});
    }
    return () => root.classList.remove("overflow-hidden");
  }, [active]);

  // Runs for every way of closing (button, backdrop, Esc).
  const onClosed = () => {
    const film = filmRef.current;
    if (film) {
      film.muted = true;
      film.pause();
    }
    setActive(null);
    setSoundOn(false);
    window.dispatchEvent(new Event(PLAYGROUND_RESUME));
    openerRef.current?.focus({ preventScroll: true });
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-[28px] sm:gap-[16px] lg:gap-[24px] items-start w-full">
        {shots.map((shot) => (
          <figure key={shot.caption} className="flex flex-col gap-[12px] items-start w-full">
            <button
              type="button"
              onClick={(e) => shot.video && open(shot, e.currentTarget)}
              disabled={!shot.video}
              aria-label={shot.video ? `Watch ${shot.caption} full screen` : shot.caption}
              aria-haspopup="dialog"
              className="group relative block w-full rounded-[20px] lg:rounded-[16px] overflow-hidden shrink-0 cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--rd-cta-bg)]"
              style={{ aspectRatio: shot.aspect }}
            >
              <Image
                src={shot.image}
                alt=""
                fill
                quality={95}
                sizes="(min-width: 1280px) 354px, (min-width: 1024px) 707px, (min-width: 640px) 50vw, calc(100vw - 40px)"
                className="object-cover"
              />
              {shot.video && <PlaygroundVideo src={shot.video} poster={shot.image} />}
              {shot.video && (
                <span
                  aria-hidden="true"
                  className="absolute right-3 top-3 flex items-center justify-center size-[40px] rounded-full bg-black/55 text-white backdrop-blur-sm opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100 transition-opacity"
                >
                  <HugeiconsIcon icon={Maximize02Icon} size={20} />
                </span>
              )}
            </button>
            <figcaption
              className="font-[family-name:var(--font-dm-sans)] text-[14px]"
              style={{ color: "var(--rd-text-muted)" }}
            >
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={onClosed}
        onClick={(e) => {
          // A click on the dark area (the dialog itself, not the film) closes it.
          if (e.target === e.currentTarget) close();
        }}
        aria-label={active ? active.caption : "Prototype film"}
        className="m-0 p-0 max-w-none max-h-none w-screen h-[100dvh] bg-transparent backdrop:bg-black/85 backdrop:backdrop-blur-sm open:flex items-center justify-center"
      >
        {active?.video && (
          <div className="relative flex flex-col items-center gap-[12px] pointer-events-none">
            <div className="relative pointer-events-auto">
              <video
                ref={filmRef}
                key={active.video}
                src={active.video}
                poster={active.image}
                muted
                loop
                playsInline
                controls
                preload="auto"
                onVolumeChange={(e) => setSoundOn(!e.currentTarget.muted && e.currentTarget.volume > 0)}
                className="block rounded-[16px] bg-black object-contain w-[min(92vw,calc((100dvh-120px)*0.8))] aspect-[1440/1800]"
              />
              {active.hasSound && (
                <button
                  type="button"
                  onClick={toggleSound}
                  aria-pressed={soundOn}
                  className="absolute left-3 top-3 flex items-center gap-[8px] h-[40px] pl-[12px] pr-[14px] rounded-full bg-black/65 text-white backdrop-blur-sm font-[family-name:var(--font-dm-sans)] text-[14px] font-medium hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <HugeiconsIcon icon={soundOn ? VolumeHighIcon : VolumeOffIcon} size={18} />
                  {soundOn ? "Sound off" : "Sound on"}
                </button>
              )}
            </div>
            <p className="font-[family-name:var(--font-dm-sans)] text-[14px] text-white/85 text-center px-4">
              {active.caption}
            </p>
          </div>
        )}
        <button
          type="button"
          onClick={close}
          aria-label="Close film"
          autoFocus
          className="fixed right-4 top-4 lg:right-6 lg:top-6 flex items-center justify-center size-[48px] rounded-full bg-white text-[#121212] shadow-lg hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <HugeiconsIcon icon={Cancel01Icon} size={24} />
        </button>
      </dialog>
    </>
  );
}
