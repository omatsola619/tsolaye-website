"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Block-reveal heading animation: a lead bar and an ink bar print each line,
// the text swaps in underneath, then the ink bar retracts to a 2px caret.
// Only `transform` and `visibility` are animated (Web Animations API), and the
// original markup is restored once the timeline ends.

type Timing = {
  lead: number;
  ink: number;
  inkOffset: number;
  uncover: number;
  hold: number;
  stagger: number;
};

const HERO: Timing = { lead: 300, ink: 360, inkOffset: 70, uncover: 420, hold: 250, stagger: 65 };
// Section headings are slower than the spec so the reveal is easy to catch.
const SECTION: Timing = { lead: 300, ink: 360, inkOffset: 50, uncover: 380, hold: 250, stagger: 65 };

const COVER_EASE = "cubic-bezier(0.65, 0, 0.35, 1)";
const UNCOVER_EASE = "cubic-bezier(0.3, 0, 0.4, 1)";
const HERO_START = 150; // ms after first paint
const SCROLL_GAP = 80; // ms between headings that enter in the same frame
const COVERED_PAUSE = 120; // ms a fully covered line holds before it uncovers
// Play scroll headings once they are well inside the viewport, not on its bottom edge.
const SCROLL_ROOT_MARGIN = "0px 0px -28% 0px";
const CARET = 2; // px

let nextScrollSlot = 0;

function splitWords(root: HTMLElement): HTMLElement[] {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);

  const words: HTMLElement[] = [];
  for (const node of nodes) {
    const text = node.nodeValue ?? "";
    if (!text.trim() || !node.parentNode) continue;
    const frag = document.createDocumentFragment();
    for (const part of text.split(/(\s+)/)) {
      if (!part) continue;
      if (/^\s+$/.test(part)) {
        frag.appendChild(document.createTextNode(part));
        continue;
      }
      const span = document.createElement("span");
      span.textContent = part;
      span.setAttribute("aria-hidden", "true");
      span.style.visibility = "hidden";
      frag.appendChild(span);
      words.push(span);
    }
    node.parentNode.replaceChild(frag, node);
  }
  return words;
}

function lineHeightPx(el: HTMLElement): number {
  const cs = getComputedStyle(el);
  const lh = parseFloat(cs.lineHeight);
  return Number.isFinite(lh) ? lh : parseFloat(cs.fontSize) * 1.2;
}

function makeBar(color: string): HTMLElement {
  const bar = document.createElement("span");
  bar.setAttribute("aria-hidden", "true");
  bar.style.cssText =
    "position:absolute;display:block;pointer-events:none;transform-origin:left center;" +
    `background:${color};transform:translateX(0) scaleX(0);`;
  return bar;
}

const COVER_FROM = "translateX(0) scaleX(0)";
const COVER_TO = "translateX(0) scaleX(1)";

