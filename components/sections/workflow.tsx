"use client";

import { Trans, useTranslation } from "react-i18next";
import {
  Check,
  FolderTree as FolderGit2,
  Key as KeyRound,
  Lock,
  Envelope as Mail,
  Sliders as SlidersHorizontal,
  Thunderbolt as Zap,
} from "@gravity-ui/icons";
import type { ComponentType } from "react";
import { Section, SectionHeading } from "../ui/section";
import { RevealGroup, RevealItem } from "../ui/reveal";

const swapRows: { icon: ComponentType<{ className?: string }>; label: string; value: string }[] = [
  { icon: Mail, label: "user.email", value: "sara.k@acme.dev" },
  { icon: KeyRound, label: "ssh key", value: "id_ed25519_acme" },
  { icon: Lock, label: "credential", value: "sara-acme ●●●●" },
  { icon: FolderGit2, label: "scope", value: "all open repos" },
];

export function Workflow() {
  const { t } = useTranslation();

  return (
    <Section id="workflow">
      <SectionHeading
        align="left"
        eyebrow={t("workflow.eyebrow")}
        title={
          <Trans
            i18nKey="workflow.title"
            components={{ grad: <span className="text-gradient" /> }}
          />
        }
        description={t("workflow.description")}
      />

      <RevealGroup
        className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_1fr]"
        stagger={0.12}
      >
        {/* Card 1 — rule engine */}
        <RevealItem className="h-full">
          <article className="relative flex h-full flex-col overflow-hidden rounded-3xl brand-gradient p-8 text-white sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-white/20 blur-3xl"
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium tracking-wide text-white/90 uppercase backdrop-blur">
                <SlidersHorizontal className="size-3.5" />
                {t("workflow.watcherBadge")}
              </span>
              <h3 className="mt-5 text-2xl font-semibold leading-snug tracking-tight sm:text-[26px]">
                <Trans
                  i18nKey="workflow.watcherTitle"
                  components={{
                    hl: <span className="rounded-lg bg-white/20 px-1.5 py-0.5" />,
                  }}
                />
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/75">
                {t("workflow.watcherDescription")}
              </p>
            </div>

            <RulesMock engineLabel={t("workflow.watchingFilesystem")} activeLabel={t("workflow.live")} />
          </article>
        </RevealItem>

        {/* Card 2 — the swap */}
        <RevealItem className="h-full">
          <article className="card flex h-full flex-col rounded-3xl p-8 sm:p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[11px] font-medium tracking-wide text-accent-soft uppercase">
              <Zap className="size-3.5" />
              {t("workflow.swapBadge")}
            </span>
            <h3 className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-[26px]">
              <Trans
                i18nKey="workflow.swapTitle"
                components={{ grad: <span className="text-gradient" /> }}
              />
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
              {t("workflow.swapDescription")}
            </p>

            <SwapMock />
          </article>
        </RevealItem>
      </RevealGroup>
    </Section>
  );
}

function RulesMock({ engineLabel, activeLabel }: { engineLabel: string; activeLabel: string }) {
  const rules: { type: string; value: string }[] = [
    { type: "path", value: "~/work/acme-*" },
    { type: "remote", value: "github.com/acme/*" },
    { type: "owner", value: "acme-org" },
  ];
  return (
    <div className="mt-8 rounded-2xl border border-white/15 bg-black/10 p-4 backdrop-blur">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-[11px] font-medium text-white/85">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          {engineLabel}
        </span>
        <span className="font-mono text-[10px] tracking-widest text-white/45 uppercase">
          {activeLabel}
        </span>
      </div>

      <dl className="mt-4 space-y-1.5 font-mono text-[11px]">
        {rules.map(({ type, value }) => (
          <div key={type} className="flex items-center justify-between gap-4">
            <dt className="text-white/45">{type}</dt>
            <dd className="flex items-center gap-1.5 text-white/85">
              {value}
              <Check className="size-3.5 text-emerald-400" />
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-3 rounded-lg bg-white/10 px-3 py-2 text-[11px] font-medium text-white/90">
        → Acme Corp
      </div>
    </div>
  );
}

function SwapMock() {
  return (
    <div className="mt-8 space-y-3">
      <div className="flex items-center gap-2.5 rounded-xl border border-success/25 bg-success/[0.08] px-3.5 py-2.5">
        <Check className="size-4 shrink-0 text-success" />
        <p className="text-[12.5px] font-semibold text-success">
          Switched to Acme Corp — 0.6s
        </p>
      </div>

      <dl className="space-y-2 rounded-2xl border border-white/[0.06] bg-black/10 p-4 font-mono text-[11.5px]">
        {swapRows.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center justify-between gap-4">
            <dt className="flex items-center gap-2 text-subtle">
              <Icon className="size-3.5" />
              {label}
            </dt>
            <dd className="text-accent-soft">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
