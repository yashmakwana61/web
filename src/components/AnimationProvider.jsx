'use client';

import React, { createContext, useContext } from 'react';
import { MotionConfig, useReducedMotion } from 'framer-motion';

const AnimationContext = createContext({ shouldReduceMotion: false });

export const AnimationProvider = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <AnimationContext.Provider value={{ shouldReduceMotion: !!shouldReduceMotion }}>
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => useContext(AnimationContext);