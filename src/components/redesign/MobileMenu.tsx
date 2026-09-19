"use client";

import Link from "next/link";
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
}: {
  open: boolean;
  onClose: () => void;
  activePath: string;
}) {
  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col transition-opacity duration-300 lg:hidden ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "var(--rd-bg)" }}
      aria-hidden={!open}
    >
      <div className="flex items-center justify-between px-5 py-[16px]">
        <span
          className="font-[family-name:var(--font-genos)] font-extrabold text-[28px] leading-[54px] tracking-[-0.08px]"
          style={{ color: "var(--rd-text)" }}
        >
          TSOLAYE
        </span>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="flex items-center justify-center size-[48px] -mr-[8px] rounded-full transition-opacity hover:opacity-70"
          style={{ color: "var(--rd-text)" }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
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
          label="Download Cv"
          icon="/redesign/icons/download-2-line.svg"
          href="/cv/Tsolaye-cv.pdf"
          target="_blank"
        />
      </div>
    </div>
  );
}
