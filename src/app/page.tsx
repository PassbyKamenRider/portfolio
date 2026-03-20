import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { GameJamSection } from "@/components/GameJamSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <GameJamSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
