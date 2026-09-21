import type { Metadata } from "next";
import { ReleaseCard } from "@/components/changelog/release-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { fetchReleases } from "@/lib/api";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Every GitPersona release, with features, improvements, fixes, and security updates as we ship them.",
  alternates: { canonical: "/changelog" },
  openGraph: {
    title: `Changelog — ${site.name}`,
    description:
      "Every GitPersona release, with features, improvements, fixes, and security updates as we ship them.",
    url: `${site.url}/changelog`,
  },
};

export default async function ChangelogPage() {
  const releases = await fetchReleases({ channel: "stable", limit: 20 });

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <Section>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
            <Eyebrow>Changelog</Eyebrow>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              What&apos;s new in <span className="text-gradient">GitPersona</span>.
            </h1>
            <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
              Every release, with the features, improvements, fixes, and
              security updates it shipped.
            </p>
          </div>

          <h2 className="sr-only">Release history</h2>

          {releases === null ? (
            <Reveal className="mt-16">
              <div className="card mx-auto max-w-xl rounded-2xl p-8 text-center">
                <p className="text-sm leading-relaxed text-muted">
                  Release history is temporarily unavailable. Please check
                  back later.
                </p>
              </div>
            </Reveal>
          ) : releases.length === 0 ? (
            <Reveal className="mt-16">
              <div className="card mx-auto max-w-xl rounded-2xl p-8 text-center">
                <p className="text-sm leading-relaxed text-muted">
                  No releases yet. Release history will appear here once
                  GitPersona releases are published.
                </p>
              </div>
            </Reveal>
          ) : (
            <RevealGroup className="mx-auto mt-16 max-w-3xl space-y-6">
              {releases.map((release, index) => (
                <RevealItem key={release.version}>
                  <ReleaseCard release={release} emphasize={index === 0} />
                </RevealItem>
              ))}
            </RevealGroup>
          )}
        </Section>
      </main>
      <Footer />
    </>
  );
}
