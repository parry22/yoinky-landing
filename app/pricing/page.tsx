import Nav from "../components/Nav";
import PricingSection from "../components/PricingSection";
import PricingFAQ from "../components/PricingFAQ";
import CTAFooter from "../components/CTAFooter";

export default function PricingPage() {
  return (
    <>
      <Nav light />
      <div className="pt-16 md:pt-20">
        <PricingSection />
      </div>
      <PricingFAQ />
      <CTAFooter />
    </>
  );
}
