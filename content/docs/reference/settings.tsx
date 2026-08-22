import type { DocMeta } from "@/lib/docs/types";
import { A, H2, Lead, Li, P, Ul } from "@/components/docs/prose";

export const meta: DocMeta = {
  slug: "reference/settings",
  title: "Settings & tray",
  description:
    "Theme, startup, and system-tray behavior — the application-level preferences that control how GitPersona runs.",
  category: "reference",
  order: 2,
  toc: [
    { id: "appearance", text: "Appearance" },
    { id: "startup-tray", text: "Startup and tray" },
    { id: "repositories", text: "Repositories" },
    { id: "smart-switching", text: "Smart Switching" },
  ],
};

export function Body() {
  return (
    <>
      <Lead>
        GitPersona&apos;s settings control how the application looks and runs.
        Preferences persist between sessions and take effect immediately.
      </Lead>

      <H2 id="appearance">Appearance</H2>
      <P>
        Choose a <strong>theme</strong>: Dark, Light, or System. Dark is the
        default. System follows your operating system&apos;s appearance.
      </P>

      <H2 id="startup-tray">Startup and tray</H2>
      <P>
        GitPersona can live in the system tray so it&apos;s available without
        occupying a window:
      </P>
      <Ul>
        <Li>
          <strong>Launch at startup</strong> — register GitPersona to start when
          you log in. A login start comes up straight into the tray.
        </Li>
        <Li>
          <strong>Start minimized</strong> — begin in the tray instead of showing
          the main window.
        </Li>
        <Li>
          <strong>Close to tray</strong> — keep running in the tray when you close
          the window, instead of quitting. This lets{" "}
          <A href="/docs/automation/smart-switching">Smart Switching</A> keep
          watching in the background.
        </Li>
      </Ul>
      <P>
        Left-clicking the tray icon restores the window; the tray menu offers
        Show and Quit.
      </P>

      <H2 id="repositories">Repositories</H2>
      <P>
        <strong>Auto-scan repositories</strong> controls whether GitPersona
        refreshes tracked repositories automatically. See{" "}
        <A href="/docs/automation/repository-groups">Repository groups</A> for how
        repositories are discovered and organized.
      </P>

      <H2 id="smart-switching">Smart Switching</H2>
      <P>
        Smart Switching has its own set of toggles — enable/disable, confirm
        before switch, notifications, and start on launch — documented in{" "}
        <A href="/docs/automation/smart-switching">Smart Switching</A>.
      </P>
    </>
  );
}
