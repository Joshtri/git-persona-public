import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@gravity-ui/icons";
import type { DocEntry } from "@/lib/docs/types";

/** Previous / Next navigation between adjacent pages in reading order. */
export function DocPager({
  prev,
  next,
}: {
  prev?: DocEntry;
  next?: DocEntry;
}) {
  return (
    <nav
      aria-label="Pagination"
      className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="card group rounded-xl p-4 transition-colors hover:border-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
        >
          <span className="flex items-center gap-1.5 text-xs text-subtle">
            <ArrowLeft className="size-3.5" aria-hidden />
            Previous
          </span>
          <span className="mt-1 block text-sm font-medium text-foreground">
            {prev.meta.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className="card group rounded-xl p-4 text-right transition-colors hover:border-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
        >
          <span className="flex items-center justify-end gap-1.5 text-xs text-subtle">
            Next
            <ArrowRight className="size-3.5" aria-hidden />
          </span>
          <span className="mt-1 block text-sm font-medium text-foreground">
            {next.meta.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
