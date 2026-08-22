import type { DocMeta } from "@/lib/docs/types";
import { A, H2, Lead, Li, P, Ul } from "@/components/docs/prose";
import { Callout } from "@/components/docs/callout";

export const meta: DocMeta = {
  slug: "security/gpg-signing",
  title: "GPG signing",
  description:
    "Attach a signing key reference to a profile so signed commits use the right key when that profile is active.",
  category: "security",
  order: 1,
  toc: [
    { id: "overview", text: "Overview" },
    { id: "configuring", text: "Configuring a signing key" },
    { id: "scope", text: "What GitPersona does and does not do" },
  ],
};

export function Body() {
  return (
    <>
      <Lead>
        A profile can carry a signing key reference, so the correct key is used
        for signed commits whenever that profile is active.
      </Lead>

      <H2 id="overview">Overview</H2>
      <P>
        The signing key is part of a profile&apos;s identity, alongside name and
        email. It is optional — profiles that don&apos;t sign simply leave it
        empty.
      </P>

      <H2 id="configuring">Configuring a signing key</H2>
      <P>
        Set the signing key when you create or edit a profile. When the profile
        is applied, GitPersona includes the signing key in the Git configuration
        it writes, so your commits are signed with the key that belongs to the
        active identity. Leaving the field blank means no signing key is set for
        that profile.
      </P>

      <H2 id="scope">What GitPersona does and does not do</H2>
      <Ul>
        <Li>
          <strong>Does</strong> — reference a signing key per profile and apply
          it as part of switching, so the right key is configured for the right
          identity.
        </Li>
        <Li>
          <strong>Does not</strong> — generate, import, or otherwise manage
          cryptographic signing keys. You create and manage the key with your own
          tooling; GitPersona only points Git at it.
        </Li>
      </Ul>
      <Callout variant="note">
        Because GitPersona references an existing key rather than managing key
        material, make sure the key is already present and usable by Git on the
        machine before enabling signing for a profile.
      </Callout>
      <P>
        For how commit author identity is applied, see{" "}
        <A href="/docs/getting-started/switching-profiles">Switching profiles</A>.
      </P>
    </>
  );
}
