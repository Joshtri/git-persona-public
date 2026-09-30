import { site } from "@/lib/site";
import type { Release } from "@/lib/types";

export const WINDOWS_API_KEYS = ["windows-x86_64"];

/** First platform key in `apiKeys` that has an asset in `release`, if any. */
export function resolvePlatformKey(
  release: Release | null | undefined,
  apiKeys: string[]
): string | null {
  return apiKeys.find((key) => release?.platforms?.[key]?.url) ?? null;
}

export function resolveDownloadUrl(
  release: Release | null | undefined,
  apiKeys: string[]
): string {
  const key = resolvePlatformKey(release, apiKeys);
  return key && release ? release.platforms[key].url : `${site.url}/download`;
}
