import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ArticleCard, FeaturedArticleCard } from "@/components/blog/article-card";
import { fetchBlogPosts } from "@/lib/api";
import { pickFeatured, pickLatest } from "@/lib/blog/registry";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on Git identity, automation, and the engineering behind GitPersona — from the team building it.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog — ${site.name}`,
    description:
      "Product stories, engineering notes, and Git workflow ideas from the GitPersona team.",
    url: `${site.url}/blog`,
  },
};

export default async function BlogIndexPage() {
  const entries = await fetchBlogPosts();
  const featuredEntry = pickFeatured(entries);
  const latestEntries = pickLatest(entries, featuredEntry);

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <Section>
          <SectionHeading
            eyebrow="Blog"
            title={
              <>
                Notes on Git identity{" "}
                <span className="text-gradient">and building GitPersona</span>.
              </>
            }
            description="Why we're building GitPersona the way we are, the workflows it replaces, and the engineering behind keeping your credentials safe."
          />

          {featuredEntry ? (
            <Reveal className="mt-14">
              <FeaturedArticleCard entry={featuredEntry} />
            </Reveal>
          ) : null}

          {latestEntries.length > 0 ? (
            <div className="mt-16">
              <h2 className="text-sm font-semibold tracking-widest text-subtle uppercase">
                Latest articles
              </h2>
              <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {latestEntries.map((entry) => (
                  <RevealItem key={entry.meta.slug}>
                    <ArticleCard entry={entry} />
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          ) : null}
        </Section>
      </main>
      <Footer />
    </>
  );
}
