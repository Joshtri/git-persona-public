import type { DocMeta } from "@/lib/docs/types";
import { A, H2, Lead, Li, P, Ul } from "@/components/docs/prose";
import { Callout } from "@/components/docs/callout";

export const meta: DocMeta = {
  slug: "identity/profiles",
  title: "Profiles",
  description:
    "Profiles are named Git identities. Learn what they contain, how they relate to keys and credentials, and how to manage them.",
  category: "identity",
  order: 1,
  toc: [
    { id: "anatomy", text: "Anatomy of a profile" },
    { id: "managing", text: "Managing profiles" },
    { id: "attachments", text: "Keys and credentials" },
    { id: "active-profile", text: "The active profile" },
  ],
};

export function Body() {
  return (
    <>
      <Lead>
        A profile is the central object in GitPersona: a named Git identity you
        can activate globally or bind to repositories. Everything else — SSH
        keys, credentials, rules — attaches to a profile.
      </Lead>

      <H2 id="anatomy">Anatomy of a profile</H2>
      <P>A profile holds:</P>
      <Ul>
        <Li>
          A <strong>label</strong> — the display name you pick, e.g. <em>Work</em>.
        </Li>
        <Li>
          An <strong>identity</strong> — the <code>name</code> and{" "}
          <code>email</code> written to Git config, plus an optional{" "}
          <code>signing_key</code>.
        </Li>
        <Li>
          An optional <strong>color</strong> for quick visual recognition.
        </Li>
      </Ul>
      <P>
        The identity is the part Git actually consumes. When the profile is
        active, its name and email are what appear on your commits.
      </P>

      <H2 id="managing">Managing profiles</H2>
      <P>From the Profiles view you can:</P>
      <Ul>
        <Li>Create a profile with a label, name, email, and optional signing key and color.</Li>
        <Li>Edit any field on an existing profile.</Li>
        <Li>Delete a profile you no longer need.</Li>
        <Li>Apply a profile to make it the active identity.</Li>
      </Ul>
      <Callout variant="note">
        There is no cap on the number of profiles. Create one per account —
        personal, each employer, each client — and let assignments and rules
        route repositories to the right one.
      </Callout>

      <H2 id="attachments">Keys and credentials</H2>
      <P>
        A profile becomes a complete identity once you attach the credentials it
        authenticates with:
      </P>
      <Ul>
        <Li>
          Assign an <A href="/docs/identity/ssh-keys">SSH key</A> so SSH remotes
          connect as the right account.
        </Li>
        <Li>
          Assign an <A href="/docs/identity/credentials">HTTPS credential</A> so
          HTTPS pushes and pulls authenticate correctly.
        </Li>
      </Ul>
      <P>
        These attachments follow the profile: activating it makes its key and
        credential the active ones.
      </P>

      <H2 id="active-profile">The active profile</H2>
      <P>
        Exactly one profile is globally active at a time, and GitPersona always
        surfaces which one. Repositories can override the global choice through a
        per-repository assignment — see{" "}
        <A href="/docs/getting-started/switching-profiles">Switching profiles</A>{" "}
        and <A href="/docs/automation/rules">Rules</A>.
      </P>
    </>
  );
}
