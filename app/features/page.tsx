import type { Metadata } from "next";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Features } from "@/components/sections/features";
import { Solution } from "@/components/sections/solution";
import { getSiteData } from "@/lib/page-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Every GitPersona feature — profiles, SSH keys, credentials, repository mapping, and rule-based auto-assignment. One desktop app for all your Git identities.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: `Features — ${site.name}`,
    description:
      "Profiles, SSH keys, credentials, repo mapping, and rules — everything GitPersona does.",
    url: `${site.url}/features`,
  },
};

export default async function FeaturesPage() {
  const { release, announcements } = await getSiteData();

  return (
    <>
      <Header />
      <AnnouncementBanner announcements={announcements} />
      <main className="flex-1 pt-16">
        <Features />
        <Solution />
      </main>
      <Footer version={release?.version} />
    </>
  );
}
