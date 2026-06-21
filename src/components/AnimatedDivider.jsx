'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function AnimatedDivider({ className = "" }) {
  return (
    <div className={`w-full flex justify-center overflow-hidden py-8 ${className}`}>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="h-[1px] max-w-xs md:max-w-md w-full bg-gradient-to-r from-transparent via-border to-transparent relative"
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
}