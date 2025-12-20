import {
  ServicesHeroSection,
  NetworkCoverageSection,
  ServicesGridSection,
  TechnologyStandardsSection,
  ImplementationProcessSection,
  ServicesCTASection
} from "@/components/features/services";

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