'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';
import { staggerContainer, fadeUpVariant } from '@/hooks/useAnimationVariants';

export function AnimatedHero({ title, subtitle, children, backgroundImage }) {
  const { x, y } = useMousePosition();
  
  // Safely access window only on client-side
  const isClient = typeof window !== 'undefined';
  
  // Calculate subtle parallax offset based on mouse position
  const xOffset = isClient ? (x - window.innerWidth / 2) * 0.02 : 0;
  const yOffset = isClient ? (y - window.innerHeight / 2) * 0.02 : 0;

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Parallax */}
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 z-0"
          animate={{ x: xOffset, y: yOffset }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            scale: 1.05, // Prevent edges from showing during parallax
          }}
        />
      )}
      
      {/* Animated Gradient Mesh Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-background/90 via-background/80 to-primary/20 animate-gradient-shift" />
      
      {/* Floating Particles (Simplified for performance) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {isClient && [...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-primary/10 blur-3xl"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-20 section-container text-center py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={fadeUpVariant}
            className="text-foreground mb-6 text-balance"
          >
            {title}
          </motion.h1>
          
          <motion.p 
            variants={fadeUpVariant}
            className="text-xl md:text-2xl mb-8 leading-relaxed text-muted-foreground text-balance"
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}