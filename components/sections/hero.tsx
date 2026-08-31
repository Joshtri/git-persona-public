"use client";

import { Trans, useTranslation } from "react-i18next";
import { DashboardMockup } from "../mockups";
import { WindowsIcon } from "../icons";
import { ButtonLink } from "../ui/button";
import { Reveal } from "../ui/reveal";

export function Hero() {
  const { t } = useTranslation();

  const stats = [
    { value: "<0.6s", labelKey: "hero.toSwitch" },
    { value: "0", labelKey: "hero.configEdits" },
    { value: "100%", labelKey: "hero.local" },
    { value: "∞", labelKey: "hero.profiles" },
  ];

  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="glow absolute -top-56 left-1/2 h-[680px] w-[1000px] -translate-x-1/2 opacity-60" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-7 px-6 text-center">
        <Reveal>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <Trans
              i18nKey="hero.headline"
              components={{ grad: <span className="text-gradient" /> }}
            />
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="max-w-lg text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {t("hero.subheading")}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <ButtonLink href="/download" size="lg">
              <WindowsIcon className="size-4" />
              {t("hero.downloadCta")}
            </ButtonLink>
            <ButtonLink href="/docs" size="lg" variant="secondary">
              {t("hero.readDocs")}
            </ButtonLink>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.24} y={32} className="relative mx-auto mt-16 w-full max-w-5xl px-6">
        <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
          <DashboardMockup />
        </div>
      </Reveal>

      <Reveal delay={0.32} className="mx-auto mt-14 w-full max-w-3xl px-6">
        <dl className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {stats.map(({ value, labelKey }) => (
            <div key={labelKey} className="flex flex-col items-center gap-1 text-center">
              <dt className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {value}
              </dt>
              <dd className="text-xs tracking-wide text-subtle uppercase">
                {t(labelKey)}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
