'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { urlFor } from '@/lib/sanity/image';
import { CustomPortableText } from '@/lib/sanity/portable-text';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, ArrowLeft } from 'lucide-react';
import Link from '@/components/Link';

export default function DynamicCaseStudyPageClient({ data }) {
  if (!data) return null;

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen pt-24 pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Link to="/case-studies" className="inline-flex items-center text-primary font-medium hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
          </Link>
          
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {data.industryLabel || data.industry?.title || 'Case Study'}
              </Badge>
              {data.service && (
                <Badge variant="outline" className="text-slate-600 border-slate-300">
                  {data.service.title}
                </Badge>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {data.title}
            </h1>
            {data.excerpt && (
              <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
                {data.excerpt}
              </p>
            )}
          </header>

          {data.featuredImage && (
            <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src={urlFor(data.featuredImage).width(1200).height(600).url()}
                alt={data.featuredImage.alt || data.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {data.challenge && (
                <section>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">The Challenge</h2>
                  <p className="text-lg text-slate-700 leading-relaxed">{data.challenge}</p>
                </section>
              )}
              
              {data.solution && (
                <section>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">The Solution</h2>
                  <p className="text-lg text-slate-700 leading-relaxed">{data.solution}</p>
                </section>
              )}

              {data.body && (
                <section className="prose prose-lg prose-slate prose-emerald max-w-none">
                  <CustomPortableText value={data.body} />
                </section>
              )}
            </div>

            <div className="space-y-8">
              {data.metrics && (
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-5xl font-extrabold text-primary mb-2">{data.metrics}</h3>
                  <p className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Key Result</p>
                </div>
              )}

              {data.results && data.results.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Other Results</h3>
                  <ul className="space-y-6">
                    {data.results.map((result, idx) => (
                      <li key={idx}>
                        <span className="block text-3xl font-bold text-slate-900 mb-1">{result.metric}</span>
                        <span className="block text-sm text-slate-600">{result.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {data.testimonial && data.testimonial.quote && (
                <div className="bg-slate-900 text-white rounded-xl p-8 shadow-xl">
                  <p className="text-lg font-medium italic leading-relaxed mb-6">"{data.testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    {data.testimonial.avatar && (
                      <img
                        src={urlFor(data.testimonial.avatar).width(48).height(48).url()}
                        alt={data.testimonial.author}
                        className="w-12 h-12 rounded-full border-2 border-white/20"
                      />
                    )}
                    <div>
                      <p className="font-bold">{data.testimonial.author}</p>
                      <p className="text-sm text-slate-400">
                        {data.testimonial.role} {data.testimonial.company ? `at ${data.testimonial.company}` : ''}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
