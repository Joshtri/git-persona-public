import type { CategoryId, DocCategory, DocEntry, DocModule } from "./types";

// Getting Started
import * as introduction from "@/content/docs/getting-started/introduction";
import * as installation from "@/content/docs/getting-started/installation";
import * as firstProfile from "@/content/docs/getting-started/first-profile";
import * as switchingProfiles from "@/content/docs/getting-started/switching-profiles";
// Identity Management
import * as profiles from "@/content/docs/identity/profiles";
import * as sshKeys from "@/content/docs/identity/ssh-keys";
import * as credentials from "@/content/docs/identity/credentials";
// Automation
import * as rules from "@/content/docs/automation/rules";
import * as repositoryGroups from "@/content/docs/automation/repository-groups";
// Security
import * as gpgSigning from "@/content/docs/security/gpg-signing";
import * as credentialStorage from "@/content/docs/security/credential-storage";
// Reference
import * as activityLog from "@/content/docs/reference/activity-log";
import * as settings from "@/content/docs/reference/settings";
import * as updates from "@/content/docs/reference/updates";
// Support
import * as troubleshooting from "@/content/docs/support/troubleshooting";
import * as faq from "@/content/docs/support/faq";

/** Ordered category definitions. The sidebar and prev/next navigation are both
 *  derived from this single source — never duplicated in a component. */
const categoryTitles: { id: CategoryId; title: string }[] = [
  { id: "getting-started", title: "Getting Started" },
  { id: "identity", title: "Identity Management" },
  { id: "automation", title: "Automation" },
  { id: "security", title: "Security" },
  { id: "reference", title: "Reference" },
  { id: "support", title: "Support" },
];

const modules: DocModule[] = [
  introduction,
  installation,
  firstProfile,
  switchingProfiles,
  profiles,
  sshKeys,
  credentials,
  rules,
  repositoryGroups,
  gpgSigning,
  credentialStorage,
  activityLog,
  settings,
  updates,
  troubleshooting,
  faq,
];

function toHref(slug: string): string {
  return slug === "" ? "/docs" : `/docs/${slug}`;
}

const entries: DocEntry[] = modules.map((m) => ({
  ...m,
  href: toHref(m.meta.slug),
}));

/** Sidebar navigation: categories in declared order, each with its pages sorted
 *  by `order`. */
export const docCategories: DocCategory[] = categoryTitles.map(({ id, title }) => ({
  id,
  title,
  items: entries
    .filter((e) => e.meta.category === id)
    .sort((a, b) => a.meta.order - b.meta.order),
}));

/** A flat, reading-order list of every page — the basis for prev/next. */
export const docsFlat: DocEntry[] = docCategories.flatMap((c) => c.items);

export interface DocNavItem {
  title: string;
  href: string;
}
export interface DocNavCategory {
  id: CategoryId;
  title: string;
  items: DocNavItem[];
}

/** Plain, serializable navigation tree for Client Components (which cannot
 *  receive the page `Body` component across the server boundary). */
export const docNav: DocNavCategory[] = docCategories.map((c) => ({
  id: c.id,
  title: c.title,
  items: c.items.map((i) => ({ title: i.meta.title, href: i.href })),
}));

const bySlug = new Map(entries.map((e) => [e.meta.slug, e]));

/** Resolve the optional catch-all `slug` segments to a page. `undefined` or `[]`
 *  maps to the Introduction index. Returns `undefined` for unknown routes. */
export function getDocBySegments(segments?: string[]): DocEntry | undefined {
  return bySlug.get((segments ?? []).join("/"));
}

/** The previous and next pages in reading order, for the pager. */
export function getSiblings(entry: DocEntry): {
  prev?: DocEntry;
  next?: DocEntry;
} {
  const i = docsFlat.findIndex((e) => e.meta.slug === entry.meta.slug);
  return {
    prev: i > 0 ? docsFlat[i - 1] : undefined,
    next: i >= 0 && i < docsFlat.length - 1 ? docsFlat[i + 1] : undefined,
  };
}

/** Static params for `generateStaticParams` — the index yields `{ slug: [] }`. */
export function allDocParams(): { slug: string[] }[] {
  return entries.map((e) => ({
    slug: e.meta.slug === "" ? [] : e.meta.slug.split("/"),
  }));
}
