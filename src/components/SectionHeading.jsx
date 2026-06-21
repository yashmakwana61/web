'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeading({ headline, subheadline, align = "center", className = "" }) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : align === "right" ? "text-right ml-auto items-end" : "text-left mr-auto items-start";
  
  return (
    <div className={`flex flex-col mb-16 max-w-3xl ${alignClass} ${className}`}>
      {subheadline && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-wider uppercase text-primary mb-3 block"
        >
          {subheadline}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mb-4"
      >
        {headline}
      </motion.h2>
    </div>
  );
}