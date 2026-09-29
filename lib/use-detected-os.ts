"use client";

import { useSyncExternalStore } from "react";

export type DetectedOS = "windows" | "macos" | "linux";

function detectOS(): DetectedOS | null {
  const nav = navigator as Navigator & { userAgentData?: { platform?: string } };
  const ua = nav.userAgent;
  // Mobile devices can't install the desktop app — keep the default suggestion.
  if (/iPhone|iPad|iPod|Android/i.test(ua)) return null;

  const platform = `${nav.userAgentData?.platform ?? ""} ${nav.platform ?? ""} ${ua}`;
  if (/Win/i.test(platform)) return "windows";
  if (/Mac/i.test(platform)) return "macos";
  if (/Linux|X11|CrOS/i.test(platform)) return "linux";
  return null;
}

const subscribe = () => () => {};

/**
 * Visitor's desktop OS, or `fallback` during SSR / when it can't be detected.
 * Uses useSyncExternalStore so the server render and first client render
 * agree, then switches to the detected OS without a hydration mismatch.
 */
export function useDetectedOS(fallback: DetectedOS = "windows"): DetectedOS {
  return useSyncExternalStore(
    subscribe,
    () => detectOS() ?? fallback,
    () => fallback
  );
}
