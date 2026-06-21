import React from 'react';
import { client } from '@/lib/sanity/client';
import { blogListQuery, blogCountQuery } from '@/lib/sanity/queries';
import ScrollToTop from '@/components/ScrollToTop';
import { AnimatedBlogCard } from '@/components/AnimatedBlogCard';
import { Pagination } from '@/components/Pagination';

export const metadata = {
  title: 'Blog & Resources - PreciseFect',
  description: 'Expert insights on ERP implementation, automation strategies, and industry trends.',
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage({ searchParams }) {
  const page = parseInt(searchParams.page || '1', 10);
  const pageSize = 6;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const category = searchParams.category || null;

  // Fetch data in parallel
  const [articles, totalCount] = await Promise.all([
    client.fetch(blogListQuery, { start, end, category }),
    client.fetch(blogCountQuery, { category })
  ]);

  return (
    <>
      <ScrollToTop />
      

      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-20 bg-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 animate-gradient-shift" />
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Resources</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Expert insights on ERP implementation, automation strategies, and industry best practices.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-24 bg-background">
          <div className="section-container">
            {articles.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {articles.map((article, index) => (
                    <AnimatedBlogCard 
                      key={article.slug.current} 
                      title={article.title}
                      excerpt={article.excerpt}
                      category={article.category?.title}
                      readTime={`${article.readTime} min read`}
                      link={`/blog/${article.slug.current}`}
                      featuredImage={article.featuredImage}
                      index={index} 
                    />
                  ))}
                </div>
                
                <Pagination 
                  totalCount={totalCount} 
                  currentPage={page} 
                  pageSize={pageSize} 
                  basePath="/blog" 
                />
              </>
            ) : (
              <div className="text-center py-20 text-slate-500">
                <p className="text-xl">No articles found.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      
    </>
  );
}

