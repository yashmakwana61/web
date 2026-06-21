'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Cloud, Lock, Shield, Cpu, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Node = ({ icon: Icon, title, delay, color }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px var(--tw-shadow-color)", shadowColor: color }}
    className="flex flex-col items-center gap-3 p-6 bg-card border rounded-2xl relative z-10 w-40"
  >
    <div className={`p-4 rounded-xl text-white`} style={{ backgroundColor: color }}>
      <Icon className="w-8 h-8" />
    </div>
    <span className="font-semibold text-sm text-center">{title}</span>
  </motion.div>
);

const FlowArrow = ({ delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="hidden md:flex flex-col items-center justify-center text-muted-foreground relative"
  >
    <ArrowRight className="w-8 h-8" />
    <motion.div 
      className="absolute h-1 w-1 bg-primary rounded-full top-1/2 -mt-0.5"
      animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, delay }}
    />
  </motion.div>
);

export function SystemArchitectureDiagram() {
  const { ref } = useScrollAnimation();

  return (
    <div ref={ref} className="py-12 px-4 rounded-3xl bg-muted/30 border border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
        <Node icon={Cloud} title="Cloud Gateway" color="hsl(var(--chart-1))" delay={0.1} />
        <FlowArrow delay={0.4} />
        
        <div className="flex flex-col gap-6">
          <Node icon={Shield} title="Security Layer" color="hsl(var(--chart-3))" delay={0.3} />
          <Node icon={Cpu} title="Processing Engine" color="hsl(var(--chart-2))" delay={0.5} />
        </div>
        
        <FlowArrow delay={0.6} />
        <Node icon={Database} title="Core Database" color="hsl(var(--chart-4))" delay={0.7} />
      </div>
    </div>
  );
}