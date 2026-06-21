'use client';

import React from 'react';

export default function PageSkeleton() {
  return (
    <div className="w-full animate-pulse space-y-16 py-12">
      {/* Hero Skeleton */}
      <div className="section-container max-w-4xl space-y-6 pt-16">
        <div className="h-4 w-28 bg-slate-200 rounded-full mx-auto" />
        <div className="h-12 w-3/4 bg-slate-200 rounded-2xl mx-auto" />
        <div className="h-6 w-1/2 bg-slate-200 rounded-xl mx-auto" />
        <div className="flex justify-center gap-4 pt-4">
          <div className="h-12 w-32 bg-slate-200 rounded-xl" />
          <div className="h-12 w-32 bg-slate-200 rounded-xl" />
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="section-container max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-8 border border-slate-100 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-200" />
              <div className="h-6 w-2/3 bg-slate-200 rounded-lg" />
              <div className="h-4 w-full bg-slate-200 rounded-md" />
              <div className="h-4 w-5/6 bg-slate-200 rounded-md" />
            </div>
          ))}
        </div>
      </div>

      {/* Text Block Skeleton */}
      <div className="section-container max-w-3xl py-12 space-y-4">
        <div className="h-8 w-1/3 bg-slate-200 rounded-lg" />
        <div className="h-4 w-full bg-slate-200 rounded-md" />
        <div className="h-4 w-full bg-slate-200 rounded-md" />
        <div className="h-4 w-5/6 bg-slate-200 rounded-md" />
      </div>
    </div>
  );
}
