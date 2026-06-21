'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from '@/components/Link';

export function AnimatedButton({ children, to, variant = "default", size = "default", className = "", icon: Icon }) {
  const content = (
    <Button variant={variant} size={size} className={`transition-all duration-300 relative group overflow-hidden ${className}`}>
      {variant === 'default' && <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />}
      <span className="relative flex items-center gap-2">
        {children}
        {Icon && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </Button>
  );

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
      {to ? <Link to={to}>{content}</Link> : content}
    </motion.div>
  );
}