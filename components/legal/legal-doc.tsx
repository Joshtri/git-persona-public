"use client";

import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { site } from "@/lib/site";

export type Lang = "en" | "id";

/** Renders the English or Indonesian version of a legal page, following the
 *  site language switcher. Both versions are server-rendered and passed in. */
export function LegalDoc({
  title,
  en,
  id,
}: {
  title: Record<Lang, string>;
  en: ReactNode;
  id: ReactNode;
}) {
  const { t, i18n } = useTranslation();
  const lang: Lang = i18n.language?.startsWith("id") ? "id" : "en";
  const updated = new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(new Date(site.legal.lastUpdated));

  return (
    <article className="mx-auto w-full max-w-3xl px-6 pt-36 pb-24 sm:pt-44">
      <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        {title[lang]}
      </h1>
      <p className="mt-4 text-sm text-subtle">
        {t("legal.lastUpdated", { date: updated })}
      </p>
      <div className="mt-10">{lang === "id" ? id : en}</div>
    </article>
  );
}
