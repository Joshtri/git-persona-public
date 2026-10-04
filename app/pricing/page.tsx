import type { Metadata } from "next";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Pricing } from "@/components/sections/pricing";
import { fetchPricing } from "@/lib/api";
import { getSiteData } from "@/lib/page-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "GitPersona is free for up to 3 Git identities, with every feature included and no account required. Pro unlocks unlimited identities for freelancers and multi-client work.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: `Pricing — ${site.name}`,
    description:
      "Free for up to 3 Git identities. Pro for unlimited identities across up to 3 devices.",
    url: `${site.url}/pricing`,
  },
};

export default async function PricingPage() {
  const [{ release, announcements }, catalog] = await Promise.all([
    getSiteData(),
    fetchPricing(),
  ]);

  return (
    <>
      <Header />
      <AnnouncementBanner announcements={announcements} />
      <main className="flex-1">
        <Pricing catalog={catalog} />
      </main>
      <Footer version={release?.version} />
    </>
  );
}
