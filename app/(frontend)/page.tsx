import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import FeatureStack from "./components/FeatureStack";
import CompareSection from "./components/CompareSection";
import FAQSection from "./components/FAQSection";
import CTAFooter from "./components/CTAFooter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <FeatureStack />
      <CompareSection />
      <FAQSection />
      <CTAFooter />
    </>
  );
}
