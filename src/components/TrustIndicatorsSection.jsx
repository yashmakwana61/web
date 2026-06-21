'use client';

import React from 'react';
import AnimatedCounter from './AnimatedCounter.jsx';
import { AnimatedDivider } from './AnimatedDivider.jsx';
import { motion } from 'framer-motion';

export function TrustIndicatorsSection() {
  const logos = [
    { name: "EduCorp", text: "EduCorp" },
    { name: "HealthPlus", text: "HealthPlus" },
    { name: "BuildTech", text: "BuildTech" },
    { name: "LearnSystem", text: "LearnSystem" },
    { name: "MediCare", text: "Meridian Labs" },
    { name: "FactoryPro", text: "Elm & Oak" },
    { name: "UniGlobal", text: "Coastal Roasters" },
    { name: "CareNetwork", text: "Nexus Health" },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background border-b overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 md:gap-8 mb-12 md:mb-16 divide-x divide-border/50">
          <div className="text-center px-2 md:px-4">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2">
              <AnimatedCounter end={500} suffix="+" />
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">Implementations</p>
          </div>
          <div className="text-center px-2 md:px-4">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2">
              <AnimatedCounter end={98} suffix="%" />
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">Client Satisfaction</p>
          </div>
          <div className="text-center px-2 md:px-4 border-l-0 lg:border-l border-t lg:border-t-0 pt-10 lg:pt-0 mt-2 lg:mt-0">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2">
              <AnimatedCounter end={15} suffix="+" />
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">Years Experience</p>
          </div>
          <div className="text-center px-2 md:px-4 border-t lg:border-t-0 pt-10 lg:pt-0 mt-2 lg:mt-0">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2 flex justify-center items-center">
              <span className="text-primary mr-1">$</span>
              <AnimatedCounter end={2.4} suffix="B+" decimals={1} />
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">Client ROI Generated</p>
          </div>
        </div>

        <AnimatedDivider />

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6 md:mb-10 px-4">Trusted by Leading Organizations Worldwide</p>
          
          <div className="relative flex overflow-x-hidden group">
            <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />
            
            <motion.div 
              className="flex space-x-8 md:space-x-12 whitespace-nowrap items-center py-2 md:py-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 flex items-center justify-center px-4">
                  <span className="text-xl sm:text-2xl font-black font-serif tracking-tighter text-foreground">{logo.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}