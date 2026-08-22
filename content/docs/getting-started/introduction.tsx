import type { DocMeta } from "@/lib/docs/types";
import { A, H2, Lead, Li, P, Ul } from "@/components/docs/prose";
import { Callout } from "@/components/docs/callout";

export const meta: DocMeta = {
  slug: "",
  title: "Introduction",
  description:
    "What GitPersona is, the problem it solves, and how it manages multiple Git identities on one machine.",
  category: "getting-started",
  order: 1,
  toc: [
    { id: "the-problem", text: "The problem" },
    { id: "what-gitpersona-does", text: "What GitPersona does" },
    { id: "how-it-works", text: "How it works" },
    { id: "what-it-is-not", text: "What GitPersona is not" },
    { id: "next-steps", text: "Next steps" },
  ],
};

export function Body() {
  return (
    <>
      <Lead>
        GitPersona is a desktop application for managing multiple Git identities
        and switching between them safely. It keeps your Git config, SSH keys,
        and HTTPS credentials in sync with whichever account a repository belongs
        to — so you never author a commit as the wrong person again.
      </Lead>

      <H2 id="the-problem">The problem</H2>
      <P>
        If you work across more than one Git account — a personal one, an
        employer&apos;s, a client&apos;s — a single machine has to juggle several
        identities at once. Git itself has no concept of &quot;who am I right
        now&quot;; it just reads whatever <code>user.name</code> and{" "}
        <code>user.email</code> happen to be configured, globally or per
        repository.
      </P>
      <P>The usual workarounds are fragile and easy to get subtly wrong:</P>
      <Ul>
        <Li>
          Editing <code>~/.gitconfig</code> by hand every time you switch
          context.
        </Li>
        <Li>
          Hand-maintaining <code>includeIf</code> conditional includes,
          per-host SSH aliases, and credential-helper entries that drift out of
          sync.
        </Li>
        <Li>
          Discovering the mistake only after a commit is pushed under the wrong
          email.
        </Li>
      </Ul>

      <H2 id="what-gitpersona-does">What GitPersona does</H2>
      <P>
        GitPersona models each identity as a <strong>profile</strong> and makes
        the whole identity — author name and email, an optional signing key, an
        SSH key, and an HTTPS credential — switch together as a unit. It manages
        the same standard Git mechanisms you would configure by hand, with
        validation on top.
      </P>
      <Ul>
        <Li>
          <strong>Profiles</strong> bundle a Git identity you can activate
          globally or bind to specific repositories.
        </Li>
        <Li>
          <strong>SSH keys</strong> and <strong>HTTPS credentials</strong>
          {" "}attach to a profile and follow it when it activates.
        </Li>
        <Li>
          <strong>Rules</strong> and <strong>Smart Switching</strong> apply the
          right profile automatically based on a repository&apos;s path or
          remote.
        </Li>
      </Ul>

      <H2 id="how-it-works">How it works</H2>
      <P>
        GitPersona runs entirely on your machine. Applying a profile writes
        standard Git configuration and updates a managed block in your SSH
        config; per-repository assignments pin the identity into that
        repository&apos;s local Git config. Secrets — HTTPS tokens — are stored
        in your operating system&apos;s credential vault, never in GitPersona&apos;s
        own data files.
      </P>
      <Callout variant="note">
        GitPersona is local-first. Core functionality — creating profiles,
        switching identities, managing keys, applying rules — works fully
        offline and requires no account.
      </Callout>

      <H2 id="what-it-is-not">What GitPersona is not</H2>
      <Ul>
        <Li>
          It is <strong>not a Git replacement</strong>. Your existing Git
          commands, hosts, and workflows are untouched.
        </Li>
        <Li>
          It does <strong>not rewrite history or touch your working tree</strong>.
          It only manages configuration, keys, and credentials.
        </Li>
        <Li>
          It is <strong>not a key generator for signing</strong>. GPG signing
          references a signing key you already have (see{" "}
          <A href="/docs/security/gpg-signing">GPG signing</A>).
        </Li>
      </Ul>

      <H2 id="next-steps">Next steps</H2>
      <Ul>
        <Li>
          <A href="/docs/getting-started/installation">Install GitPersona</A> on
          Windows or Linux.
        </Li>
        <Li>
          <A href="/docs/getting-started/first-profile">
            Create your first profile
          </A>{" "}
          from the onboarding flow.
        </Li>
        <Li>
          Learn how <A href="/docs/getting-started/switching-profiles">
            switching profiles
          </A>{" "}
          changes your active identity.
        </Li>
      </Ul>
    </>
  );
}
