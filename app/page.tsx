import { HeroSection } from "@/components/hero-section";
import { StackSection } from "@/components/stack-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <StackSection />
    </main>
  );
}
