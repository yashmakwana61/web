'use client';

import React from 'react';
import Link from '@/components/Link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';

export function AnimatedServiceCard({ icon: Icon, title, description, link, metric, metricLabel, index = 0 }) {
  const { ref, isInView } = useScrollAnimation({ once: true, margin: "0px 0px -50px 0px" });
  const animatedMetric = useCounterAnimation(metric || 0, 2, 0.2, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="h-full relative group perspective-1000"
    >
      {/* Rotating Gradient Border Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      <Card className="relative flex flex-col h-full bg-card overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-x-2 group-hover:rotate-y-2">
        <CardHeader>
          <motion.div 
            className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-primary/20"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Icon className="h-7 w-7 text-primary" />
          </motion.div>
          <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">{title}</CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow space-y-4">
          <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
          
          {metric && (
            <div className="pt-4 border-t border-border/50">
              <div className="text-3xl font-bold text-foreground">
                {animatedMetric}<span className="text-primary">+</span>
              </div>
              <p className="text-sm font-medium text-muted-foreground mt-1 uppercase tracking-wider">{metricLabel}</p>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="mt-auto pt-6">
          <Button asChild variant="ghost" className="w-full sm:w-auto transition-all duration-300 hover:bg-primary/5 hover:text-primary group/btn">
            <Link to={link} className="flex items-center">
              Learn more
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}