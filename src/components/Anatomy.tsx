"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Info, HelpCircle, Layers, Award } from "lucide-react";

interface Hotspot {
  id: number;
  x: string; // percentage from left
  y: string; // percentage from top
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function Anatomy() {
  const [activeSpot, setActiveSpot] = useState<Hotspot | null>(null);

  const hotspots: Hotspot[] = [
    {
      id: 1,
      x: "53%",
      y: "14%",
      title: "Tactile Pull Tab",
      desc: "Precision-engineered pull tab, designed for quick pressure release and comfortable, smooth opening under any conditions.",
      icon: <HelpCircle className="w-4 h-4 text-brand-gold" />,
    },
    {
      id: 2,
      x: "38%",
      y: "21%",
      title: "Double Seam Seal",
      desc: "Hermetically sealed rim locking in the signature carbonation, shielding ingredients from oxygen and light to ensure peak freshness.",
      icon: <Layers className="w-4 h-4 text-brand-red" />,
    },
    {
      id: 3,
      x: "58%",
      y: "52%",
      title: "Eco Aluminum Shell",
      desc: "Made from 100% recyclable, lightweight aluminum. Melting down and recycling uses 95% less energy than producing new aluminum.",
      icon: <Award className="w-4 h-4 text-brand-gold" />,
    },
    {
      id: 4,
      x: "46%",
      y: "78%",
      title: "Matte Grip Finish",
      desc: "A premium tactile coating providing a high-grip surface, preventing condensation slippage during intense action.",
      icon: <Info className="w-4 h-4 text-blue-400" />,
    },
  ];

  return (
    <section id="anatomy" className="relative py-24 w-full bg-[#020813] overflow-hidden select-none border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-red/10 blur-[130px]" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-blue/15 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest">Tactile Mechanics</span>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-3 mb-6">
            Anatomy of Power
          </h2>
          <p className="text-white/60 text-sm md:text-base font-light">
            Every millimeter of the Red Bull can is designed for peak performance, maximum sustainability, and instant freshness. Click the glowing hotspots to dissect the architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Details box on larger viewports */}
          <div className="lg:col-span-4 flex flex-col justify-center h-full min-h-[250px]">
            <AnimatePresence mode="wait">
              {activeSpot ? (
                <motion.div
                  key={activeSpot.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="glass-card p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-2xl pointer-events-none" />
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    {activeSpot.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white mb-3">
                    {activeSpot.title}
                  </h3>
                  <p className="text-white/70 text-sm font-light leading-relaxed">
                    {activeSpot.desc}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="glass-card p-8 rounded-3xl border border-white/5 text-center flex flex-col items-center justify-center py-16"
                >
                  <Info className="w-8 h-8 text-brand-gold/60 mb-4 animate-bounce" />
                  <p className="text-white/40 text-sm font-semibold uppercase tracking-wider">
                    Select a hotspot to dissect the can structure
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Center Column: Interactive can rendering */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[500px] md:h-[600px]">
            {/* Glowing vertical lines in background */}
            <div className="absolute w-[2px] h-[75%] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
            
            {/* Can wrapper */}
            <div className="relative w-[200px] h-[380px] md:w-[260px] md:h-[480px]">
              <Image
                src="/assets/classic.png"
                alt="Red Bull Can Anatomy"
                fill
                className="object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
              />

              {/* Hotspots Mapping */}
              {hotspots.map((spot) => (
                <button
                  key={spot.id}
                  id={`hotspot-${spot.id}`}
                  onClick={() => setActiveSpot(spot)}
                  className="absolute z-30 -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{ left: spot.x, top: spot.y }}
                >
                  {/* Outer breathing ring */}
                  <span className="absolute inset-0 rounded-full bg-brand-red/40 scale-[2.2] animate-ping pointer-events-none group-hover:bg-brand-gold/40" />
                  
                  {/* Inner glowing dot */}
                  <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-brand-red border-2 border-white shadow-[0_0_15px_#00d2ff] transition-all duration-300 group-hover:bg-brand-gold group-hover:shadow-[0_0_15px_#38bdf8] group-hover:scale-110">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Key stats */}
          <div className="lg:col-span-3 flex flex-col justify-center gap-6">
            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/5 flex flex-col">
              <span className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Total Weight</span>
              <span className="font-display text-3xl font-black tracking-tight text-white">250 ML</span>
              <span className="text-brand-gold text-[11px] font-semibold mt-1">Standard Core Serving</span>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/5 flex flex-col">
              <span className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Recyclability</span>
              <span className="font-display text-3xl font-black tracking-tight text-white">100%</span>
              <span className="text-brand-red text-[11px] font-semibold mt-1">Infinitely Sustainable</span>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/5 flex flex-col">
              <span className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Eco Footprint</span>
              <span className="font-display text-3xl font-black tracking-tight text-white">-95%</span>
              <span className="text-blue-400 text-[11px] font-semibold mt-1">Energy saved in recycling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
