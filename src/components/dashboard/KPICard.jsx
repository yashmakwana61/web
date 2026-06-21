'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { AnimatedNumberTicker } from './AnimatedNumberTicker';

export function KPICard({ title, value, prefix, suffix, icon: Icon, trend, delay = 0 }) {
  const isPositive = trend >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative group h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm duration-500" />
      <Card className="relative p-6 h-full bg-card hover:bg-muted/30 transition-colors duration-300 border-border/50 shadow-sm hover:shadow-md">
        <div className="flex justify-between items-start mb-4">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-2 rounded-lg bg-primary/10 text-primary"
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-3xl font-bold text-foreground">
            <AnimatedNumberTicker value={value} prefix={prefix} suffix={suffix} decimals={value % 1 !== 0 ? 1 : 0} />
          </h3>
          {trend !== undefined && (
            <span className={`text-sm font-medium flex items-center ${isPositive ? 'text-success-chart' : 'text-danger-chart'}`}>
              {isPositive ? '↑' : '↓'} {Math.abs(trend)}%
            </span>
          )}
        </div>
      </Card>
    </motion.div>
  );
}