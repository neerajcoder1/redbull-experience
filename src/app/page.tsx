import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import StoryScroll from "@/components/StoryScroll";
import Anatomy from "@/components/Anatomy";
import FlavorCarousel from "@/components/FlavorCarousel";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <main className="relative z-10 w-full min-h-screen">
        <Hero />
        <StoryScroll />
        <Anatomy />
        <FlavorCarousel />
        <CTA />
      </main>
    </SmoothScroll>
  );
}
