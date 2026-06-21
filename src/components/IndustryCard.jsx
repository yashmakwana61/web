'use client';

import React from 'react';
import Link from '@/components/Link';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function IndustryCard({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  diagram, 
  metrics, 
  ctaText, 
  link
}) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const lineVariants = {
    hidden: { width: "0%" },
    visible: { width: "100%", transition: { duration: 1, ease: "easeInOut" } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="group flex flex-col h-full bg-white border border-[#E5E7EB] rounded-[12px] md:rounded-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out relative overflow-hidden industry-card border-t-[3px] border-t-[#10B981] p-[16px] md:p-[20px] lg:p-[24px]"
    >
      {/* Subtle Background Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* 1. HEADER SECTION */}
      <motion.div variants={itemVariants} className="relative z-10 flex flex-col items-start w-full">
        <div className="flex items-center justify-center p-[12px] rounded-[12px] mb-[12px] transition-transform duration-300 group-hover:scale-110 w-[48px] h-[48px] md:w-[56px] md:h-[56px] lg:w-[64px] lg:h-[64px] bg-[#F0FDF4]">
          <Icon className="w-full h-full text-[#10B981]" />
        </div>
        
        <div className="relative mb-[16px] pb-2 w-full">
          <h3 className="industry-card-title font-bold text-foreground m-0 text-[20px] md:text-[22px] lg:text-[24px] leading-tight">
            {title}
          </h3>
          <motion.div 
            variants={lineVariants}
            className="absolute bottom-0 left-0 h-0.5 rounded-full bg-[#10B981] opacity-30" 
          />
        </div>
      </motion.div>

      {/* 2. DESCRIPTION SECTION */}
      <motion.div variants={itemVariants} className="relative z-10 flex flex-col">
        <p className="industry-card-desc text-[#6B7280] mb-[20px] text-[14px] md:text-[15px] lg:text-[16px] leading-[1.6]">
          {description}
        </p>
      </motion.div>

      {/* 3. FEATURES LIST SECTION */}
      <motion.div variants={itemVariants} className="relative z-10">
        <ul className="flex flex-col mb-[24px]">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-[10px] py-[8px] group/feature">
              <CheckCircle2 className="w-[18px] h-[18px] text-[#10B981] mt-0.5 flex-shrink-0" />
              <span className="industry-card-desc text-[#6B7280] group-hover/feature:text-[#10B981] transition-colors duration-300 text-[14px] md:text-[15px] lg:text-[16px] leading-snug">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* 4. DIAGRAM SECTION */}
      <motion.div 
        variants={itemVariants} 
        className="relative z-10 w-full h-[200px] md:h-[250px] lg:h-[300px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-[8px] mb-[24px] p-[16px] flex flex-col items-center justify-between overflow-hidden group/diagram"
      >
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        
        {diagram.steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className="relative z-10 bg-white px-4 py-2 md:py-3 rounded-lg border border-[#E5E7EB] shadow-sm text-xs md:text-sm font-medium flex items-center justify-center min-w-[120px] transition-colors group-hover/diagram:border-[#10B981] group-hover/diagram:text-[#10B981]">
              {step}
            </div>
            
            {idx < diagram.steps.length - 1 && (
              <div className="relative w-0.5 flex-grow bg-[#E5E7EB] my-1 flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-muted-foreground rotate-90 bg-white rounded-full" />
                
                {/* Animated Flow Line (desktop only) */}
                <div className="absolute top-0 w-0.5 h-full hidden lg:block overflow-hidden rounded-full">
                  <motion.div 
                    className="w-full h-1/2 bg-[#10B981]"
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: idx * 0.5, ease: "linear" }}
                  />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </motion.div>

      <div className="mt-auto flex flex-col">
        {/* METRICS SECTION */}
        {metrics && metrics.length > 0 && (
          <motion.div variants={itemVariants} className="relative z-10 grid grid-cols-2 gap-3 md:gap-4 mb-[24px] pt-6 border-t border-border/60">
            {metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex items-center justify-center rounded-lg w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white border border-[#E5E7EB] shadow-sm text-[#10B981]">
                    <metric.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className="text-xl md:text-2xl font-bold font-variant-numeric tabular-nums text-foreground leading-none">
                    {metric.value}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-tight ml-10 md:ml-12">
                  {metric.label}
                </span>
              </div>
            ))}
          </motion.div>
        )}

        {/* 5. CTA BUTTON SECTION */}
        <motion.div variants={itemVariants} className="relative z-10 w-full mt-[24px]">
          <Link 
            to={link}
            className="flex items-center justify-center w-full h-[44px] lg:h-[48px] px-[16px] py-[12px] rounded-[8px] font-[600] transition-all duration-300 border border-[#10B981] bg-background text-foreground hover:bg-[#10B981] hover:text-white hover:border-transparent hover:shadow-md group/btn"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default IndustryCard;