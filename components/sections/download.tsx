import {
  Clock,
  ArrowDownToLine as DownloadIcon,
  FileText,
} from "@gravity-ui/icons";
import { site } from "@/lib/site";
import type { DownloadPlatform } from "@/lib/site";
import type { Release } from "@/lib/types";
import { AppleIcon, TuxIcon, WindowsIcon } from "../icons";
import { Section, SectionHeading } from "../ui/section";
import { RevealGroup, RevealItem, Reveal } from "../ui/reveal";
import { ButtonLink } from "../ui/button";

type IconComponent = (props: { className?: string }) => React.ReactElement;

type PlatformVariant = { key: string; label: string };

type PlatformEntry = {
  id: string;
  name: string;
  Icon: IconComponent;
  /** Brand-tinted icon chip (background + border). */
  chipClass: string;
  /** Brand-tinted glyph color. */
  iconClass: string;
  primary: boolean;
  platform: DownloadPlatform;
  apiKeys: string[];
  variants?: PlatformVariant[];
};

const LINUX_VARIANTS: PlatformVariant[] = [
  { key: "linux-x86_64-deb",  label: "amd64 — .deb" },
  { key: "linux-x86_64",      label: "x86_64 — .AppImage" },
  { key: "linux-aarch64-deb", label: "arm64 — .deb" },
  { key: "linux-aarch64",     label: "aarch64 — .AppImage" },
];

const platforms: PlatformEntry[] = [
  {
    id: "windows",
    name: "Windows",
    Icon: WindowsIcon,
    chipClass: "border-accent/25 bg-accent/10",
    iconClass: "text-accent-bright",
    primary: true,
    platform: site.downloads.windows,
    apiKeys: ["windows-x86_64"],
  },
  {
    id: "linux",
    name: "Linux",
    Icon: TuxIcon,
    chipClass: "border-amber-400/25 bg-amber-400/10",
    iconClass: "text-amber-300",
    primary: false,
    platform: site.downloads.linux,
    apiKeys: ["linux-x86_64-deb", "linux-x86_64"],
    variants: LINUX_VARIANTS,
  },
  {
    id: "macos",
    name: "macOS",
    Icon: AppleIcon,
    chipClass: "border-white/10 bg-white/[0.06]",
    iconClass: "text-foreground",
    primary: false,
    platform: site.downloads.macos,
    apiKeys: ["darwin-aarch64"],
  },
];

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
  return `${site.githubUrl}/releases/latest`;
}

function resolveVariantUrls(
  release: Release | null | undefined,
  variants: PlatformVariant[]
): { label: string; url: string }[] | null {
  if (!release?.platforms) return null;
  const resolved = variants
    .filter((v) => release.platforms[v.key]?.url)
    .map((v) => ({ label: v.label, url: release.platforms[v.key].url }));
  return resolved.length > 0 ? resolved : null;
}

export function DownloadOptions({ release }: { release?: Release | null }) {
  const displayVersion = release?.version ?? site.version;

  return (
    <Section id="download">
      <div
        aria-hidden
        className="glow absolute inset-x-0 top-0 -z-10 mx-auto h-72 max-w-2xl opacity-35"
      />
      <SectionHeading
        eyebrow="All platforms"
        title={
          <>
            Pick your <span className="text-gradient">platform</span>.
          </>
        }
        description={`Version ${displayVersion} — free, no account required, no telemetry.`}
      />
      <RevealGroup className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
        {platforms.map(
          ({ id, name, Icon, chipClass, iconClass, primary, platform, apiKeys, variants }) => {
          const downloadUrl = resolveDownloadUrl(release, apiKeys);
          const variantUrls = variants ? resolveVariantUrls(release, variants) : null;
          return (
            <RevealItem key={id} className="h-full">
              <article
                className={`card flex h-full flex-col items-center gap-1 rounded-2xl p-7 text-center transition-colors ${
                  primary ? "ring-accent border-accent/30" : "hover:border-white/[0.14]"
                }`}
              >
                <span
                  className={`mb-4 flex size-12 items-center justify-center rounded-xl border ${chipClass}`}
                >
                  <Icon className={`size-6 ${iconClass}`} />
                </span>
                <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
                <p className="text-xs text-subtle">{platform.label}</p>
                {platform.available ? (
                  <>
                    <p className="mt-3 font-mono text-[11px] text-subtle">
                      v{displayVersion}
                      {!variantUrls && ` · ${platform.format}`}
                    </p>
                    {variantUrls ? (
                      <div className="mt-5 w-full flex flex-col gap-2">
                        {variantUrls.map(({ label, url }) => (
                          <ButtonLink
                            key={label}
                            href={url}
                            variant="secondary"
                            size="sm"
                            className="w-full"
                          >
                            <DownloadIcon className="size-3.5" />
                            {label}
                          </ButtonLink>
                        ))}
                      </div>
                    ) : (
                      <div className="mt-5 w-full">
                        <ButtonLink
                          href={downloadUrl}
                          variant={primary ? "primary" : "secondary"}
                          size="sm"
                          className="w-full"
                        >
                          <DownloadIcon className="size-3.5" />
                          Download
                        </ButtonLink>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <p className="mt-3 font-mono text-[11px] text-subtle">
                      In development
                    </p>
                    <div className="mt-5 w-full">
                      <span className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-sm text-subtle">
                        <Clock className="size-3.5" />
                        Coming soon
                      </span>
                    </div>
                  </>
                )}
              </article>
            </RevealItem>
          );
        })}
      </RevealGroup>
      <Reveal className="mt-8 flex justify-center">
        <ButtonLink
          href={`${site.githubUrl}/releases`}
          variant="ghost"
          size="sm"
        >
          <FileText className="size-3.5" />
          Release notes
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
