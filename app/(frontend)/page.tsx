import HeroSection from "./components/HeroSection";
import Backdrop from "./components/Backdrop";
import ProductBentoSection from "./components/ProductBentoSection";
import WorkflowExplorerSection from "./components/WorkflowExplorerSection";
import ContentTickerSection from "./components/ContentTickerSection";
import PricingPlansSection from "./components/PricingPlansSection";
import FaqSection from "./components/FaqSection";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div style={{ position: "relative", background: "#0A0A0A" }}>
        <Backdrop />
        <div style={{ position: "relative", zIndex: 1 }}>
          <ProductBentoSection />
          <WorkflowExplorerSection />
          <PricingPlansSection />
          <FaqSection />
          <ContentTickerSection />
          <SiteFooter />
          <div aria-hidden="true" style={{ height: "clamp(64px, 8vw, 128px)" }} />
        </div>
      </div>
    </>
  );
}
