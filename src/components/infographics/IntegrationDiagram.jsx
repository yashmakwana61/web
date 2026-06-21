'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cloud, Server, ArrowRightLeft, Cpu } from 'lucide-react';

export function IntegrationDiagram() {
  return (
    <div className="p-8 bg-card border rounded-3xl relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
      <div className="flex items-center justify-between w-full max-w-2xl relative z-10">
        <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="p-4 bg-primary/10 rounded-xl text-primary"><Database className="w-8 h-8" /></motion.div>
        
        <div className="flex-1 flex items-center justify-center px-4 relative">
          <div className="h-0.5 w-full bg-border relative overflow-hidden">
             <motion.div animate={{ left: ['-10%', '110%'] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} className="absolute h-full w-1/4 bg-primary" />
          </div>
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bg-background border p-2 rounded-full"><ArrowRightLeft className="w-5 h-5 text-muted-foreground" /></motion.div>
        </div>

        <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="p-6 bg-primary text-primary-foreground rounded-2xl shadow-xl z-20"><Cpu className="w-10 h-10" /></motion.div>

        <div className="flex-1 flex items-center justify-center px-4 relative">
          <div className="h-0.5 w-full bg-border relative overflow-hidden">
             <motion.div animate={{ left: ['110%', '-10%'] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} className="absolute h-full w-1/4 bg-secondary" />
          </div>
        </div>

        <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="p-4 bg-secondary/10 rounded-xl text-secondary"><Cloud className="w-8 h-8" /></motion.div>
      </div>
    </div>
  );
}