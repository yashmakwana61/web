'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function AnimatedCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="relative group h-full"
    >
      {/* Animated Gradient Border */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />
      
      <div className={`relative h-full bg-card border rounded-2xl overflow-hidden shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl ${className}`}>
        {children}
      </div>
    </motion.div>
  );
}