'use client';

import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function AnimatedNumberTicker({ value, prefix = '', suffix = '', duration = 2, decimals = 0 }) {
  const { ref, isInView } = useScrollAnimation({ once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(latest),
    });
    return controls.stop;
  }, [value, duration, isInView]);

  return (
    <span ref={ref} className="font-variant-numeric tabular-nums tracking-tight">
      {prefix}{displayValue.toFixed(decimals)}{suffix}
    </span>
  );
}