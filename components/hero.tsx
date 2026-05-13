'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stickinessData = [
  { name: 'Sample 3 (Cult Classic)', score: 76.56, color: 'bg-primary' },
  { name: 'Sample 1 (Neutral Buy)', score: 61.67, color: 'bg-muted-foreground/30' },
  { name: 'Sample 2 (Safe Habit)', score: 60.58, color: 'bg-muted-foreground/30' },
  { name: 'Sample 4 (Market Flop)', score: 42.19, color: 'bg-muted-foreground/30' },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-balance">
                Blind sensory science.<br />
                Real loyalty data.<br />
                <span className="gradient-text">Zero brand noise.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                LOGIQ runs double-blind, campus-based sensory studies for Indian FMCG brands. We quantify what surveys cannot — the physical attributes that actually drive repeat purchase, not what consumers say they prefer.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="px-8 h-14 text-base rounded-full">
                <Link href="mailto:pjpanot260305@gmail.com?subject=Study%20Request%20from%20LOGIQ">
                  Request a custom study
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 h-14 text-base rounded-full bg-background/70">
                <Link href="/dashboard">View pilot report →</Link>
              </Button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-foreground">44</div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">verified respondents</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">176</div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">blind evaluations</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">4</div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">competing SKUs tested</p>
                </div>
              </div>
              <p className="text-[11px] text-muted-foreground/60 italic">
                Pilot study · PDPU Raysan campus · March 2026
              </p>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Card className="card-glass border-white/20 bg-background/70 backdrop-blur-xl p-2">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline" className="uppercase tracking-[0.18em] text-[10px] font-medium py-0.5">
                    Brands anonymised
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold">Stickiness Score — Pilot output sample</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-5">
                  {stickinessData.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-muted-foreground">{item.name}</span>
                        <span className="font-mono">{item.score.toFixed(2)}</span>
                      </div>
                      <div className="h-4 w-full bg-muted/30 rounded-full overflow-hidden flex">
                        <div 
                          className={`h-full ${item.color} transition-all duration-1000 delay-500`} 
                          style={{ width: isVisible ? `${item.score}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-primary">Note:</span> Stickiness ≠ base taste. Sample 3 had only 48.18 base taste score yet leads on loyalty.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

