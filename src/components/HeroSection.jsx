'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, BookOpen, HeartPulse, Factory, ArrowRight, MessageCircle } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';
import { AnimatedBadge } from './AnimatedBadge';

export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image with Parallax (Desktop) / Static (Mobile) */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0 hidden md:block"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white" />
      </motion.div>

      {/* Static Background for Mobile */}
      <div className="absolute inset-0 z-0 md:hidden bg-gradient-to-b from-gray-50 to-white" />

      {/* Animated Gradient Mesh */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[20rem] md:w-[40rem] h-[20rem] md:h-[40rem] bg-primary/30 rounded-full blur-[80px] md:blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[15rem] md:w-[30rem] h-[15rem] md:h-[30rem] bg-blue-400/20 rounded-full blur-[60px] md:blur-[80px]" 
        />
      </div>

      <div className="section-container relative z-20 w-full pt-28 pb-16 md:pt-32 md:pb-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8"
        >
          <AnimatedBadge variant="secondary" delay={0.2} className="text-xs md:text-sm bg-primary/10 text-primary border-primary/20 py-1 px-3"><BookOpen className="w-3 h-3 mr-1 inline" /> Education</AnimatedBadge>
          <AnimatedBadge variant="secondary" delay={0.3} className="text-xs md:text-sm bg-blue-500/10 text-blue-600 border-blue-500/20 py-1 px-3"><HeartPulse className="w-3 h-3 mr-1 inline" /> Healthcare</AnimatedBadge>
          <AnimatedBadge variant="secondary" delay={0.4} className="text-xs md:text-sm bg-orange-500/10 text-orange-600 border-orange-500/20 py-1 px-3"><Factory className="w-3 h-3 mr-1 inline" /> Manufacturing</AnimatedBadge>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#1F2937] text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 md:mb-6 max-w-5xl px-2"
        >
          Precision with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Perfection</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-600 text-base md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl px-4"
        >
          Enterprise ERP & Intelligent Automation Solutions tailored for modern organizations.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center px-4"
        >
          <AnimatedButton to="/contact" size="lg" className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base btn-touch bg-primary text-white hover:bg-primary/90" icon={ArrowRight}>
            Book a Consultation
          </AnimatedButton>
          <a 
            href="https://wa.me/+919213487967" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base font-medium rounded-lg border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors btn-touch"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
        <span className="text-xs md:text-sm font-medium tracking-widest uppercase hidden sm:block">Scroll</span>
        <ArrowDown className="w-4 h-4 md:w-5 md:h-5 animate-bounce-slow" />
      </motion.div>
    </section>
  );
}