import { site } from "./site";
import type { BlogEntry } from "./blog/types";
import type {
	Announcement,
	ApiBlogPost,
	ChangelogRelease,
	LatestReleaseData,
} from "./types";

type ApiEnvelope<T> = {
	success: boolean;
	message: string;
	data: T;
};

const apiBase =
	process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? site.apiUrl;

async function apiFetch<T>(path: string): Promise<T | null> {
	try {
		const res = await fetch(`${apiBase}${path}`, {
			next: { revalidate: 3600 },
		});
		if (!res.ok) return null;
		const json: ApiEnvelope<T> = await res.json();
		return json.success ? json.data : null;
	} catch {
		return null;
	}
}

export async function fetchLatestRelease(): Promise<LatestReleaseData | null> {
	return apiFetch<LatestReleaseData>("/updates/latest?channel=stable");
}

// Public release history for the Changelog page. Returns `null` on any
// failure (network error, non-2xx, success:false) and `[]` when the API is
// reachable but has no releases yet — the Changelog page renders a different
// message for each case. Same null-on-failure contract as fetchLatestRelease.
export async function fetchReleases(
	options: { channel?: string; limit?: number } = {},
): Promise<ChangelogRelease[] | null> {
	const params = new URLSearchParams();
	params.set("channel", options.channel ?? "stable");
	if (options.limit) params.set("limit", String(options.limit));

	return apiFetch<ChangelogRelease[]>(`/updates?${params.toString()}`);
}

export async function fetchAnnouncements(): Promise<Announcement[]> {
	const data = await apiFetch<Announcement[]>("/announcements/");
	return data ?? [];
}

function toBlogEntry(post: ApiBlogPost): BlogEntry {
	return {
		meta: {
			slug: post.slug,
			title: post.title,
			description: post.description,
			publishedAt: post.publishedAt ?? post.createdAt,
			updatedAt: post.updatedAt,
			category: post.category,
			tags: post.tags,
			author: post.author,
			coverImage: post.coverImage,
			featured: post.featured,
			readingTime: post.readingTime,
		},
		href: `/blog/${post.slug}`,
		content: post.content,
	};
}

export async function fetchBlogPosts(): Promise<BlogEntry[]> {
	const data = await apiFetch<ApiBlogPost[]>("/blog");
	return (data ?? []).map(toBlogEntry);
}

export async function fetchBlogPost(slug: string): Promise<BlogEntry | null> {
	const data = await apiFetch<ApiBlogPost>(`/blog/${encodeURIComponent(slug)}`);
	return data ? toBlogEntry(data) : null;
}
