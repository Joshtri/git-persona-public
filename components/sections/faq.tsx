import { ChevronDown } from "@gravity-ui/icons";
import { Section, SectionHeading } from "../ui/section";
import { Reveal } from "../ui/reveal";

export const faqs = [
  {
    q: "Why not just use the Git CLI?",
    a: "You can — that's the point. GitPersona doesn't replace Git; it automates the parts around it. Conditional includes, SSH host aliases, and credential helpers all work, but they're fragile, per-machine, and easy to get subtly wrong. GitPersona manages the same standard mechanisms with validation on top, so a mistake becomes impossible rather than merely unlikely.",
  },
  {
    q: "Does GitPersona modify my repositories?",
    a: "No. GitPersona only writes standard Git configuration (user.name, user.email, signing keys) and SSH/credential settings. It never touches your working tree, history, or remotes. The optional Commit Guard installs a pre-commit hook only in repositories you choose to protect — it preserves any existing hook and can be removed at any time.",
  },
  {
    q: "Can I use multiple GitHub accounts?",
    a: "Yes — that's the core use case. Each profile carries its own GitHub credentials and SSH key. GitPersona routes each repository to the right account automatically, so personal, work, and client accounts coexist on one machine without conflicts.",
  },
  {
    q: "Is my data uploaded anywhere?",
    a: "No. GitPersona is local-first: profiles, keys, and tokens stay on your machine, secured by your OS keychain. There's no account, no server, and no telemetry. The upcoming Cloud Sync feature will be optional and end-to-end encrypted.",
  },
  {
    q: "Does it work offline?",
    a: "Completely. Switching identities, mapping repositories, managing keys, and applying rules all happen locally. GitPersona does not require a network connection for any core functionality.",
  },
  {
    q: "Is it open source?",
    a: "GitPersona is published on GitHub. You can read the source, audit what happens to your config and keys, and build trust before relying on it.",
  },
];

export function Faq() {
  return (
    <Section id="faq" className="max-w-4xl">
      <SectionHeading
        eyebrow="FAQ"
        title={
          <>
            Questions, <span className="text-gradient">answered</span>.
          </>
        }
      />
      <Reveal className="mt-12 space-y-3">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group card rounded-2xl transition-colors open:border-white/[0.14]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[15px] font-medium tracking-tight select-none [&::-webkit-details-marker]:hidden">
              {item.q}
              <ChevronDown className="size-4 shrink-0 text-subtle transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
              {item.a}
            </p>
          </details>
        ))}
      </Reveal>
    </Section>
  );
}
