'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function ProcessStep({ number, title, description, isLast = false }) {
  const { ref, isInView } = useScrollAnimation({ once: true, margin: "0px 0px -100px 0px" });

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-8 items-start group">
      {/* Connecting Line (Vertical) */}
      {!isLast && (
        <motion.div 
          className="absolute left-8 top-20 bottom-[-2rem] w-0.5 bg-border origin-top"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
        >
          <motion.div 
            className="absolute top-0 left-0 w-full bg-primary origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
            style={{ height: '100%' }}
          />
        </motion.div>
      )}

      {/* Number Badge */}
      <motion.div 
        className="flex-shrink-0 relative z-10"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="w-16 h-16 rounded-2xl bg-background border-2 border-primary/20 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:border-primary group-hover:bg-primary/5 group-hover:scale-110">
          <span className="text-2xl font-bold text-primary">{number}</span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="flex-grow pt-3 pb-8"
        initial={{ x: 20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <div className="bg-card hover:bg-muted/50 p-6 rounded-2xl border border-transparent hover:border-border transition-all duration-300 shadow-sm hover:shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-foreground transition-colors group-hover:text-primary">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default ProcessStep;