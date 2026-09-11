import { site } from "@/lib/site";
import { faqs } from "@/lib/faq-data";

const softwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  description: site.description,
  url: site.url,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Windows, Linux, macOS",
  softwareVersion: site.version,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  downloadUrl: `${site.githubUrl}/releases/latest`,
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

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplication),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
