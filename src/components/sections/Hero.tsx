"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";

const BirdFlockCanvas = dynamic(() => import("../BirdFlockCanvas"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-bg overflow-hidden flex flex-col pt-32 lg:pt-40 px-6 lg:px-16" id="home">
      {/* Background Layer: Birds & Grain */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <BirdFlockCanvas />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-[100] flex items-center justify-between p-8 lg:px-16 opacity-0 animate-fade-down [animation-delay:0.8s]">
        <a href="#home" className="flex items-center gap-2 font-display text-2xl font-black tracking-widest text-ink group">
          <div className="pointer-events-none transition-transform duration-700 group-hover:rotate-6 -ml-4 -mr-12">
            <svg width="120" height="120" viewBox="0 0 230 230">
              <ellipse cx="55" cy="168" rx="42" ry="16" fill="#5a6e4a" opacity="0.7" transform="rotate(-35 55 168)"/>
              <ellipse cx="85" cy="148" rx="36" ry="13" fill="#4a5e3a" opacity="0.65" transform="rotate(-55 85 148)"/>
              <ellipse cx="35" cy="138" rx="30" ry="11" fill="#6a7e5a" opacity="0.6" transform="rotate(-20 35 138)"/>
              <circle cx="105" cy="95" r="34" fill="#e8845a" opacity="0.82"/>
              <circle cx="68" cy="78" r="25" fill="#c4521a" opacity="0.76"/>
              <circle cx="136" cy="74" r="21" fill="#e8b48a" opacity="0.7"/>
              <ellipse cx="105" cy="58" rx="15" ry="28" fill="#e05030" opacity="0.78"/>
              <ellipse cx="71" cy="65" rx="13" ry="23" fill="#d44820" opacity="0.72" transform="rotate(-32 71 65)"/>
              <ellipse cx="137" cy="63" rx="13" ry="21" fill="#e08050" opacity="0.72" transform="rotate(28 137 63)"/>
              <ellipse cx="58" cy="52" rx="11" ry="19" fill="#c4521a" opacity="0.66" transform="rotate(-16 58 52)"/>
              <circle cx="105" cy="95" r="13" fill="#fae0a0" opacity="0.92"/>
              <circle cx="105" cy="95" r="7" fill="#c9a84c" opacity="0.95"/>
              <circle cx="68" cy="78" r="9" fill="#fae0a0" opacity="0.86"/>
              <circle cx="68" cy="78" r="4.5" fill="#c9a84c" opacity="0.9"/>
              <ellipse cx="156" cy="84" rx="9" ry="15" fill="#e85a3a" opacity="0.58" transform="rotate(12 156 84)"/>
              <ellipse cx="42" cy="100" rx="7" ry="12" fill="#d44820" opacity="0.52" transform="rotate(-22 42 100)"/>
            </svg>
          </div>
          <span className="pt-2">UDAAN</span>
        </a>
        <ul className="flex gap-8 list-none">
          <li><a href="#about" className="text-xs tracking-widest uppercase font-medium text-ink/50 hover:text-rust transition-colors">About</a></li>
          <li><a href="#schools" className="text-xs tracking-widest uppercase font-medium text-ink/50 hover:text-rust transition-colors">Schools</a></li>
          <li><a href="#volunteer" className="text-xs tracking-widest uppercase font-medium text-ink/50 hover:text-rust transition-colors">Volunteer</a></li>
        </ul>
      </nav>

      {/* RESTORED: Floral Decor elements (The Poppy) - Moved inside Nav for alignment */}

      {/* Main Scene Container */}
      <div className="relative w-full max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1 mb-16 lg:mb-24">
        
        {/* Background Paper Rect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[110%] bg-paper/20 border border-ink/5 -z-10 shadow-sm rotate-1 hidden lg:block" />

        {/* Left Side: Text */}
        <div className="flex flex-col items-start z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 text-[0.65rem] tracking-[0.3em] uppercase text-rust font-bold mb-6"
          >
            <span className="w-10 h-[1px] bg-rust"></span>
            Education · Community · Flight
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-7xl md:text-8xl lg:text-9xl font-black leading-[0.82] text-ink mb-6"
          >
            <span className="italic block text-rust">Udaan</span>
            Every child<br />deserves<br />to fly.
            <span className="devanagari block mt-4 text-[0.35em] font-normal not-italic text-ink/10 tracking-[0.1em]">उड़ान</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-serif text-xl italic text-ink/50 leading-relaxed max-w-md mb-12"
          >
            Reaching the unreached — mentorship, digital access, and community for India's rural students aged 12 to 18.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-6 items-center relative z-50"
          >
            <a href="#volunteer" className="relative z-50 bg-ink text-bg px-10 py-5 font-sans text-xs font-bold tracking-widest uppercase hover:bg-rust transition-all flex items-center gap-3 group">
              Take Flight <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#about" className="relative z-50 text-xs font-bold tracking-widest uppercase text-ink/40 hover:text-ink transition-colors">
              Our mission ↓
            </a>
          </motion.div>
        </div>

        {/* Right Side: Static Collage Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-full aspect-[4/5] lg:aspect-square bg-paper border border-ink/10 shadow-2xl overflow-hidden group"
        >
          <Image 
            src="/images/hero-collage.png" 
            alt="The Classroom Reimagined" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-rust/5 mix-blend-multiply transition-opacity group-hover:opacity-0" />
          <div className="absolute bottom-6 right-6 font-serif italic text-xs text-ink/40 z-10 bg-bg/80 px-3 py-1 backdrop-blur-sm">
            — the classroom, reimagined
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats */}
      <div className="w-full flex flex-wrap justify-between items-end z-20 mt-auto pb-8 max-w-7xl mx-auto">
        <div className="flex gap-12 mb-4 lg:mb-0">
          <div className="flex flex-col">
            <span className="font-display text-3xl font-black text-rust">12–18</span>
            <span className="text-[0.6rem] tracking-widest uppercase text-ink/30">Target Age</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-3xl font-black text-rust">Rural</span>
            <span className="text-[0.6rem] tracking-widest uppercase text-ink/30">Focus Area</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-3xl font-black text-rust">Free</span>
            <span className="text-[0.6rem] tracking-widest uppercase text-ink/30">Access</span>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex flex-col items-end gap-2">
            <div className="w-16 h-[1px] bg-ink/10"></div>
            <span className="text-[0.6rem] tracking-widest uppercase text-ink/20">Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
}
