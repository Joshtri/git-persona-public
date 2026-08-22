"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/** Reads the theme the pre-paint script already committed to <html>. */
function currentTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

const spring = { type: "spring", stiffness: 500, damping: 34 } as const;

/**
 * Day / night theme switch.
 *
 * The knob glides between a sky-blue "day" side and a deep-navy "night" side;
 * a sun and crescent moon cross-fade as it travels. State lives on the
 * `.light` class of <html> (set flash-free by the inline script in layout),
 * with the choice persisted to localStorage.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Correct the knob to the real theme while `mounted` is still false, so the
    // position snaps instantly (transition duration 0). Only enable the spring
    // on the next frame — otherwise this mount-time correction would animate,
    // making the toggle appear to "switch" on every page navigation.
    // Reading the class committed by the pre-paint script is a legitimate
    // external-system sync, so the set-state-in-effect guidance doesn't apply.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(currentTheme());
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    const applyTheme = () => root.classList.toggle("light", next === "light");

    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode / storage disabled — theme still works for the session */
    }
    setTheme(next);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Prefer the View Transitions API: it snapshots the page and cross-fades a
    // single GPU-composited layer, instead of animating background / border /
    // box-shadow on every element — which repaints thousands of nodes and janks.
    const startViewTransition = (
      document as Document & {
        startViewTransition?: (cb: () => void) => unknown;
      }
    ).startViewTransition;

    if (prefersReduced) {
      applyTheme();
    } else if (typeof startViewTransition === "function") {
      startViewTransition.call(document, applyTheme);
    } else {
      // Fallback (Firefox / Safari): lightweight class-based cross-fade that
      // only animates cheap paint properties — no box-shadow, no backdrop.
      root.classList.add("theme-anim");
      applyTheme();
      window.setTimeout(() => root.classList.remove("theme-anim"), 340);
    }
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={!isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      // Server renders dark; the knob position is corrected on mount.
      suppressHydrationWarning
      className={`group relative inline-flex h-8 w-[62px] shrink-0 items-center rounded-full p-1 outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
    >
      {/* Track — day/night gradients cross-fade under the knob */}
      <span
        aria-hidden
        className="absolute inset-0 overflow-hidden rounded-full border border-border shadow-[inset_0_1px_2px_rgba(0,0,0,0.35)]"
      >
        {/* Night sky */}
        <span
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: isDark ? 1 : 0,
            background: "linear-gradient(135deg, #0b1220 0%, #18233d 100%)",
          }}
        />
        {/* Daytime sky */}
        <span
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: isDark ? 0 : 1,
            background: "linear-gradient(135deg, #8fd0ff 0%, #cdebff 100%)",
          }}
        />
        {/* Tiny stars, visible only at night */}
        <span
          className="absolute top-1.5 left-2 size-[2px] rounded-full bg-white transition-opacity duration-500"
          style={{ opacity: isDark ? 0.9 : 0 }}
        />
        <span
          className="absolute top-3 left-4 size-[1.5px] rounded-full bg-white transition-opacity duration-500"
          style={{ opacity: isDark ? 0.7 : 0 }}
        />
        <span
          className="absolute bottom-1.5 left-2.5 size-[1.5px] rounded-full bg-white transition-opacity duration-500"
          style={{ opacity: isDark ? 0.6 : 0 }}
        />
      </span>

      {/* Knob */}
      <motion.span
        animate={{ x: isDark ? 30 : 0 }}
        transition={mounted ? spring : { duration: 0 }}
        className="relative z-10 flex size-6 items-center justify-center rounded-full"
        style={{
          background: isDark
            ? "radial-gradient(circle at 35% 30%, #e9f2ff 0%, #b9c6dc 100%)"
            : "radial-gradient(circle at 35% 30%, #fff4d6 0%, #ffd166 100%)",
          boxShadow: isDark
            ? "0 2px 8px -1px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.25)"
            : "0 2px 10px -1px rgba(255,176,32,0.65), inset 0 0 0 1px rgba(255,255,255,0.6)",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.svg
              key="moon"
              initial={{ opacity: 0, rotate: -60, scale: 0.4 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 60, scale: 0.4 }}
              transition={{ duration: 0.2 }}
              viewBox="0 0 24 24"
              className="size-[13px]"
              fill="#2a3450"
              aria-hidden
            >
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </motion.svg>
          ) : (
            <motion.svg
              key="sun"
              initial={{ opacity: 0, rotate: -60, scale: 0.4 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 60, scale: 0.4 }}
              transition={{ duration: 0.2 }}
              viewBox="0 0 24 24"
              className="size-[15px]"
              fill="none"
              stroke="#b8860b"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              <circle cx="12" cy="12" r="4" fill="#f4a600" stroke="none" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.span>
    </button>
  );
}
