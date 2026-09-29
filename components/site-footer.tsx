import { fetchLatestRelease } from "@/lib/api";
import { Footer } from "./footer";

/**
 * Footer for pages that don't already fetch the latest release. Fetches it
 * itself (deduped with any identical fetch in the same render) so the version
 * shown always matches the API instead of the hardcoded `site.version`.
 */
export async function SiteFooter() {
  const data = await fetchLatestRelease();
  return <Footer version={data?.latest?.version} />;
}
