"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Zap, Volume2, Globe, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function CTA() {
  const [isExploding, setIsExploding] = useState(false);
  const [bubbles, setBubbles] = useState<{ id: number; size: number; x: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const bubbleCount = 20;
    const generated = Array.from({ length: bubbleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 8 + 4,
      x: Math.random() * 100,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 4,
    }));
    setBubbles(generated);
  }, []);

  const handleCharge = () => {
    setIsExploding(true);
    // Play a subtle charge/spark audio synthesizer style (if configured)
    setTimeout(() => {
      setIsExploding(false);
    }, 1500);
  };

  return (
    <section id="cta" className="relative py-32 w-full bg-[#020813] overflow-hidden select-none border-t border-white/5">
      {/* Rising Carbonation Bubbles (Active Energy Drink Vibe) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {bubbles.map((b) => (
          <motion.div
            key={b.id}
            className="absolute bottom-0 rounded-full bg-brand-gold/15"
            style={{
              left: `${b.x}%`,
              width: b.size,
              height: b.size,
            }}
            animate={{
              y: [0, -600],
              opacity: [0, 0.7, 0],
              x: [`${b.x}%`, `${b.x + (Math.random() * 10 - 5)}%`],
            }}
            transition={{
              duration: b.duration,
              repeat: Infinity,
              delay: b.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Screen flash on charge click */}
      <AnimatePresence>
        {isExploding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-50 bg-white pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Ambient lighting glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-brand-blue-glow/20 blur-[130px]" />
        <div className="absolute top-12 left-1/3 w-[400px] h-[400px] rounded-full bg-brand-red/10 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="text-brand-gold text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-brand-gold animate-spin-slow" /> Vitalize Body & Mind
          </span>

          <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tight text-white mb-8 leading-[0.85]">
            Unleash <br />
            <span className="text-stroke-white text-transparent">Your Inner</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-gold to-white">
              Energy.
            </span>
          </h2>

          <p className="text-white/60 text-sm md:text-base font-light max-w-lg leading-relaxed mb-12">
            Experience the next level of cognitive drive, pure performance, and alpine hydration. Fuel your passion with clean, sustained vigor.
          </p>

          {/* Core Interactive Charging CTA Button */}
          <button
            onClick={handleCharge}
            id="revitalize-btn"
            className="group relative px-12 py-5 rounded-full bg-white text-black font-display font-black text-lg uppercase tracking-wider overflow-hidden hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_#00d2ff]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-red to-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
              Revitalize Now <Zap className="w-5 h-5 fill-current text-brand-red group-hover:text-brand-gold group-hover:animate-bounce" />
            </span>
          </button>
        </motion.div>

        {/* Footer block */}
        <footer className="mt-32 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 items-center justify-between text-xs text-white/40 gap-8">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-display font-black text-sm tracking-wider text-white">RED<span className="text-brand-red">BULL</span></span>
            <span>© 2026. All rights reserved.</span>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-4">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
              <Globe className="w-3.5 h-3.5" /> EN / US
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}
