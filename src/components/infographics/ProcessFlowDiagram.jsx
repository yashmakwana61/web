'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export function ProcessFlowDiagram({ steps }) {
  return (
    <div className="relative py-12">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 md:gap-2 relative">
        {/* Continuous Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 hidden md:block z-0" />
        
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="flex-1 relative z-10 bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
              <h4 className="font-semibold text-center md:text-left mb-2">{step.title}</h4>
              <p className="text-sm text-muted-foreground text-center md:text-left leading-relaxed">
                {step.description}
              </p>
            </motion.div>
            
            {i < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.2 + 0.1 }}
                className="hidden md:flex flex-shrink-0 relative z-10 text-muted-foreground"
              >
                <ChevronRight className="w-8 h-8" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}