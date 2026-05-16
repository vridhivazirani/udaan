"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 lg:px-12 ${isScrolled ? "bg-parchment/90 backdrop-blur-md shadow-sm border-b border-ink/5" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-terracotta flex items-center justify-center rounded-sm rotate-12">
            <span className="text-parchment font-display text-lg">U</span>
          </div>
          <span className={`font-display text-2xl tracking-tight ${isScrolled ? "text-ink" : "text-ink"}`}>UDAAN</span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {["About", "How it Works", "Volunteer", "Impact", "Resources"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
              className="font-accent text-xs uppercase tracking-widest text-ink/60 hover:text-terracotta transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-terracotta transition-all group-hover:w-full" />
            </a>
          ))}
          <button className="bg-ink text-parchment px-6 py-2 font-accent text-[10px] uppercase tracking-widest hover:bg-terracotta transition-colors">
            Get Involved
          </button>
        </div>

        {/* Mobile Hamburger placeholder */}
        <div className="lg:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </div>
    </nav>
  );
}
