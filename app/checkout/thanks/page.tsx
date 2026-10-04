import type { Metadata } from "next";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { CheckoutThanks } from "@/components/checkout-thanks";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getSiteData } from "@/lib/page-data";

// Post-payment landing page; only reachable from DOKU checkout, so keep it
// out of search results and the sitemap.
export const metadata: Metadata = {
  title: "Thanks for your purchase",
  robots: { index: false, follow: false },
};

export default async function CheckoutThanksPage() {
  const { release, announcements } = await getSiteData();

  return (
    <>
      <Header />
      <AnnouncementBanner announcements={announcements} />
      <main className="flex-1">
        <CheckoutThanks />
      </main>
      <Footer version={release?.version} />
    </>
  );
}
