import type { DocMeta } from "@/lib/docs/types";
import { A, H2, Lead, Li, P, Ul } from "@/components/docs/prose";
import { Callout } from "@/components/docs/callout";

export const meta: DocMeta = {
  slug: "reference/activity-log",
  title: "Activity log",
  description:
    "GitPersona records identity changes and profile actions to a local audit history you can review and purge.",
  category: "reference",
  order: 1,
  toc: [
    { id: "overview", text: "Overview" },
    { id: "recorded", text: "What is recorded" },
    { id: "managing", text: "Viewing and purging" },
    { id: "privacy", text: "What is never recorded" },
  ],
};

export function Body() {
  return (
    <>
      <Lead>
        The activity log is a local history of what GitPersona has done — a record
        of identity changes and profile actions you can review after the fact.
      </Lead>

      <H2 id="overview">Overview</H2>
      <P>
        Each entry captures a timestamp, the action, and — where relevant — the
        profile and repository path involved. The log is stored locally on your
        machine.
      </P>

      <H2 id="recorded">What is recorded</H2>
      <P>Entries describe events such as:</P>
      <Ul>
        <Li>identity changes (which profile was applied, and to which repository),</Li>
        <Li>profile actions,</Li>
        <Li>rule-driven and automatic switches.</Li>
      </Ul>
      <P>
        An entry records the timestamp, an action description, and optional
        profile and repository references — enough to answer &quot;what changed,
        and when&quot;.
      </P>

      <H2 id="managing">Viewing and purging</H2>
      <P>
        The activity log can be shown or hidden via a setting. You can purge
        history older than a chosen number of days to keep it tidy.
      </P>

      <H2 id="privacy">What is never recorded</H2>
      <Callout variant="warning">
        The activity log never contains secrets. Tokens, passwords, and private
        key material are never written to it — only non-sensitive metadata about
        actions. See <A href="/docs/security/credential-storage">Credential
        storage</A> for the full secret-handling model.
      </Callout>
    </>
  );
}
