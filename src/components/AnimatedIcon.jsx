'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function AnimatedIcon({ icon: Icon, className = "", wrapperClassName = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200, delay }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className={`inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary transition-colors ${wrapperClassName}`}
    >
      <Icon className={`w-6 h-6 ${className}`} />
    </motion.div>
  );
}