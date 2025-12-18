import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { NetworkCoverageSection } from "@/components/services/NetworkCoverageSection";
import { ServicesGridSection } from "@/components/services/ServicesGridSection";
import { TechnologyStandardsSection } from "@/components/services/TechnologyStandardsSection";
import { ImplementationProcessSection } from "@/components/services/ImplementationProcessSection";
import { ServicesCTASection } from "@/components/services/ServicesCTASection";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServicesHeroSection />
      <NetworkCoverageSection />
      <ServicesGridSection />
      <TechnologyStandardsSection />
      <ImplementationProcessSection />
      <ServicesCTASection />
    </div>
  );
}