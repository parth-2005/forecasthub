'use client';

import React from 'react';
import { DatabaseZap, EyeOff, FileSpreadsheet, MessageSquareDashed } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const problems = [
  {
    title: 'Brand equity bias in every survey',
    description:
      "When a consumer sees the logo before tasting, cognition overrides the palate. Traditional research doesn't separate what people prefer from what they're conditioned to buy.",
    icon: EyeOff,
  },
  {
    title: 'SKU decisions made on claimed preference',
    description:
      '"Which flavour do you like?" is not the same as "Which flavour do you keep buying?" Price elasticity, channel switching, and repeat intent require behavioral measurement — not recall.',
    icon: MessageSquareDashed,
  },
  {
    title: 'Manufacturing defects invisible in NPS data',
    description:
      'A product with a fryer calibration error scores 3.8 out of 5 on online surveys — consumers rationalise. Sensory testing isolates the oiliness penalty before it damages brand equity at scale.',
    icon: FileSpreadsheet,
  },
  {
    title: 'No pre-launch variant validation',
    description:
      'Lab panels and internal tasting sessions introduce confirmation bias. By the time you reach distribution, the variant decision is already locked. You need ground-truth data before the SKU is finalised.',
    icon: DatabaseZap,
  },
];

export default function Problem() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>
        <div className="absolute -top-32 -left-20 w-72 h-72 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            The FMCG Data Blindspot
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Legacy research inputs are noisy, delayed, and often detached from purchase reality. Strategic decisions deserve a higher signal-to-noise ratio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="group card-glass border-white/20 bg-background/65 backdrop-blur-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="w-11 h-11 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                  <problem.icon className="size-5" />
                </div>
                <CardTitle className="text-xl">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
