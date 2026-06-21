'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export function AnimatedBadge({ children, variant = "default", className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="inline-block"
    >
      <Badge variant={variant} className={`animate-pulse-glow ${className}`}>
        {children}
      </Badge>
    </motion.div>
  );
}