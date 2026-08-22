import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "@gravity-ui/icons";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ArticleCard } from "@/components/blog/article-card";
import { fetchBlogPosts } from "@/lib/api";
import {
  categoryTitle,
  findBySlug,
  getAdjacent,
  getRelated,
} from "@/lib/blog/registry";
import { site } from "@/lib/site";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entries = await fetchBlogPosts();
  const entry = findBySlug(entries, slug);
  if (!entry) return {};
  const { title, description, publishedAt, updatedAt } = entry.meta;
  const canonical = entry.href;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} — ${site.name} Blog`,
      description,
      url: `${site.url}${canonical}`,
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: updatedAt ?? publishedAt,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const entries = await fetchBlogPosts();
  const entry = findBySlug(entries, slug);
  if (!entry) notFound();

  const { meta, content } = entry;
  const { prev, next } = getAdjacent(entries, entry);
  const related = getRelated(entries, entry);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.publishedAt,
    dateModified: meta.updatedAt ?? meta.publishedAt,
    author: { "@type": "Organization", name: meta.author },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}${entry.href}`,
    url: `${site.url}${entry.href}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="flex-1 pt-16">
        <article className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-20 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-subtle transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 rounded-md"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            Blog
          </Link>

          <p className="mt-6 text-xs font-medium tracking-wide text-accent-soft uppercase">
            {categoryTitle(meta.category)}
          </p>

          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {meta.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-subtle">
            <span>{meta.author}</span>
            <span aria-hidden>·</span>
            <time dateTime={meta.publishedAt}>{formatDate(meta.publishedAt)}</time>
            {meta.updatedAt ? (
              <>
                <span aria-hidden>·</span>
                <span>Updated {formatDate(meta.updatedAt)}</span>
              </>
            ) : null}
            {meta.readingTime ? (
              <>
                <span aria-hidden>·</span>
                <span>{meta.readingTime} min read</span>
              </>
            ) : null}
          </div>

          <div
            className="blog-prose mt-10"
            // Content is authored via the GitPersona Console's rich-text
            // editor and stored as sanitized semantic HTML on the server.
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {meta.tags.length > 0 ? (
            <div className="mt-14 flex flex-wrap gap-2 border-t border-border pt-8">
              {meta.tags.map((tag) => (
                <span key={tag} className="chip rounded-full px-3 py-1 text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {prev || next ? (
            <nav
              aria-label="Pagination"
              className="mt-8 grid gap-4 border-t border-border pt-8 sm:grid-cols-2"
            >
              {prev ? (
                <Link
                  href={prev.href}
                  className="card group rounded-xl p-4 transition-colors hover:border-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                >
                  <span className="flex items-center gap-1.5 text-xs text-subtle">
                    <ArrowLeft className="size-3.5" aria-hidden />
                    Newer
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
                    Older
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
          ) : null}
        </article>

        {related.length > 0 ? (
          <div className="mx-auto w-full max-w-4xl px-6 pb-20 lg:px-8">
            <h2 className="text-sm font-semibold tracking-widest text-subtle uppercase">
              Related articles
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <ArticleCard key={r.meta.slug} entry={r} />
              ))}
            </div>
          </div>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
