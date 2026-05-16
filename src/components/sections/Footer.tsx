"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream pt-32 pb-12 px-6 relative overflow-hidden">
      {/* Botanical Border Strip */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rust via-gold to-sage opacity-50" />
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24 items-end">
          <div>
            <h2 className="text-6xl md:text-8xl font-display leading-tight mb-8">
              Udaan <br />
              <span className="italic text-rust">Orients</span> the Future
            </h2>
            <div className="flex gap-8 font-sans text-sm uppercase tracking-widest text-cream/40">
               <a href="#" className="hover:text-gold transition-colors underline underline-offset-8">Instagram</a>
               <a href="#" className="hover:text-gold transition-colors underline underline-offset-8">LinkedIn</a>
               <a href="#" className="hover:text-gold transition-colors underline underline-offset-8">Twitter</a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-6">
              <h4 className="font-sans text-xs uppercase tracking-[0.3em] text-gold">Explore</h4>
              <ul className="space-y-4 font-serif text-xl">
                <li><a href="#" className="hover:text-rust transition-colors">Mission</a></li>
                <li><a href="#" className="hover:text-rust transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-rust transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-rust transition-colors">Impact</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-sans text-xs uppercase tracking-[0.3em] text-gold">Participate</h4>
              <ul className="space-y-4 font-serif text-xl">
                <li><a href="#" className="hover:text-rust transition-colors">Volunteer</a></li>
                <li><a href="#" className="hover:text-rust transition-colors">Partner</a></li>
                <li><a href="#" className="hover:text-rust transition-colors">Schools</a></li>
                <li><a href="#" className="hover:text-rust transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-12 flex flex-col md:row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-rust flex items-center justify-center rounded-sm rotate-12">
               <span className="text-cream font-display text-xl">U</span>
             </div>
             <span className="font-display text-2xl tracking-tight">UDAAN</span>
          </div>

          <p className="font-sans text-[10px] uppercase tracking-widest text-cream/20">
            © 2026 UDAAN Educational Foundation. All Rights Reserved.
          </p>

          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              x: [0, 5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-gold opacity-50"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
            </svg>
          </motion.div>
        </div>
      </div>
      
      {/* Background Chalk Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-screen" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-linen-2.png")' }} />
    </footer>
  );
}
