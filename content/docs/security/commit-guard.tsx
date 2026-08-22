import type { DocMeta } from "@/lib/docs/types";
import { A, Code, H2, Lead, Li, Ol, P, Ul } from "@/components/docs/prose";
import { Callout } from "@/components/docs/callout";
import { CodeBlock } from "@/components/docs/code-block";

export const meta: DocMeta = {
  slug: "security/commit-guard",
  title: "Commit Guard",
  description:
    "An optional pre-commit hook that verifies your active Git identity matches the repository's profile before a commit — the final safety layer.",
  category: "security",
  order: 2,
  toc: [
    { id: "what-it-does", text: "What it protects" },
    { id: "vs-smart-switching", text: "Commit Guard vs Smart Switching" },
    { id: "warn-vs-block", text: "Warn vs block" },
    { id: "expected-profile", text: "How the expected profile is resolved" },
    { id: "protecting", text: "Protecting a repository" },
    { id: "existing-hooks", text: "Existing hook compatibility" },
    { id: "override", text: "Overriding a block" },
    { id: "troubleshooting", text: "Troubleshooting" },
  ],
};

export function Body() {
  return (
    <>
      <Lead>
        Commit Guard is the final safety layer. It installs a managed{" "}
        <Code>pre-commit</Code> hook that checks the Git identity a commit would
        use against the profile the repository is expected to commit as, and warns
        — or blocks — on a mismatch.
      </Lead>

      <H2 id="what-it-does">What it protects</H2>
      <P>
        Commit Guard verifies, at the moment you commit, that the repository&apos;s
        current <Code>user.name</Code> and <Code>user.email</Code> match the
        identity of its expected profile. It is opt-in and disabled by default.
      </P>
      <Callout variant="note">
        Commit Guard verifies the Git author <strong>name and email</strong> only.
        It does not validate SSH keys, GPG signatures, remote authorization, or
        credentials — keeping the check fast, reliable, and offline.
      </Callout>

      <H2 id="vs-smart-switching">Commit Guard vs Smart Switching</H2>
      <P>These are two complementary mechanisms — not duplicates:</P>
      <Ul>
        <Li>
          <strong>
            <A href="/docs/automation/smart-switching">Smart Switching</A>
          </strong>{" "}
          is proactive: it applies the correct profile automatically as you move
          between repositories, so the right identity is active before you commit.
        </Li>
        <Li>
          <strong>Commit Guard</strong> is a verification: it checks the identity
          at commit time and catches a mismatch — whether Smart Switching is off,
          a repository has no rule or assignment, or an identity was changed by
          hand.
        </Li>
      </Ul>
      <P>
        Run both together for defense in depth: Smart Switching keeps the identity
        correct; Commit Guard confirms it right before the commit is written.
      </P>

      <H2 id="warn-vs-block">Warn vs block</H2>
      <Ul>
        <Li>
          <strong>Warn</strong> (default) — prints a clear warning showing the
          expected and current identity, then lets the commit proceed.
        </Li>
        <Li>
          <strong>Block</strong> — aborts the commit on a mismatch. You switch to
          the correct profile and commit again.
        </Li>
      </Ul>

      <H2 id="expected-profile">How the expected profile is resolved</H2>
      <P>
        Commit Guard reuses the same resolution as switching: a matching{" "}
        <A href="/docs/automation/rules">rule</A> wins, otherwise the
        repository&apos;s direct assignment. The resolved profile&apos;s name and
        email are written into the repository&apos;s local Git config as the
        expected identity for the hook to compare against.
      </P>
      <Callout variant="note">
        <strong>Fallback:</strong> if no expected profile can be resolved (no rule
        matches and the repository is unassigned), Commit Guard{" "}
        <strong>allows</strong> the commit. It never blocks on the unknown.
      </Callout>

      <H2 id="protecting">Protecting a repository</H2>
      <Ol>
        <Li>Enable Commit Guard in Settings and choose the default mode (warn or block).</Li>
        <Li>
          Protect repositories individually from the Commit Guard list, or turn on{" "}
          <strong>Auto-protect assigned repositories</strong> to install the hook
          automatically whenever a profile is assigned.
        </Li>
        <Li>
          The Settings view shows each repository&apos;s protection state, its
          expected profile, and whether the current identity matches.
        </Li>
      </Ol>
      <P>
        Disabling Commit Guard removes the managed hooks again (restoring any hook
        that was chained). Individual repositories can be protected or removed at
        any time.
      </P>

      <H2 id="existing-hooks">Existing hook compatibility</H2>
      <P>
        Installation is non-destructive. If a repository already has a{" "}
        <Code>pre-commit</Code> hook that GitPersona didn&apos;t create, that hook
        is backed up and <strong>chained</strong> — the managed hook runs your
        original first and only proceeds if it succeeds. Removing Commit Guard
        restores the original hook.
      </P>
      <Callout variant="warning">
        If a repository routes hooks through a custom <Code>core.hooksPath</Code>,
        GitPersona reports it as <strong>unsupported</strong> rather than
        installing a hook that Git would ignore. Set up the check manually in that
        case.
      </Callout>

      <H2 id="override">Overriding a block</H2>
      <P>
        When a commit is blocked and you intend it anyway, bypass the hook for a
        single commit with Git&apos;s standard flag:
      </P>
      <CodeBlock label="git" code={`git commit --no-verify -m "..."`} />

      <H2 id="troubleshooting">Troubleshooting</H2>
      <Ul>
        <Li>
          <strong>The hook doesn&apos;t run</strong> — confirm the repository
          isn&apos;t using <Code>core.hooksPath</Code>, and that Commit Guard is
          enabled and the repository is protected.
        </Li>
        <Li>
          <strong>Unexpected mismatch warnings</strong> — check the
          repository&apos;s expected profile and that the active identity matches;
          the Settings list shows both.
        </Li>
        <Li>
          <strong>A hook looks stale after reassigning</strong> — use{" "}
          <strong>Repair</strong> to rewrite the managed hook and refresh the
          expected identity.
        </Li>
      </Ul>
    </>
  );
}
