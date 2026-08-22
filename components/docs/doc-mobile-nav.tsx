"use client";

import { useEffect, useState } from "react";
import { Bars, Xmark } from "@gravity-ui/icons";
import type { DocNavCategory } from "@/lib/docs/registry";
import { DocNav } from "./doc-sidebar";

/** Accessible mobile navigation for the docs. A trigger opens a slide-in drawer
 *  containing the full sidebar tree — the sidebar is never simply hidden on
 *  small screens. The drawer closes on Escape, on backdrop click, and on route
 *  change, and locks body scroll while open. */
export function DocMobileNav({ nav }: { nav: DocNavCategory[] }) {
  const [open, setOpen] = useState(false);

  // Escape to close + lock scroll while open. The drawer also closes when a nav
  // link is selected (via `onNavigate`) and when the backdrop is clicked.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
      >
        <Bars className="size-4" aria-hidden />
        Documentation menu
      </button>

      {open && (
        <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Documentation navigation">
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
          />
          <div className="absolute inset-y-0 left-0 flex w-[19rem] max-w-[85vw] flex-col border-r border-border bg-surface shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="text-sm font-semibold text-foreground">
                Documentation
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex size-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-foreground/[0.06] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                <Xmark className="size-5" aria-hidden />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-3 py-5">
              <DocNav nav={nav} onNavigate={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
