import { HeroSection } from '@/components/landing/hero-section';
import { MarketComposition } from '@/components/landing/market-composition';
import { DiscountAnalysis } from '@/components/landing/discount-analysis';
import { StrategicRecommendations } from '@/components/landing/strategic-recommendations';
import { ExecutiveRoadmap } from '@/components/landing/executive-roadmap';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <MarketComposition />
      <DiscountAnalysis />
      <StrategicRecommendations />
      <ExecutiveRoadmap />
      <Footer />
    </main>
  );
}
