import { Bug, ShieldCheck, Sparkles, Wrench } from "@gravity-ui/icons";
import type { ComponentType } from "react";
import { versionToChangelogAnchor } from "@/lib/changelog";
import type { ChangelogRelease, ReleaseNote } from "@/lib/types";

const NOTE_CATEGORY_META: Record<
  ReleaseNote["type"],
  { label: string; icon: ComponentType<{ className?: string }> }
> = {
  feature: { label: "Features", icon: Sparkles },
  improvement: { label: "Improvements", icon: Wrench },
  fix: { label: "Fixes", icon: Bug },
  security: { label: "Security", icon: ShieldCheck },
};

// Fixed presentation order regardless of how notes are stored/returned.
const NOTE_CATEGORY_ORDER: ReleaseNote["type"][] = [
  "feature",
  "improvement",
  "fix",
  "security",
];

function groupNotesByCategory(notes: ReleaseNote[]) {
  return NOTE_CATEGORY_ORDER.map((type) => ({
    type,
    notes: notes.filter((note) => note.type === type),
  })).filter((group) => group.notes.length > 0);
}

function formatDate(iso: string): string | null {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function ReleaseCard({
  release,
  emphasize = false,
}: {
  release: ChangelogRelease;
  emphasize?: boolean;
}) {
  const groups = groupNotesByCategory(release.releaseNotes);
  const publishedDate = formatDate(release.publishedAt);

  return (
    <div
      id={versionToChangelogAnchor(release.version)}
      className={`card scroll-mt-24 rounded-2xl p-6 sm:p-8 ${emphasize ? "ring-accent" : ""}`}
    >
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-mono text-sm font-semibold text-accent-soft">
          v{release.version}
        </span>
        <h3 className="text-lg font-semibold tracking-tight text-balance text-foreground">
          {release.title}
        </h3>
      </div>

      {publishedDate ? (
        <time dateTime={release.publishedAt} className="mt-1.5 block text-xs text-subtle">
          {publishedDate}
        </time>
      ) : null}

      {release.summary ? (
        <p className="mt-4 text-sm leading-relaxed text-pretty text-muted">
          {release.summary}
        </p>
      ) : null}

      {groups.length > 0 ? (
        <div className="mt-6 space-y-5">
          {groups.map((group) => {
            const meta = NOTE_CATEGORY_META[group.type];
            const Icon = meta.icon;
            return (
              <div key={group.type}>
                <h4 className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-subtle uppercase">
                  <Icon className="size-3.5" aria-hidden />
                  {meta.label}
                </h4>
                <ul className="mt-2.5 space-y-2.5">
                  {group.notes.map((note, index) => (
                    <li key={index} className="text-sm leading-relaxed text-muted">
                      <span className="text-foreground">{note.title}</span>
                      {note.description ? (
                        <span className="mt-0.5 block text-xs text-subtle">
                          {note.description}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
