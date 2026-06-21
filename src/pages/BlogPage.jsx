'use client';

import React from 'react';

import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { AnimatedBlogCard } from '@/components/AnimatedBlogCard.jsx';

function BlogPage() {
  const articles = [
    {
      title: 'How to choose the right ERP system for your school',
      excerpt: 'A comprehensive guide to evaluating ERP platforms for educational institutions, covering key features, implementation considerations, and total cost of ownership.',
      category: 'Education',
      readTime: '8 min read',
      link: '/blog/choosing-erp-for-schools',
      featured: true,
    },
    {
      title: 'Automating patient workflows in healthcare',
      excerpt: 'Discover how automation can reduce administrative burden and improve patient care in hospitals and clinics.',
      category: 'Healthcare',
      readTime: '6 min read',
      link: '/blog/patient-workflow-automation',
    },
    {
      title: 'Manufacturing ERP trends in 2026',
      excerpt: 'The latest trends in manufacturing ERP including AI-powered production planning and IoT integration.',
      category: 'Manufacturing',
      readTime: '7 min read',
      link: '/blog/manufacturing-erp-trends',
    },
    {
      title: 'RPA vs AI automation: Which is right for you?',
      excerpt: 'Understanding the differences between robotic process automation and AI-powered automation to make the right choice.',
      category: 'Automation',
      readTime: '5 min read',
      link: '/blog/rpa-vs-ai-automation',
    },
  ];

  return (
    <>
      

      <Header />

      <main>
        {/* Hero */}
        <section className="py-20 bg-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 animate-gradient-shift" />
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="mb-6">Blog & resources</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Expert insights on ERP implementation, automation strategies, and industry best practices.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-24 bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {articles.map((article, index) => (
                <AnimatedBlogCard key={article.link} {...article} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default BlogPage;