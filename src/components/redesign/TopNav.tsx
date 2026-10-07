"use client";

import { useState } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Download04Icon } from "@hugeicons/core-free-icons";
import PrimaryButton from "./PrimaryButton";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/design-engineering", label: "Design Engineering" },
];

export default function TopNav({ activePath }: { activePath: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-30 border-b-[0.5px] flex items-center justify-between px-5 lg:px-[100px] py-[16px] transition-colors"
        style={{ backgroundColor: "var(--rd-bg)", borderColor: "var(--rd-border)" }}
      >
        <Link
          href="/"
          className="font-[family-name:var(--font-genos)] font-extrabold text-[26px] lg:text-[32px] leading-[54px] tracking-[-0.08px] hover:opacity-70 transition-opacity"
          style={{ color: "var(--rd-text)" }}
        >
          TSOLAYE
        </Link>

        <nav className="hidden lg:flex items-center justify-center">
          {links.map((link) => {
            const isActive = activePath === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center px-[11px] py-[12px] group"
              >
                <span
                  className="font-[family-name:var(--font-dm-sans)] text-[15px] leading-[22px] tracking-[-0.45px] whitespace-nowrap transition-colors"
                  style={{ color: isActive ? "var(--rd-text)" : "var(--rd-text-muted)" }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--rd-text)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--rd-text-muted)";
                  }}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-[16px]">
          <ThemeToggle />
          <PrimaryButton
            label="Download CV"
            icon={Download04Icon}
            href="/cv/Tsolaye-cv.pdf"
            target="_blank"
          />
        </div>

        <div className="flex lg:hidden items-center gap-[8px]">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex items-center justify-center size-[44px] -mr-[6px] rounded-full transition-opacity hover:opacity-70"
            style={{ color: "var(--rd-text)" }}
          >
            <HugeiconsIcon icon={Menu01Icon} size={24} />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activePath={activePath} />
    </>
  );
}
