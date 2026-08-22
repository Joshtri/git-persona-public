import type { DocMeta } from "@/lib/docs/types";
import { A, H2, H3, Lead, Li, P, Ul } from "@/components/docs/prose";
import { Callout } from "@/components/docs/callout";

export const meta: DocMeta = {
  slug: "support/troubleshooting",
  title: "Troubleshooting",
  description:
    "Practical checks for the most common issues: profiles not applying, SSH or credential authentication failures, and Smart Switching not triggering.",
  category: "support",
  order: 1,
  toc: [
    { id: "profile-not-active", text: "A profile doesn't appear active" },
    { id: "ssh-auth", text: "SSH authentication fails" },
    { id: "credential-auth", text: "Credential authentication fails" },
    { id: "smart-switching", text: "Smart Switching doesn't trigger" },
    { id: "repos-not-found", text: "Repositories aren't detected" },
  ],
};

export function Body() {
  return (
    <>
      <Lead>
        Most issues come down to a mismatch between what a profile defines and
        what a repository actually uses. These checks resolve the common cases.
      </Lead>

      <H2 id="profile-not-active">A profile doesn&apos;t appear active</H2>
      <Ul>
        <Li>
          Confirm the profile is actually applied — GitPersona shows the active
          profile. Applying sets your global Git identity.
        </Li>
        <Li>
          If the repository has its own profile assignment, that per-repository
          identity takes precedence over the global one. Check the repository&apos;s
          assignment.
        </Li>
        <Li>
          Verify the repository&apos;s local Git config hasn&apos;t been set by
          hand to a different <code>user.email</code>, which would override the
          global value.
        </Li>
      </Ul>

      <H2 id="ssh-auth">SSH authentication fails</H2>
      <Ul>
        <Li>Check that the profile has an SSH key assigned.</Li>
        <Li>
          Preview the managed SSH config and confirm the host alias, host name,
          and identity file are what you expect (see{" "}
          <A href="/docs/identity/ssh-keys">SSH keys</A>).
        </Li>
        <Li>
          Make sure the key file still exists at its recorded path and that the
          matching public key is registered with the Git host.
        </Li>
      </Ul>
      <Callout variant="tip">
        Remote host and owner rules only match when a repository has an{" "}
        <code>origin</code> remote GitPersona can parse. A repository with no
        remote can still match on path or name.
      </Callout>

      <H2 id="credential-auth">Credential authentication fails</H2>
      <Ul>
        <Li>
          Confirm the credential&apos;s host is one of the supported hosts and its
          username matches the account.
        </Li>
        <Li>
          If you rotated a token, re-check that the profile you push as is the one
          the credential is assigned to.
        </Li>
        <Li>
          Remember the secret lives in your OS credential vault — if it was
          removed there, re-add the token (see{" "}
          <A href="/docs/identity/credentials">Credentials</A>).
        </Li>
      </Ul>

      <H2 id="smart-switching">Smart Switching doesn&apos;t trigger</H2>
      <Ul>
        <Li>Confirm Smart Switching is enabled and the watcher is running (not paused).</Li>
        <Li>
          Check the repository actually resolves to a profile — via a direct
          assignment or a matching rule. A repository with no assignment reports{" "}
          <em>No assignment</em> and won&apos;t switch.
        </Li>
        <Li>
          If <em>Confirm before switch</em> is on, the switch waits as{" "}
          <em>Pending confirmation</em> until you accept it.
        </Li>
        <Li>
          Use the rule <A href="/docs/automation/rules">preview</A> to verify
          which rule would match.
        </Li>
      </Ul>

      <H2 id="repos-not-found">Repositories aren&apos;t detected</H2>
      <Ul>
        <Li>Make sure you&apos;ve scanned the folders that contain your repositories.</Li>
        <Li>Only Git repositories are tracked — a folder without a Git repository is skipped.</Li>
        <Li>Re-run a scan after cloning new repositories, or refresh an existing one.</Li>
      </Ul>

      <H3>Still stuck?</H3>
      <P>
        Open an issue on{" "}
        <A href="https://github.com/Joshtri/git-persona/issues">GitHub</A> with
        what you did and what you expected.
      </P>
    </>
  );
}
