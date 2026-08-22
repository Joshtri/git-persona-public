"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { Bars as Menu, Xmark as X } from "@gravity-ui/icons";
import { GithubIcon, WindowsIcon } from "./icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { ButtonLink } from "./ui/button";
import { ThemeToggle } from "./ui/theme-toggle";

function useActiveNav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (href: string) => {
    if (href.startsWith("/#")) {
      // Hash-anchor link: active on home page when hash matches.
      return pathname === "/" && hash === href.slice(1);
    }
    // Page route: exact match, or prefix for nested paths.
    return pathname === href || (href !== "/" && pathname.startsWith(href + "/"));
  };
}

export function Header() {
  const isActive = useActiveNav();
  const [open, setOpen] = useState(false);
  // The navbar Download button only appears once the hero (which has its own
  // "Download for Windows" CTA) has scrolled out of view.
  const [pastHero, setPastHero] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setPastHero(v > 520));
  // Fade the (theme-aware) header surface in as the page scrolls. Colour lives
  // in a CSS variable so the same transform works in light and dark.
  const surfaceOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl">
      <motion.div
        aria-hidden
        style={{ opacity: surfaceOpacity }}
        className="absolute inset-0 -z-10 border-b border-border bg-[rgba(var(--header-bg),0.82)]"
      />
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight"
          aria-label="GitPersona home"
        >
          {/* Logo swaps with the theme: dark-panel mark on dark, light-panel
              mark on light. Both ship in the HTML; CSS shows the right one. */}
          <Image
            src="/gitpersona-dark-icon.png"
            alt="GitPersona"
            width={144}
            height={144}
            quality={100}
            priority
            className="theme-logo-dark size-9 rounded-lg shadow-[0_4px_16px_-4px_rgba(33,139,208,0.7)]"
          />
          <Image
            src="/git-persona-light-icon.png"
            alt=""
            aria-hidden
            width={144}
            height={144}
            quality={100}
            priority
            className="theme-logo-light size-9 rounded-lg shadow-[0_4px_16px_-4px_rgba(33,139,208,0.45)]"
          />
          GitPersona
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-foreground/[0.07] text-foreground"
                    : "text-muted hover:bg-foreground/[0.04] hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitPersona on GitHub"
            className="flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-[18px]" />
          </a>
          <div
            className={`transition-all duration-300 ${
              pastHero
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-1 opacity-0"
            }`}
            aria-hidden={!pastHero}
          >
            <ButtonLink href="/download" size="sm" tabIndex={pastHero ? 0 : -1}>
              <WindowsIcon className="size-3.5" />
              Download
            </ButtonLink>
          </div>
        </div>

        {/* Mobile: theme toggle stays reachable next to the menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-9 items-center justify-center rounded-lg text-muted"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-foreground/[0.07] text-foreground"
                      : "text-muted hover:bg-foreground/[0.04] hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <ButtonLink
              href="/download"
              size="sm"
              className="mt-2"
              onClick={() => setOpen(false)}
            >
              <WindowsIcon className="size-3.5" />
              Download
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  );
}
