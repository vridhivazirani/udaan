"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const areas = [
  { title: "Field Interaction", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400", description: "Direct engagement with rural school ecosystems." },
  { title: "Mentorship", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400", description: "Connecting students with experienced professionals." },
  { title: "Awareness Programs", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400", description: "Workshops on careers and higher education." },
  { title: "Technology Access", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400", description: "Providing digital tools and learning support." },
  { title: "Digital Learning", image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=400", description: "Curated resources for remote education." },
  { title: "Community Partnerships", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400", description: "Collaborating with local leaders and schools." },
];

export default function FocusArea() {
  return (
    <section id="about" className="py-16 px-6 bg-bg text-ink relative overflow-hidden border-t border-ink/5">
      {/* Background Chalkboard Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-linen-2.png")' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-sans text-rust uppercase tracking-widest text-sm mb-4 block"
          >
            What We're Solving
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display mb-8"
          >
            Closing the <span className="italic text-rust">Opportunity</span> Gap
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl font-serif text-ink/60 max-w-2xl leading-relaxed"
          >
            We address educational disparities through a multi-faceted approach that combines human connection with digital empowerment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotate: Math.random() * 4 - 2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-paper p-10 shadow-paper relative group cursor-pointer"
            >
              {/* Torn Edge Effect - using clip-path utility from globals.css */}
              <div className="absolute -top-4 left-0 w-full h-8 bg-paper torn-edge-top opacity-50" />
              <div className="absolute -bottom-4 left-0 w-full h-8 bg-paper torn-edge-bottom opacity-50" />
              
              <div className="relative w-full h-48 mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image 
                  src={area.image} 
                  alt={area.title} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 border border-ink/10" />
              </div>

              <h3 className="text-2xl font-display text-ink mb-4 group-hover:text-rust transition-colors">
                {area.title}
              </h3>
              <p className="text-ink/60 font-sans leading-relaxed">
                {area.description}
              </p>
              
              {/* Corner Fold Accent */}
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-gold/20 group-hover:border-rust transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Script Accent */}
      <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block">
        <span className="font-serif italic text-6xl text-rust -rotate-12 block">
          Knowledge is Flight
        </span>
      </div>
    </section>
  );
}
