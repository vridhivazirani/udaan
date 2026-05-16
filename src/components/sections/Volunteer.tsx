"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Volunteer() {
  return (
    <section id="volunteer" className="py-16 px-6 bg-paper relative overflow-hidden">
      {/* Background Collage Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none grayscale">
        <svg viewBox="0 0 200 200" fill="currentColor" className="text-ink">
          <path d="M0 0h200v200H0z" fill="url(#pattern)" />
          <defs>
            <pattern id="pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10h20M10 0v20" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-sans text-rust uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Join the Mission
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display text-ink mb-8"
            >
              Ready to help a <span className="italic text-rust">Child</span> Fly?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl font-serif text-ink/70 leading-relaxed mb-12"
            >
              Whether you're a professional, an educator, or a student yourself, there's a place for you in the Udaan community. Share your expertise and change a life.
            </motion.p>

            <div className="space-y-8">
              <div className="flex gap-6 items-center group">
                <div className="w-20 h-20 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image 
                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=200" 
                    alt="Mentor" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-display text-ink">Mentor a Student</h4>
                  <p className="font-serif text-ink/60">One-on-one sessions to guide career paths.</p>
                </div>
              </div>
              <div className="flex gap-6 items-center group">
                <div className="w-20 h-20 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image 
                    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=200" 
                    alt="School" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-display text-ink">Partner Your School</h4>
                  <p className="font-serif text-ink/60">Bring Udaan resources to your institution.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, rotate: 2 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-cream p-10 md:p-16 shadow-paper relative"
          >
            {/* Torn Edge Visual */}
            <div className="absolute -top-6 left-0 w-full h-12 bg-cream torn-edge-top" />
            
            <h3 className="text-3xl font-display text-ink mb-10 italic border-b border-ink/10 pb-4">
              Registration Form
            </h3>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-sans text-[10px] uppercase tracking-widest text-ink/40">Full Name</label>
                  <input type="text" className="w-full bg-paper/30 border-b border-ink/20 py-3 px-4 focus:outline-none focus:border-rust transition-colors font-sans" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-[10px] uppercase tracking-widest text-ink/40">Email Address</label>
                  <input type="email" className="w-full bg-paper/30 border-b border-ink/20 py-3 px-4 focus:outline-none focus:border-rust transition-colors font-sans" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-[10px] uppercase tracking-widest text-ink/40">Area of Expertise</label>
                <select className="w-full bg-paper/30 border-b border-ink/20 py-3 px-4 focus:outline-none focus:border-rust transition-colors font-sans appearance-none">
                  <option>Mentorship</option>
                  <option>Teaching</option>
                  <option>Technology Support</option>
                  <option>Community Outreach</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-[10px] uppercase tracking-widest text-ink/40">Your City</label>
                <input type="text" className="w-full bg-paper/30 border-b border-ink/20 py-3 px-4 focus:outline-none focus:border-rust transition-colors font-sans" placeholder="Mumbai, Pune, etc." />
              </div>

              <button className="w-full py-5 bg-ink text-cream font-display text-xl hover:bg-rust transition-all duration-300 shadow-lg shadow-ink/20 active:scale-95">
                Submit Application
              </button>
              
              <p className="text-center font-sans text-[10px] text-ink/30 uppercase tracking-[0.2em]">
                We'll get back to you within 48 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
