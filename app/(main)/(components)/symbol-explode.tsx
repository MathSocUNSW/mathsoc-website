"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MATH_SYMBOLS = ["+", "-", "×", "÷", "∫", "Σ", "∞", "√", "∂", "π", "μ"];

function SymbolExplosion({ children }) {
  const [particles, setParticles] = useState([]);

  const handleMouseEnter = () => {
    const newParticles = [];
    for (let i = 0; i < 24; i++) {
      newParticles.push({
        id: crypto.randomUUID(),
        symbol: MATH_SYMBOLS[Math.floor(Math.random() * MATH_SYMBOLS.length)],
        // random offsets for explosion
        deltaX: (Math.random() - 0.5) * 200, // -100 to +100
        deltaY: (Math.random() - 0.5) * 200,
      });
    }
    setParticles(newParticles);
  };

  // Clear them on mouse leave (optional). If you want them to continue after leaving,
  // you can remove or alter this.
  const handleMouseLeave = () => {
    setParticles([]);
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block" 
    >
      {/* The wrapped element, e.g. your "Join Us" button */}
      <div className="relative z-10">
        {children}
      </div>
  
      {/* Particles are absolutely positioned in this container */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="
              pointer-events-none 
              absolute 
              z-0
              top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2
              text-white text-xl font-bold
            "
            initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
            animate={{
              x: particle.deltaX,
              y: particle.deltaY,
              scale: 1,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {particle.symbol}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default SymbolExplosion;
