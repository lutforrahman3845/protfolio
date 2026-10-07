import { HeroSection } from "@/components/Home/hero-section";
import { ProjectsSection } from "@/components/Home/projects-section";
import { StackSection } from "@/components/Home/stack-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ProjectsSection />
      <StackSection />
    </main>
  );
}
