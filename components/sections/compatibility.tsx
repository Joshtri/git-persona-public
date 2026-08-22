import { Key, Lock } from "@gravity-ui/icons";
import {
  AzureDevOpsIcon,
  BitbucketIcon,
  GithubIcon,
  GitlabIcon,
} from "../icons";
import { Reveal } from "../ui/reveal";

const items = [
  // Brand logos render in their real colours; GitHub is monochrome by brand,
  // and SSH/HTTPS are protocols, so they stay as quiet glyphs.
  { icon: GithubIcon, label: "GitHub", tone: "mono" },
  { icon: GitlabIcon, label: "GitLab", tone: "color" },
  { icon: BitbucketIcon, label: "Bitbucket", tone: "color" },
  { icon: AzureDevOpsIcon, label: "Azure DevOps", tone: "color" },
  { icon: Key, label: "SSH", tone: "muted" },
  { icon: Lock, label: "HTTPS", tone: "muted" },
] as const;

/** Quiet trust strip — every host and protocol you already push to. */
export function Compatibility() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-14 lg:px-8">
      <Reveal className="flex flex-col items-center gap-8">
        <p className="text-[11px] font-semibold tracking-widest text-subtle uppercase">
          Works with everything you already push to
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {items.map(({ icon: Icon, label, tone }) => (
            <span
              key={label}
              className="flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-100 sm:opacity-90"
            >
              <Icon
                className={`size-5 ${
                  tone === "mono"
                    ? "text-foreground"
                    : tone === "muted"
                      ? "text-subtle"
                      : ""
                }`}
              />
              <span
                className={`text-sm font-medium tracking-tight ${
                  tone === "muted" ? "text-subtle" : "text-muted"
                }`}
              >
                {label}
              </span>
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
