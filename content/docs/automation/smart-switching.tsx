import type { DocMeta } from "@/lib/docs/types";
import { A, H2, Lead, Li, P, Ul } from "@/components/docs/prose";
import { Callout } from "@/components/docs/callout";

export const meta: DocMeta = {
  slug: "automation/smart-switching",
  title: "Smart Switching",
  description:
    "A background watcher applies the correct profile as you move between repositories. Configure confirmation, notifications, and startup.",
  category: "automation",
  order: 2,
  toc: [
    { id: "what-it-does", text: "What it does" },
    { id: "vs-commit-guard", text: "Smart Switching vs Commit Guard" },
    { id: "outcomes", text: "Switch outcomes" },
    { id: "configuration", text: "Configuration" },
    { id: "control", text: "Watcher control" },
  ],
};

export function Body() {
  return (
    <>
      <Lead>
        Smart Switching watches your active repository in the background and
        applies the profile it resolves to — automatically — so the right
        identity is active by the time you commit.
      </Lead>

      <H2 id="what-it-does">What it does</H2>
      <P>
        When enabled, a workspace watcher monitors the repository you&apos;re
        working in. On a repository change it resolves the intended profile — from
        the repository&apos;s assignment or a matching{" "}
        <A href="/docs/automation/rules">rule</A> — and applies it. The watcher
        reports how many repositories it is monitoring and the last automatic
        switch.
      </P>
      <Callout variant="note">
        Smart Switching only ever applies profiles you have already set up. It
        decides <em>which</em> profile a repository should use; it does not invent
        identities or change anything outside the normal switching pipeline.
      </Callout>

      <H2 id="vs-commit-guard">Smart Switching vs Commit Guard</H2>
      <P>
        Smart Switching is <strong>proactive</strong>: it applies the right
        profile ahead of time so the correct identity is active before you commit.{" "}
        <A href="/docs/security/commit-guard">Commit Guard</A> is the{" "}
        <strong>verification</strong> at the other end: a pre-commit hook that
        checks the identity the moment you commit and warns or blocks on a
        mismatch. They are complementary — run both for defense in depth.
      </P>

      <H2 id="outcomes">Switch outcomes</H2>
      <P>Each evaluation results in one of:</P>
      <Ul>
        <Li><strong>Switched</strong> — a different profile was applied automatically.</Li>
        <Li><strong>Already active</strong> — the repository&apos;s profile was already the active one; nothing to do.</Li>
        <Li><strong>No assignment</strong> — the repository is tracked but has no profile to switch to.</Li>
        <Li><strong>Pending confirmation</strong> — a switch is warranted but is waiting for you to confirm it.</Li>
      </Ul>

      <H2 id="configuration">Configuration</H2>
      <P>Smart Switching is configured from Settings:</P>
      <Ul>
        <Li>
          <strong>Enabled</strong> — the master switch. When off, the watcher
          does not run. It is off by default.
        </Li>
        <Li>
          <strong>Confirm before switch</strong> — require explicit confirmation
          before an automatic switch is applied. When on, a warranted switch
          becomes <em>Pending confirmation</em> until you accept it.
        </Li>
        <Li>
          <strong>Show notification</strong> — surface an in-app notification
          after an automatic switch.
        </Li>
        <Li>
          <strong>Start on launch</strong> — begin watching automatically when
          GitPersona starts.
        </Li>
      </Ul>
      <Callout variant="tip">
        Pair <strong>Start on launch</strong> with the tray options in{" "}
        <A href="/docs/reference/settings">Settings &amp; tray</A> so GitPersona
        keeps watching in the background even when the window is closed.
      </Callout>

      <H2 id="control">Watcher control</H2>
      <P>
        You can pause and resume the watcher, or restart it. Confirmation prompts
        for a pending switch can be accepted or cancelled per repository.
      </P>
    </>
  );
}
