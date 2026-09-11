"use client";

import { Trans, useTranslation } from "react-i18next";
import { Check, Minus, Xmark as X } from "@gravity-ui/icons";
import { Section, SectionHeading } from "../ui/section";
import { Reveal } from "../ui/reveal";

type Cell = boolean | "partial" | string;

function CellContent({
  value,
  positive,
  partialText,
}: {
  value: Cell;
  positive?: boolean;
  partialText?: string;
}) {
  if (value === true)
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-success">
        <Check className="size-4" aria-hidden />
        <span className="sr-only">Yes</span>
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex items-center text-subtle/70">
        <X className="size-4" aria-hidden />
        <span className="sr-only">No</span>
      </span>
    );
  if (value === "partial")
    return (
      <span className="inline-flex items-center gap-1.5 text-sm text-subtle">
        <Minus className="size-4" aria-hidden /> {partialText}
      </span>
    );
  return (
    <span className={`text-sm ${positive ? "text-success" : "text-subtle"}`}>
      {value}
    </span>
  );
}

export function Comparison() {
  const { t } = useTranslation();

  const rows: { label: string; manual: Cell; gitpersona: Cell }[] = [
    { label: t("comparison.speed"), manual: t("comparison.minutesPerSwitch"), gitpersona: t("comparison.underASecond") },
    { label: t("comparison.easySetup"), manual: false, gitpersona: true },
    { label: t("comparison.multipleProfiles"), manual: "partial", gitpersona: true },
    { label: t("comparison.sshManagement"), manual: t("comparison.handEditedConfig"), gitpersona: true },
    { label: t("comparison.credentialSwitching"), manual: false, gitpersona: true },
    { label: t("comparison.ruleBasedAutoAssignment"), manual: false, gitpersona: true },
    { label: t("comparison.oneClickSwitch"), manual: false, gitpersona: true },
    { label: t("comparison.wrongIdentityPrevention"), manual: false, gitpersona: true },
    { label: t("comparison.visualDashboard"), manual: false, gitpersona: true },
  ];

  return (
    <Section id="compare">
      <SectionHeading
        eyebrow={t("comparison.eyebrow")}
        title={
          <Trans
            i18nKey="comparison.title"
            components={{ grad: <span className="text-gradient" /> }}
          />
        }
        description={t("comparison.description")}
      />
      <Reveal className="mt-14 overflow-hidden rounded-2xl border border-white/[0.08]">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Manual Git configuration compared to GitPersona
          </caption>
          <thead>
            <tr className="border-b border-white/[0.08] bg-white/[0.02]">
              <th scope="col" className="px-5 py-4 text-sm font-medium text-subtle sm:px-6">
                {t("comparison.capability")}
              </th>
              <th scope="col" className="px-5 py-4 text-sm font-medium text-subtle sm:px-6">
                {t("comparison.manualGitConfig")}
              </th>
              <th
                scope="col"
                className="relative bg-accent/[0.07] px-5 py-4 text-sm font-semibold text-accent-soft sm:px-6"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                GitPersona
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.label}
                className="border-b border-white/[0.05] last:border-b-0"
              >
                <th
                  scope="row"
                  className="px-5 py-3.5 text-sm font-medium text-foreground sm:px-6"
                >
                  {row.label}
                </th>
                <td className="px-5 py-3.5 sm:px-6">
                  <CellContent value={row.manual} partialText={t("comparison.scriptsAndIncludeIf")} />
                </td>
                <td className="bg-accent/[0.05] px-5 py-3.5 sm:px-6">
                  <CellContent value={row.gitpersona} positive />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}
