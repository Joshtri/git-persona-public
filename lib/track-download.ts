import { apiBase } from "./api";

export type DownloadSource = "download-hero" | "download-card";

/**
 * Records an anonymous download click with the GitPersona Server.
 *
 * Fire-and-forget: the download link itself still points straight at the
 * release asset, so a blocked or failed beacon never breaks the download.
 * Params go in the query string with no body, which keeps this a CORS "simple"
 * request — no preflight, and the site's origin need not be allowlisted.
 */
export function trackDownload(params: {
  platform: string;
  version?: string;
  source: DownloadSource;
}) {
  if (typeof window === "undefined") return;
  const query = new URLSearchParams({ platform: params.platform, source: params.source });
  if (params.version) query.set("version", params.version);
  const url = `${apiBase}/downloads?${query.toString()}`;

  try {
    if (navigator.sendBeacon?.(url)) return;
    // sendBeacon missing or refused (queue full) — keepalive fetch outlives
    // the navigation to the asset URL the same way.
    void fetch(url, { method: "POST", mode: "no-cors", keepalive: true }).catch(() => {});
  } catch {
    // Tracking must never interfere with the download.
  }
}
