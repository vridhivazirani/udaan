"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (typeof window === "undefined") return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none mix-blend-difference">
      <motion.div
        className="w-4 h-4 bg-rust rounded-full flex items-center justify-center"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -8,
          top: -8,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
        }}
      />
      <motion.div
        className="w-10 h-10 border border-rust/40 rounded-full"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -20,
          top: -20,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1.5 : 0.8,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 150 }}
      />
    </div>
  );
}
