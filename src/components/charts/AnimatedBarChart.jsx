'use client';

import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from 'recharts';
import { motion } from 'framer-motion';

export function AnimatedBarChart({ 
  data, 
  bars, 
  height = "100%", 
  showLabels = false, 
  yAxisLabel, 
  gradients = [] 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full h-full min-h-[250px]"
      style={{ height }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 30, right: 10, left: 0, bottom: 5 }}>
          {gradients.length > 0 && (
            <defs>
              {gradients.map(g => (
                <linearGradient key={g.id} id={g.id} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={g.start} stopOpacity={1}/>
                  <stop offset="100%" stopColor={g.end} stopOpacity={1}/>
                </linearGradient>
              ))}
            </defs>
          )}
          
          <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} strokeWidth={1} />
          
          <XAxis 
            dataKey="name" 
            stroke="hsl(var(--muted-foreground))" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
            dy={10} 
            tick={{ fill: 'hsl(var(--foreground))', fontWeight: 500 }}
          />
          
          <YAxis 
            stroke="hsl(var(--muted-foreground))" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
            dx={-10} 
            label={yAxisLabel ? { 
              value: yAxisLabel, 
              angle: -90, 
              position: 'insideLeft', 
              style: { textAnchor: 'middle', fill: 'hsl(var(--muted-foreground))', fontSize: 12, fontWeight: 500 } 
            } : null} 
          />
          
          <Tooltip 
            cursor={{ fill: 'hsl(var(--muted)/0.4)' }}
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))', 
              borderColor: 'hsl(var(--border))', 
              borderRadius: '12px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              padding: '12px'
            }}
            itemStyle={{ fontSize: '13px', fontWeight: 600, paddingBottom: '4px' }}
            labelStyle={{ color: 'hsl(var(--muted-foreground))', fontSize: '12px', marginBottom: '8px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}
          />
          
          <Legend 
            wrapperStyle={{ paddingTop: '20px', fontSize: '13px', fontWeight: 500 }} 
            iconType="circle" 
            iconSize={10}
          />
          
          {bars.map((bar, i) => (
            <Bar
              key={bar.key}
              dataKey={bar.key}
              name={bar.name}
              fill={bar.color}
              radius={[6, 6, 0, 0]}
              isAnimationActive={true}
              animationDuration={1200}
              animationBegin={i * 200}
              style={bar.glow ? { filter: `drop-shadow(0px -4px 12px ${bar.glowColor || 'rgba(16, 185, 129, 0.3)'})` } : {}}
            >
              {showLabels && (
                <LabelList 
                  dataKey={bar.key} 
                  position="top" 
                  formatter={(val) => `${val}%`} 
                  style={{ 
                    fill: 'hsl(var(--foreground))', 
                    fontSize: '12px', 
                    fontWeight: 700 
                  }} 
                  offset={10}
                />
              )}
            </Bar>
          ))}
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}