"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { site } from "@/lib/site";

export function Footer({ version }: { version?: string }) {
  const { t } = useTranslation();
  const displayVersion = version ?? site.version;

  const columns = [
    {
      headingKey: "footer.product",
      links: [
        { labelKey: "footer.features", href: "/features" },
        { labelKey: "footer.comparison", href: "/compare" },
        { labelKey: "footer.roadmap", href: "/roadmap" },
        { labelKey: "footer.download", href: "/download" },
      ],
    },
    {
      headingKey: "footer.resources",
      links: [
        { labelKey: "footer.documentation", href: "/docs" },
        { labelKey: "footer.blog", href: "/blog" },
        { labelKey: "footer.changelog", href: "/changelog" },
        { labelKey: "footer.github", href: site.githubUrl, external: true },
        { labelKey: "footer.githubReleases", href: `${site.githubUrl}/releases`, external: true },
        { labelKey: "footer.issues", href: `${site.githubUrl}/issues`, external: true },
      ],
    },
    {
      headingKey: "footer.legal",
      links: [
        { labelKey: "footer.privacy", href: "/privacy" },
        { labelKey: "footer.license", href: "/license" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight"
            >
              <Image
                src="/gitpersona-dark-icon.png"
                alt="GitPersona"
                width={96}
                height={96}
                quality={100}
                className="theme-logo-dark size-8 rounded-lg"
              />
              <Image
                src="/git-persona-light-icon.png"
                alt=""
                aria-hidden
                width={96}
                height={96}
                quality={100}
                className="theme-logo-light size-8 rounded-lg"
              />
              GitPersona
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-subtle">
              {site.tagline} {t("footer.tagline")}
            </p>
            <p className="font-mono text-xs text-subtle">
              v{displayVersion} — Windows · Linux
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.headingKey} aria-label={t(col.headingKey)}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                {t(col.headingKey)}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.labelKey}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-subtle transition-colors hover:text-foreground"
                      >
                        {t(link.labelKey)}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-subtle transition-colors hover:text-foreground"
                      >
                        {t(link.labelKey)}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-subtle">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <p className="font-mono text-xs text-subtle">
            {t("footer.builtFor")}
          </p>
        </div>
      </div>
    </footer>
  );
}
