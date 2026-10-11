import { FeatureGrid } from "@/components/home/feature-grid";
import { HomeHero } from "@/components/home/home-hero";
import { WhyMivo } from "@/components/home/why-mivo";

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-20 px-6 pt-6 pb-16 md:px-10 md:pt-8 md:pb-24">
      <HomeHero />
      <FeatureGrid />
      <WhyMivo />
    </main>
  );
}
