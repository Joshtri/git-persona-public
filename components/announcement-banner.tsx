"use client";

import { useState } from "react";
import type { Announcement } from "@/lib/types";

const typeStyles: Record<Announcement["type"], string> = {
  info: "border-accent/30 bg-accent/[0.07] text-accent-soft",
  success: "border-emerald-500/30 bg-emerald-500/[0.07] text-emerald-400",
  warning: "border-amber-400/30 bg-amber-400/[0.07] text-amber-300",
};

export function AnnouncementBanner({
  announcements,
}: {
  announcements: Announcement[];
}) {
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(new Set());

  const visible = announcements.find((a) => !dismissedIds.has(a._id));
  if (!visible) return null;

  const dismiss = () =>
    setDismissedIds((prev) => new Set([...prev, visible._id]));

  return (
    <div
      className={`relative border-b px-4 py-2.5 text-center text-sm ${typeStyles[visible.type]}`}
    >
      <span className="font-medium">{visible.title}</span>
      {visible.message && (
        <span className="ml-1.5 opacity-80">{visible.message}</span>
      )}
      {visible.action && (
        <a
          href={visible.action.url}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 underline underline-offset-2 hover:opacity-100 opacity-80"
        >
          {visible.action.label}
        </a>
      )}
      {visible.dismissible && (
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity text-base leading-none"
        >
          ×
        </button>
      )}
    </div>
  );
}
