import type { ComponentType } from "react";

/** A single entry in a page's table of contents. `id` must match the `id` on the
 *  rendered heading so anchor links resolve. */
export interface TocItem {
  id: string;
  text: string;
}

/** Stable identifiers for the documentation categories. Ordering of the sidebar
 *  is derived from {@link categoryOrder}, never duplicated per-component. */
export type CategoryId =
  | "getting-started"
  | "identity"
  | "automation"
  | "security"
  | "reference"
  | "support";

/** Typed front-matter for a documentation page. Authored alongside the page body
 *  in `content/docs/**` and consumed by the registry to build navigation, SEO
 *  metadata, and prev/next links. */
export interface DocMeta {
  /** Path after `/docs`, e.g. `"getting-started/installation"`. The Introduction
   *  index uses `""`. */
  slug: string;
  title: string;
  description: string;
  category: CategoryId;
  /** Position within its category. Lower sorts first. */
  order: number;
  toc?: TocItem[];
}

/** A content module: typed metadata plus the renderable page body. */
export interface DocModule {
  meta: DocMeta;
  Body: ComponentType;
}

/** A resolved page used throughout the docs UI. */
export interface DocEntry extends DocModule {
  /** Absolute route, e.g. `/docs/getting-started/installation`. */
  href: string;
}

/** A sidebar group: a category label with its ordered pages. */
export interface DocCategory {
  id: CategoryId;
  title: string;
  items: DocEntry[];
}
