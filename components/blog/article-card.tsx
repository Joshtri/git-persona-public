import Link from "next/link";
import { ArrowRight } from "@gravity-ui/icons";
import type { BlogEntry } from "@/lib/blog/types";
import { categoryTitle } from "@/lib/blog/registry";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Meta({ entry }: { entry: BlogEntry }) {
  return (
    <>
      <time dateTime={entry.meta.publishedAt}>
        {formatDate(entry.meta.publishedAt)}
      </time>
      {entry.meta.readingTime ? (
        <>
          <span aria-hidden>·</span>
          <span>{entry.meta.readingTime} min read</span>
        </>
      ) : null}
    </>
  );
}

export function ArticleCard({ entry }: { entry: BlogEntry }) {
  return (
    <Link
      href={entry.href}
      className="card group flex h-full flex-col gap-4 rounded-2xl p-6 transition-colors hover:border-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
    >
      <span className="text-xs font-medium tracking-wide text-accent-soft uppercase">
        {categoryTitle(entry.meta.category)}
      </span>
      <div className="flex-1">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {entry.meta.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-subtle">
          {entry.meta.description}
        </p>
      </div>
      <div className="flex items-center gap-2 text-xs text-subtle">
        <Meta entry={entry} />
      </div>
    </Link>
  );
}

export function FeaturedArticleCard({ entry }: { entry: BlogEntry }) {
  return (
    <Link
      href={entry.href}
      className="card group grid gap-6 rounded-2xl p-8 transition-colors hover:border-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 sm:p-10"
    >
      <span className="text-xs font-medium tracking-wide text-accent-soft uppercase">
        Featured · {categoryTitle(entry.meta.category)}
      </span>
      <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {entry.meta.title}
      </h2>
      <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
        {entry.meta.description}
      </p>
      <div className="flex flex-wrap items-center gap-3 text-sm text-subtle">
        <Meta entry={entry} />
        <span className="ml-auto inline-flex items-center gap-1.5 font-medium text-accent-soft">
          Read article
          <ArrowRight
            className="size-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
