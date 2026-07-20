"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Award, Droplet, Shield, Zap } from "lucide-react";

export default function StoryScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // References for cards
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  // References for images
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);
  const image4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const can = canRef.current;
    const glow = glowRef.current;

    if (!container || !can) return;

    // Create a master GSAP timeline driven by scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=300%", // Scroll distance equivalent to 3 additional viewport heights
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Step 1: Transition from Caffeine (Slide 1) to Taurine (Slide 2)
    tl.to(can, {
      rotate: 45,
      scale: 1.02,
      duration: 1,
    }, 0)
    .to(glow, {
      backgroundColor: "rgba(0, 210, 255, 0.25)",
      duration: 1,
    }, 0)
    .to(card1Ref.current, { opacity: 0, y: -50, duration: 0.5 }, 0)
    .fromTo(card2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 }, 0.5)
    // Image transitions: Image 1 out, Image 2 in
    .to(image1Ref.current, { opacity: 0, scale: 0.8, duration: 0.5 }, 0)
    .to(image2Ref.current, { opacity: 1, scale: 1, duration: 0.5 }, 0.4)

    // Step 2: Transition from Taurine to B-Vitamins (Slide 3)
    .to(can, {
      rotate: 90,
      scale: 0.98,
      duration: 1,
    }, 1)
    .to(glow, {
      backgroundColor: "rgba(56, 189, 248, 0.2)",
      duration: 1,
    }, 1)
    .to(card2Ref.current, { opacity: 0, y: -50, duration: 0.5 }, 1)
    .fromTo(card3Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 }, 1.5)
    // Image transitions: Image 2 out, Image 3 in
    .to(image2Ref.current, { opacity: 0, scale: 0.8, duration: 0.5 }, 1)
    .to(image3Ref.current, { opacity: 1, scale: 1, duration: 0.5 }, 1.4)

    // Step 3: Transition from B-Vitamins to Alpine Water (Slide 4)
    .to(can, {
      rotate: 0,
      scale: 1.05,
      duration: 1,
    }, 2)
    .to(glow, {
      backgroundColor: "rgba(0, 191, 255, 0.25)",
      duration: 1,
    }, 2)
    .to(card3Ref.current, { opacity: 0, y: -50, duration: 0.5 }, 2)
    .fromTo(card4Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 }, 2.5)
    // Image transitions: Image 3 out, Image 4 in
    .to(image3Ref.current, { opacity: 0, scale: 0.8, duration: 0.5 }, 2)
    .to(image4Ref.current, { opacity: 1, scale: 1.05, duration: 0.5 }, 2.4);

    return () => {
      // Clean up triggers
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div id="features" ref={containerRef} className="relative w-full h-screen bg-[#020813] overflow-hidden">
      {/* Absolute Ambient Glow in the background */}
      <div 
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-blue-glow/20 blur-[150px] transition-all duration-700 pointer-events-none z-0" 
      />

      <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row max-w-7xl mx-auto px-6 md:px-12 items-center justify-between z-10 pointer-events-none">
        
        {/* Left Side: Interactive Content Cards (Absolute stacked) */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] flex items-center pointer-events-auto">
          
          {/* Card 1: Caffeine */}
          <div ref={card1Ref} className="absolute inset-0 flex flex-col justify-center items-start text-left max-w-md">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 mb-3">
              <Zap className="w-4 h-4 fill-current" /> Active Energy
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase text-white">
              Premium Caffeine
            </h2>
            <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mb-6">
              Known for its stimulating effects in the human body. Caffeine helps improve concentration and increases alertness, giving you the focus needed to conquer your goals.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-brand-gold bg-white/5 border border-white/5 px-4 py-2 rounded-full backdrop-blur-md">
              <span>Alertness Boost</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              <span>Cognitive Drive</span>
            </div>
          </div>

          {/* Card 2: Taurine */}
          <div ref={card2Ref} className="absolute inset-0 flex flex-col justify-center items-start text-left max-w-md opacity-0 pointer-events-none">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 mb-3">
              <Shield className="w-4 h-4 fill-current" /> Cell Support
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase text-white">
              Natural Taurine
            </h2>
            <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mb-6">
              Taurine is an amino acid, naturally occurring in the human body and present in the daily diet. It is involved in a wide range of biological processes, optimizing system functionality.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-brand-gold bg-white/5 border border-white/5 px-4 py-2 rounded-full backdrop-blur-md">
              <span>Organic Compound</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              <span>Muscle Hydration</span>
            </div>
          </div>

          {/* Card 3: B-Vitamins */}
          <div ref={card3Ref} className="absolute inset-0 flex flex-col justify-center items-start text-left max-w-md opacity-0 pointer-events-none">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 mb-3">
              <Award className="w-4 h-4 fill-current" /> Essential Nutrition
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase text-white">
              B-Group Vitamins
            </h2>
            <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mb-6">
              Vitamins are essential micronutrients that are required for maintaining normal body functions. B-group vitamins play a vital role in energy metabolism, reducing fatigue and exhaustion.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-brand-gold bg-white/5 border border-white/5 px-4 py-2 rounded-full backdrop-blur-md">
              <span>B3, B5, B6, B12</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              <span>Metabolism Spark</span>
            </div>
          </div>

          {/* Card 4: Alpine Water */}
          <div ref={card4Ref} className="absolute inset-0 flex flex-col justify-center items-start text-left max-w-md opacity-0 pointer-events-none">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 mb-3">
              <Droplet className="w-4 h-4 fill-current" /> Alpine Quality
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase text-white">
              Alpine Fresh Water
            </h2>
            <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mb-6">
              Water is a primary ingredient of Red Bull. The water used in Red Bull is fresh Alpine water of the highest quality, which flows from springs in the Austrian and Swiss Alps.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-brand-gold bg-white/5 border border-white/5 px-4 py-2 rounded-full backdrop-blur-md">
              <span>Pure Alpine Springs</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>Optimal Purity</span>
            </div>
          </div>

        </div>

        {/* Right Side: Sticky Visual Container */}
        <div className="relative w-full md:w-1/2 h-[350px] md:h-full flex items-center justify-center pointer-events-auto">
          {/* Kinetic HUD circles that scale / rotate */}
          <div className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full border border-white/5 flex items-center justify-center animate-[spin_60s_linear_infinite] pointer-events-none">
            <div className="absolute top-0 w-2 h-2 rounded-full bg-brand-red" />
            <div className="absolute bottom-0 w-2 h-2 rounded-full bg-brand-gold" />
          </div>
          
          <div className="absolute w-[240px] h-[240px] md:w-[360px] md:h-[360px] rounded-full border border-dashed border-white/10 pointer-events-none" />

          {/* Sticky floating can container */}
          <div 
            ref={canRef} 
            className="relative w-[280px] h-[280px] md:w-[440px] md:h-[440px] flex items-center justify-center drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-300"
          >
            {/* Image 1: Classic Can */}
            <div ref={image1Ref} className="absolute inset-0 flex items-center justify-center transition-all duration-300">
              <div className="relative w-[180px] h-[340px] md:w-[240px] md:h-[440px]">
                <Image src="/assets/classic.png" alt="Red Bull Classic" fill className="object-contain" />
              </div>
            </div>

            {/* Image 2: Splash Render (Behance key_visual_1) */}
            <div ref={image2Ref} className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 transition-all duration-300">
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
                <Image src="/assets/key_visual_1.png" alt="Red Bull Shards and Splash" fill className="object-contain" />
              </div>
            </div>

            {/* Image 3: Ice blasted Render (Behance key_visual_3) */}
            <div ref={image3Ref} className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 transition-all duration-300">
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
                <Image src="/assets/key_visual_3.png" alt="Red Bull Frost blast" fill className="object-contain" />
              </div>
            </div>

            {/* Image 4: Cyber wings Portal Render (Behance key_visual_2) */}
            <div ref={image4Ref} className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 transition-all duration-300">
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
                <Image src="/assets/key_visual_2.png" alt="Red Bull Cyber Wings" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
