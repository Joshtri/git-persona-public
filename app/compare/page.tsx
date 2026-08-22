import type { Metadata } from "next";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Comparison } from "@/components/sections/comparison";
import { getSiteData } from "@/lib/page-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compare",
  description:
    "GitPersona vs. manual Git configuration — speed, SSH management, credential switching, rule-based auto-assignment, and wrong-identity prevention, side by side.",
  alternates: { canonical: "/compare" },
  openGraph: {
    title: `Compare — ${site.name}`,
    description:
      "How GitPersona compares to scripts, aliases, and manual Git config.",
    url: `${site.url}/compare`,
  },
};

export default async function ComparePage() {
  const { release, announcements } = await getSiteData();

  return (
    <>
      <Header />
      <AnnouncementBanner announcements={announcements} />
      <main className="flex-1 pt-16">
        <Comparison />
      </main>
      <Footer version={release?.version} />
    </>
  );
}
