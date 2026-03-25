'use client';

import React from 'react';

const insights = [
  {
    title: 'Flavor Preference Trends',
    description: 'Vanilla dominates Gen Z preferences, with berry flavors gaining momentum',
    stat: '68%',
    substat: 'prefer vanilla',
    color: 'from-primary',
  },
  {
    title: 'Sustainability Impact',
    description: '76% would switch brands for sustainable packaging alternatives',
    stat: '76%',
    substat: 'eco-conscious buyers',
    color: 'from-accent',
  },
  {
    title: 'Price Sensitivity',
    description: 'Mid-range products ($4-6) show highest conversion across demographics',
    stat: '42%',
    substat: 'optimal price range',
    color: 'from-secondary',
  },
  {
    title: 'Brand Loyalty Drivers',
    description: 'Taste consistency ranks higher than brand recognition for repeat purchases',
    stat: '81%',
    substat: 'taste-driven loyalty',
    color: 'from-primary',
  },
];

export default function SampleInsights() {
  return (
    <section id="insights" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Sample <span className="gradient-text">Consumer Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real data from our pilot study with 44 diverse students revealing market trends you won't find anywhere else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {insights.map((insight, index) => (
            <div
              key={index}
              className={`group relative card-glass p-8 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Key Finding</p>
                    <h3 className="text-xl font-bold text-foreground">{insight.title}</h3>
                  </div>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${insight.color} to-transparent flex flex-col items-center justify-center text-white`}>
                    <span className="text-2xl font-bold">{insight.stat}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{insight.description}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{insight.substat}</p>
              </div>

              {/* Hover background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${insight.color} to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10 rounded-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Chart visualization */}
        <div className="card-glass p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Product Preference Breakdown</h3>
          
          <div className="space-y-6">
            {[
              { label: 'Beverages', percentage: 87, color: 'from-primary' },
              { label: 'Snacks', percentage: 72, color: 'from-accent' },
              { label: 'Confectionery', percentage: 65, color: 'from-secondary' },
              { label: 'Dairy Products', percentage: 58, color: 'from-primary' },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground">{item.label}</span>
                  <span className="text-accent font-bold">{item.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} to-transparent rounded-full transition-all duration-700`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
