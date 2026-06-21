'use client';

import React from 'react';
import Link from '@/components/Link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function AnimatedCaseStudyCard({ title, industry, excerpt, metrics, link, index = 0 }) {
  const { ref, isInView } = useScrollAnimation({ once: true, margin: "0px 0px -50px 0px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="h-full group"
    >
      <Card className="flex flex-col h-full bg-card overflow-hidden border-border transition-all duration-500 hover:shadow-xl hover:border-primary/30">
        <CardHeader className="relative pb-4">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="transition-colors group-hover:bg-primary/10 group-hover:text-primary">{industry}</Badge>
            {metrics && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.4 + (index * 0.1), type: "spring" }}
                className="flex items-center text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full"
              >
                <TrendingUp className="h-4 w-4 mr-1.5" />
                {metrics}
              </motion.div>
            )}
          </div>
          <CardTitle className="text-xl leading-tight transition-colors duration-300 group-hover:text-primary">{title}</CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow flex flex-col justify-between">
          <CardDescription className="text-base leading-relaxed mb-6">
            {excerpt}
          </CardDescription>
          
          <Button asChild variant="outline" className="w-full group/btn transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary">
            <Link to={link} className="flex items-center justify-center">
              Read full study
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}