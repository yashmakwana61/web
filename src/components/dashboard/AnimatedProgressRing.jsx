'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AnimatedNumberTicker } from './AnimatedNumberTicker';

export function AnimatedProgressRing({ percentage, label, size = 120, strokeWidth = 10, color = "hsl(var(--primary))" }) {
  const { ref, isInView } = useScrollAnimation({ once: true });
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center justify-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90 w-full h-full">
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            strokeWidth={strokeWidth} stroke="hsl(var(--muted))" fill="none"
          />
          <motion.circle
            cx={size / 2} cy={size / 2} r={radius}
            strokeWidth={strokeWidth} stroke={color} fill="none"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ strokeDasharray: circumference }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold">
            <AnimatedNumberTicker value={percentage} suffix="%" />
          </span>
        </div>
      </div>
      {label && <p className="text-sm font-medium text-muted-foreground">{label}</p>}
    </div>
  );
}