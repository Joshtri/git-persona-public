// Shape of GET /client/pricing on GitPersona Server. The server builds it from
// the same constants checkout charges, so prices are never hand-copied here —
// except for the fallback below, used only when the API is unreachable.

export type PricePlan = "monthly" | "yearly" | "founder_lifetime";
export type PriceList = "international" | "indonesia";

export type PricingCatalog = {
  currency: "IDR";
  priceLists: Record<PriceList, Record<PricePlan, number>>;
  usdApprox: Record<PricePlan, number>;
  founderLifetime: { onSale: boolean; until: string | null };
  free: { profiles: number; reposPerProfile: number };
  pro: { devices: number; trialDays: number };
};

// Mirrors gitpersona-server/src/modules/account/pricing.ts. The Founder offer
// is deliberately off here: without the server we can't know it is still live.
export const FALLBACK_PRICING: PricingCatalog = {
  currency: "IDR",
  priceLists: {
    international: { monthly: 65_000, yearly: 479_000, founder_lifetime: 649_000 },
    indonesia: { monthly: 29_000, yearly: 199_000, founder_lifetime: 299_000 },
  },
  usdApprox: { monthly: 4, yearly: 29, founder_lifetime: 39 },
  founderLifetime: { onSale: false, until: null },
  free: { profiles: 3, reposPerProfile: 3 },
  pro: { devices: 3, trialDays: 14 },
};

export function formatIdr(amount: number): string {
  return `Rp ${amount.toLocaleString("id-ID")}`;
}

/** Whole-percent saving of paying yearly instead of twelve monthly periods. */
export function yearlySavingPercent(prices: Record<PricePlan, number>): number {
  return Math.round((1 - prices.yearly / (prices.monthly * 12)) * 100);
}
