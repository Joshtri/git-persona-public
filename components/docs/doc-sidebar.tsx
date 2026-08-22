"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { DocNavCategory } from "@/lib/docs/registry";

/** Shared sidebar navigation list, used by both the desktop rail and the mobile
 *  drawer. Renders a semantic nav with per-item active state derived from the
 *  current path. `onNavigate` lets the mobile drawer close on selection. */
export function DocNav({
  nav,
  onNavigate,
}: {
  nav: DocNavCategory[];
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <nav aria-label="Documentation" className="flex flex-col gap-7">
      {nav.map((category) => (
        <div key={category.id}>
          <h3 className="mb-2.5 px-3 text-xs font-semibold tracking-wide text-subtle uppercase">
            {category.title}
          </h3>
          <ul className="space-y-0.5">
            {category.items.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-lg px-3 py-1.5 text-sm transition-colors ${
                      active
                        ? "bg-accent/[0.1] font-medium text-foreground"
                        : "text-muted hover:bg-foreground/[0.04] hover:text-foreground"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
