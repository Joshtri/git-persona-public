import {
  Globe,
  Lock,
  Display as MonitorSmartphone,
  Terminal,
  CloudSlash as WifiOff,
} from "@gravity-ui/icons";
import { GithubIcon } from "../icons";
import { Reveal } from "../ui/reveal";

const badges = [
  { icon: MonitorSmartphone, label: "Cross Platform" },
  { icon: Terminal, label: "Windows" },
  { icon: Globe, label: "Linux" },
  { icon: GithubIcon, label: "Open Source" },
  { icon: Lock, label: "Privacy First" },
  { icon: WifiOff, label: "Works Offline" },
];

export function Trust() {
  return (
    <section aria-label="Platform support" className="relative py-6">
      <Reveal>
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6">
          {badges.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 text-sm font-medium text-subtle transition-colors hover:text-muted"
            >
              <Icon className="size-4" aria-hidden />
              {label}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
