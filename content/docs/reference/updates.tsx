import type { DocMeta } from "@/lib/docs/types";
import { A, H2, Lead, Li, Ol, P } from "@/components/docs/prose";
import { Callout } from "@/components/docs/callout";

export const meta: DocMeta = {
  slug: "reference/updates",
  title: "Updates",
  description:
    "GitPersona can check for new versions and install them in place, then restart.",
  category: "reference",
  order: 3,
  toc: [
    { id: "how-it-works", text: "How updates work" },
    { id: "installing", text: "Installing an update" },
    { id: "offline", text: "Offline behavior" },
  ],
};

export function Body() {
  return (
    <>
      <Lead>
        GitPersona has a built-in updater. It checks for a newer release and can
        download and apply it without a separate installer run.
      </Lead>

      <H2 id="how-it-works">How updates work</H2>
      <P>
        GitPersona checks its update endpoint for a version newer than the one
        you&apos;re running. When one is available, it reports the new version and
        its release notes so you can see what changed before updating.
      </P>

      <H2 id="installing">Installing an update</H2>
      <Ol>
        <Li>GitPersona checks for an update and shows the new version if one exists.</Li>
        <Li>Choose to install. The update is downloaded and applied in place.</Li>
        <Li>GitPersona restarts into the new version.</Li>
      </Ol>
      <Callout variant="note">
        You can always download the latest build manually from the{" "}
        <A href="/download">download page</A> or{" "}
        <A href="https://github.com/Joshtri/git-persona/releases">GitHub Releases</A>.
      </Callout>

      <H2 id="offline">Offline behavior</H2>
      <P>
        The update check requires a network connection. GitPersona&apos;s core
        features are local-first and keep working offline — checking for updates
        is the only part that reaches the network for this flow.
      </P>
    </>
  );
}
