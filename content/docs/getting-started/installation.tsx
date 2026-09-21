import type { DocMeta } from "@/lib/docs/types";
import { A, H2, Lead, Li, Ol, P, Ul } from "@/components/docs/prose";
import { Callout } from "@/components/docs/callout";

export const meta: DocMeta = {
  slug: "getting-started/installation",
  title: "Installation",
  description:
    "Download and install GitPersona on Windows, Linux, or macOS, and what to expect on first launch.",
  category: "getting-started",
  order: 2,
  toc: [
    { id: "download", text: "Download" },
    { id: "windows", text: "Windows" },
    { id: "linux", text: "Linux" },
    { id: "macos", text: "macOS" },
    { id: "first-launch", text: "First launch" },
    { id: "updates", text: "Staying up to date" },
  ],
};

export function Body() {
  return (
    <>
      <Lead>
        GitPersona ships as a native desktop application for Windows, Linux, and
        macOS. Pick your platform below, install, and launch.
      </Lead>

      <H2 id="download">Download</H2>
      <P>
        Get the latest build from the <A href="/download">download page</A>. Each
        release lists the supported platforms and file formats.
      </P>
      <Callout variant="note">
        GitPersona supports <strong>Windows</strong>, <strong>Linux</strong>, and{" "}
        <strong>macOS</strong>. Secure credential storage uses each
        platform&apos;s native secure store — Windows Credential Manager, the
        Linux Secret Service, or the macOS Keychain.
      </Callout>

      <H2 id="windows">Windows</H2>
      <P>Supported on Windows 10 and Windows 11.</P>
      <Ol>
        <Li>Download the Windows installer (<code>.exe</code>).</Li>
        <Li>
          Run it. GitPersona installs per-user, so no administrator elevation is
          required.
        </Li>
        <Li>Launch GitPersona from the Start menu when the installer finishes.</Li>
      </Ol>
      <Callout variant="tip">
        Windows SmartScreen may warn about a new publisher on first run. Choose{" "}
        <em>More info → Run anyway</em> if the download came from the official
        release page.
      </Callout>

      <H2 id="linux">Linux</H2>
      <P>
        Linux builds are distributed as an <code>.AppImage</code> and a{" "}
        <code>.deb</code> package.
      </P>
      <Ul>
        <Li>
          <strong>AppImage</strong> — mark it executable
          (<code>chmod +x GitPersona*.AppImage</code>) and run it directly. No
          installation step is required.
        </Li>
        <Li>
          <strong>.deb</strong> — install on Debian/Ubuntu-based distributions
          with your package manager, then launch GitPersona from your
          application menu.
        </Li>
      </Ul>

      <H2 id="macos">macOS</H2>
      <P>
        macOS builds are distributed as a <code>.dmg</code> for Apple Silicon
        (M1/M2/M3).
      </P>
      <Ol>
        <Li>Open the <code>.dmg</code> and drag GitPersona to Applications.</Li>
        <Li>
          Launch it from Applications. On first run, macOS Gatekeeper may ask you
          to confirm opening an app from an identified developer.
        </Li>
      </Ol>
      <Callout variant="tip">
        Credentials are stored in your login Keychain. macOS may prompt to allow
        GitPersona to access the Keychain the first time a credential is written
        or read.
      </Callout>

      <H2 id="first-launch">First launch</H2>
      <P>
        The first time you open GitPersona it scans your system for an existing
        Git setup — your global identity, SSH keys under <code>~/.ssh</code>, and
        any credentials already held for supported hosts — and offers to turn
        them into your first profile. That flow is covered in{" "}
        <A href="/docs/getting-started/first-profile">Create your first profile</A>.
      </P>
      <P>
        GitPersona can also run from the system tray. You can choose to launch it
        at login, start minimized, and keep it running in the tray when the
        window is closed — see <A href="/docs/reference/settings">Settings &amp; tray</A>.
      </P>

      <H2 id="updates">Staying up to date</H2>
      <P>
        GitPersona checks for updates and can download and install a new version
        in place, then restart. See{" "}
        <A href="/docs/reference/updates">Updates</A> for details.
      </P>
    </>
  );
}
