import { useState, useEffect } from 'react';
import { animate } from 'framer-motion';

export function useCounterAnimation(targetValue, duration = 2, delay = 0, inView = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, targetValue, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate: (value) => setCount(Math.round(value)),
    });
    return controls.stop;
  }, [targetValue, duration, delay, inView]);

  return count;
}