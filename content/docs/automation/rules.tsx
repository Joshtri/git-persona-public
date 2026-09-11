import type { DocMeta } from "@/lib/docs/types";
import { A, Code, H2, Lead, Li, P, Ul } from "@/components/docs/prose";
import { Callout } from "@/components/docs/callout";

export const meta: DocMeta = {
  slug: "automation/rules",
  title: "Rules",
  description:
    "Declarative rules map a repository condition to a target profile. Learn the subjects, operators, evaluation order, and preview.",
  category: "automation",
  order: 1,
  toc: [
    { id: "what-a-rule-is", text: "What a rule is" },
    { id: "conditions", text: "Conditions: subjects and operators" },
    { id: "evaluation", text: "How rules are evaluated" },
    { id: "preview", text: "Previewing a rule" },
    { id: "managing", text: "Managing rules" },
  ],
};

export function Body() {
  return (
    <>
      <Lead>
        Rules connect a repository fact to a profile. They are the decision
        layer: a rule only <em>selects</em> which profile a repository should
        use — applying it stays with the normal switching pipeline.
      </Lead>

      <H2 id="what-a-rule-is">What a rule is</H2>
      <P>A rule has a name, a single condition, and a target profile. A condition is three parts:</P>
      <Ul>
        <Li>a <strong>subject</strong> — the repository fact to inspect,</Li>
        <Li>an <strong>operator</strong> — how to compare it,</Li>
        <Li>a <strong>value</strong> — what to compare against.</Li>
      </Ul>
      <P>
        When the condition holds for a repository, the rule&apos;s target profile
        is the one selected.
      </P>

      <H2 id="conditions">Conditions: subjects and operators</H2>
      <P>The supported subjects are:</P>
      <Ul>
        <Li><strong>Repository path</strong> — the folder path on disk.</Li>
        <Li><strong>Repository name</strong> — the repository&apos;s name.</Li>
        <Li><strong>Remote URL</strong> — the full <Code>origin</Code> URL.</Li>
        <Li><strong>Remote host</strong> — the host parsed from the remote, e.g. <Code>github.com</Code>.</Li>
        <Li><strong>Owner</strong> — the owner/organization parsed from the remote, e.g. <Code>my-company</Code>.</Li>
      </Ul>
      <P>The supported operators are:</P>
      <Ul>
        <Li><strong>Contains</strong></Li>
        <Li><strong>Starts with</strong></Li>
        <Li><strong>Ends with</strong></Li>
        <Li><strong>Equals</strong></Li>
      </Ul>
      <Callout variant="note">
        Remote host and owner are exact identifiers, so they support{" "}
        <strong>Equals</strong> only. Path, name, and remote URL accept all four
        operators. Matching is case-insensitive, and comparisons are plain string
        matching — there are no regular expressions, globbing, or scripting.
      </Callout>
      <P>
        Host and owner are derived by parsing the remote URL, and GitPersona
        understands both SSH (<Code>git@github.com:owner/repo.git</Code>) and
        HTTPS (<Code>https://github.com/owner/repo.git</Code>) forms.
      </P>

      <H2 id="evaluation">How rules are evaluated</H2>
      <P>
        Rules are ordered by priority and evaluated from highest priority
        downward. The <strong>first rule that matches wins</strong>, and its
        target profile is selected; no further rules are considered. A rule with
        an empty value never matches.
      </P>
      <P>
        Individual rules can be enabled or disabled, and you can reorder them to
        change priority. Disabled rules are skipped during evaluation.
      </P>

      <H2 id="preview">Previewing a rule</H2>
      <P>
        You can preview which rule would match a hypothetical repository by
        describing its path, name, and remote URL. The preview reports the
        matching rule and a human-readable reason — and never triggers an actual
        switch. Use it to sanity-check ordering before committing to an
        assignment.
      </P>

      <H2 id="managing">Managing rules</H2>
      <Ul>
        <Li>Create, edit, duplicate, and delete rules.</Li>
        <Li>Enable or disable a single rule, or toggle all at once.</Li>
        <Li>Reorder rules to set evaluation priority.</Li>
        <Li>Export your rule set to a file and import it on another machine.</Li>
      </Ul>
    </>
  );
}
