import HeroSection from "./components/HeroSection";
import Backdrop from "./components/Backdrop";
import FeatureCarousel from "./components/FeatureCarousel";
import HomePricing from "./components/HomePricing";
import PersonasSection from "./components/PersonasSection";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div style={{ position: "relative", background: "#0A0A0A" }}>
        <Backdrop />
        <div style={{ position: "relative", zIndex: 1 }}>
          <FeatureCarousel />
          <HomePricing />
          <PersonasSection />
          <SiteFooter />
        </div>
      </div>
    </>
  );
}
