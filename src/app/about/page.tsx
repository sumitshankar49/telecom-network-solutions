import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { StatsSection } from "@/components/about/StatsSection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { CompanyStorySection } from "@/components/about/CompanyStorySection";
import { TeamSection } from "@/components/about/TeamSection";
import { ValuesSection } from "@/components/about/ValuesSection";

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