// Splits the heading into lines, plays the timeline, restores the original
// markup when it ends. Returns a function that cancels and restores early.
function play(el: HTMLElement, t: Timing, base: number): () => void {
  const original = el.innerHTML;
  const originalStyle = el.getAttribute("style");
  const anims: Animation[] = [];
  let restored = false;

  const restore = () => {
    if (restored) return;
    restored = true;
    anims.forEach((a) => {
      try {
        a.cancel();
      } catch {
        /* already finished */
      }
    });
    el.innerHTML = original;
    if (originalStyle === null) el.removeAttribute("style");
    else el.setAttribute("style", originalStyle);
    el.removeAttribute("aria-label");
    el.setAttribute("data-reveal-state", "done");
  };

  try {
    const box = el.getBoundingClientRect();
    const label = (el.textContent ?? "").replace(/\s+/g, " ").trim();
    el.style.minHeight = `${box.height}px`;
    if (getComputedStyle(el).position === "static") el.style.position = "relative";
    el.setAttribute("aria-label", label);

    const words = splitWords(el);
    const lh = lineHeightPx(el);

    // Group words into visual lines by their vertical centre.
    type Line = { words: HTMLElement[]; left: number; right: number; center: number };
    const lines: Line[] = [];
    for (const word of words) {
      const r = word.getBoundingClientRect();
      const center = (r.top + r.bottom) / 2 - box.top;
      const cur = lines[lines.length - 1];
      if (cur && Math.abs(center - cur.center) < lh * 0.5) {
        cur.words.push(word);
        cur.left = Math.min(cur.left, r.left - box.left);
        cur.right = Math.max(cur.right, r.right - box.left);
      } else {
        lines.push({ words: [word], left: r.left - box.left, right: r.right - box.left, center });
      }
    }

    const coverEnd = (i: number) => i * t.stagger + t.inkOffset + t.ink;
    const uncoverStart0 = Math.max(
      coverEnd(0) + COVERED_PAUSE,
      lines.length > 1 ? coverEnd(lines.length - 1) - 40 : 0,
    );

    lines.forEach((line, i) => {
      const left = Math.floor(line.left);
      const width = Math.ceil(line.right) - left;
      if (width <= CARET) return;
      const top = line.center - lh / 2;

      const lead = makeBar("var(--reveal-lead)");
      const ink = makeBar("var(--reveal-ink)");
      for (const bar of [lead, ink]) {
        bar.style.left = `${left}px`;
        bar.style.top = `${top}px`;
        bar.style.width = `${width}px`;
        bar.style.height = `${lh}px`;
        el.appendChild(bar);
      }

      const cs = base + i * t.stagger;
      const swapAt = base + coverEnd(i);

      // 1. Cover: the lead bar runs ahead, the ink bar follows and fills the line.
      anims.push(
        lead.animate([{ transform: COVER_FROM }, { transform: COVER_TO }], {
          duration: t.lead,
          delay: cs,
          easing: COVER_EASE,
          fill: "both",
        }),
        ink.animate([{ transform: COVER_FROM }, { transform: COVER_TO }], {
          duration: t.ink,
          delay: cs + t.inkOffset,
          easing: COVER_EASE,
          fill: "both",
        }),
      );

      // 2. Swap: the lead bar goes and the text appears beneath the full block.
      anims.push(
        lead.animate([{ visibility: "visible" }, { visibility: "hidden" }], {
          duration: 1,
          delay: swapAt,
          fill: "forwards",
        }),
      );
      for (const word of line.words) {
        anims.push(
          word.animate([{ visibility: "hidden" }, { visibility: "visible" }], {
            duration: 1,
            delay: swapAt,
            fill: "both",
          }),
        );
      }

      // 3. Uncover left -> right down to a 2px caret at the line end, then a hard cut.
      const uncoverAt = base + uncoverStart0 + i * t.stagger;
      anims.push(
        ink.animate(
          [
            { transform: COVER_TO },
            { transform: `translateX(${width - CARET}px) scaleX(${CARET / width})` },
          ],
          { duration: t.uncover, delay: uncoverAt, easing: UNCOVER_EASE, fill: "forwards" },
        ),
        ink.animate([{ visibility: "visible" }, { visibility: "hidden" }], {
          duration: 1,
          delay: uncoverAt + t.uncover + t.hold,
          fill: "forwards",
        }),
      );
    });

    el.setAttribute("data-reveal-state", "running");
    Promise.all(anims.map((a) => a.finished)).then(restore, () => {
      /* cancelled by cleanup */
    });
  } catch {
    restore();
  }

  return restore;
}

type Props = {
  as?: "h1" | "h2" | "h3";
  trigger?: "load" | "scroll";
  /** "dark" inverts the ink bar for headings on dark backgrounds. */
  tone?: "light" | "dark";
  className?: string;
  children: ReactNode;
};

export default function BlockReveal({
  as = "h2",
  trigger = "scroll",
  tone = "light",
  className,
  children,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.setAttribute("data-reveal-state", "done");
      return;
    }

    el.removeAttribute("data-reveal-state");
    let cancelled = false;
    let stop: (() => void) | undefined;
    let observer: IntersectionObserver | undefined;

    const fontsReady = () => (document.fonts ? document.fonts.ready.then(() => undefined) : Promise.resolve());

    const start = async (t: Timing, delayFor: () => number) => {
      await fontsReady();
      if (cancelled) return;
      stop = play(el, t, delayFor());
    };

    if (trigger === "load") {
      // Wait for first paint, then hold the hero back by HERO_START.
      requestAnimationFrame(() => {
        if (!cancelled) void start(HERO, () => HERO_START);
      });
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          observer?.disconnect();
          void start(SECTION, () => {
            const now = performance.now();
            const slot = Math.max(now, nextScrollSlot);
            nextScrollSlot = slot + SCROLL_GAP;
            return slot - now;
          });
        },
        { rootMargin: SCROLL_ROOT_MARGIN },
      );
      observer.observe(el);
    }

    return () => {
      cancelled = true;
      observer?.disconnect();
      stop?.();
    };
  }, [trigger]);

  const Tag = as;
  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={className}
      data-reveal={trigger}
      data-reveal-tone={tone === "dark" ? "dark" : undefined}
    >
      {children}
    </Tag>
  );
}
