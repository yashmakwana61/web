'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function AnimatedProcessTimeline({ steps }) {
  return (
    <div className="max-w-4xl mx-auto space-y-8 relative">
      {/* Continuous background line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
      
      {steps.map((step, index) => (
        <ProcessStepItem 
          key={step.number} 
          {...step} 
          index={index} 
          isLast={index === steps.length - 1} 
        />
      ))}
    </div>
  );
}

function ProcessStepItem({ number, title, description, index, isLast }) {
  const { ref, isInView } = useScrollAnimation({ once: true, margin: "0px 0px -100px 0px" });

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start group">
      {/* Animated Progress Line */}
      {!isLast && (
        <motion.div 
          className="absolute left-8 top-16 bottom-[-2rem] w-0.5 bg-primary origin-top hidden md:block z-0"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        />
      )}

      {/* Number Badge */}
      <motion.div 
        className="flex-shrink-0 relative z-10"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.2 }}
      >
        <div className="w-16 h-16 rounded-2xl bg-background border-2 border-primary/20 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:border-primary group-hover:bg-primary/5 group-hover:scale-110">
          <span className="text-2xl font-bold text-primary">{number}</span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="flex-grow pt-2 pb-8 w-full"
        initial={{ x: 20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
        transition={{ duration: 0.5, delay: (index * 0.2) + 0.2, ease: "easeOut" }}
      >
        <div className="bg-card hover:bg-muted/50 p-6 rounded-2xl border border-transparent hover:border-border transition-all duration-300 shadow-sm hover:shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-foreground transition-colors group-hover:text-primary">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}