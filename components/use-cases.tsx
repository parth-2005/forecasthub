'use client';

import React from 'react';

const useCases = [
  {
    title: 'Product Testing & Validation',
    description: 'Test new products with real consumers before market launch. Gather authentic feedback on taste, packaging, and positioning.',
    icon: '🧪',
    metrics: ['Reduce launch risk by 60%', 'Validate PMF in weeks'],
  },
  {
    title: 'Flavor Preference Analysis',
    description: 'Identify winning flavor profiles, understand taste preferences by demographic, and predict seasonal trends.',
    icon: '🍬',
    metrics: ['Discover trends early', 'Segment by generation'],
  },
  {
    title: 'Brand Perception Tracking',
    description: 'Monitor brand sentiment in real-time, track competitor positioning, and identify messaging opportunities.',
    icon: '📢',
    metrics: ['Real-time sentiment', 'Competitive intelligence'],
  },
  {
    title: 'Market Segmentation',
    description: 'Understand generational differences, identify niche segments, and personalize products for your target audience.',
    icon: '🎯',
    metrics: ['Demographic insights', 'Behavioral patterns'],
  },
];

export default function UseCases() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-muted/20 to-background">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Real Use Cases, Real <span className="gradient-text">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            See how leading FMCG brands leverage campus ambassador insights to drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative card-glass p-8 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{useCase.description}</p>
                
                <div className="space-y-2 border-t border-border pt-4">
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <span className="text-accent">✓</span>
                      <span className="text-muted-foreground">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10"></div>
            </div>
          ))}
        </div>

        {/* Implementation timeline */}
        <div className="mt-16 card-glass p-12 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Quick Implementation Timeline</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { week: 'Week 1', title: 'Setup & Design', desc: 'Define research questions' },
              { week: 'Week 2-3', title: 'Data Collection', desc: 'Ambassadors gather insights' },
              { week: 'Week 4', title: 'Analysis', desc: 'Process & validate data' },
              { week: 'Week 5', title: 'Insights Report', desc: 'Actionable recommendations' },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/40 to-accent/20 flex items-center justify-center">
                    <span className="font-bold text-primary">{index + 1}</span>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{step.desc}</p>
                  <p className="text-xs text-accent font-medium">{step.week}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:flex absolute top-8 -right-6 text-2xl text-primary/30">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
