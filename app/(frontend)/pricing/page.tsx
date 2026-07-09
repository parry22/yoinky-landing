import SiteHeader from "../components/SiteHeader";
import PricingSection from "../components/PricingSection";
import SiteFooter from "../components/SiteFooter";
import { BG } from "../components/theme";

export const metadata = {
  title: "Pricing | Yoinky",
  description: "Yoinky is free while in beta. The full product, no trial clock, no locked features.",
};

export default function PricingPage() {
  return (
    <div style={{ backgroundColor: BG, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />
      <div style={{ flex: 1, paddingBottom: "clamp(56px,8vw,96px)" }}>
        <PricingSection />
      </div>
      <SiteFooter />
    </div>
  );
}
