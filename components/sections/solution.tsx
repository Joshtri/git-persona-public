import {
  SealCheck as BadgeCheck,
  FolderTree as FolderGit2,
  Key as KeyRound,
  HandPointUp as MousePointerClick,
  ShieldCheck,
  MagicWand as Wand2,
} from "@gravity-ui/icons";
import type { ReactNode } from "react";
import { Section, SectionHeading } from "../ui/section";
import { RevealGroup, RevealItem } from "../ui/reveal";

/* Small illustrative vignettes rendered in CSS — no images needed. */

function SwitchIllustration() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col gap-1.5">
        {["Personal", "Acme Corp", "Client — Nova"].map((n, i) => (
          <span
            key={n}
            className={`rounded-md px-2.5 py-1 font-mono text-[10px] ${
              i === 0
                ? "bg-accent/20 text-accent-soft"
                : "bg-(--chip-bg) border text-subtle"
            }`}
          >
            {n}
          </span>
        ))}
      </div>
      <MousePointerClick className="size-4 shrink-0 text-accent-soft" />
      <div className="flex-1 rounded-md border border-success/20 bg-success/[0.06] px-2.5 py-2 text-[10px] leading-relaxed text-success">
        ✓ config · ✓ SSH · ✓ credentials
      </div>
    </div>
  );
}

function MappingIllustration() {
  return (
    <div className="space-y-1.5 font-mono text-[10px]">
      {[
        ["~/work/*", "Acme Corp"],
        ["~/dev/*", "Personal"],
        ["~/clients/nova", "Nova"],
      ].map(([path, profile]) => (
        <div
          key={path}
          className="flex items-center justify-between rounded-md bg-(--chip-bg) border px-2.5 py-1.5"
        >
          <span className="text-subtle">{path}</span>
          <span className="text-accent-soft">→ {profile}</span>
        </div>
      ))}
    </div>
  );
}

function CredentialIllustration() {
  return (
    <div className="space-y-1.5 font-mono text-[10px]">
      <div className="flex items-center justify-between rounded-md bg-(--chip-bg) border px-2.5 py-1.5">
        <span className="text-subtle">github.com</span>
        <span className="text-muted">sara-codes ●●●●</span>
      </div>
      <div className="flex items-center justify-between rounded-md bg-(--chip-bg) border px-2.5 py-1.5">
        <span className="text-subtle">github.com (work)</span>
        <span className="text-muted">sara-acme ●●●●</span>
      </div>
      <div className="rounded-md border px-2.5 py-1.5 text-center text-subtle">
        stored in OS keychain
      </div>
    </div>
  );
}

function SshIllustration() {
  return (
    <div className="space-y-1.5 font-mono text-[10px]">
      <div className="rounded-md bg-(--chip-bg) border px-2.5 py-1.5 text-subtle">
        Host github.com-personal
      </div>
      <div className="rounded-md bg-(--chip-bg) border px-2.5 py-1.5 pl-5 text-muted">
        IdentityFile ~/.ssh/id_personal
      </div>
      <div className="rounded-md border border-accent/20 bg-accent/[0.06] px-2.5 py-1.5 text-accent-soft">
        managed automatically ✓
      </div>
    </div>
  );
}

function ConfigIllustration() {
  return (
    <div className="rounded-md border bg-black/10 p-3 font-mono text-[10px] leading-relaxed">
      <span className="text-muted"># .gitconfig — written for you</span>
      <br />
      <span className="text-accent-soft">[user]</span>
      <br />
      <span className="text-foreground/70">
        &nbsp;&nbsp;name = Sara Kim
        <br />
        &nbsp;&nbsp;email = sara@hey.com
        <br />
        &nbsp;&nbsp;signingkey = 4AEE18F8
      </span>
    </div>
  );
}

function ValidationIllustration() {
  return (
    <div className="space-y-1.5 text-[10px]">
      {["user.name matches profile", "user.email matches profile", "warn or block on mismatch"].map((label) => (
        <div
          key={label}
          className="flex items-center gap-2 rounded-md bg-(--chip-bg) border px-2.5 py-1.5"
        >
          <BadgeCheck className="size-3 text-success" />
          <span className="font-mono text-muted">{label}</span>
        </div>
      ))}
    </div>
  );
}

const solutions: {
  icon: typeof Wand2;
  title: string;
  body: string;
  art: ReactNode;
}[] = [
  {
    icon: MousePointerClick,
    title: "One-click switching",
    body: "Pick a profile. Git config, SSH keys, and credentials update everywhere in under a second.",
    art: <SwitchIllustration />,
  },
  {
    icon: FolderGit2,
    title: "Repository mapping",
    body: "Bind folders or glob patterns to identities. Enter the directory — the right identity is already active.",
    art: <MappingIllustration />,
  },
  {
    icon: ShieldCheck,
    title: "Credential management",
    body: "Per-profile GitHub credentials stored in your OS keychain. No more cached-token surprises.",
    art: <CredentialIllustration />,
  },
  {
    icon: KeyRound,
    title: "SSH management",
    body: "GitPersona maintains host aliases and identity files, so each remote always resolves to the right key.",
    art: <SshIllustration />,
  },
  {
    icon: Wand2,
    title: "Git config automation",
    body: "Name, email, and signing key written per profile, per repo — never hand-edited again.",
    art: <ConfigIllustration />,
  },
  {
    icon: BadgeCheck,
    title: "Commit Guard",
    body: "An optional pre-commit hook checks your Git name and email match the repository's profile — warning or blocking a mismatched commit. Existing hooks are preserved.",
    art: <ValidationIllustration />,
  },
];

export function Solution() {
  return (
    <Section id="solution">
      <SectionHeading
        align="left"
        eyebrow="The solution"
        title={
          <>
            Everything switches <span className="text-gradient">together</span>
            .
          </>
        }
        description="GitPersona treats an identity as one atomic unit — config, keys, credentials, and repo bindings. Change one thing, and everything that depends on it follows."
      />
      <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map(({ icon: Icon, title, body, art }) => (
          <RevealItem key={title}>
            <article className="card flex h-full flex-col rounded-2xl p-6 transition-colors duration-300 hover:border-accent/25">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-accent/[0.12]">
                  <Icon className="size-4.5 text-accent-soft" />
                </span>
                <h3 className="text-[15px] font-semibold tracking-tight">
                  {title}
                </h3>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-subtle">
                {body}
              </p>
              <div className="mt-auto rounded-xl border bg-black/10 p-3">
                {art}
              </div>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
