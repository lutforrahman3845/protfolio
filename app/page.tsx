import { HeroSection } from "@/components/Home/hero-section";
import { StackSection } from "@/components/Home/stack-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <StackSection />
    </main>
  );
}
