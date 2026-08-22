import type { Metadata } from "next";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Roadmap } from "@/components/sections/roadmap";
import { getSiteData } from "@/lib/page-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "What's shipped in GitPersona and what's coming next — cloud sync, team profiles, GitLab and Bitbucket support, and workspace automation.",
  alternates: { canonical: "/roadmap" },
  openGraph: {
    title: `Roadmap — ${site.name}`,
    description: "Shipped features and what's next for GitPersona.",
    url: `${site.url}/roadmap`,
  },
};

export default async function RoadmapPage() {
  const { release, announcements } = await getSiteData();

  return (
    <>
      <Header />
      <AnnouncementBanner announcements={announcements} />
      <main className="flex-1 pt-16">
        <Roadmap />
      </main>
      <Footer version={release?.version} />
    </>
  );
}
