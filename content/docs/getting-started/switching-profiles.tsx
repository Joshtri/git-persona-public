import type { DocMeta } from "@/lib/docs/types";
import { A, Equivalence, H2, Lead, Li, P, Ul } from "@/components/docs/prose";
import { Callout } from "@/components/docs/callout";
import { CodeBlock } from "@/components/docs/code-block";

export const meta: DocMeta = {
  slug: "getting-started/switching-profiles",
  title: "Switching profiles",
  description:
    "How activating a profile changes your active Git identity — globally and per repository.",
  category: "getting-started",
  order: 4,
  toc: [
    { id: "activating", text: "Activating a profile" },
    { id: "what-changes", text: "What changes on activation" },
    { id: "per-repository", text: "Per-repository assignment" },
    { id: "manual-equivalent", text: "The manual equivalent" },
  ],
};

export function Body() {
  return (
    <>
      <Lead>
        Activating a profile makes it your current Git identity. GitPersona
        applies the whole identity at once, so your name, email, SSH key, and
        HTTPS credential all move together.
      </Lead>

      <H2 id="activating">Activating a profile</H2>
      <P>
        Select a profile and apply it. GitPersona writes that profile&apos;s
        identity to your global Git configuration and updates the managed SSH and
        credential settings to match. The active profile is shown in the app so
        you always know who you are committing as.
      </P>

      <H2 id="what-changes">What changes on activation</H2>
      <Ul>
        <Li>
          <strong>Git author</strong> — <code>user.name</code> and{" "}
          <code>user.email</code> are set to the profile&apos;s identity.
        </Li>
        <Li>
          <strong>Signing key</strong> — set when the profile defines one (see{" "}
          <A href="/docs/security/gpg-signing">GPG signing</A>).
        </Li>
        <Li>
          <strong>SSH</strong> — the managed block in <code>~/.ssh/config</code>{" "}
          reflects the profile&apos;s assigned key, so Git connects with the
          right identity (see <A href="/docs/identity/ssh-keys">SSH keys</A>).
        </Li>
        <Li>
          <strong>HTTPS credential</strong> — the profile&apos;s credential
          becomes the one Git uses for supported hosts (see{" "}
          <A href="/docs/identity/credentials">Credentials</A>).
        </Li>
      </Ul>

      <H2 id="per-repository">Per-repository assignment</H2>
      <P>
        Beyond the globally active profile, you can bind a specific repository to
        a profile. When you assign a profile to a repository, GitPersona pins that
        identity into the repository&apos;s local Git config right away — the
        correct author and account are in place before your next commit or push,
        regardless of which profile is globally active.
      </P>
      <Callout variant="note">
        Per-repository assignments are the foundation for automation. Once a
        repository is bound to a profile,{" "}
        <A href="/docs/automation/smart-switching">Smart Switching</A> can apply
        it for you as you move between projects.
      </Callout>

      <H2 id="manual-equivalent">The manual equivalent</H2>
      <P>
        GitPersona performs the identity change for you. For reference, activating
        a profile globally is equivalent to the following Git commands:
      </P>
      <Equivalence action="Activate the “Work” profile.">
        <CodeBlock
          label="git — manual equivalent"
          code={`git config --global user.name "Ada Lovelace"
git config --global user.email "ada@work.example"`}
        />
      </Equivalence>
      <Callout variant="tip">
        You don&apos;t run these yourself — GitPersona writes them (and the
        matching SSH and credential settings) atomically. They&apos;re shown only
        so you can see exactly what changes.
      </Callout>
    </>
  );
}
