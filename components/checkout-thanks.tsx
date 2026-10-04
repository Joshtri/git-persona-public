"use client";

import { useTranslation } from "react-i18next";
import { ButtonLink } from "@/components/ui/button";

/** Where DOKU sends the buyer after checkout (DOKU_CALLBACK_URL on the server).
 *  Reaching this page proves nothing about the payment — only the server's
 *  webhook marks an order paid — so the copy never claims success outright. */
export function CheckoutThanks() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto w-full max-w-xl px-6 pt-40 pb-24 text-center sm:pt-48">
      <div
        aria-hidden
        className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent/10 text-2xl text-accent"
      >
        ✓
      </div>
      <h1 className="mt-8 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        {t("checkout.title")}
      </h1>
      <p className="mt-5 text-pretty text-muted">{t("checkout.lead")}</p>

      <div className="chip mt-10 rounded-2xl p-6 text-left">
        <h2 className="text-sm font-semibold">{t("checkout.stepsTitle")}</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted">
          <li>{t("checkout.step1")}</li>
          <li>{t("checkout.step2")}</li>
        </ol>
      </div>

      <p className="mt-8 text-sm text-subtle">{t("checkout.help")}</p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/contact" variant="secondary">
          {t("checkout.contact")}
        </ButtonLink>
        <ButtonLink href="/pricing" variant="ghost">
          {t("checkout.pricing")}
        </ButtonLink>
      </div>
    </section>
  );
}
