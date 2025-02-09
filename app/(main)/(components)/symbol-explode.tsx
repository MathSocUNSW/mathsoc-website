"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MATH_SYMBOLS = ["+", "-", "×", "÷", "∫", "Σ", "∞", "√", "∂", "π", "μ"];

// Define the type for particles
interface Particle {
  id: string;
  symbol: string;
  deltaX: number;
  deltaY: number;
}

interface SymbolExplosionProps {
  children: ReactNode;
  explosionDelay?: number;
}

const SymbolExplosion: React.FC<SymbolExplosionProps> = ({ children, explosionDelay = 1250 }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasExplodedOnView, setHasExplodedOnView] = useState(false);

  // ------------------------------------------
  // The shared explosion function
  // ------------------------------------------
  const handleExplosion = () => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 24; i++) {
      newParticles.push({
        id: crypto.randomUUID(),
        symbol: MATH_SYMBOLS[Math.floor(Math.random() * MATH_SYMBOLS.length)],
        deltaX: (Math.random() - 0.5) * 200, // -100 to +100
        deltaY: (Math.random() - 0.5) * 200,
      });
    }
    setParticles(newParticles);
  };

  // ------------------------------------------
  // Explode on hover
  // ------------------------------------------
  const handleMouseEnter = () => {
    handleExplosion();
  };

  const handleMouseLeave = () => {
    setParticles([]);
  };

  // ------------------------------------------
  // Explode *once* when first scrolled into view,
  // with a customizable delay.
  // ------------------------------------------
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasExplodedOnView) {
          setTimeout(() => {
            handleExplosion();
            setHasExplodedOnView(true);

            // Stop observing after first explosion
            observer.unobserve(node);
          }, explosionDelay);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, [hasExplodedOnView, explosionDelay]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      <div className="relative z-10">{children}</div>

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
};

export default SymbolExplosion;
