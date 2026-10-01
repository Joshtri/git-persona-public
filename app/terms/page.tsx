import type { Metadata } from "next";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LegalDoc } from "@/components/legal/legal-doc";
import { description, TermsEn, TermsId, title } from "@/content/legal/terms";
import { getSiteData } from "@/lib/page-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: title.en,
  description,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: `${title.en} — ${site.name}`,
    description,
    url: `${site.url}/terms`,
  },
};

export default async function TermsPage() {
  const { release, announcements } = await getSiteData();

  return (
    <>
      <Header />
      <AnnouncementBanner announcements={announcements} />
      <main className="flex-1">
        <LegalDoc title={title} en={<TermsEn />} id={<TermsId />} />
      </main>
      <Footer version={release?.version} />
    </>
  );
}
