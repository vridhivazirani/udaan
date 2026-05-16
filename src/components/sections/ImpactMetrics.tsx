"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { label: "Target Schools", value: 100, suffix: "+" },
  { label: "Planned Workshops", value: 50, suffix: "" },
  { label: "Projected Students", value: 10000, suffix: "+" },
  { label: "Volunteer Goal", value: 500, suffix: "" },
];

export default function ImpactMetrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ticker animation
    if (tickerRef.current) {
      gsap.to(tickerRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "none",
      });
    }

    // Number count-up animation
    const ctx = gsap.context(() => {
      gsap.from(".impact-number", {
        textContent: 0,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: ".impact-number",
          start: "top 80%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 bg-bg text-ink overflow-hidden border-t border-ink/5">
      {/* Horizontal Ticker */}
      <div className="border-y border-ink/10 py-8 mb-16 overflow-hidden flex whitespace-nowrap bg-rust/5">
        <div ref={tickerRef} className="flex gap-20 px-10">
          {[1, 2].map((_, i) => (
            <div key={i} className="flex gap-20">
              <span className="text-4xl font-display italic text-rust uppercase tracking-widest">Udaan Roadmap 2026</span>
              <span className="text-4xl font-display italic text-sage uppercase tracking-widest">Bridging Education Gap</span>
              <span className="text-4xl font-display italic text-gold uppercase tracking-widest">Every Child Deserves to Fly</span>
              <span className="text-4xl font-display italic text-rust uppercase tracking-widest">Empowerment Through Technology</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-32">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="text-6xl md:text-8xl font-display text-gold mb-4 flex items-baseline justify-center lg:justify-start">
                <span className="impact-number">{metric.value}</span>
                <span className="text-4xl md:text-5xl ml-1">{metric.suffix}</span>
              </div>
              <p className="font-sans text-sm uppercase tracking-[0.3em] text-ink/40">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Qualitative Stories Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-rust" />
            <div className="p-12 bg-paper border border-ink/10 shadow-paper relative">
              <span className="font-serif italic text-4xl text-rust mb-8 block -rotate-3">"A new horizon..."</span>
              <p className="text-2xl font-serif italic leading-relaxed mb-8 text-ink/80">
                "Udaan represents the hope that every child, regardless of their zip code, can access the mentorship and tools they need to soar."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full" />
                <div>
                  <h4 className="font-display text-xl text-ink">Our Vision</h4>
                  <p className="font-sans text-xs text-ink/40">Community Driven · Future Oriented</p>
                </div>
              </div>
            </div>
          </div>

          <div>
             <h3 className="text-4xl md:text-5xl font-display mb-10 text-ink">Beyond the <span className="italic text-rust">Numbers</span></h3>
             <p className="text-xl font-serif text-ink/60 leading-relaxed mb-8">
               Our roadmap is focused on deep, qualitative shifts in rural education through direct field engagement and sustainable technology access.
             </p>
             <ul className="space-y-4 font-sans text-sm text-rust">
               <li>→ Community Engagement Strategy</li>
               <li>→ Digital Literacy Curriculum</li>
               <li>→ Global Mentorship Network</li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
