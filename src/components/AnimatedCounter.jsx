'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView as useScrollAnimation } from 'framer-motion';

const AnimatedCounter = ({
  end,
  duration = 2,
  decimals = 0,
  prefix = '',
  suffix = '',
  separator = ',',
  className = ''
}) => {
  const count = useMotionValue(0);
  
  const rounded = useTransform(count, (latest) => {
    const num = Number(latest).toFixed(decimals);
    const parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return prefix + parts.join('.') + suffix;
  });

  const ref = useRef(null);
  // Trigger animation only when the component is visible in viewport
  const inView = useScrollAnimation(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, end, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, end, duration, inView]);

  return (
    <motion.span ref={ref} className={`font-variant-numeric tabular-nums ${className}`}>
      {rounded}
    </motion.span>
  );
};

export default AnimatedCounter;