import en from "./i18n/locales/en.json";
import type { SalesStatus } from "./pricing";

// English FAQ for SEO structured data. Derived from the same locale strings
// the home page renders, so the JSON-LD always matches the visible answers.
export const faqsFor = (status: SalesStatus) =>
  en.faq.items.map(({ q, a }) => ({
    q,
    a: a.replaceAll("{{proStatus}}", en.faq.proStatus[status]),
  }));
