import type { BlogCategoryId, BlogEntry } from "./types";

/** Ordered category definitions — the single source category titles are
 *  derived from, never duplicated per-component. */
const categoryTitles: { id: BlogCategoryId; title: string }[] = [
  { id: "product", title: "Product" },
  { id: "engineering", title: "Engineering" },
  { id: "git-workflows", title: "Git Workflows" },
  { id: "developer-productivity", title: "Developer Productivity" },
];

const categoryTitleById = new Map(categoryTitles.map((c) => [c.id, c.title]));

export function categoryTitle(id: BlogCategoryId): string {
  return categoryTitleById.get(id) ?? id;
}

/** The article flagged `featured`, falling back to the most recent. Articles
 *  are expected newest-first, as returned by the API. */
export function pickFeatured(entries: BlogEntry[]): BlogEntry | undefined {
  return entries.find((e) => e.meta.featured) ?? entries[0];
}

/** Remaining articles for the grid, excluding whichever one is featured so it
 *  isn't shown twice on the index page. */
export function pickLatest(
  entries: BlogEntry[],
  featured: BlogEntry | undefined,
): BlogEntry[] {
  return entries.filter((e) => e.meta.slug !== featured?.meta.slug);
}

export function findBySlug(
  entries: BlogEntry[],
  slug: string,
): BlogEntry | undefined {
  return entries.find((e) => e.meta.slug === slug);
}

/** Adjacent articles in the shared newest-first order, for the pager. */
export function getAdjacent(
  entries: BlogEntry[],
  entry: BlogEntry,
): { prev?: BlogEntry; next?: BlogEntry } {
  const i = entries.findIndex((e) => e.meta.slug === entry.meta.slug);
  return {
    prev: i > 0 ? entries[i - 1] : undefined,
    next: i >= 0 && i < entries.length - 1 ? entries[i + 1] : undefined,
  };
}

/** Other articles in the same category, most recent first, excluding itself. */
export function getRelated(
  entries: BlogEntry[],
  entry: BlogEntry,
  limit = 2,
): BlogEntry[] {
  return entries
    .filter(
      (e) =>
        e.meta.category === entry.meta.category &&
        e.meta.slug !== entry.meta.slug,
    )
    .slice(0, limit);
}
