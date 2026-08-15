import SiteHeader from "../components/SiteHeader";
import PricingPlansSection from "../components/PricingPlansSection";
import SiteFooter from "../components/SiteFooter";
import { BG } from "../components/theme";

export const metadata = {
  title: "Pricing | Yoinky",
  description:
    "Choose the Yoinky workspace that fits your company narrative operation.",
};

/**
 * Pricing has one shared source of truth across the homepage and this route.
 */
export default function PricingPage() {
  return (
    <div style={{ backgroundColor: BG, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />
      <div style={{ flex: 1, paddingBottom: "clamp(56px,8vw,96px)" }}>
        <PricingPlansSection />
      </div>
      <SiteFooter />
    </div>
  );
}
