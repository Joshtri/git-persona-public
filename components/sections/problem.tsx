import {
  FileExclamation as FileWarning,
  Key as KeyRound,
  EnvelopeOpenXmark as MailWarning,
  PersonXmark as UserX,
} from "@gravity-ui/icons";
import { Section, SectionHeading } from "../ui/section";
import { RevealGroup, RevealItem } from "../ui/reveal";

const problems = [
  {
    icon: MailWarning,
    title: "Wrong commit author",
    body: "Work email, now permanent in public history.",
  },
  {
    icon: UserX,
    title: "Wrong GitHub account",
    body: "Personal account pushed into a client's audit log.",
  },
  {
    icon: KeyRound,
    title: "Wrong SSH key",
    body: "Permission denied (publickey).",
  },
  {
    icon: FileWarning,
    title: "Credential roulette",
    body: "Last project's token applies to the next.",
  },
];

export function Problem() {
  return (
    <Section id="problem">
      <SectionHeading
        eyebrow="The problem"
        title={
          <>
            Multiple identities.
            <br />
            One <span className="text-gradient">fragile</span> setup.
          </>
        }
        description="Git was built for one identity. Add a second and everything turns manual — and manual eventually fails."
      />
      <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map(({ icon: Icon, title, body }) => (
          <RevealItem key={title}>
            <article className="card group h-full rounded-2xl p-6 transition-colors duration-300 hover:border-white/[0.14]">
              <span className="mb-5 flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition-colors group-hover:border-accent/30 group-hover:bg-accent/[0.08]">
                <Icon className="size-5 text-muted transition-colors group-hover:text-accent-soft" />
              </span>
              <h3 className="mb-2 text-[15px] font-semibold tracking-tight">
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
