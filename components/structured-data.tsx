import { site } from "@/lib/site";
import { faqs } from "@/lib/faq-data";
import { FALLBACK_PRICING, type PricingCatalog } from "@/lib/pricing";

// Free is always offered; Pro offers are only listed once Pro is on sale.
function offers(catalog: PricingCatalog) {
  const free = {
    "@type": "Offer",
    name: "Free",
    price: "0",
    priceCurrency: catalog.currency,
    url: `${site.url}/pricing`,
  };
  if (site.pricingStatus !== "live") return free;
  const prices = catalog.priceLists.international;
  return [
    free,
    {
      "@type": "Offer",
      name: "Pro (monthly)",
      price: String(prices.monthly),
      priceCurrency: catalog.currency,
      url: `${site.url}/pricing`,
    },
    {
      "@type": "Offer",
      name: "Pro (yearly)",
      price: String(prices.yearly),
      priceCurrency: catalog.currency,
      url: `${site.url}/pricing`,
    },
  ];
}

const softwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  description: site.description,
  url: site.url,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Windows, Linux, macOS",
  softwareVersion: site.version,
  downloadUrl: `${site.url}/download`,
  featureList: [
    "Multiple Git profile management",
    "One-click Git identity switching",
    "SSH key management",
    "Secure credential storage via OS keychain",
    "Repository to identity mapping",
    "Declarative auto-assignment rules",
    "Repository groups",
    "Audit log",
  ],
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export function StructuredData({
  version,
  catalog = FALLBACK_PRICING,
}: {
  version?: string;
  catalog?: PricingCatalog;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...softwareApplication,
            softwareVersion: version ?? site.version,
            offers: offers(catalog),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
