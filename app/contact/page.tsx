import type { Metadata } from "next";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LegalDoc } from "@/components/legal/legal-doc";
import { description, ContactEn, ContactId, title } from "@/content/legal/contact";
import { getSiteData } from "@/lib/page-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: title.en,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${title.en} — ${site.name}`,
    description,
    url: `${site.url}/contact`,
  },
};

export default async function ContactPage() {
  const { release, announcements } = await getSiteData();

  return (
    <>
      <Header />
      <AnnouncementBanner announcements={announcements} />
      <main className="flex-1">
        <LegalDoc title={title} en={<ContactEn />} id={<ContactId />} />
      </main>
      <Footer version={release?.version} />
    </>
  );
}
