'use client';

import React from 'react';
import { Users, Database, FileSpreadsheet, ShieldCheck } from 'lucide-react';

export default function SocialProof() {
  const processCards = [
    {
      title: 'The setup',
      content: '44 university students across SOM, SOT, and SLS schools at PDPU. Each evaluated all 4 samples in a single session. No brand names. No packaging. Identical anonymous bowls.',
      icon: Users,
    },
    {
      title: 'The data capture',
      content: '176 distinct sensory evaluations. GPS-tagged photography for session verification. Real-time data entry at the testing table. Confidence multiplier applied to weight uncertain responses.',
      icon: Database,
    },
    {
      title: 'The output',
      content: 'Each SKU received a Base Taste score and a Stickiness Score. The algorithm penalised manufacturing defects (oiliness), rewarded repeat intent, and separated category lovers from neutral respondents via affinity weighting.',
      icon: FileSpreadsheet,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            The pilot: <span className="gradient-text">how it worked</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real methodology. Real students. Real-time verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {processCards.map((card, index) => (
            <div key={index} className="group card-glass p-8 hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <card.icon className="size-6" />
              </div>
              <h4 className="font-bold text-xl mb-4 text-foreground">{card.title}</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">{card.content}</p>
            </div>
          ))}
        </div>

        <div className="card-glass p-10 rounded-3xl border border-white/20 bg-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">44</div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">respondents, 3 schools</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">176</div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">individual evaluations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">93%</div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">answered "Yes" to honesty check</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2 flex items-center justify-center gap-1">
                1 <ShieldCheck className="size-6 text-primary" />
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">campus node, pilot study</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

