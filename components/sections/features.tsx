import {
  ArrowRight,
  FolderTree as FolderGit2,
  Key as KeyRound,
  Layers,
  Lock,
  Display as MonitorSmartphone,
  Palette,
  Target as Radar,
  ShieldCheck,
  ShieldKeyhole,
  Sliders as SlidersHorizontal,
  Persons as Users,
  CloudSlash as WifiOff,
  Thunderbolt as Zap,
} from "@gravity-ui/icons";
import { ButtonLink } from "../ui/button";
import { Eyebrow } from "../ui/badge";
import { Section } from "../ui/section";
import { RevealGroup, RevealItem } from "../ui/reveal";

const features = [
  {
    icon: Users,
    title: "Multiple Git profiles",
    body: "Name, email, signing key, and credentials as one unit.",
  },
  {
    icon: KeyRound,
    title: "SSH key manager",
    body: "Generate, import, and route keys per profile.",
  },
  {
    icon: Lock,
    title: "Credential manager",
    body: "Tokens in your OS keychain. Never plaintext.",
  },
  {
    icon: FolderGit2,
    title: "Repository mapping",
    body: "Bind folders to profiles. Rules assign automatically.",
  },
  {
    icon: SlidersHorizontal,
    title: "Rule-based assignment",
    body: "Match on path, remote, host, or owner.",
  },
  {
    icon: Radar,
    title: "Smart Switching",
    body: "A watcher activates the right identity — no click.",
  },
  {
    icon: ShieldCheck,
    title: "Switch confirmation",
    body: "Require approval before any identity change.",
  },
  {
    icon: ShieldKeyhole,
    title: "Commit Guard",
    body: "Verify your Git name and email before each commit — warn or block.",
  },
  {
    icon: Palette,
    title: "Beautiful desktop UI",
    body: "Native-feeling, keyboard-driven, out of your way.",
  },
  {
    icon: Zap,
    title: "Fast performance",
    body: "Sub-second switches. Instant launch. Sips memory.",
  },
  {
    icon: MonitorSmartphone,
    title: "Cross platform",
    body: "Windows, Linux, and macOS.",
  },
  {
    icon: WifiOff,
    title: "Offline first",
    body: "No account, no server, no telemetry.",
  },
  {
    icon: Layers,
    title: "Secure local storage",
    body: "Secrets in your keychain. Config stays local.",
  },
];

/**
 * `preview` renders only the 6 core capabilities plus a link to the full
 * /features page. Without it (on /features) the complete list is shown.
 */
export function Features({ preview = false }: { preview?: boolean }) {
  const items = preview ? features.slice(0, 6) : features;

  return (
    <Section id="features">
      {/* Two-column header: title left, description + CTA right — avoids the
          boring centered-everything look and creates natural visual tension. */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-lg">
          <Eyebrow>Features</Eyebrow>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Everything you need.
            <br />
            Nothing you{" "}
            <span className="text-gradient">don&apos;t</span>.
          </h2>
        </div>
        <div className="flex max-w-sm flex-col items-start gap-5 lg:pb-2 lg:items-end lg:text-right">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            One job — keeping your Git identity correct — done completely.
          </p>
          {preview && (
            <ButtonLink href="/features" variant="secondary" size="sm">
              See all {features.length} features
              <ArrowRight className="size-3.5" />
            </ButtonLink>
          )}
        </div>
      </div>
      <RevealGroup
        className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.04}
      >
        {items.map(({ icon: Icon, title, body }) => (
          <RevealItem key={title} className="h-full">
            <article className="group h-full bg-background p-6 transition-colors duration-300 hover:bg-elevated">
              <Icon className="mb-4 size-5 text-muted transition-colors group-hover:text-accent-soft" />
              <h3 className="mb-1.5 text-[14.5px] font-semibold tracking-tight">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-subtle">{body}</p>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
