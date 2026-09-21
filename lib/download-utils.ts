import { site } from "@/lib/site";
import type { Release } from "@/lib/types";

export const WINDOWS_API_KEYS = ["windows-x86_64"];

export function resolveDownloadUrl(
  release: Release | null | undefined,
  apiKeys: string[]
): string {
  if (release?.platforms) {
    for (const key of apiKeys) {
      const url = release.platforms[key]?.url;
      if (url) return url;
    }
  }
  return `${site.url}/download`;
}
