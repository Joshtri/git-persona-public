# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Next.js version warning

This project uses **Next.js 16** (currently `16.2.10`) — a version with breaking changes from what is in training data. Before writing any Next.js-specific code (routing, metadata, params, fetch caching), read the relevant guide in `node_modules/next/dist/docs/`. Do not assume App Router conventions from Next.js 13–15 apply unchanged.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint (eslint-config-next)
```

There are no tests in this repository.

## Architecture

This is a **marketing/documentation site** for the GitPersona desktop app — not the app itself.

### Single source of truth: `lib/site.ts`

All product metadata lives here: site URL, version, download status per platform, roadmap items, and nav links. **Every SEO URL, OG tag, sitemap entry, and robots.txt is derived from `site.url`.** When updating the domain, changing only `site.url` is sufficient.

`lib/site.ts` also exports `site.apiUrl`, which is the GitPersona Server base URL. It can be overridden at runtime via `NEXT_PUBLIC_API_URL`.

### API layer: `lib/api.ts`

All external data fetches go through `apiFetch()`, which targets `site.apiUrl`. Responses use a `{ success, message, data }` envelope. Functions:
- `fetchLatestRelease()` — used on the Download page for the current release
- `fetchReleases()` — used on the Changelog page for full release history
- `fetchAnnouncements()` — announcement banner data
- `fetchBlogPosts()` / `fetchBlogPost(slug)` — blog content (stored and served by the API, not locally)

All fetches use `next: { revalidate: 3600 }` (ISR, 1-hour cache). All return `null` on failure — pages must handle the `null` case gracefully.

### Docs system

Docs pages are **authored locally** as TSX modules in `content/docs/<category>/<slug>.tsx`. Each module must export:
- `meta: DocMeta` — slug, title, description, category, order, optional `toc`
- `Body: ComponentType` — the page content, using prose components from `components/docs/prose.tsx`

Registration is done by importing the module into `lib/docs/registry.ts` and adding it to the `modules` array. The registry automatically builds sidebar nav (`docNav`), flat reading order (`docsFlat`), and `generateStaticParams` output. **Never duplicate category/ordering logic in components** — derive from the registry.

Doc prose components (`H2`, `P`, `Ul`, `Li`, `A`, `Code`, `Lead`) live in `components/docs/prose.tsx`. Use `<Callout variant="note|warning|tip">` from `components/docs/callout.tsx` for callout blocks.

The `meta.slug` for the Introduction/index page is `""` (empty string), which maps to `/docs`.

### Blog system

Blog content is **fetched from the API** (not authored locally). `lib/blog/registry.ts` only provides pure helper functions (featured selection, related articles, pagination) that operate on `BlogEntry[]` — it does not store any data. `lib/blog/types.ts` defines the `BlogEntry` and `BlogMeta` shapes.

### Routing

All routes are in `app/` using the App Router. Key layout boundaries:
- `app/layout.tsx` — root layout with global metadata, fonts, theme-flash script
- `app/docs/layout.tsx` — wraps all `/docs/**` with sidebar + mobile nav

The docs route uses `[[...slug]]` (optional catch-all), so `/docs` and `/docs/getting-started/installation` are both handled by `app/docs/[[...slug]]/page.tsx`.

### SEO & structured data

- `app/sitemap.ts` — generates the full sitemap dynamically (docs from registry + blog from API + static routes)
- `app/robots.ts` — points to `${site.url}/sitemap.xml`
- `app/opengraph-image.tsx` — generates the default OG image via `ImageResponse`
- `components/structured-data.tsx` — JSON-LD for `SoftwareApplication` and `FAQPage` (used on the home page)
- Per-page structured data (BlogPosting, Article) is inlined in the page component

### Components

- `components/ui/` — primitives: `Button`/`ButtonLink`, `Badge`/`Eyebrow`, `Section`, `Reveal`/`RevealGroup`/`RevealItem`
- `components/sections/` — landing page sections (hero, features, workflow, problem, solution, etc.)
- `components/docs/` — docs chrome: sidebar, TOC, pager, mobile nav, prose, callout, code-block
- `components/blog/` — blog card component
- `components/changelog/` — release card component
- `components/header.tsx` / `components/footer.tsx` — shared shell
- `components/announcement-banner.tsx` — fetches and renders active announcements
- `components/structured-data.tsx` — JSON-LD injection for home page
