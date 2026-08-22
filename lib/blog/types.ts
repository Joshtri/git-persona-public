/** Stable identifiers for the blog categories. Ordering is derived from the
 *  registry's `categoryTitles`, never duplicated per-component. */
export type BlogCategoryId =
  | "product"
  | "engineering"
  | "git-workflows"
  | "developer-productivity";

/** Metadata for a blog article, sourced from the GitPersona API (managed via
 *  GitPersona Console) rather than authored as a local content module. */
export interface BlogMeta {
  /** URL segment after `/blog`, e.g. `"introducing-gitpersona"`. */
  slug: string;
  title: string;
  description: string;
  /** ISO date, e.g. `"2026-07-14"`. */
  publishedAt: string;
  updatedAt?: string;
  category: BlogCategoryId;
  tags: string[];
  /** Plain display name, as entered in the Console — not a lookup key. */
  author: string;
  coverImage?: string | null;
  featured?: boolean;
  /** Minutes. Server-computed from the article's word count. */
  readingTime?: number;
}

/** A resolved article used throughout the blog UI. `content` is raw semantic
 *  HTML produced by the Console's rich-text editor, rendered via
 *  `dangerouslySetInnerHTML`. */
export interface BlogEntry {
  meta: BlogMeta;
  /** Absolute route, e.g. `/blog/introducing-gitpersona`. */
  href: string;
  content: string;
}
