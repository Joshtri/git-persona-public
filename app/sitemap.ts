import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { docsFlat } from "@/lib/docs/registry";
import { fetchBlogPosts } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const docs: MetadataRoute.Sitemap = docsFlat.map((entry) => ({
    url: `${site.url}${entry.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    // The docs landing (Introduction) ranks a touch higher than inner pages.
    priority: entry.href === "/docs" ? 0.8 : 0.6,
  }));

  const blogEntries = await fetchBlogPosts();
  const blog: MetadataRoute.Sitemap = blogEntries.map((entry) => ({
    url: `${site.url}${entry.href}`,
    lastModified: new Date(entry.meta.updatedAt ?? entry.meta.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/download`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site.url}/features`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/compare`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/roadmap`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${site.url}/changelog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...docs,
    ...blog,
  ];
}
