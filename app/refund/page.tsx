import type { Metadata } from "next";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LegalDoc } from "@/components/legal/legal-doc";
import { description, RefundEn, RefundId, title } from "@/content/legal/refund";
import { getSiteData } from "@/lib/page-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: title.en,
  description,
  alternates: { canonical: "/refund" },
  openGraph: {
    title: `${title.en} — ${site.name}`,
    description,
    url: `${site.url}/refund`,
  },
};

export default async function RefundPage() {
  const { release, announcements } = await getSiteData();

  return (
    <>
      <Header />
      <AnnouncementBanner announcements={announcements} />
      <main className="flex-1">
        <LegalDoc title={title} en={<RefundEn />} id={<RefundId />} />
      </main>
      <Footer version={release?.version} />
    </>
  );
}
