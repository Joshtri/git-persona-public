import type { ReactNode } from "react";
import { fetchPricing } from "@/lib/api";

/** Renders `children` once Pro is on sale, `otherwise` until then. The status
 *  is set in Console → Pricing, so launching Pro needs no site deploy. */
export async function WhenProLive({
  children = null,
  otherwise = null,
}: {
  children?: ReactNode;
  otherwise?: ReactNode;
}) {
  const { salesStatus } = await fetchPricing();
  return salesStatus === "live" ? children : otherwise;
}
