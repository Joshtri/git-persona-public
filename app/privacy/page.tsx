import type { Metadata } from "next";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LegalDoc } from "@/components/legal/legal-doc";
import { description, PrivacyEn, PrivacyId, title } from "@/content/legal/privacy";
import { getSiteData } from "@/lib/page-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: title.en,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: `${title.en} — ${site.name}`,
    description,
    url: `${site.url}/privacy`,
  },
};

export default async function PrivacyPage() {
  const { release, announcements } = await getSiteData();

  return (
    <>
      <Header />
      <AnnouncementBanner announcements={announcements} />
      <main className="flex-1">
        <LegalDoc title={title} en={<PrivacyEn />} id={<PrivacyId />} />
      </main>
      <Footer version={release?.version} />
    </>
  );
}
