"use client";

import { Trans, useTranslation } from "react-i18next";
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

const featureKeys = [
  { icon: Users, key: "multipleProfiles" },
  { icon: KeyRound, key: "sshManager" },
  { icon: Lock, key: "credManager" },
  { icon: FolderGit2, key: "repoMapping" },
  { icon: SlidersHorizontal, key: "ruleAssignment" },
  { icon: Radar, key: "smartSwitching" },
  { icon: ShieldCheck, key: "switchConfirm" },
  { icon: ShieldKeyhole, key: "commitGuard" },
  { icon: Palette, key: "beautifulUi" },
  { icon: Zap, key: "fastPerf" },
  { icon: MonitorSmartphone, key: "crossPlatform" },
  { icon: WifiOff, key: "offlineFirst" },
  { icon: Layers, key: "secureStorage" },
] as const;

export function Features({ preview = false }: { preview?: boolean }) {
  const { t } = useTranslation();
  const items = preview ? featureKeys.slice(0, 6) : featureKeys;

  return (
    <Section id="features">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-lg">
          <Eyebrow>{t("features.eyebrow")}</Eyebrow>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t("features.titleLine1")}
            <br />
            <Trans
              i18nKey="features.titleLine2"
              components={{ grad: <span className="text-gradient" /> }}
            />
          </h2>
        </div>
        <div className="flex max-w-sm flex-col items-start gap-5 lg:pb-2 lg:items-end lg:text-right">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {t("features.description")}
          </p>
          {preview && (
            <ButtonLink href="/features" variant="secondary" size="sm">
              {t("features.seeAll", { count: featureKeys.length })}
              <ArrowRight className="size-3.5" />
            </ButtonLink>
          )}
        </div>
      </div>
      <RevealGroup
        className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.04}
      >
        {items.map(({ icon: Icon, key }) => (
          <RevealItem key={key} className="h-full">
            <article className="group h-full bg-background p-6 transition-colors duration-300 hover:bg-elevated">
              <Icon className="mb-4 size-5 text-muted transition-colors group-hover:text-accent-soft" />
              <h3 className="mb-1.5 text-[14.5px] font-semibold tracking-tight">
                {t(`features.${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-subtle">
                {t(`features.${key}.body`)}
              </p>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
