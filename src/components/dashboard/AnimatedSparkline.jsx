'use client';

import React from 'react';
import { ResponsiveContainer, LineChart, Line } from 'recharts';
import { motion } from 'framer-motion';

export function AnimatedSparkline({ data, color = "hsl(var(--primary))" }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="h-12 w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke={color} 
            strokeWidth={2} 
            dot={false}
            isAnimationActive={true}
            animationDuration={1500}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}