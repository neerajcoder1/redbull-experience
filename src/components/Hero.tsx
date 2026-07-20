"use client";

import { motion } from "framer-motion";
import { ArrowDown, Flame, Zap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden bg-bg-dark pt-6 pb-12 select-none">
      {/* Background Video & Glow overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 filter brightness-50 contrast-125"
          src="https://assets.mixkit.co/videos/preview/mixkit-blue-energy-waves-abstract-motion-background-41484-large.mp4"
        />
        {/* Sky blue & Dark blue overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020813]/90 via-[#020813]/55 to-[#020813]" />
        
        {/* Glow circles */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-blue/25 blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-brand-red/20 blur-[120px] animate-pulse-slow" />
      </div>

      {/* Header Nav */}
      <header className="w-full max-w-7xl px-6 md:px-12 flex justify-between items-center z-50">
        <div className="flex items-center gap-3">
          <span className="font-display text-2xl font-black tracking-widest text-white flex items-center gap-1">
            RED<span className="text-brand-red font-extrabold text-[#00d2ff]">BULL</span>
            <span className="text-[10px] bg-brand-gold text-black font-sans font-bold px-1.5 py-0.5 rounded tracking-normal">LABS</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#features" className="hover:text-white transition-colors duration-200">The Power</a>
          <a href="#anatomy" className="hover:text-white transition-colors duration-200">Anatomy</a>
          <a href="#flavors" className="hover:text-white transition-colors duration-200">Editions</a>
        </nav>
        <a 
          href="#cta"
          className="relative px-5 py-2 rounded-full overflow-hidden border border-white/15 bg-white/5 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-white hover:text-black transition-colors duration-300 group"
        >
          <span className="absolute inset-0 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          <span className="relative z-10 flex items-center gap-2">
            Unleash Now <Zap className="w-3.5 h-3.5 fill-current text-brand-gold group-hover:text-black" />
          </span>
        </a>
      </header>

      {/* Giant Kinetic Typography Background */}
      <div className="absolute inset-y-0 w-full flex flex-col justify-center pointer-events-none opacity-[0.03] select-none z-0">
        <div className="whitespace-nowrap font-display text-[14vw] font-black tracking-tighter uppercase leading-none text-stroke-white animate-marquee">
          GIVES YOU WIIINGS • RED BULL ENERGY • GIVES YOU WIIINGS • 
        </div>
        <div className="whitespace-nowrap font-display text-[14vw] font-black tracking-tighter uppercase leading-none text-stroke-white animate-marquee-reverse">
          LIMITLESS PERFORMANCE • ACTIVE TAURINE • FOCUS • 
        </div>
      </div>

      {/* Hero Content Grid */}
      <div className="w-full max-w-7xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center flex-grow z-10 gap-12 mt-12 md:mt-0">
        {/* Left column - text details */}
        <div className="flex flex-col items-start text-left max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-glow/20 border border-brand-blue-glow text-brand-gold text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Flame className="w-3.5 h-3.5 fill-current text-brand-red" /> Cinematic Interactive Experience
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl font-black tracking-tight leading-[0.9] text-white mb-6 uppercase"
          >
            Gives You <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-gold to-white drop-shadow-[0_4px_12px_rgba(0,210,255,0.45)] animate-glow">
              Wiiings.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/70 text-sm md:text-base font-light leading-relaxed mb-8 max-w-md"
          >
            Vitalizes body and mind. Witness a premium digital experience crafted for the future of interactive motion. Scroll to explore the details.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 animate-pulse-slow"
          >
            <a
              href="#features"
              className="px-8 py-3.5 rounded-full bg-brand-red text-white text-sm font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(0,210,255,0.45)] hover:shadow-[0_0_35px_rgba(0,210,255,0.65)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Start Journey
            </a>
            <a
              href="#flavors"
              className="px-8 py-3.5 rounded-full border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-sm text-white text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              View Editions
            </a>
          </motion.div>
        </div>

        {/* Right column - 3D Can render center */}
        <div className="relative flex justify-center items-center w-full h-[350px] md:h-[500px]">
          {/* Circular lights in the background */}
          <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-tr from-brand-blue-glow to-brand-red/30 opacity-40 blur-3xl" />
          
          {/* Subtle spinning rings */}
          <div className="absolute w-[220px] h-[220px] md:w-[320px] md:h-[320px] rounded-full border border-white/5 animate-spin-slow" />
          <div className="absolute w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full border border-dashed border-white/5 animate-[spin_40s_linear_infinite_reverse]" />

          {/* Floating Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 40, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: -5 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.3,
            }}
            whileHover={{ y: -10, rotate: 2, scale: 1.03 }}
            className="relative w-[260px] h-[260px] md:w-[400px] md:h-[400px] cursor-grab active:cursor-grabbing select-none"
          >
            <Image
              src="/assets/key_visual_1.png"
              alt="Red Bull 3D Cinematic Render"
              fill
              priority
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            />
          </motion.div>

          {/* Floating particles details */}
          <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-brand-gold animate-ping" />
          <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-brand-red animate-ping [animation-delay:1.5s]" />
          <div className="absolute top-1/2 left-1/3 w-1 h-1 rounded-full bg-white opacity-40 animate-pulse [animation-delay:2s]" />
        </div>
      </div>

      {/* Footer scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-col items-center gap-2 text-white/40 text-xs font-semibold tracking-widest uppercase cursor-pointer hover:text-white transition-colors duration-200 z-10"
        onClick={() => {
          document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span>Scroll to Unleash</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-brand-red" />
        </motion.div>
      </motion.div>
    </section>
  );
}
