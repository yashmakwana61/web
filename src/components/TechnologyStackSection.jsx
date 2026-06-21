'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading.jsx';
import { AnimatedCard } from './AnimatedCard.jsx';
import { motion } from 'framer-motion';
import { Database, Bot, LineChart, Link as LinkIcon, ArrowRightLeft } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton.jsx';
import AnimatedCounter from './AnimatedCounter.jsx';

const techs = [
  { icon: Database, title: "ERP Platforms", items: ["Odoo", "ERPNext", "Custom Architectures"] },
  { icon: Bot, title: "Automation Tools", items: ["AI Agents", "RPA Bots", "Workflow Engines"] },
  { icon: LineChart, title: "BI & Analytics", items: ["Power BI", "Custom Dashboards", "Predictive Models"] },
  { icon: LinkIcon, title: "Integrations", items: ["REST/GraphQL APIs", "Cloud Services", "Legacy Systems"] },
];

export function TechnologyStackSection() {
  return (
    <section className="py-24 bg-muted border-t">
      <div className="section-container">
        <SectionHeading 
          headline="Built on Industry-Leading Platforms" 
          subheadline="Enterprise-Grade Technology"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techs.map((tech, i) => (
              <AnimatedCard key={i} delay={i * 0.1} className="p-6 bg-background text-center flex flex-col items-center h-full">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 flex-shrink-0">
                  <tech.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-3">{tech.title}</h4>
                <ul className="text-sm text-muted-foreground space-y-1 mt-auto">
                  {tech.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </AnimatedCard>
            ))}
          </div>

          <div className="lg:col-span-7 bg-background rounded-3xl p-6 sm:p-8 border shadow-sm flex flex-col justify-center min-h-[400px] relative overflow-hidden">
            <h4 className="text-center font-semibold mb-10 text-muted-foreground uppercase tracking-widest relative z-10">Unified Architecture</h4>
            
            <div className="flex flex-col sm:flex-row items-center justify-between relative z-10 max-w-lg mx-auto w-full gap-8 sm:gap-4">
              
              {/* Counter Box 1 */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }} 
                whileInView={{ scale: 1, opacity: 1 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="min-w-[160px] p-6 bg-primary text-white rounded-2xl flex flex-col items-center justify-center shadow-xl shadow-primary/20"
              >
                <Database className="w-10 h-10 mb-4 opacity-90 text-white" />
                <div className="text-white font-bold text-3xl sm:text-4xl leading-none tracking-tight flex items-baseline">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <span className="text-primary-foreground/90 text-xs sm:text-sm uppercase font-semibold mt-2 tracking-wider">Uptime</span>
              </motion.div>
              
              {/* Connecting Element */}
              <div className="flex-1 relative flex items-center justify-center w-full sm:w-auto h-12 sm:h-auto my-2 sm:my-0">
                {/* Horizontal line for desktop */}
                <div className="absolute inset-x-0 h-1 bg-border hidden sm:block" />
                {/* Vertical line for mobile */}
                <div className="absolute inset-y-0 w-1 bg-border sm:hidden" />
                
                <motion.div 
                  className="bg-accent text-accent-foreground p-3 rounded-full relative z-20 shadow-md ring-4 ring-background"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <ArrowRightLeft className="w-6 h-6" />
                </motion.div>
              </div>

              {/* Counter Box 2 - Changed from bg-secondary to bg-primary */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }} 
                whileInView={{ scale: 1, opacity: 1 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="min-w-[160px] p-6 bg-primary text-white rounded-2xl flex flex-col items-center justify-center shadow-xl shadow-primary/20"
              >
                <Bot className="w-10 h-10 mb-4 opacity-90 text-white" />
                <div className="text-white font-bold text-3xl sm:text-4xl leading-none tracking-tight flex items-baseline">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <span className="text-primary-foreground/90 text-xs sm:text-sm uppercase font-semibold mt-2 tracking-wider">Automations</span>
              </motion.div>

            </div>
            
            {/* Subtle background element */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05),transparent_70%)] pointer-events-none" />
          </div>
        </div>

        <div className="text-center">
          <AnimatedButton to="/services" variant="outline" size="lg" className="btn-touch">
            View Technology Stack
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}