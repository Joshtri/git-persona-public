import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Comparison", href: "/compare" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Download", href: "/download" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Blog", href: "/blog" },
      { label: "Changelog", href: "/changelog" },
      { label: "GitHub", href: site.githubUrl, external: true },
      { label: "GitHub Releases", href: `${site.githubUrl}/releases`, external: true },
      { label: "Issues", href: `${site.githubUrl}/issues`, external: true },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "License", href: "/license" },
    ],
  },
];

export function Footer({ version }: { version?: string }) {
  const displayVersion = version ?? site.version;
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight"
            >
              {/* Theme-aware brand mark (mirrors the header). */}
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
              {site.tagline} One desktop app for all your Git identities.
            </p>
            <p className="font-mono text-xs text-subtle">
              v{displayVersion} — Windows · Linux
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-subtle transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-subtle transition-colors hover:text-foreground"
                      >
                        {link.label}
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
            © {new Date().getFullYear()} GitPersona. All rights reserved.
          </p>
          <p className="font-mono text-xs text-subtle">
            Built for developers who wear more than one hat.
          </p>
        </div>
      </div>
    </footer>
  );
}
