import type { ReactNode } from "react";
import { Bulb, CircleInfo, TriangleExclamation } from "@gravity-ui/icons";

type Variant = "note" | "tip" | "warning";

const styles: Record<
  Variant,
  { label: string; icon: typeof CircleInfo; ring: string; iconColor: string }
> = {
  note: {
    label: "Note",
    icon: CircleInfo,
    ring: "border-accent/30 bg-accent/[0.06]",
    iconColor: "text-accent-soft",
  },
  tip: {
    label: "Tip",
    icon: Bulb,
    ring: "border-success/30 bg-success/[0.06]",
    iconColor: "text-success",
  },
  warning: {
    label: "Warning",
    icon: TriangleExclamation,
    ring: "border-warning/30 bg-warning/[0.07]",
    iconColor: "text-warning",
  },
};

/** A visually distinct aside for notes, tips, and warnings. Uses `role="note"`
 *  and a screen-reader label so the callout type is announced, not just shown. */
export function Callout({
  variant = "note",
  title,
  children,
}: {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}) {
  const { label, icon: Icon, ring, iconColor } = styles[variant];
  return (
    <div
      role="note"
      className={`mt-6 flex gap-3 rounded-xl border px-4 py-3.5 ${ring}`}
    >
      <Icon
        className={`mt-0.5 size-[18px] shrink-0 ${iconColor}`}
        aria-hidden
      />
      <div className="min-w-0 text-[15px] leading-7 text-foreground/90">
        <span className="sr-only">{label}: </span>
        {title ? (
          <span className="font-semibold text-foreground">{title}. </span>
        ) : null}
        {children}
      </div>
    </div>
  );
}
