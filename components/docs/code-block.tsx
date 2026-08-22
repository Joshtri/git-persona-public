"use client";

import { useState } from "react";
import { Check, Copy } from "@gravity-ui/icons";

/** A copyable code block for multi-line commands. Renders plain monospace text
 *  (no client-side syntax highlighter — deliberately dependency-free and calm).
 *  `label` names the shell/context; `lines` are shown verbatim. */
export function CodeBlock({
  label,
  code,
}: {
  label?: string;
  code: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* Clipboard unavailable (e.g. insecure context) — fail silently. */
    }
  }

  return (
    <figure className="mt-6 overflow-hidden rounded-xl border border-border bg-[var(--surface)]">
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <span className="font-mono text-xs text-subtle">{label ?? "shell"}</span>
        <button
          type="button"
          onClick={copy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-muted transition-colors hover:bg-foreground/[0.06] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
          aria-label={copied ? "Copied" : "Copy code"}
        >
          {copied ? (
            <Check className="size-3.5 text-success" aria-hidden />
          ) : (
            <Copy className="size-3.5" aria-hidden />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-3.5 text-[13px] leading-6">
        <code className="font-mono text-foreground/90">{code}</code>
      </pre>
    </figure>
  );
}
