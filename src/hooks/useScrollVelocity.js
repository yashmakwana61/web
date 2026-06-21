import { useScroll, useVelocity, useSpring, useTransform } from 'framer-motion';

export function useScrollVelocity(range = [-1000, 1000], outputRange = [-50, 50]) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, range, outputRange, {
    clamp: false
  });

  return velocityFactor;
}