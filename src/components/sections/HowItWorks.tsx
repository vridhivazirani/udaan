"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Ground Reality",
    description: "Conducting surveys to understand infrastructure gaps and digital accessibility.",
    accent: "text-rust"
  },
  {
    number: "02",
    title: "Identifying Gaps",
    description: "Analyzing access to mentorship, practical skills, and learning resources.",
    accent: "text-sage"
  },
  {
    number: "03",
    title: "Building Bridges",
    description: "Deploying technology platforms where volunteers and students connect.",
    accent: "text-gold"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-6 bg-cream relative overflow-hidden">
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />

      <div className="container mx-auto relative z-10">
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-sans text-ink/40 uppercase tracking-[0.5em] text-xs mb-4"
          >
            The Path Forward
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display text-ink"
          >
            Our Initial <span className="italic">Plan</span>
          </motion.h2>
          
          <div className="w-24 h-1 bg-rust mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 relative">
          {/* Connector Line (SVG Brush Stroke) */}
          <div className="hidden md:block absolute top-1/3 left-0 w-full h-20 -z-10 opacity-10">
             <svg width="100%" height="100%" viewBox="0 0 1200 100" preserveAspectRatio="none">
               <path d="M0,50 Q300,0 600,50 T1200,50" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="12,12" className="text-ink" />
             </svg>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 1, ease: "easeOut" }}
              className="relative group"
            >
              <div className="absolute -top-20 -left-10 text-[180px] font-display text-ink/[0.03] select-none group-hover:text-ink/[0.07] transition-colors duration-700">
                {step.number}
              </div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-full border-2 border-current ${step.accent} flex items-center justify-center mb-10 font-sans text-sm font-bold`}>
                  {step.number}
                </div>
                
                <h3 className="text-4xl font-display text-ink mb-6 italic">
                  {step.title}
                </h3>
                
                <p className="text-xl font-serif text-ink/70 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="mt-8 flex gap-2">
                   {[1,2,3].map(i => (
                     <div key={i} className={`w-2 h-2 rounded-full bg-current ${step.accent} opacity-${40 - i*10}`} />
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
