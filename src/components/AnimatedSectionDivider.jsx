'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function AnimatedSectionDivider() {
  const { ref, isInView } = useScrollAnimation({ once: true });

  return (
    <div ref={ref} className="w-full flex justify-center py-12 overflow-hidden">
      <motion.svg 
        width="200" 
        height="20" 
        viewBox="0 0 200 20" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0 10H80L100 2L120 18L140 10H200"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}