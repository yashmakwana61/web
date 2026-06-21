'use client';

import React from 'react';
import Link from '@/components/Link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function AnimatedBlogCard({ title, excerpt, category, readTime, link, featured = false, index = 0 }) {
  const { ref, isInView } = useScrollAnimation({ once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`h-full group ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <Card className="flex flex-col h-full bg-card overflow-hidden border-border transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20">
        <CardHeader className="pb-4 relative">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="bg-background group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              {category}
            </Badge>
            <div className="flex items-center text-sm font-medium text-muted-foreground group-hover:text-secondary transition-colors duration-300">
              <Clock className="h-4 w-4 mr-1.5" />
              {readTime}
            </div>
          </div>
          
          <Link to={link} className="block mt-2">
            <CardTitle className={`leading-tight transition-colors duration-300 group-hover:text-primary ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
              {title}
            </CardTitle>
          </Link>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <CardDescription className={`leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 ${featured ? 'text-base md:text-lg' : 'text-sm'}`}>
            {excerpt}
          </CardDescription>
          
          <div className="mt-6 pt-4 border-t border-border flex items-center text-sm font-medium text-primary opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            Read Article
            <motion.span 
              className="ml-2 inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              →
            </motion.span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}