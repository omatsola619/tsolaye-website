"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { SunIcon, Moon02Icon } from "@hugeicons/core-free-icons";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center justify-center size-[40px] rounded-full shrink-0 border transition-opacity hover:opacity-70"
      style={{
        borderColor: "var(--rd-border)",
        color: "var(--rd-text)",
      }}
    >
      <HugeiconsIcon icon={isDark ? SunIcon : Moon02Icon} size={18} />
    </button>
  );
}
