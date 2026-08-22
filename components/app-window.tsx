import type { ReactNode } from "react";

/** macOS-style desktop window chrome used for all product mockups. */
export function AppWindow({
  children,
  title = "GitPersona",
  className = "",
}: {
  children: ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-elevated shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] ${className}`}
    >
      {/* Title bar */}
      <div className="flex h-10 items-center gap-4 border-b border-white/6 bg-white/6 px-4">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center text-[11px] font-medium text-subtle">
          {title}
        </div>
        <div className="w-14" />
      </div>
      {children}
    </div>
  );
}
