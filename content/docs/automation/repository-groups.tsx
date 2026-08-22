import type { DocMeta } from "@/lib/docs/types";
import { A, H2, Lead, Li, P, Ul } from "@/components/docs/prose";

export const meta: DocMeta = {
  slug: "automation/repository-groups",
  title: "Repository groups",
  description:
    "Organize tracked repositories into labeled, colored groups to keep large workspaces manageable.",
  category: "automation",
  order: 3,
  toc: [
    { id: "overview", text: "Overview" },
    { id: "scanning", text: "Tracking repositories" },
    { id: "grouping", text: "Creating and using groups" },
    { id: "use-cases", text: "Practical use cases" },
  ],
};

export function Body() {
  return (
    <>
      <Lead>
        Repository groups organize the repositories GitPersona tracks into
        labeled, colored buckets — a way to keep a large, multi-account workspace
        readable.
      </Lead>

      <H2 id="overview">Overview</H2>
      <P>
        A group has a name and an optional color. Any tracked repository can
        belong to a group, and you can move repositories between groups
        individually or in bulk.
      </P>

      <H2 id="scanning">Tracking repositories</H2>
      <P>
        GitPersona discovers repositories by scanning folders you point it at. A
        scan reports progress as it walks the directories, and each discovered
        repository can be refreshed, revealed in your file manager, marked as a
        favorite, assigned to a profile, and placed in a group.
      </P>

      <H2 id="grouping">Creating and using groups</H2>
      <Ul>
        <Li>Create a group with a name and optional color.</Li>
        <Li>Rename or recolor a group, or delete it.</Li>
        <Li>Assign a single repository to a group, or set the group for many repositories at once.</Li>
      </Ul>

      <H2 id="use-cases">Practical use cases</H2>
      <Ul>
        <Li>
          <strong>By client or employer</strong> — one group per organization, so
          each client&apos;s repositories sit together.
        </Li>
        <Li>
          <strong>By context</strong> — separate <em>Work</em>, <em>Personal</em>,
          and <em>Open source</em> for quick scanning.
        </Li>
        <Li>
          <strong>By project</strong> — cluster the repositories that make up a
          single product across services.
        </Li>
      </Ul>
      <P>
        Groups are organizational. To automate <em>which identity</em> a
        repository uses, pair them with per-repository assignments and{" "}
        <A href="/docs/automation/rules">rules</A>.
      </P>
    </>
  );
}
