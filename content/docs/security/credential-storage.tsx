import type { DocMeta } from "@/lib/docs/types";
import { A, H2, Lead, Li, P, Ul } from "@/components/docs/prose";
import { Callout } from "@/components/docs/callout";

export const meta: DocMeta = {
  slug: "security/credential-storage",
  title: "Credential storage",
  description:
    "The security model behind GitPersona credentials: where secrets live, what metadata is kept, and how reveal PINs work.",
  category: "security",
  order: 3,
  toc: [
    { id: "principle", text: "The core principle" },
    { id: "where-secrets-live", text: "Where secrets live" },
    { id: "metadata", text: "What metadata is kept" },
    { id: "reveal-pin", text: "Reveal PINs" },
    { id: "handling", text: "Secret handling in transit" },
  ],
};

export function Body() {
  return (
    <>
      <Lead>
        GitPersona is built so that secret material and the metadata describing it
        are kept strictly apart. This page explains exactly where each lives.
      </Lead>

      <H2 id="principle">The core principle</H2>
      <P>
        Secrets are separated from metadata. A token is never stored in
        GitPersona&apos;s own data files, never serialized into its store, and
        never written to logs or the activity history.
      </P>
      <Callout variant="warning">
        GitPersona does not store tokens in plaintext anywhere. If a guide ever
        suggests otherwise, treat it as incorrect.
      </Callout>

      <H2 id="where-secrets-live">Where secrets live</H2>
      <P>
        The secret itself is held in the operating system&apos;s native secure
        storage. GitPersona reads from and writes to that store; it does not keep
        a second copy. The mechanism is platform-specific:
      </P>
      <Ul>
        <Li>
          <strong>Windows</strong> — Windows Credential Manager. Entries use a
          Git-readable target name, so Git can authenticate directly.
        </Li>
        <Li>
          <strong>macOS</strong> — the login Keychain (Apple Keychain Services).
        </Li>
        <Li>
          <strong>Linux</strong> — the Secret Service API (GNOME Keyring, KWallet,
          or any compatible provider) over D-Bus.
        </Li>
      </Ul>
      <Callout variant="warning">
        There is no plaintext fallback. If no secure store is available on the
        platform — for example a headless Linux session with no Secret Service
        provider running — GitPersona reports credential storage as{" "}
        <strong>unavailable</strong> rather than writing the secret anywhere less
        safe.
      </Callout>

      <H2 id="metadata">What metadata is kept</H2>
      <P>
        GitPersona&apos;s credential store keeps only non-secret metadata, so the
        app can list and manage credentials without ever holding the secret:
      </P>
      <Ul>
        <Li>host and username</Li>
        <Li>protocol (HTTPS)</Li>
        <Li>created, updated, and last-used timestamps</Li>
        <Li>whether a reveal PIN is set</Li>
        <Li>the profile the credential is attached to, if any</Li>
      </Ul>

      <H2 id="reveal-pin">Reveal PINs</H2>
      <P>
        A credential may have an optional reveal PIN that gates reading the token
        back. The PIN is stored only as an Argon2 hash in a side map — never in
        the credential record and never on the wire. Revealing a token requires
        verifying the PIN, and the reveal is the single operation that ever
        surfaces secret material to the interface.
      </P>

      <H2 id="handling">Secret handling in transit</H2>
      <P>
        While a token is being created or rotated, it exists only briefly in a
        zeroizing buffer that overwrites its memory as soon as it is no longer
        needed, then goes straight to the vault. See{" "}
        <A href="/docs/identity/credentials">Credentials</A> for the day-to-day
        workflow.
      </P>
    </>
  );
}
