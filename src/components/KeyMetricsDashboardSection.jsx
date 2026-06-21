'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading.jsx';
import AnimatedCounter from './AnimatedCounter.jsx';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { AnimatedButton } from './AnimatedButton.jsx';
import { AnimatedBarChart } from './charts/AnimatedBarChart.jsx';

const roiData = [
  { year: '2021', roi: 120 }, { year: '2022', roi: 180 }, { year: '2023', roi: 250 },
  { year: '2024', roi: 340 }, { year: '2025', roi: 480 }, { year: '2026', roi: 650 },
];

const comparisonData = [
  { name: 'Education', Before: 40, After: 92 },
  { name: 'Healthcare', Before: 35, After: 88 },
  { name: 'Manufacturing', Before: 45, After: 95 },
];

export function KeyMetricsDashboardSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="section-container">
        <SectionHeading 
          headline="Real Impact, Real Numbers" 
          subheadline="Proven Results Across All Industries"
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {[
            { value: 500, suffix: "+", label: "Deployments" },
            { value: 98, suffix: "%", label: "Satisfaction" },
            { value: 2.4, prefix: "$", suffix: "B+", decimals: 1, label: "Total ROI" },
            { value: 15, suffix: "+", label: "Years Exp" },
            { value: 87, suffix: "%", label: "Improvement" },
            { value: 24, suffix: "/7", label: "Support" },
          ].map((metric, i) => (
            <div key={i} className="bg-card p-4 md:p-6 rounded-2xl border text-center shadow-sm">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">
                <AnimatedCounter end={metric.value} prefix={metric.prefix} suffix={metric.suffix} decimals={metric.decimals} />
              </h3>
              <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
          <div className="bg-card p-5 md:p-8 rounded-2xl border shadow-sm h-[350px] md:h-[420px] flex flex-col">
            <div className="text-center mb-6">
              <h4 className="font-semibold text-base md:text-lg text-foreground">ROI Growth Trajectory</h4>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Cumulative returns in millions (USD)</p>
            </div>
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={roiData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--foreground))', fontWeight: 500 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: '1px solid hsl(var(--border))', fontSize: '13px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} 
                    itemStyle={{ fontWeight: 600, color: 'hsl(var(--primary))' }}
                  />
                  <Line type="monotone" dataKey="roi" name="ROI ($M)" stroke="hsl(var(--primary))" strokeWidth={4} dot={{ r: 5, fill: 'hsl(var(--background))', strokeWidth: 2 }} activeDot={{ r: 8, strokeWidth: 0 }} isAnimationActive={true} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-gradient-to-b from-card to-muted/20 p-5 md:p-8 rounded-2xl border shadow-sm h-[350px] md:h-[420px] flex flex-col relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            
            <div className="text-center mb-2 relative z-10">
              <h4 className="font-semibold text-base md:text-lg text-foreground">Process Efficiency</h4>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Efficiency % Before vs After Implementation</p>
            </div>
            <div className="flex-1 min-h-0 relative z-10">
              <AnimatedBarChart 
                data={comparisonData} 
                showLabels={true}
                yAxisLabel="Efficiency %"
                gradients={[
                  { id: 'colorAfter', start: '#10B981', end: '#059669' }
                ]}
                bars={[
                  { 
                    key: 'Before', 
                    name: 'Before Implementation', 
                    color: '#E5E7EB' 
                  },
                  { 
                    key: 'After', 
                    name: 'After Implementation', 
                    color: 'url(#colorAfter)',
                    glow: true,
                    glowColor: 'rgba(16, 185, 129, 0.25)'
                  }
                ]}
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <AnimatedButton to="/contact" size="lg" className="w-full sm:w-auto btn-touch shadow-lg shadow-primary/20">
            Get Your ROI Estimate
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}