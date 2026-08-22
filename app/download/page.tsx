import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FileText } from "@gravity-ui/icons";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WindowsIcon } from "@/components/icons";
import {
  DownloadOptions,
  WINDOWS_API_KEYS,
  resolveDownloadUrl,
} from "@/components/sections/download";
import { ButtonLink } from "@/components/ui/button";
import { fetchAnnouncements, fetchLatestRelease } from "@/lib/api";
import { changelogHref } from "@/lib/changelog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download GitPersona for Windows and Linux — free, no account required, no telemetry. Manage every Git identity from one desktop app.",
  alternates: { canonical: "/download" },
  openGraph: {
    title: `Download ${site.name}`,
    description:
      "Get GitPersona for Windows and Linux — free, no account required.",
    url: `${site.url}/download`,
  },
};

function formatDate(iso: string): string | null {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(d);
}

export default async function DownloadPage() {
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

  const displayVersion = release?.version ?? site.version;
  const updatedAt = release?.publishedAt ? formatDate(release.publishedAt) : null;
  const windowsUrl = resolveDownloadUrl(release, WINDOWS_API_KEYS);

  return (
    <>
      <Header />
      <AnnouncementBanner announcements={announcements} />
      <main className="flex-1">
        {/* Centered download hero */}
        <section className="relative px-6 pt-40 pb-24 text-center sm:pt-48">
          <div className="mx-auto flex max-w-xl flex-col items-center">
            {/* Theme-aware app icon: dark-panel mark on dark, light-panel on light. */}
            <Image
              src="/gitpersona-dark-icon.png"
              alt="GitPersona app icon"
              width={256}
              height={256}
              quality={100}
              priority
              className="theme-logo-dark size-28 rounded-3xl shadow-[0_16px_40px_-16px_rgba(0,0,0,0.7)] sm:size-32"
            />
            <Image
              src="/git-persona-light-icon.png"
              alt=""
              aria-hidden
              width={256}
              height={256}
              quality={100}
              priority
              className="theme-logo-light size-28 rounded-3xl shadow-[0_16px_40px_-16px_rgba(15,42,82,0.28)] sm:size-32"
            />

            <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
              {site.name}
            </h1>

            <div className="mt-9">
              <ButtonLink href={windowsUrl} size="lg">
                <WindowsIcon className="size-4" />
                Download for Windows
              </ButtonLink>
            </div>

            <p className="mt-5 text-sm text-subtle">
              {updatedAt ? `Last updated ${updatedAt} · ` : ""}
              <span className="font-mono">v{displayVersion}</span>
            </p>

            <Link
              href={changelogHref(displayVersion)}
              className="mt-2 inline-flex items-center gap-1 rounded-sm text-sm text-accent-soft transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
            >
              What&apos;s new in v{displayVersion}
              <span aria-hidden>→</span>
            </Link>

            <div className="mt-3">
              <ButtonLink
                href={`${site.githubUrl}/releases`}
                variant="ghost"
                size="sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="size-3.5" />
                Release notes
              </ButtonLink>
            </div>
          </div>
        </section>

        {/* All platforms */}
        <DownloadOptions release={release} />
      </main>
      <Footer version={release?.version} />
    </>
  );
}
