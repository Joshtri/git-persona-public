import { fetchAnnouncements, fetchLatestRelease } from "./api";
import type { Announcement, Release } from "./types";

/**
 * Shared server-side fetch for the page chrome (Header banner + Footer version).
 * Best-effort: network failures degrade to null/empty without throwing.
 */
export async function getSiteData(): Promise<{
  release: Release | null;
  announcements: Announcement[];
}> {
  const [releaseResult, announcementsResult] = await Promise.allSettled([
    fetchLatestRelease(),
    fetchAnnouncements(),
  ]);

  const release =
    releaseResult.status === "fulfilled" && releaseResult.value?.latest
      ? releaseResult.value.latest
      : null;

  const announcements =
    announcementsResult.status === "fulfilled" ? announcementsResult.value : [];

  return { release, announcements };
}
