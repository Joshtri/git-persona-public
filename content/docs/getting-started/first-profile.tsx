import type { DocMeta } from "@/lib/docs/types";
import { A, Field, H2, Lead, Li, Ol, P, Ul } from "@/components/docs/prose";
import { Callout } from "@/components/docs/callout";

export const meta: DocMeta = {
  slug: "getting-started/first-profile",
  title: "Create your first profile",
  description:
    "Use the first-run onboarding scan to turn your existing Git setup into a profile, or create one from scratch.",
  category: "getting-started",
  order: 3,
  toc: [
    { id: "onboarding-scan", text: "The onboarding scan" },
    { id: "profile-fields", text: "Profile fields" },
    { id: "creating-manually", text: "Creating a profile manually" },
    { id: "skipping", text: "Skipping onboarding" },
  ],
};

export function Body() {
  return (
    <>
      <Lead>
        A profile is a named Git identity. At minimum it carries a display{" "}
        label, an author name, and an email; optionally a signing key and a
        color. GitPersona helps you build the first one from what&apos;s already
        on your machine.
      </Lead>

      <H2 id="onboarding-scan">The onboarding scan</H2>
      <P>
        On first launch, GitPersona runs a read-only scan of your system and
        shows what it finds in a short wizard:
      </P>
      <Ul>
        <Li>
          <strong>Detected identity</strong> — the <code>user.name</code>,{" "}
          <code>user.email</code>, and signing key from your global Git config,
          if present.
        </Li>
        <Li>
          <strong>SSH keys</strong> — key pairs discovered under{" "}
          <code>~/.ssh</code>, shown by algorithm and fingerprint. You choose
          which to import.
        </Li>
        <Li>
          <strong>Credentials</strong> — usernames your OS vault already holds
          for supported hosts. Only the username is read; the secret is never
          touched during the scan.
        </Li>
      </Ul>
      <P>
        Accepting the scan creates your first profile from the detected identity
        and imports the SSH keys you selected.
      </P>
      <Callout variant="note">
        The scan is non-destructive. Nothing is written until you confirm — it
        only reads your existing configuration to pre-fill the form.
      </Callout>

      <H2 id="profile-fields">Profile fields</H2>
      <P>These are the fields on a profile:</P>
      <Field name="label">
        A human-readable name for the profile, such as <em>Work</em> or{" "}
        <em>Personal</em>. This is what you select when switching.
      </Field>
      <Field name="name">
        The author name written to <code>user.name</code> when the profile is
        active.
      </Field>
      <Field name="email">
        The author email written to <code>user.email</code>.
      </Field>
      <Field name="signing_key (optional)">
        A reference to an existing signing key for signed commits. Leave it empty
        if you don&apos;t sign. See{" "}
        <A href="/docs/security/gpg-signing">GPG signing</A>.
      </Field>
      <Field name="color (optional)">
        A color used to make the profile easy to recognize at a glance in the
        app.
      </Field>

      <H2 id="creating-manually">Creating a profile manually</H2>
      <P>You can add profiles at any time from the Profiles view:</P>
      <Ol>
        <Li>Open the Profiles view.</Li>
        <Li>Create a new profile and fill in the label, name, and email.</Li>
        <Li>Optionally set a signing key and a color.</Li>
        <Li>Save. The profile is now available to activate and to assign keys and credentials to.</Li>
      </Ol>
      <P>
        There is no limit on the number of profiles. Next, attach an{" "}
        <A href="/docs/identity/ssh-keys">SSH key</A> or an{" "}
        <A href="/docs/identity/credentials">HTTPS credential</A>, or learn how{" "}
        <A href="/docs/getting-started/switching-profiles">switching</A> applies
        a profile.
      </P>

      <H2 id="skipping">Skipping onboarding</H2>
      <P>
        You can skip the onboarding wizard and set everything up later. GitPersona
        remembers that you&apos;ve completed or skipped first-run setup and
        won&apos;t prompt you again.
      </P>
    </>
  );
}
