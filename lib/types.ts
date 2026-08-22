export type ReleaseNote = {
  type: "feature" | "improvement" | "fix" | "security";
  title: string;
  description?: string;
};

export type PlatformAsset = {
  url: string;
  signature?: string;
};

export type Release = {
  version: string;
  channel: string;
  title: string;
  summary: string;
  releaseNotes: ReleaseNote[];
  minimumVersion: string | null;
  forceUpdate: boolean;
  platforms: Record<string, PlatformAsset>;
  publishedAt: string;
  active: boolean;
};

export type LatestReleaseData = {
  updateAvailable: boolean;
  forceUpdate: boolean;
  latest: Release | null;
};

// Public release history entry (GET /updates), used by the Changelog page.
// Intentionally narrower than `Release` — the server's public DTO omits
// internal/admin-only fields (active, forceUpdate, minimumVersion, platforms).
export type ChangelogRelease = {
  version: string;
  channel: string;
  title: string;
  summary: string;
  releaseNotes: ReleaseNote[];
  publishedAt: string;
};

export type AnnouncementAction = {
  label: string;
  url: string;
};

export type Announcement = {
  _id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning";
  priority: "low" | "normal" | "high";
  enabled: boolean;
  startAt: string;
  endAt: string;
  dismissible: boolean;
  action: AnnouncementAction | null;
};

export type ApiBlogPost = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  category: "product" | "engineering" | "git-workflows" | "developer-productivity";
  tags: string[];
  author: string;
  coverImage: string | null;
  featured: boolean;
  readingTime: number;
  status: "draft" | "published";
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};
