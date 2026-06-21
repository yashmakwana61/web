'use client';

import React from 'react';
import PageBuilder from '@/components/PageBuilder';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function DynamicUseCasePageClient({ data }) {
  if (!data) return null;

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen pt-20">
        <PageBuilder sections={data.pageBuilder || []} />
      </main>
      <Footer />
    </>
  );
}
