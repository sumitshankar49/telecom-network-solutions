import {
  AboutHeroSection,
  StatsSection,
  MissionVisionSection,
  CompanyStorySection,
  TeamSection,
  ValuesSection
} from "@/components/features/about";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHeroSection />
      <StatsSection />
      <MissionVisionSection />
      <CompanyStorySection />
      <TeamSection />
      <ValuesSection />
    </div>
  );
}