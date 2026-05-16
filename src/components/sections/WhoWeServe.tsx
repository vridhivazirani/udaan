"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const audiences = [
  {
    title: "Students",
    description: "Ages 12–18 from rural and underserved communities seeking resources and mentorship.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    tags: ["Ages 12-18", "Rural Schools"]
  },
  {
    title: "Parents & Teachers",
    description: "Empowering guardians and educators with the tools to support their children's growth.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
    tags: ["Community Support", "Guidance"]
  },
  {
    title: "Mentors",
    description: "Professionals and volunteers dedicated to sharing knowledge and opening doors.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    tags: ["Volunteers", "Experts"]
  }
];

export default function WhoWeServe() {
  return (
    <section id="schools" className="py-16 px-6 bg-paper relative overflow-hidden">
      {/* Botanical Illustration Watermark */}
      <div className="absolute -top-20 -left-20 w-96 h-96 opacity-10 pointer-events-none rotate-45">
        <svg viewBox="0 0 200 200" fill="currentColor" className="text-sage">
          <path d="M100 0C100 0 100 40 80 60C60 80 20 80 20 80C20 80 60 80 80 100C100 120 100 160 100 160C100 160 100 120 120 100C140 80 180 80 180 80C180 80 140 80 120 60C100 40 100 0 100 0Z" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-sans text-sage uppercase tracking-[0.4em] text-sm mb-4 block"
          >
            Target Audience
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display text-ink"
          >
            Who We <span className="italic text-sage">Serve</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-paper p-6 shadow-paper group"
            >
              <div className="relative h-80 w-full mb-8 overflow-hidden border-[12px] border-white shadow-inner">
                <Image 
                  src={audience.image} 
                  alt={audience.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 border-[1px] border-ink/10 pointer-events-none" />
              </div>
              
              <div className="flex gap-2 mb-4">
                {audience.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-sans uppercase tracking-widest bg-sage/10 text-sage px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-3xl font-display text-ink mb-4 italic">
                {audience.title}
              </h3>
              <p className="text-ink/70 font-serif text-lg leading-relaxed mb-6">
                {audience.description}
              </p>
              
              <button className="font-sans text-xs uppercase tracking-widest text-sage border-b border-sage/30 pb-1 hover:text-rust hover:border-rust transition-colors">
                Learn More —
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
