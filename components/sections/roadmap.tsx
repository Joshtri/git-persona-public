import { CircleCheck as CheckCircle2, CircleDashed } from "@gravity-ui/icons";
import { site } from "@/lib/site";
import { Section, SectionHeading } from "../ui/section";
import { Reveal } from "../ui/reveal";

export function Roadmap() {
  return (
    <Section id="roadmap">
      <SectionHeading
        eyebrow="Roadmap"
        title={
          <>
            Where it&apos;s <span className="text-gradient">going</span>.
          </>
        }
        description="GitPersona is actively developed. Here's what's shipped and what's next."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="card h-full rounded-2xl p-7">
            <h3 className="mb-6 flex items-center gap-2.5 text-sm font-semibold tracking-widest text-success uppercase">
              <CheckCircle2 className="size-4" />
              Available now
            </h3>
            <ul className="space-y-5">
              {site.roadmap.shipped.map((item) => (
                <li key={item.title} className="flex gap-3.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-success" />
                  <div>
                    <p className="text-[15px] font-medium">{item.title}</p>
                    <p className="mt-0.5 text-sm text-subtle">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card h-full rounded-2xl p-7">
            <h3 className="mb-6 flex items-center gap-2.5 text-sm font-semibold tracking-widest text-accent-soft uppercase">
              <CircleDashed className="size-4" />
              Coming soon
            </h3>
            <ul className="space-y-5">
              {site.roadmap.upcoming.map((item) => (
                <li key={item.title} className="flex gap-3.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent/60" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[15px] font-medium">{item.title}</p>
                      {item.eta && (
                        <span className="rounded-full border border-white/[0.08] px-2 py-0.5 font-mono text-[10px] text-subtle">
                          {item.eta}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-sm text-subtle">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
