"use client";

import { Trans, useTranslation } from "react-i18next";
import {
  FileExclamation as FileWarning,
  Key as KeyRound,
  EnvelopeOpenXmark as MailWarning,
  PersonXmark as UserX,
} from "@gravity-ui/icons";
import { Section, SectionHeading } from "../ui/section";
import { RevealGroup, RevealItem } from "../ui/reveal";

const problemKeys = [
  { icon: MailWarning, key: "wrongAuthor" },
  { icon: UserX, key: "wrongAccount" },
  { icon: KeyRound, key: "wrongKey" },
  { icon: FileWarning, key: "credRoulette" },
] as const;

export function Problem() {
  const { t } = useTranslation();

  return (
    <Section id="problem">
      <SectionHeading
        eyebrow={t("problem.eyebrow")}
        title={
          <>
            {t("problem.titleLine1")}
            <br />
            <Trans
              i18nKey="problem.titleLine2"
              components={{ grad: <span className="text-gradient" /> }}
            />
          </>
        }
        description={t("problem.description")}
      />
      <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problemKeys.map(({ icon: Icon, key }) => (
          <RevealItem key={key}>
            <article className="card group h-full rounded-2xl p-6 transition-colors duration-300 hover:border-white/[0.14]">
              <span className="mb-5 flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition-colors group-hover:border-accent/30 group-hover:bg-accent/[0.08]">
                <Icon className="size-5 text-muted transition-colors group-hover:text-accent-soft" />
              </span>
              <h3 className="mb-2 text-[15px] font-semibold tracking-tight">
                {t(`problem.${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-subtle">
                {t(`problem.${key}.body`)}
              </p>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
