'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';

export function ComparisonInfographic({ before, after, metrics }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch py-8">
      {/* Before */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="p-8 rounded-2xl bg-muted/50 border border-border/50 relative"
      >
        <div className="absolute top-4 right-4 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-semibold">Before</div>
        <h3 className="text-xl font-semibold mb-6">Legacy Systems</h3>
        <ul className="space-y-4">
          {before.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <X className="w-5 h-5 text-danger-chart shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* After */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="p-8 rounded-2xl bg-primary/5 border border-primary/20 relative shadow-[0_0_40px_-15px_hsl(var(--primary))]"
      >
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">After PreciseFect</div>
        <h3 className="text-xl font-semibold mb-6 text-foreground">Modern Automation</h3>
        <ul className="space-y-4">
          {after.map((item, i) => (
            <motion.li 
              key={i} 
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="flex items-start gap-3 text-foreground"
            >
              <Check className="w-5 h-5 text-success-chart shrink-0 mt-0.5" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
        
        {metrics && (
          <div className="mt-8 pt-6 border-t border-primary/10 grid grid-cols-2 gap-4">
            {metrics.map((metric, i) => (
              <div key={i} className="bg-background rounded-lg p-4 shadow-sm border border-border">
                <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-primary">{metric.value}</p>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}