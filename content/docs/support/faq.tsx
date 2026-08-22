import type { DocMeta } from "@/lib/docs/types";
import { A, H2, Lead, P } from "@/components/docs/prose";

export const meta: DocMeta = {
  slug: "support/faq",
  title: "FAQ",
  description:
    "Answers to common questions about GitPersona — how it relates to Git, multiple accounts, data storage, and offline use.",
  category: "support",
  order: 2,
  toc: [
    { id: "vs-git-cli", text: "Why not just use the Git CLI?" },
    { id: "modify-repos", text: "Does it modify my repositories?" },
    { id: "multiple-accounts", text: "Can I use multiple accounts?" },
    { id: "data-uploaded", text: "Is my data uploaded anywhere?" },
    { id: "offline", text: "Does it work offline?" },
    { id: "platforms", text: "Which platforms are supported?" },
  ],
};

export function Body() {
  return (
    <>
      <Lead>
        Short answers to the questions that come up most. For depth, follow the
        links into the relevant guide.
      </Lead>

      <H2 id="vs-git-cli">Why not just use the Git CLI?</H2>
      <P>
        You can — that&apos;s the point. GitPersona doesn&apos;t replace Git; it
        manages the standard mechanisms around it. Conditional includes, SSH host
        aliases, and credential helpers all work by hand, but they&apos;re
        fragile, per-machine, and easy to get subtly wrong. GitPersona manages
        the same mechanisms with validation on top.
      </P>

      <H2 id="modify-repos">Does GitPersona modify my repositories?</H2>
      <P>
        It writes standard Git configuration — <code>user.name</code>,{" "}
        <code>user.email</code>, a signing key when set — and manages SSH and
        credential settings. For a repository bound to a profile, it pins that
        identity into the repository&apos;s local Git config. It does not touch
        your working tree, history, or remotes.
      </P>

      <H2 id="multiple-accounts">Can I use multiple accounts?</H2>
      <P>
        Yes — that&apos;s the core use case. Give each account its own profile
        with its SSH key and HTTPS credential, then let assignments and{" "}
        <A href="/docs/automation/rules">rules</A> route each repository to the
        right one so personal, work, and client accounts coexist on one machine.
      </P>

      <H2 id="data-uploaded">Is my data uploaded anywhere?</H2>
      <P>
        No. GitPersona is local-first: profiles and credential metadata stay on
        your machine, and secrets live in your OS credential vault. There is no
        account required for core functionality. See{" "}
        <A href="/docs/security/credential-storage">Credential storage</A>.
      </P>

      <H2 id="offline">Does it work offline?</H2>
      <P>
        Yes. Switching identities, assigning repositories, managing keys, and
        applying rules all happen locally. Only checking for{" "}
        <A href="/docs/reference/updates">updates</A> needs a network connection.
      </P>

      <H2 id="platforms">Which platforms are supported?</H2>
      <P>
        GitPersona runs on <strong>Windows</strong> and <strong>Linux</strong>.
        See <A href="/docs/getting-started/installation">Installation</A> for
        per-platform steps.
      </P>
    </>
  );
}
