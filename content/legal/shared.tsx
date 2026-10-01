import type { Lang } from "@/components/legal/legal-doc";
import { site } from "@/lib/site";

/** The seller's legal name, or a visible placeholder until it's filled in. */
export function Operator({ lang }: { lang: Lang }) {
  const { operator, operatorKnownAs } = site.legal;
  if (operator)
    return (
      <>
        <strong>{operator}</strong>
        {operatorKnownAs
          ? ` (${lang === "id" ? "dikenal sebagai" : "known as"} ${operatorKnownAs})`
          : null}
      </>
    );
  return <em>{lang === "id" ? "(nama segera ditambahkan)" : "(name to be added)"}</em>;
}

/** The support email as a mailto link, or a visible placeholder. */
export function ContactEmail({ lang }: { lang: Lang }) {
  const email = site.legal.contactEmail;
  if (email)
    return (
      <a
        href={`mailto:${email}`}
        className="font-medium text-accent-soft underline decoration-accent-soft/30 underline-offset-2 transition-colors hover:decoration-accent-soft"
      >
        {email}
      </a>
    );
  return <em>{lang === "id" ? "(email segera tersedia)" : "(email coming soon)"}</em>;
}
