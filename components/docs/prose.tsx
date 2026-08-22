import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";

/** Shared prose primitives for documentation bodies. Each maps to a semantic
 *  element with GitPersona's typography tokens, so content files stay free of
 *  layout classes and read like an outline. Section headings take an `id` that
 *  must match the page's `toc` entries for in-page anchors to resolve. */

function cx(...parts: (string | undefined | false)[]) {
  return parts.filter(Boolean).join(" ");
}

/** Opening sentence of a page — slightly larger, calmer than body copy. */
export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
      {children}
    </p>
  );
}

export function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="group mt-14 scroll-mt-28 text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
    >
      <a href={`#${id}`} className="no-underline">
        {children}
        <span
          aria-hidden
          className="ml-2 text-subtle opacity-0 transition-opacity group-hover:opacity-100"
        >
          #
        </span>
      </a>
    </h2>
  );
}

export function H3({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3
      id={id}
      className="mt-9 scroll-mt-28 text-base font-semibold tracking-tight text-foreground sm:text-lg"
    >
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-[15px] leading-7 text-muted">{children}</p>
  );
}

export function Ul({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-[15px] leading-7 text-muted marker:text-subtle">
      {children}
    </ul>
  );
}

export function Ol({ children }: { children: ReactNode }) {
  return (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-[15px] leading-7 text-muted marker:text-subtle">
      {children}
    </ol>
  );
}

export function Li({ children }: { children: ReactNode }) {
  return <li className="pl-1">{children}</li>;
}

/** Inline code — for field names, commands, and file paths inside a sentence. */
export function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-md border border-border bg-foreground/[0.05] px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
      {children}
    </code>
  );
}

export function A({ href, children, ...props }: ComponentProps<typeof Link>) {
  const external = typeof href === "string" && href.startsWith("http");
  const className =
    "font-medium text-accent-soft underline decoration-accent-soft/30 underline-offset-2 transition-colors hover:decoration-accent-soft";
  if (external) {
    return (
      <a
        href={href as string}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}

/** A labeled definition row — used for enumerating fields and their meaning. */
export function Field({
  name,
  children,
}: {
  name: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="mt-4 border-l-2 border-border pl-4">
      <div className="font-mono text-sm text-foreground">{name}</div>
      <div className="mt-1 text-[15px] leading-7 text-muted">{children}</div>
    </div>
  );
}

/** Distinguishes a GitPersona action from its manual Git equivalent, so readers
 *  never conflate "what the app does" with "what you'd type by hand". */
export function Equivalence({
  action,
  children,
}: {
  action: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      <div className="card rounded-xl p-4">
        <div className="text-xs font-semibold tracking-wide text-subtle uppercase">
          GitPersona action
        </div>
        <div className="mt-2 text-[15px] leading-7 text-foreground">{action}</div>
      </div>
      <div className="card rounded-xl p-4">
        <div className="text-xs font-semibold tracking-wide text-subtle uppercase">
          Manual Git equivalent
        </div>
        <div className="mt-2 text-muted">{children}</div>
      </div>
    </div>
  );
}

export function Hr() {
  return <hr className="mt-14 border-border" />;
}

export { cx };
