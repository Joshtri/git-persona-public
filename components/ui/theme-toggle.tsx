"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="size-[15px]"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-[14px]" aria-hidden>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(currentTheme());
  }, []);

  function applyTheme(next: Theme) {
    const root = document.documentElement;
    const apply = () => root.classList.toggle("light", next === "light");

    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode / storage disabled */
    }
    setTheme(next);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const startVT = (
      document as Document & { startViewTransition?: (cb: () => void) => unknown }
    ).startViewTransition;

    if (prefersReduced) {
      apply();
    } else if (typeof startVT === "function") {
      startVT.call(document, apply);
    } else {
      root.classList.add("theme-anim");
      apply();
      window.setTimeout(() => root.classList.remove("theme-anim"), 340);
    }
  }

  return (
    <div
      role="group"
      aria-label="Color theme"
      suppressHydrationWarning
      className={`flex items-center gap-0.5 rounded-full bg-foreground/[0.04] p-0.5 ring-1 ring-border ${className}`}
    >
      <button
        type="button"
        onClick={() => applyTheme("light")}
        aria-label="Light mode"
        aria-pressed={theme === "light"}
        suppressHydrationWarning
        className={`flex size-7 items-center justify-center rounded-full transition-all duration-200 ${
          theme === "light"
            ? "bg-foreground/[0.09] text-foreground shadow-sm"
            : "text-muted hover:text-foreground"
        }`}
      >
        <SunIcon />
      </button>
      <button
        type="button"
        onClick={() => applyTheme("dark")}
        aria-label="Dark mode"
        aria-pressed={theme === "dark"}
        suppressHydrationWarning
        className={`flex size-7 items-center justify-center rounded-full transition-all duration-200 ${
          theme === "dark"
            ? "bg-foreground/[0.09] text-foreground shadow-sm"
            : "text-muted hover:text-foreground"
        }`}
      >
        <MoonIcon />
      </button>
    </div>
  );
}
