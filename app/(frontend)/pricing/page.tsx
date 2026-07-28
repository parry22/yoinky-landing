import SiteHeader from "../components/SiteHeader";
import HomePricing from "../components/HomePricing";
import SiteFooter from "../components/SiteFooter";
import { BG } from "../components/theme";

export const metadata = {
  title: "Pricing | Yoinky",
  description:
    "Growth, Scale, or pay once for lifetime access with your own keys. 7-day free trial on the monthly plans.",
};

/**
 * This route used to render <PricingSection>, which still advertised "$0 during
 * beta — paid plans come later". That stopped being true the moment checkout went
 * live, and the page is indexable, so a prospect could land on a $0 promise one
 * click from a $9 card. It now renders the same plan cards as the homepage, so
 * the site has exactly one source of price truth.
 */
export default function PricingPage() {
  return (
    <div style={{ backgroundColor: BG, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />
      <div style={{ flex: 1, paddingBottom: "clamp(56px,8vw,96px)" }}>
        <HomePricing />
      </div>
      <SiteFooter />
    </div>
  );
}
