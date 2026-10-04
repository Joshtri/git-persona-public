"use client";

import {
  Check,
  ChevronDown,
  GraduationCap,
  Heart,
  Minus,
} from "@gravity-ui/icons";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { Trans, useTranslation } from "react-i18next";
import {
  formatIdr,
  type PriceList,
  type PricingCatalog,
  yearlySavingPercent,
} from "@/lib/pricing";
import { site } from "@/lib/site";
import { Eyebrow } from "../ui/badge";
import { ButtonLink } from "../ui/button";
import { Reveal, RevealGroup, RevealItem } from "../ui/reveal";
import { Section, SectionHeading } from "../ui/section";

type Period = "monthly" | "yearly";

const PRICE_LIST_KEY = "gitpersona-price-list";

const noSubscribe = () => () => {};

function readSavedList(): PriceList | null {
  try {
    const saved = localStorage.getItem(PRICE_LIST_KEY);
    return saved === "international" || saved === "indonesia" ? saved : null;
  } catch {
    return null;
  }
}

const grad = { grad: <span className="text-gradient" /> };

function Toggle<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string; hint?: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="chip inline-flex rounded-full p-1"
    >
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o.value)}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 ${
              active
                ? "bg-accent-deep text-accent-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            {o.label}
            {o.hint ? (
              <span
                className={`text-xs ${active ? "text-accent-foreground/80" : "text-success"}`}
              >
                {o.hint}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

function PlanCard({
  name,
  badge,
  tagline,
  price,
  period,
  sub,
  features,
  cta,
  ctaVariant,
  note,
  highlight = false,
}: {
  name: string;
  badge?: string;
  tagline: string;
  price: string;
  period: string;
  sub?: string | null;
  features: string[];
  cta: string;
  ctaVariant: "primary" | "secondary";
  note?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`card relative flex h-full flex-col rounded-3xl p-7 sm:p-8 ${
        highlight ? "border-accent/40 shadow-glow" : ""
      }`}
    >
      {highlight ? (
        <span
          aria-hidden
          className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
        />
      ) : null}
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="text-lg font-semibold tracking-tight">{name}</h2>
        {badge ? (
          <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent-soft">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm text-muted md:min-h-10">{tagline}</p>

      <div className="mt-7 flex flex-wrap items-baseline gap-x-2">
        <span className="text-4xl font-semibold tracking-tight tabular-nums">
          {price}
        </span>
        <span className="text-sm text-subtle">{period}</span>
      </div>
      <p className="mt-1.5 min-h-5 text-sm text-subtle tabular-nums">
        {sub ?? ""}
      </p>

      <ul className="mt-7 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex gap-3 text-sm text-foreground/90">
            <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
            {f}
          </li>
        ))}
      </ul>

      <ButtonLink href="/download" variant={ctaVariant} className="mt-8 w-full">
        {cta}
      </ButtonLink>
      {note ? (
        <p className="mt-3 text-center text-xs leading-relaxed text-subtle">
          {note}
        </p>
      ) : null}
    </div>
  );
}

function CompareCell({ value }: { value: string | boolean }) {
  if (value === true)
    return (
      <span className="inline-flex text-success">
        <Check className="size-4" aria-hidden />
        <span className="sr-only">Yes</span>
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex text-subtle/70">
        <Minus className="size-4" aria-hidden />
        <span className="sr-only">No</span>
      </span>
    );
  return <span className="text-xs text-muted sm:text-sm">{value}</span>;
}

export function Pricing({ catalog }: { catalog: PricingCatalog }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("id") ? "id" : "en";
  const [period, setPeriod] = useState<Period>("yearly");
  const [picked, setPicked] = useState<PriceList | null>(null);
  const saved = useSyncExternalStore(noSubscribe, readSavedList, () => null);
  // This visit's pick, then a remembered one, then Indonesia for Indonesian
  // readers. The server snapshot is null so hydration always matches.
  const list: PriceList =
    picked ?? saved ?? (lang === "id" ? "indonesia" : "international");

  // The page is cached for a few minutes; never show an offer past its end.
  const until = catalog.founderLifetime.until;
  const founderExpired = useSyncExternalStore(
    noSubscribe,
    () => until !== null && Date.now() >= new Date(until).getTime(),
    () => false,
  );
  const founderLive = catalog.founderLifetime.onSale && !founderExpired;

  const chooseList = (next: PriceList) => {
    setPicked(next);
    try {
      localStorage.setItem(PRICE_LIST_KEY, next);
    } catch {
      // Not persisted; the choice still applies for this visit.
    }
  };

  const prices = catalog.priceLists[list];
  const usd = (amount: number) =>
    list === "international" ? t("pricing.usd", { amount }) : null;
  const { profiles, reposPerProfile: repos } = catalog.free;
  const { devices, trialDays } = catalog.pro;
  const live = catalog.salesStatus === "live";
  const paidCta = live ? t("pricing.ctaLive") : t("pricing.ctaUpcoming");
  const paidNote = live ? t("pricing.noteLive") : t("pricing.noteUpcoming");
  const founderUntil = catalog.founderLifetime.until
    ? new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Jakarta",
      }).format(new Date(catalog.founderLifetime.until))
    : null;

  const list_ = (key: string, opts: Record<string, unknown> = {}) =>
    t(key, { returnObjects: true, ...opts }) as string[];

  const v = (key: string, count?: number) =>
    t(`pricing.compareValues.${key}`, { count });
  const compareRows: { key: string; free: string | boolean; pro: string | boolean }[] = [
    { key: "identities", free: v("upTo", profiles), pro: v("unlimited") },
    { key: "pins", free: v("perIdentity", repos), pro: v("unlimited") },
    { key: "rules", free: v("unlimited"), pro: v("unlimited") },
    { key: "keys", free: v("unlimited"), pro: v("unlimited") },
    { key: "cli", free: true, pro: true },
    { key: "account", free: v("notNeeded"), pro: v("emailSignIn") },
    { key: "devices", free: v("anyMachine"), pro: v("devicesPerAccount", devices) },
    { key: "offline", free: v("always"), pro: v("offlineGrace") },
    { key: "trial", free: false, pro: v("trialDays", trialDays) },
  ];

  const steps = t("pricing.how", { returnObjects: true }) as {
    title: string;
    body: string;
  }[];
  const faqs = t("pricing.faq", {
    returnObjects: true,
    profiles,
    repos,
    devices,
    refundDays: site.legal.refundDays,
  }) as { q: string; a: string }[];

  const proPrice = formatIdr(prices[period]);
  const proPeriod = t(period === "yearly" ? "pricing.perYear" : "pricing.perMonth");
  const proSub = usd(catalog.usdApprox[period]);

  return (
    <>
      <section className="relative mx-auto w-full max-w-7xl px-6 pt-36 pb-16 sm:pt-44 lg:px-8">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Eyebrow>{t("pricing.eyebrow")}</Eyebrow>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            <Trans i18nKey="pricing.title" components={grad} />
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {t("pricing.description", { profiles })}
          </p>
          {!live ? (
            <p className="rounded-2xl border border-accent/25 bg-accent/10 px-4 py-2.5 text-sm text-accent-soft">
              {t("pricing.upcoming")}
            </p>
          ) : null}
        </Reveal>

        <Reveal
          delay={0.05}
          className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Toggle<Period>
            label={t("pricing.periodLabel")}
            value={period}
            onChange={setPeriod}
            options={[
              { value: "monthly", label: t("pricing.monthly") },
              {
                value: "yearly",
                label: t("pricing.yearly"),
                hint: t("pricing.save", { percent: yearlySavingPercent(prices) }),
              },
            ]}
          />
          <Toggle<PriceList>
            label={t("pricing.regionLabel")}
            value={list}
            onChange={chooseList}
            options={[
              { value: "international", label: t("pricing.international") },
              { value: "indonesia", label: t("pricing.indonesia") },
            ]}
          />
        </Reveal>

        <RevealGroup
          className={`mx-auto mt-10 grid gap-5 ${
            founderLive ? "max-w-6xl lg:grid-cols-3" : "max-w-4xl md:grid-cols-2"
          }`}
        >
          <RevealItem>
            <PlanCard
              name={t("pricing.free.name")}
              tagline={t("pricing.free.tagline")}
              price={formatIdr(0)}
              period={t("pricing.forever")}
              features={list_("pricing.free.features", { profiles, repos })}
              cta={t("pricing.free.cta")}
              ctaVariant="secondary"
            />
          </RevealItem>
          <RevealItem>
            <PlanCard
              highlight
              name={t("pricing.pro.name")}
              badge={t("pricing.pro.badge")}
              tagline={t("pricing.pro.tagline")}
              price={proPrice}
              period={proPeriod}
              sub={proSub}
              features={list_("pricing.pro.features", {
                devices,
                days: trialDays,
              })}
              cta={paidCta}
              ctaVariant="primary"
              note={paidNote}
            />
          </RevealItem>
          {founderLive ? (
            <RevealItem>
              <PlanCard
                name={t("pricing.founder.name")}
                badge={t("pricing.founder.badge")}
                tagline={t("pricing.founder.tagline")}
                price={formatIdr(prices.founder_lifetime)}
                period={t("pricing.oneTime")}
                sub={[
                  usd(catalog.usdApprox.founder_lifetime),
                  founderUntil
                    ? t("pricing.founder.until", { date: founderUntil })
                    : null,
                ]
                  .filter(Boolean)
                  .join(" · ")}
                features={list_("pricing.founder.features")}
                cta={paidCta}
                ctaVariant="secondary"
                note={paidNote}
              />
            </RevealItem>
          ) : null}
        </RevealGroup>
      </section>

      <Section className="max-w-5xl !pt-8">
        <Reveal>
          <h2 className="text-center text-xl font-semibold tracking-tight">
            {t("pricing.includedTitle")}
          </h2>
          <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {list_("pricing.included").map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted">
                <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-20">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            <Trans i18nKey="pricing.compareTitle" components={grad} />
          </h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">GitPersona Free compared to Pro</caption>
              <thead>
                <tr className="border-b border-border bg-foreground/[0.02]">
                  <th scope="col" className="px-3 py-4 text-xs font-medium text-subtle sm:px-6 sm:text-sm">
                    {t("pricing.compareFeature")}
                  </th>
                  <th scope="col" className="px-3 py-4 text-xs font-medium text-subtle sm:px-6 sm:text-sm">
                    {t("pricing.free.name")}
                  </th>
                  <th
                    scope="col"
                    className="bg-accent/[0.07] px-3 py-4 text-xs font-semibold text-accent-soft sm:px-6 sm:text-sm"
                  >
                    {t("pricing.pro.name")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.key} className="border-b border-border last:border-b-0">
                    <th
                      scope="row"
                      className="px-3 py-3.5 text-xs font-medium text-foreground sm:px-6 sm:text-sm"
                    >
                      {t(`pricing.compareRows.${row.key}`)}
                    </th>
                    <td className="px-3 py-3.5 sm:px-6">
                      <CompareCell value={row.free} />
                    </td>
                    <td className="bg-accent/[0.05] px-3 py-3.5 sm:px-6">
                      <CompareCell value={row.pro} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      <Section className="!pt-4">
        <SectionHeading title={<Trans i18nKey="pricing.howTitle" components={grad} />} />
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <RevealItem key={step.title}>
              <div className="card h-full rounded-2xl p-6">
                <span className="flex size-8 items-center justify-center rounded-full border border-accent/25 bg-accent/10 font-mono text-sm text-accent-soft">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-[15px] font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mx-auto mt-10 max-w-3xl">
          <div className="card flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex shrink-0 gap-2 text-accent-soft">
              <GraduationCap className="size-5" aria-hidden />
              <Heart className="size-5" aria-hidden />
            </div>
            <div>
              <h3 className="text-[15px] font-semibold tracking-tight">
                {t("pricing.programsTitle")}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {t("pricing.programsBody")}
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section id="billing-faq" className="max-w-4xl !pt-4">
        <SectionHeading
          eyebrow={t("pricing.faqEyebrow")}
          title={<Trans i18nKey="pricing.faqTitle" components={grad} />}
        />
        <Reveal className="mt-12 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group card rounded-2xl transition-colors open:border-foreground/[0.14]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[15px] font-medium tracking-tight select-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown className="size-4 shrink-0 text-subtle transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="px-6 pb-6 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </Reveal>
        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-subtle">
          {t("pricing.billingNote")}
        </p>
        <nav
          aria-label={t("footer.legal")}
          className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs"
        >
          {(["terms", "refund", "privacy"] as const).map((key) => (
            <Link
              key={key}
              href={`/${key}`}
              className="text-muted underline decoration-border underline-offset-2 transition-colors hover:text-foreground"
            >
              {t(`pricing.legalLinks.${key}`)}
            </Link>
          ))}
        </nav>
      </Section>
    </>
  );
}
