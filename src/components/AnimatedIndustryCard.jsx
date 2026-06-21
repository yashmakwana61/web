'use client';

import React from 'react';
import Link from '@/components/Link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function AnimatedIndustryCard({ icon: Icon, title, benefits, link, featured = false, image, index = 0 }) {
  const { ref, isInView } = useScrollAnimation({ once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="h-full relative group"
    >
      <Card
        className={`relative flex flex-col h-full overflow-hidden transition-all duration-500 border ${
          featured ? 'bg-primary text-primary-foreground border-transparent' : 'bg-card border-border'
        } group-hover:shadow-xl group-hover:shadow-primary/10`}
      >
        {/* Animated Glow Border */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
        
        {/* Image Background for Visual Depth if provided */}
        {image && (
          <div className="absolute inset-0 z-0 overflow-hidden opacity-10 mix-blend-luminosity">
            <motion.img 
              src={image} 
              alt="" 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        )}
        
        <CardHeader className="relative z-10">
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
              featured ? 'bg-white/20' : 'bg-secondary/10'
            }`}
          >
            <Icon className={`h-7 w-7 ${featured ? 'text-white' : 'text-secondary'}`} />
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </CardHeader>
        
        <CardContent className="relative z-10 flex-grow flex flex-col justify-between space-y-6">
          <ul className="space-y-3">
            {benefits.map((benefit, i) => (
              <motion.li 
                key={i} 
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.3 }}
              >
                <span className={`mr-3 mt-1 flex-shrink-0 ${featured ? 'text-white/80' : 'text-primary'}`}>•</span>
                <span className={`text-sm leading-relaxed ${featured ? 'text-white/90' : 'text-muted-foreground group-hover:text-foreground transition-colors'}`}>{benefit}</span>
              </motion.li>
            ))}
          </ul>
          
          <div className="pt-4 overflow-hidden">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              className="w-full"
            >
              <Button
                asChild
                variant={featured ? 'secondary' : 'outline'}
                className={`w-full group/btn transition-all duration-300 ${featured ? 'hover:bg-white hover:text-primary' : 'hover:bg-primary hover:text-primary-foreground'}`}
              >
                <Link to={link} className="flex items-center justify-center">
                  Explore solutions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}