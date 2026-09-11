// Centralized product metadata.
// Update version, download availability, and roadmap here on each release.
// Download sizes are intentionally omitted — add them once build artifacts are measured.

export type DownloadPlatform =
  | { available: true; version: string; label: string; format: string }
  | { available: false; label: string };

export interface RoadmapItem {
  title: string;
  body: string;
  eta?: string; // omit when unconfirmed; include only confirmed commitments
}

export const site = {
  name: "GitPersona",
  tagline: "Never commit with the wrong Git identity again.",
  description:
    "GitPersona is a desktop app for managing multiple Git identities — profiles, SSH keys, credentials, and repository mappings — with automatic switching.",
  url: "https://gitpersona.dev",
  version: "0.9.6",
  // Current temporary repository. Centralized here so all components update together.
  githubUrl: "https://github.com/Joshtri/git-persona",
  // GitPersona Server public API base URL. Used for dynamic release/announcement data.
  apiUrl: "https://api-gitpersona.vercel.app",
  keywords: [
    "Git Profile Manager",
    "GitHub Multiple Accounts",
    "Git Identity Manager",
    "Switch Git Profile",
    "Multiple GitHub Accounts",
    "Git SSH Manager",
    "Git Credential Manager",
    "Git Productivity Tool",
    "Developer Tools",
    "Cross Platform Git Tool",
  ],
  downloads: {
    windows: {
      available: true as const,
      version: "0.9.6",
      label: "Windows 10 / 11",
      format: ".exe installer",
    },
    linux: {
      available: true as const,
      version: "0.9.6",
      label: "Ubuntu 20.04+",
      format: ".deb / .AppImage",
    },
    macos: {
      available: true as const,
      version: "0.9.6",
      label: "Apple Silicon (M1 / M2 / M3)",
      format: ".dmg",
    },
  } as Record<string, DownloadPlatform>,
  roadmap: {
    shipped: [
      {
        title: "Git profile management",
        body: "Create, edit, and switch unlimited identities — name, email, and GPG signing key bundled per profile.",
      },
      {
        title: "SSH key manager",
        body: "Import, generate, and assign SSH keys per profile. Host aliases managed automatically.",
      },
      {
        title: "Credential vault",
        body: "HTTPS tokens stored in your OS keychain, scoped per profile. Nothing in plaintext.",
      },
      {
        title: "Repository mapping",
        body: "Bind folders to profiles. Enter a repository — the right identity is already active.",
      },
      {
        title: "Auto-assignment rules",
        body: "Declarative rules match on path, remote URL, host, and owner. Export and import rule sets.",
      },
      {
        title: "Repository groups",
        body: "Organize repositories into labeled groups across clients and projects.",
      },
      {
        title: "Audit log",
        body: "Full history of every identity change, profile update, and rule application.",
      },
    ] as RoadmapItem[],
    upcoming: [
      {
        title: "Cloud sync",
        body: "Encrypted profile sync across your machines.",
      },
      {
        title: "Team profiles",
        body: "Share identity templates across your team.",
      },
      {
        title: "GitLab support",
        body: "First-class credential and SSH support for GitLab.",
      },
      {
        title: "Bitbucket support",
        body: "Native support for Bitbucket Cloud and Server.",
      },
      {
        title: "Workspace automation",
        body: "Run scripts and set environment variables on identity switch.",
      },
    ] as RoadmapItem[],
  },
};

export const nav = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/#workflow" },
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "Compare", href: "/compare" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Download", href: "/download" },
] as const;
