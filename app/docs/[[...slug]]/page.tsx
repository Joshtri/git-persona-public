import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "@gravity-ui/icons";
import { DocPager } from "@/components/docs/doc-pager";
import { DocToc } from "@/components/docs/doc-toc";
import {
  allDocParams,
  docNav,
  getDocBySegments,
  getSiblings,
} from "@/lib/docs/registry";
import { site } from "@/lib/site";

type Params = { slug?: string[] };

export function generateStaticParams() {
  return allDocParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getDocBySegments(slug);
  if (!entry) return {};
  const { title, description } = entry.meta;
  const canonical = entry.href;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} — ${site.name} Docs`,
      description,
      url: `${site.url}${canonical}`,
      type: "article",
    },
  };
}

function categoryTitle(categoryId: string): string | undefined {
  return docNav.find((c) => c.id === categoryId)?.title;
}

export default async function DocPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const entry = getDocBySegments(slug);
  if (!entry) notFound();

  const { Body, meta } = entry;
  const { prev, next } = getSiblings(entry);
  const section = categoryTitle(meta.category);
  const toc = meta.toc ?? [];

  return (
    <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_13rem] xl:gap-10">
      <article id="doc-content" tabIndex={-1} className="min-w-0 max-w-2xl focus:outline-none">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-subtle">
          <Link href="/docs" className="transition-colors hover:text-foreground">
            Docs
          </Link>
          {section ? (
            <>
              <ChevronRight className="size-3" aria-hidden />
              <span>{section}</span>
            </>
          ) : null}
        </nav>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
          {meta.title}
        </h1>

        <div className="mt-6">
          <Body />
        </div>

        <DocPager prev={prev} next={next} />
      </article>

      {toc.length > 0 ? (
        <aside className="hidden xl:block">
          <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto py-10">
            <DocToc items={toc} />
          </div>
        </aside>
      ) : null}
    </div>
  );
}
