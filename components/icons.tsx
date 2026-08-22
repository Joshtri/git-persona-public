/** Windows brand mark — the classic four-pane flag. */
export function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M3 5.1 10.4 4v7.3H3V5.1Zm0 13.8 7.4 1V12.7H3v6.2Zm8.3 1.15L21 21.5V12.7h-9.7v7.35ZM11.3 4 21 2.5v8.8h-9.7V4Z" />
    </svg>
  );
}

/** Apple brand mark. */
export function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.51 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

/** Linux brand mark. */
export function TuxIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 2c-2.8 0-4 2-4 4.5 0 1.8-.6 3-1.5 4.5S4 14.5 4 17c0 1.2.6 2.4 1.6 3M12 2c2.8 0 4 2 4 4.5 0 1.8.6 3 1.5 4.5s2.5 3.5 2.5 6c0 1.2-.6 2.4-1.6 3" />
      <path d="M8 21.5c1.2.4 2.6.5 4 .5s2.8-.1 4-.5" />
      <circle cx="10" cy="8" r="0.5" fill="currentColor" />
      <circle cx="14" cy="8" r="0.5" fill="currentColor" />
      <path d="M10.5 11h3l-1.5 1.5z" />
    </svg>
  );
}

/** GitLab brand mark (tanuki) — official three-tone orange. */
export function GitlabIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path
        fill="#e24329"
        d="m31.462 12.782-.043-.113-4.247-11.087a1.106 1.106 0 0 0-.437-.525 1.137 1.137 0 0 0-1.297.072 1.137 1.137 0 0 0-.376.572l-2.867 8.774H11.802L8.934 1.701a1.123 1.123 0 0 0-.376-.573 1.137 1.137 0 0 0-1.297-.072 1.141 1.141 0 0 0-.437.525L2.577 12.671l-.044.111a7.886 7.886 0 0 0 2.616 9.113l.015.012.038.027 6.476 4.851 3.205 2.425 1.951 1.474a1.331 1.331 0 0 0 1.609 0l1.951-1.474 3.205-2.425 6.515-4.878.016-.013a7.888 7.888 0 0 0 2.614-9.111z"
      />
      <path
        fill="#fc6d26"
        d="m31.462 12.782-.043-.113a14.331 14.331 0 0 0-5.712 2.57l-9.706 7.337 6.183 4.676 6.515-4.878.016-.013a7.888 7.888 0 0 0 2.614-9.111z"
      />
      <path
        fill="#fca326"
        d="m9.839 27.08 3.205 2.425 1.951 1.474a1.331 1.331 0 0 0 1.609 0l1.951-1.474 3.205-2.425-6.183-4.676z"
      />
      <path
        fill="#fc6d26"
        d="M6.105 15.239a14.323 14.323 0 0 0-5.711-2.57l-.044.111a7.886 7.886 0 0 0 2.616 9.113l.015.012.038.027 6.476 4.851 6.184-4.676z"
      />
    </svg>
  );
}

/** Bitbucket brand mark — official blue gradient. */
export function BitbucketIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient
          id="gp-bitbucket"
          x1="22.34"
          x2="10.42"
          y1="6.75"
          y2="16.05"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".18" stopColor="#0052cc" />
          <stop offset="1" stopColor="#2684ff" />
        </linearGradient>
      </defs>
      <path
        fill="#2684ff"
        d="M.778 1.213a.768.768 0 0 0-.768.892l3.263 19.81c.084.5.515.868 1.022.873H19.95a.772.772 0 0 0 .77-.646l3.27-20.03a.768.768 0 0 0-.768-.891zM14.52 15.53H9.522L8.17 8.466h7.561z"
      />
      <path
        fill="url(#gp-bitbucket)"
        d="M23.013 8.466h-7.302l-1.226 7.062H9.522l-5.974 7.09a.768.768 0 0 0 .476.169h15.6a.772.772 0 0 0 .77-.646z"
      />
    </svg>
  );
}

/** Azure DevOps brand mark — official blue gradient. */
export function AzureDevOpsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient
          id="gp-azure-devops"
          x1="9"
          x2="15"
          y1="1"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0078d7" />
          <stop offset="1" stopColor="#005ba1" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gp-azure-devops)"
        d="M0 8.877 2.247 5.91l8.405-3.416V.022l7.37 5.393L2.966 8.338v8.225L0 15.707zm24-4.45v14.652l-5.753 4.9-9.303-3.057v3.056l-5.978-7.416 15.057 1.798V5.415z"
      />
    </svg>
  );
}

/** GitHub brand mark — Lucide no longer ships brand icons. */
export function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.96.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}
