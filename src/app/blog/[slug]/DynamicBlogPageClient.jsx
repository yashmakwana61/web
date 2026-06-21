'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { urlFor } from '@/lib/sanity/image';
import { CustomPortableText } from '@/lib/sanity/portable-text';

export default function DynamicBlogPageClient({ data }) {
  if (!data) return null;

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen pt-24 pb-16 bg-slate-50">
        <article className="max-w-4xl mx-auto px-6">
          <header className="mb-12 text-center">
            {data.category && (
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                {data.category.title}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {data.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-slate-500 text-sm">
              {data.author && (
                <div className="flex items-center gap-2">
                  {data.author.avatar && (
                    <img
                      src={urlFor(data.author.avatar).width(40).height(40).url()}
                      alt={data.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  )}
                  <span className="font-medium text-slate-900">{data.author.name}</span>
                </div>
              )}
              {data.publishedAt && (
                <span>{new Date(data.publishedAt).toLocaleDateString()}</span>
              )}
            </div>
          </header>

          {data.featuredImage && (
            <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={urlFor(data.featuredImage).width(1200).height(600).url()}
                alt={data.featuredImage.alt || data.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <div className="prose prose-lg prose-slate prose-emerald mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
            {data.body ? (
              <CustomPortableText value={data.body} />
            ) : (
              <p>No content available.</p>
            )}
          </div>
          
          {data.tags && data.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2 justify-center">
              {data.tags.map(tag => (
                <span key={tag.slug?.current || tag.title} className="px-4 py-1.5 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">
                  #{tag.title}
                </span>
              ))}
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
