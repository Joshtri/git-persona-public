"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { STORAGE_KEY } from "@/lib/i18n/config";

const LANGS = [
  { code: "en", label: "English" },
  { code: "id", label: "Bahasa Indonesia" },
] as const;

function LanguageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-[17px]"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ml-auto size-3.5 text-accent"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith("id") ? "id" : "en";
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  const switchTo = (code: "en" | "id") => {
    setOpen(false);
    if (code === current) return;
    const doChange = async () => {
      await i18n.changeLanguage(code);
      localStorage.setItem(STORAGE_KEY, code);
    };
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      document.documentElement.classList.add("lang-switching");
      const t = (
        document as Document & {
          startViewTransition: (cb: () => Promise<void>) => { finished: Promise<void> };
        }
      ).startViewTransition(doChange);
      t.finished.finally(() =>
        document.documentElement.classList.remove("lang-switching"),
      );
    } else {
      doChange();
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Switch language"
        className="flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
      >
        <LanguageIcon />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -6 }}
            transition={{ duration: 0.14, ease: "easeOut" }}
            role="listbox"
            aria-label="Language"
            className="absolute right-0 top-full z-50 mt-2 min-w-[186px] overflow-hidden rounded-xl border border-border bg-elevated shadow-xl ring-1 ring-black/5"
          >
            {LANGS.map(({ code, label }) => {
              const active = current === code;
              return (
                <button
                  key={code}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => switchTo(code)}
                  className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-sm transition-colors ${
                    active
                      ? "bg-accent/10 font-medium text-foreground"
                      : "text-muted hover:bg-foreground/[0.04] hover:text-foreground"
                  }`}
                >
                  {label}
                  {active && <CheckIcon />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
