"use client";

import { useEffect, useRef, type RefObject } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Download04Icon } from "@hugeicons/core-free-icons";
import PrimaryButton from "./PrimaryButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/design-engineering", label: "Design Engineering" },
];

export default function MobileMenu({
  open,
  onClose,
  activePath,
  returnFocusRef,
}: {
  open: boolean;
  onClose: () => void;
  activePath: string;
  returnFocusRef?: RefObject<HTMLElement | null>;
}) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  // Lock body scroll while open; always restore on close/unmount.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Close when the viewport reaches the lg breakpoint.
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) onClose();
    };
    if (mq.matches) onClose();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [open, onClose]);

  // Focus management: into the dialog on open, back to the trigger on close.
  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      const id = requestAnimationFrame(() => closeBtnRef.current?.focus());
      return () => cancelAnimationFrame(id);
    } else if (wasOpen.current) {
      wasOpen.current = false;
      const trigger = returnFocusRef?.current;
      if (trigger && trigger.offsetParent !== null) trigger.focus();
    }
  }, [open, returnFocusRef]);

  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col duration-300 lg:hidden ${
        open ? "transition-opacity opacity-100 visible pointer-events-auto" : "transition-[opacity,visibility] opacity-0 invisible pointer-events-none"
      }`}
      style={{ backgroundColor: "var(--rd-bg)" }}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      inert={!open}
    >
      <div className="flex items-center justify-between px-5 py-[16px]">
        <span
          className="font-[family-name:var(--font-genos)] font-extrabold text-[28px] leading-[54px] tracking-[-0.08px]"
          style={{ color: "var(--rd-text)" }}
        >
          TSOLAYE
        </span>
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Close menu"
          className="flex items-center justify-center size-[48px] -mr-[8px] rounded-full transition-opacity hover:opacity-70"
          style={{ color: "var(--rd-text)" }}
        >
          <HugeiconsIcon icon={Cancel01Icon} size={26} />
        </button>
      </div>

      <nav className="flex flex-col items-start px-6 mt-6">
        {links.map((link) => {
          const isActive = activePath === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="w-full py-[16px] font-[family-name:var(--font-genos)] font-bold text-[32px] leading-[1.2] transition-colors"
              style={{ color: isActive ? "var(--rd-text)" : "var(--rd-text-muted)" }}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto px-6 pb-10">
        <PrimaryButton
          label="Download CV"
          icon={Download04Icon}
          href="/cv/Tsolaye-cv.pdf"
          download="Tsolaye-Eyeoyibo-CV.pdf"
        />
      </div>
    </div>
  );
}
