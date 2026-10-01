import en from "./i18n/locales/en.json";
import { site } from "./site";

// English FAQ for SEO structured data. Derived from the same locale strings
// the home page renders, so the JSON-LD always matches the visible answers.
const proStatus = en.faq.proStatus[site.pricingStatus];

export const faqs = en.faq.items.map(({ q, a }) => ({
  q,
  a: a.replaceAll("{{proStatus}}", proStatus),
}));
