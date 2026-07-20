"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Fuel, Zap } from "lucide-react";

interface Flavor {
  id: number;
  name: string;
  sub: string;
  description: string;
  image: string;
  bgColor: string; // Tailwind class or hex for background glow
  accentColor: string; // HEX for border and text highlight
  badgeBg: string; // Tailwind background badge
  textColor: string;
  specs: {
    caffeine: string;
    taurine: string;
    calories: string;
  };
}

export default function FlavorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const flavors: Flavor[] = [
    {
      id: 1,
      name: "Classic Energy",
      sub: "The Original Formula",
      description: "Appreciated worldwide by top athletes, busy professionals, college students and travelers on long journeys. The original formula that vitalizes body and mind.",
      image: "/assets/classic.png",
      bgColor: "from-brand-blue-glow/40 to-brand-red/10",
      accentColor: "#ff1e27",
      badgeBg: "bg-brand-red/20 text-brand-red border-brand-red/30",
      textColor: "text-brand-red",
      specs: {
        caffeine: "80 mg",
        taurine: "1000 mg",
        calories: "110 kcal",
      },
    },
    {
      id: 2,
      name: "Sugarfree Edition",
      sub: "Zero Sugar, Zero Calories",
      description: "Red Bull Sugarfree is Red Bull Energy Drink without sugar. It is a functional beverage that provides wings without sugar or calories, keeping you sharp and hydrated.",
      image: "/assets/sugarfree.png",
      bgColor: "from-blue-600/30 to-brand-blue/10",
      accentColor: "#38bdf8",
      badgeBg: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      textColor: "text-blue-400",
      specs: {
        caffeine: "80 mg",
        taurine: "1000 mg",
        calories: "5 kcal",
      },
    },
    {
      id: 3,
      name: "Tropical Edition",
      sub: "Exotic Tropical Fruits Flavor",
      description: "Red Bull Yellow Edition contains the same high quality ingredients as Red Bull Energy Drink but features a fresh, exotic tropical fruit taste profile for hot summer days.",
      image: "/assets/tropical.png",
      bgColor: "from-yellow-600/30 to-amber-950/10",
      accentColor: "#ffd700",
      badgeBg: "bg-brand-gold/20 text-brand-gold border-brand-gold/30",
      textColor: "text-brand-gold",
      specs: {
        caffeine: "80 mg",
        taurine: "1000 mg",
        calories: "120 kcal",
      },
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % flavors.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + flavors.length) % flavors.length);
  };

  const currentFlavor = flavors[currentIndex];

  return (
    <section id="flavors" className="relative py-24 w-full bg-[#020813] overflow-hidden select-none border-t border-white/5">
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 transition-all duration-1000">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr ${currentFlavor.bgColor} blur-[140px] opacity-75`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest">Premium Collection</span>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-3">
              Explore the Editions
            </h2>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              id="carousel-prev-btn"
              className="w-12 h-12 rounded-full border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              id="carousel-next-btn"
              className="w-12 h-12 rounded-full border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[500px]">
          {/* Left Side: Product Specifications */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFlavor.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-8"
              >
                <div>
                  <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full border ${currentFlavor.badgeBg} mb-4`}>
                    {currentFlavor.sub}
                  </span>
                  <h3 className="font-display text-4xl md:text-5xl font-black uppercase text-white mb-6">
                    {currentFlavor.name}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base font-light leading-relaxed">
                    {currentFlavor.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                  <div className="flex flex-col">
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1">Caffeine</span>
                    <span className="font-display text-xl font-bold text-white flex items-center gap-1">
                      <Zap className="w-4 h-4 text-brand-gold fill-current" /> {currentFlavor.specs.caffeine}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1">Taurine</span>
                    <span className="font-display text-xl font-bold text-white flex items-center gap-1">
                      <Fuel className="w-4 h-4 text-brand-red fill-current" /> {currentFlavor.specs.taurine}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1">Energy</span>
                    <span className="font-display text-xl font-bold text-white">
                      {currentFlavor.specs.calories}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center Column: Product Showcase Can */}
          <div className="lg:col-span-5 flex justify-center items-center h-[350px] lg:h-[500px] order-1 lg:order-2">
            <div className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] flex items-center justify-center">
              {/* Dynamic glow base */}
              <div 
                className="absolute w-[220px] h-[220px] lg:w-[320px] lg:h-[320px] rounded-full blur-2xl transition-all duration-1000"
                style={{ backgroundColor: `${currentFlavor.accentColor}18` }} 
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFlavor.id}
                  initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, rotate: -5 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="relative w-[180px] h-[320px] lg:w-[230px] lg:h-[420px] z-10"
                >
                  <Image
                    src={currentFlavor.image}
                    alt={currentFlavor.name}
                    fill
                    className="object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.7)]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Interactive selector */}
          <div className="lg:col-span-3 order-3 flex flex-row lg:flex-col justify-center gap-4 w-full">
            {flavors.map((fl, idx) => (
              <button
                key={fl.id}
                onClick={() => setCurrentIndex(idx)}
                className={`flex-1 text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                  idx === currentIndex
                    ? "bg-white/5 border-white/20 shadow-lg"
                    : "bg-transparent border-white/5 hover:border-white/10 opacity-50 hover:opacity-80"
                }`}
                style={{
                  borderLeft: idx === currentIndex ? `4px solid ${fl.accentColor}` : undefined
                }}
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider">Edition 0{fl.id}</span>
                  <span className="font-display text-sm font-black uppercase text-white mt-1">{fl.name}</span>
                </div>
                <div 
                  className="w-3.5 h-3.5 rounded-full" 
                  style={{ backgroundColor: fl.accentColor }} 
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
