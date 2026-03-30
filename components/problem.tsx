'use client';

import React from 'react';

const problems = [
  {
    title: 'Slow Research Cycles',
    description: 'Traditional market research takes months to plan, execute, and analyze',
  },
  {
    title: 'Artificial Environments',
    description: 'Lab settings don\'t reflect real consumer behavior in natural contexts',
  },
  {
    title: 'High Bias Risk',
    description: 'Small sample sizes and skewed demographics compromise data integrity',
  },
  {
    title: 'Limited Insight Depth',
    description: 'Surveys miss the nuanced behavioral insights that drive purchase decisions',
  },
];

export default function Problem() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            The Problem With Traditional <span className="gradient-text">Market Research</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            FMCG brands are making decisions without understanding real consumer behavior. The status quo is broken—and brands know it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="group card-glass p-8 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2">
              {/* problem title */}
              <h3 className="text-xl font-bold mb-3 text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
