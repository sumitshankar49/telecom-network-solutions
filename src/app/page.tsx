import { 
  HeroSection,
  ServicesSection,
  FeaturesSection,
  TestimonialsSection,
  CTASection 
} from "@/components/features/home";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}