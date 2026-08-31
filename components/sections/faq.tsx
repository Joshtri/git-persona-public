"use client";

import { Trans, useTranslation } from "react-i18next";
import { ChevronDown } from "@gravity-ui/icons";
import { Section, SectionHeading } from "../ui/section";
import { Reveal } from "../ui/reveal";

export { faqs } from "@/lib/faq-data";

export function Faq() {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true }) as { q: string; a: string }[];

  return (
    <Section id="faq" className="max-w-4xl">
      <SectionHeading
        eyebrow={t("faq.eyebrow")}
        title={
          <Trans
            i18nKey="faq.title"
            components={{ grad: <span className="text-gradient" /> }}
          />
        }
      />
      <Reveal className="mt-12 space-y-3">
        {items.map((item) => (
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
