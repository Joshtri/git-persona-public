import { AnnouncementBanner } from "@/components/announcement-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Compatibility } from "@/components/sections/compatibility";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Preview } from "@/components/sections/preview";
import { Problem } from "@/components/sections/problem";
import { Screenshots } from "@/components/sections/screenshots";
import { Workflow } from "@/components/sections/workflow";
import { StructuredData } from "@/components/structured-data";
import { getSiteData } from "@/lib/page-data";

export default async function Home() {
  const { release, announcements } = await getSiteData();

  return (
    <>
      <StructuredData />
      <Header />
      <AnnouncementBanner announcements={announcements} />
      <main className="flex-1">
        <Hero />
        <Compatibility />
        <Problem />
        <Preview />
        <Features preview />
        <Screenshots />
        <Workflow />
        <Faq />
      </main>
      <Footer version={release?.version} />
    </>
  );
}
