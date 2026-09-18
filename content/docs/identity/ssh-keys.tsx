import type { DocMeta } from "@/lib/docs/types";
import { H2, Lead, Li, Ol, P, Ul } from "@/components/docs/prose";
import { Callout } from "@/components/docs/callout";

export const meta: DocMeta = {
  slug: "identity/ssh-keys",
  title: "SSH keys",
  description:
    "Generate, import, and assign SSH keys to profiles. GitPersona manages a block in your SSH config so the right key is used automatically.",
  category: "identity",
  order: 2,
  toc: [
    { id: "overview", text: "Overview" },
    { id: "generating", text: "Generating a key" },
    { id: "importing", text: "Importing a key" },
    { id: "assigning", text: "Assigning a key to a profile" },
    { id: "ssh-config", text: "The managed SSH config" },
    { id: "security", text: "What is stored" },
  ],
};

export function Body() {
  return (
    <>
      <Lead>
        GitPersona manages the SSH keys your profiles authenticate with. It can
        generate new keys, import existing ones, and keep a managed block in your
        SSH config so connections use the right identity.
      </Lead>

      <H2 id="overview">Overview</H2>
      <P>
        Each SSH key is tracked with its algorithm, fingerprint, file paths, an
        optional comment, and an optional host alias. A key can be assigned to a
        profile so it activates together with that profile.
      </P>
      <Callout variant="note">
        Supported algorithms are <strong>Ed25519</strong>,{" "}
        <strong>ECDSA</strong> (P-256, P-384, and P-521), and{" "}
        <strong>RSA</strong> (4096-bit). Ed25519 is recommended for new keys.
      </Callout>

      <H2 id="generating">Generating a key</H2>
      <P>When you generate a key, GitPersona asks for:</P>
      <Ul>
        <Li>A <strong>label</strong> to identify the key.</Li>
        <Li>An <strong>algorithm</strong> — Ed25519, ECDSA (P-256, P-384, P-521), or RSA 4096.</Li>
        <Li>An <strong>output folder</strong> and <strong>file name</strong> for the key pair.</Li>
        <Li>An optional <strong>comment</strong>.</Li>
        <Li>An optional <strong>host alias</strong> and <strong>host name</strong> for the SSH config entry.</Li>
      </Ul>
      <P>
        GitPersona writes the key pair to disk and registers it. You can then
        assign it to a profile.
      </P>

      <H2 id="importing">Importing a key</H2>
      <P>
        Already have keys under <code>~/.ssh</code>? Import them instead of
        generating new ones:
      </P>
      <Ol>
        <Li>Choose the private key file to import.</Li>
        <Li>Optionally set a host alias and host name for its SSH config entry.</Li>
        <Li>GitPersona reads the key&apos;s algorithm and fingerprint and adds it to the list.</Li>
      </Ol>
      <P>
        GitPersona can also scan your SSH directory to discover importable keys,
        and reveal a key&apos;s location in your file manager.
      </P>

      <H2 id="assigning">Assigning a key to a profile</H2>
      <P>
        Assign a key to a profile so the two travel together. When the profile is
        active, its assigned key is the one SSH uses. Un-assigning a key detaches
        it without deleting the file.
      </P>

      <H2 id="ssh-config">The managed SSH config</H2>
      <P>
        GitPersona maintains a managed block of <code>Host</code> stanzas in your{" "}
        <code>~/.ssh/config</code>. Each stanza maps a host alias to a host name,
        user, and identity file, so Git picks the correct key for the active
        identity. You can preview the generated configuration before it&apos;s
        applied, and open the config file directly.
      </P>
      <Callout variant="tip">
        Because SSH identities are wired through the managed config block, they
        follow the applied profile automatically — no per-repository SSH tweaks
        required.
      </Callout>

      <H2 id="security">What is stored</H2>
      <P>
        GitPersona stores <strong>references and metadata only</strong> —
        algorithm, fingerprint, file paths, comment, and host alias. Private key
        bytes are never held in GitPersona&apos;s data, serialized, or logged;
        the keys stay in their files on disk where SSH expects them.
      </P>
    </>
  );
}
