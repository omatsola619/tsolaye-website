"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
});

// The theme lives on <html class="dark">, set before paint by the inline script in
// layout.tsx (light unless the visitor chose dark before). React reads it from there,
// so there is a single source of truth and no extra render on load.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
const getSnapshot = (): Theme => (document.documentElement.classList.contains("dark") ? "dark" : "light");
const getServerSnapshot = (): Theme => "light";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      window.localStorage.setItem("theme", next);
    } catch {
      // localStorage unavailable — theme just won't persist across reloads
    }
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
