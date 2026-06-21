'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Search, PenTool, Rocket, Zap, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedButton } from './AnimatedButton';

const phases = [
  { icon: Search, title: "PHASE 1: DISCOVER", time: "Week 1-2", desc: "Deep dive into your operations.", items: ["Process Mapping", "Gap Analysis", "ROI Estimation"] },
  { icon: PenTool, title: "PHASE 2: DESIGN", time: "Week 3-4", desc: "Architecting the perfect solution.", items: ["System Blueprint", "Workflow Design", "Prototyping"] },
  { icon: Rocket, title: "PHASE 3: IMPLEMENT", time: "Week 5-8", desc: "Building and deploying safely.", items: ["Development", "Data Migration", "UAT Testing"] },
  { icon: Zap, title: "PHASE 4: OPTIMIZE", time: "Ongoing", desc: "Ensuring long-term success.", items: ["User Training", "Performance Tuning", "24/7 Support"] },
];

export function ProcessMethodologySection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-foreground text-background overflow-hidden">
      <div className="section-container">
        <SectionHeading 
          headline="4-Phase Approach to Guaranteed Success" 
          subheadline="Our Proven Implementation Process"
          className="text-white"
        />

        <div className="relative mt-12 md:mt-16 lg:mt-20 mb-12 lg:mb-16 pl-6 lg:pl-0 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
            {phases.map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-start lg:items-center text-left lg:text-center relative z-20"
              >
                {/* Node dot for Mobile/Tablet */}
                <div className="absolute top-6 -left-6 w-2.5 h-2.5 rounded-full bg-primary lg:hidden z-20" />

                <div className="relative z-20 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 md:mb-6 shadow-[0_0_20px_rgba(255,255,255,0.05)] text-primary">
                  <phase.icon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                  
                  {/* Desktop Arrow Indicator */}
                  {i < phases.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-12 xl:-right-16 w-6 h-6 text-white/20 -translate-y-1/2">
                      <ChevronRight className="w-full h-full" />
                    </div>
                  )}
                </div>
                
                <div className="bg-primary/20 text-primary-foreground text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full mb-3 md:mb-4">
                  {phase.time}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{phase.title}</h3>
                <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6 max-w-sm">{phase.desc}</p>
                <ul className="space-y-2 text-xs md:text-sm text-gray-300 w-full max-w-sm">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-center lg:justify-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> 
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <AnimatedButton to="/contact" size="lg" className="w-full sm:w-auto bg-white text-foreground hover:bg-white/90 btn-touch">
            Start Your Journey
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}