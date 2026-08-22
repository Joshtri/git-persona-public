import { DashboardMockup } from "../mockups";
import { WindowsIcon } from "../icons";
import { ButtonLink } from "../ui/button";
import { Reveal } from "../ui/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* Backdrop — single soft blue spotlight, no hard grid */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="glow absolute -top-56 left-1/2 h-[680px] w-[1000px] -translate-x-1/2 opacity-60" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
      </div>

      {/* Copy — centered */}
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-7 px-6 text-center">
        <Reveal>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Never use the wrong{" "}
            <span className="text-gradient">Git identity</span> again.
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="max-w-lg text-pretty text-base leading-relaxed text-muted sm:text-lg">
            One click swaps your identity, SSH keys, and credentials — across
            every repo at once.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <ButtonLink href="/download" size="lg">
              <WindowsIcon className="size-4" />
              Download for Windows
            </ButtonLink>
            <ButtonLink href="/docs" size="lg" variant="secondary">
              Read the docs
            </ButtonLink>
          </div>
        </Reveal>
      </div>

      {/* Product mockup — centered below the copy.
          Elevation comes from the AppWindow's own drop shadow; we only add a
          thin ring so the edges stay crisp against the dark background. */}
      <Reveal delay={0.24} y={32} className="relative mx-auto mt-16 w-full max-w-5xl px-6">
        <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
          <DashboardMockup />
        </div>
      </Reveal>

      {/* Stat strip — numbers do the talking, not paragraphs */}
      <Reveal delay={0.32} className="mx-auto mt-14 w-full max-w-3xl px-6">
        <dl className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 text-center">
              <dt className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {value}
              </dt>
              <dd className="text-xs tracking-wide text-subtle uppercase">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}

const stats = [
  { value: "<0.6s", label: "to switch" },
  { value: "0", label: "config edits" },
  { value: "100%", label: "local" },
  { value: "∞", label: "profiles" },
];
