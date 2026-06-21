'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Check, Star } from 'lucide-react';
import Link from '@/components/Link';
import { urlFor } from '@/lib/sanity/image';
import { CustomPortableText } from '@/lib/sanity/portable-text';
import { Button } from '@/components/ui/button';

// --- SUB-COMPONENTS FOR PAGE BUILDER ---

// 1. Hero Section
export function HeroBlock({ headline, subheadline, backgroundImage, backgroundImageUrl, ctaPrimary, ctaSecondary, badges, layout }) {
  const bgImageSrc = backgroundImage ? urlFor(backgroundImage).url() : (backgroundImageUrl || null);
  const isCentered = layout === 'centered';
  const isSplit = layout === 'split';

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-slate-50 border-b border-gray-100 min-h-[70vh] flex items-center">
      {bgImageSrc && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.05] z-0" 
          style={{ backgroundImage: `url(${bgImageSrc})` }} 
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-0" />
      <div className="section-container relative z-10 w-full">
        <div className={`grid grid-cols-1 ${isSplit ? 'lg:grid-cols-2' : ''} gap-12 items-center text-left ${isCentered ? 'text-center max-w-4xl mx-auto' : ''}`}>
          
          <div>
            {/* Badges */}
            {badges && badges.length > 0 && (
              <div className={`flex flex-wrap gap-2 mb-6 ${isCentered ? 'justify-center' : ''}`}>
                {badges.map((badge, idx) => (
                  <span 
                    key={idx} 
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${badge.color || 'bg-primary/10 text-primary'}`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            )}

            {/* Headline & Subheadline */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              {headline}
            </h1>
            {subheadline && (
              <p className={`text-lg md:text-xl text-slate-600 leading-relaxed mb-8 ${isCentered ? 'mx-auto' : ''} max-w-2xl`}>
                {subheadline}
              </p>
            )}

            {/* CTA Buttons */}
            <div className={`flex flex-wrap gap-4 ${isCentered ? 'justify-center' : ''}`}>
              {ctaPrimary && ctaPrimary.label && (
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/95 px-8 font-semibold shadow-md">
                  <Link to={ctaPrimary.href}>{ctaPrimary.label}</Link>
                </Button>
              )}
              {ctaSecondary && ctaSecondary.label && (
                <Button asChild size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 font-semibold">
                  <Link to={ctaSecondary.href}>{ctaSecondary.label}</Link>
                </Button>
              )}
            </div>
          </div>

          {isSplit && bgImageSrc && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:block rounded-2xl overflow-hidden border border-slate-200/50 shadow-2xl aspect-[4/3] bg-muted"
            >
              <img 
                src={bgImageSrc} 
                alt={headline} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}

// 2. Feature Grid Block
export function FeatureGridBlock({ heading, subheading, features, columns }) {
  const colClass = columns === 2 ? 'md:grid-cols-2' : columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="py-20 md:py-24 bg-white border-b border-gray-100">
      <div className="section-container">
        {(heading || subheading) && (
          <div className="max-w-3xl mx-auto text-center mb-16">
            {heading && <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{heading}</h2>}
            {subheading && <p className="text-lg text-slate-600 leading-relaxed">{subheading}</p>}
          </div>
        )}
        <div className={`grid grid-cols-1 ${colClass} gap-8 max-w-7xl mx-auto`}>
          {features?.map((feat, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feat.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm flex-1">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 3. Process Timeline Block
export function ProcessTimelineBlock({ heading, subheading, steps }) {
  return (
    <section className="py-20 md:py-24 bg-slate-50 border-b border-gray-100">
      <div className="section-container">
        {(heading || subheading) && (
          <div className="max-w-3xl mx-auto text-center mb-16">
            {heading && <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{heading}</h2>}
            {subheading && <p className="text-lg text-slate-600 leading-relaxed">{subheading}</p>}
          </div>
        )}
        <div className="max-w-4xl mx-auto relative pl-8 border-l border-primary/20 space-y-12">
          {steps?.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-white border-4 border-primary flex items-center justify-center transition-transform group-hover:scale-110" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1 block">Step {idx + 1}</span>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 4. FAQ Section Block
export function FaqSectionBlock({ heading, items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-24 bg-white border-b border-gray-100">
      <div className="section-container max-w-4xl">
        {heading && <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">{heading}</h2>}
        <div className="space-y-4">
          {items?.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
                <button
                  onClick={() => toggle(idx)}
                  className="flex items-center justify-between w-full p-6 text-left font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-t border-slate-200 bg-white"
                    >
                      <div className="p-6 text-slate-600 text-sm leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 5. Call to Action (CTA) Block
export function CtaBlock({ heading, description, ctaPrimary, ctaSecondary, style }) {
  const isPrimary = style === 'primary';
  const isMuted = style === 'muted';
  
  const bgClass = isPrimary 
    ? 'bg-primary text-white' 
    : isMuted 
      ? 'bg-slate-100 text-slate-900 border border-slate-200/50' 
      : 'bg-white text-slate-900 border border-slate-200';

  const titleClass = isPrimary ? 'text-white' : 'text-slate-900';
  const descClass = isPrimary ? 'text-white/80' : 'text-slate-600';

  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-100">
      <div className="section-container">
        <div className={`max-w-5xl mx-auto rounded-3xl p-8 md:p-16 text-center ${bgClass} shadow-xl`}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleClass}`}>{heading}</h2>
          {description && <p className={`text-lg mb-8 max-w-2xl mx-auto leading-relaxed ${descClass}`}>{description}</p>}
          <div className="flex flex-wrap justify-center gap-4">
            {ctaPrimary && ctaPrimary.label && (
              <Button asChild size="lg" className={isPrimary ? 'bg-white text-primary hover:bg-slate-100 shadow-md font-semibold' : 'bg-primary text-white hover:bg-primary/95 font-semibold'}>
                <Link to={ctaPrimary.href}>{ctaPrimary.label}</Link>
              </Button>
            )}
            {ctaSecondary && ctaSecondary.label && (
              <Button asChild size="lg" variant="outline" className={isPrimary ? 'border-white/30 text-white hover:bg-white/10 font-semibold' : 'border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold'}>
                <Link to={ctaSecondary.href}>{ctaSecondary.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// 6. Testimonial Section Block
export function TestimonialSectionBlock({ heading, testimonials }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-20 md:py-24 bg-slate-50 border-b border-gray-100 overflow-hidden">
      <div className="section-container max-w-5xl">
        {heading && <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">{heading}</h2>}
        <div className="relative bg-white border border-slate-200/60 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col items-center text-center">
          <Star className="w-10 h-10 text-primary/30 mb-8 fill-primary/10" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              <p className="text-xl md:text-2xl text-slate-800 italic leading-relaxed mb-8 max-w-3xl">
                "{testimonials[activeIdx].quote}"
              </p>
              <div className="flex flex-col items-center">
                {testimonials[activeIdx].avatar && (
                  <img
                    src={urlFor(testimonials[activeIdx].avatar).url()}
                    alt={testimonials[activeIdx].author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary mb-3 shadow-md"
                  />
                )}
                <h4 className="font-bold text-slate-900 text-lg">{testimonials[activeIdx].author}</h4>
                <p className="text-sm text-slate-500">
                  {testimonials[activeIdx].role && testimonials[activeIdx].role}
                  {testimonials[activeIdx].company && ` at ${testimonials[activeIdx].company}`}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          {testimonials.length > 1 && (
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeIdx ? 'bg-primary w-6' : 'bg-slate-300 hover:bg-slate-400'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// 7. Metrics Section Block
export function MetricsSectionBlock({ heading, metrics }) {
  return (
    <section className="py-20 md:py-24 bg-white border-b border-gray-100">
      <div className="section-container">
        {heading && <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">{heading}</h2>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {metrics?.map((metric, idx) => (
            <div 
              key={idx} 
              className="text-center p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <span className="text-4xl md:text-5xl font-extrabold text-primary block mb-2">{metric.value}</span>
              <span className="text-lg font-semibold text-slate-900 block mb-1">{metric.label}</span>
              {metric.description && <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">{metric.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 8. Rich Text Section Block
export function RichTextBlock({ heading, body }) {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-100">
      <div className="section-container max-w-3xl">
        {heading && <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">{heading}</h2>}
        <div className="prose prose-slate prose-emerald max-w-none">
          <CustomPortableText value={body} />
        </div>
      </div>
    </section>
  );
}


// --- MAIN PAGE BUILDER MAPPER ---

const SECTION_MAP = {
  'hero': HeroBlock,
  'featureGrid': FeatureGridBlock,
  'processTimeline': ProcessTimelineBlock,
  'faqSection': FaqSectionBlock,
  'ctaSection': CtaBlock,
  'testimonialSection': TestimonialSectionBlock,
  'metricsSection': MetricsSectionBlock,
  'richTextSection': RichTextBlock,
};

export default function PageBuilder({ sections }) {
  if (!sections || sections.length === 0) return null;

  return (
    <>
      {sections.map((section, idx) => {
        const Component = SECTION_MAP[section._type];
        if (!Component) {
          console.warn(`No frontend renderer found for section type: ${section._type}`);
          return null;
        }
        return <Component key={section._key || idx} {...section} />;
      })}
    </>
  );
}
