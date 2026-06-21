'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

export function AnimatedStatusIndicator({ status = 'success', label }) {
  const config = {
    success: { color: 'text-[hsl(var(--success-chart))]', bg: 'bg-[hsl(var(--success-chart))]/20', icon: CheckCircle2 },
    warning: { color: 'text-[hsl(var(--warning-chart))]', bg: 'bg-[hsl(var(--warning-chart))]/20', icon: AlertTriangle },
    danger: { color: 'text-[hsl(var(--danger-chart))]', bg: 'bg-[hsl(var(--danger-chart))]/20', icon: XCircle },
  };
  const { color, bg, icon: Icon } = config[status] || config.success;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${bg} ${color}`}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <Icon className="w-4 h-4" />
      </motion.div>
      <span className="text-sm font-semibold capitalize">{label || status}</span>
    </motion.div>
  );
}