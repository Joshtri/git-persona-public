import type { DocMeta } from "@/lib/docs/types";
import { A, H2, Lead, Li, P, Ul } from "@/components/docs/prose";
import { Callout } from "@/components/docs/callout";

export const meta: DocMeta = {
  slug: "identity/credentials",
  title: "Credentials",
  description:
    "Store HTTPS Git credentials per profile. Tokens live in your OS credential vault; GitPersona keeps only metadata.",
  category: "identity",
  order: 3,
  toc: [
    { id: "overview", text: "Overview" },
    { id: "supported", text: "Supported protocol and hosts" },
    { id: "creating", text: "Adding a credential" },
    { id: "assigning", text: "Assigning and switching" },
    { id: "reveal", text: "Reveal PIN" },
    { id: "storage", text: "How secrets are stored" },
  ],
};

export function Body() {
  return (
    <>
      <Lead>
        Credentials let a profile authenticate to Git hosts over HTTPS. GitPersona
        keeps the token in your operating system&apos;s credential vault and
        stores only non-secret metadata itself.
      </Lead>

      <H2 id="overview">Overview</H2>
      <P>
        A credential records a host, a username, and a reference to a stored
        secret (a token or personal access token). It can be attached to a
        profile so it activates alongside that profile&apos;s identity.
      </P>

      <H2 id="supported">Supported protocol and hosts</H2>
      <P>
        GitPersona manages <strong>HTTPS</strong> credentials. The data model is
        designed so other schemes can be added later without migration, but HTTPS
        is what is handled today.
      </P>
      <P>Credentials are managed for these hosts:</P>
      <Ul>
        <Li><code>github.com</code></Li>
        <Li><code>gitlab.com</code></Li>
        <Li><code>bitbucket.org</code></Li>
        <Li><code>dev.azure.com</code></Li>
      </Ul>
      <Callout variant="note">
        This is an allow-list of hosts GitPersona knows how to write Git
        credential entries for — not a limit on where you can push. Your other
        remotes keep working through Git&apos;s normal credential handling.
      </Callout>

      <H2 id="creating">Adding a credential</H2>
      <P>To add a credential you provide:</P>
      <Ul>
        <Li>The <strong>host</strong> (one of the supported hosts).</Li>
        <Li>The <strong>username</strong> for that account.</Li>
        <Li>The <strong>token</strong> — held only in memory in transit and written straight to the OS vault.</Li>
        <Li>Optionally a <strong>reveal PIN</strong> (see below).</Li>
        <Li>Optionally the <strong>profile</strong> to attach it to.</Li>
      </Ul>
      <P>
        You can update a credential later to rotate its token or change the
        username. Rotating the token re-applies it to the Git credential targets
        the profile uses, so pushes keep working without a manual reassignment.
      </P>

      <H2 id="assigning">Assigning and switching</H2>
      <P>
        Assigning a credential to a profile ties it to that identity. When the
        profile becomes active, its credential is the one Git uses for the
        matching host. Per-repository profile assignments also pin a path-scoped
        HTTPS credential so a bound repository always authenticates as the right
        account.
      </P>

      <H2 id="reveal">Reveal PIN</H2>
      <P>
        A credential can carry an optional <strong>reveal PIN</strong>. When set,
        it lets you read the stored token back later through a PIN-gated reveal
        step. The PIN is stored only as an Argon2 hash — never in plaintext — and
        revealing the token is the single action that ever surfaces secret
        material.
      </P>
      <Callout variant="tip">
        Created a credential without a PIN? You can set one afterward to make the
        token revealable.
      </Callout>

      <H2 id="storage">How secrets are stored</H2>
      <P>
        This is the important distinction:
      </P>
      <Ul>
        <Li>
          The <strong>secret</strong> (your token) lives exclusively in your
          OS&apos;s native secure storage — Windows Credential Manager, the macOS
          Keychain, or the Linux Secret Service. There is no plaintext fallback.
        </Li>
        <Li>
          GitPersona&apos;s own store holds <strong>metadata only</strong>: host,
          username, timestamps, and whether a reveal PIN is set. The token is
          never a field there, never serialized, and never written to logs.
        </Li>
      </Ul>
      <Callout variant="warning">
        GitPersona never stores tokens in plaintext. For the full storage model,
        see <A href="/docs/security/credential-storage">Credential storage</A>.
      </Callout>
    </>
  );
}
