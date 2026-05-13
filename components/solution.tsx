'use client';

import { ArrowDown, DatabaseZap, Sigma, UsersRound } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const solutions = [
  {
    title: 'Double-blind physical evaluation',
    description:
      'Products are removed from all packaging and served in anonymised bowls. Neither respondents nor administrators know brand identities. This is the only way to isolate physical product quality from brand equity.',
    icon: UsersRound,
    accent: 'text-primary',
  },
  {
    title: 'The Stickiness Score engine',
    description:
      'Our proprietary algorithm separates Base Taste (what you like right now) from Market Stickiness (what you keep buying). It weights texture, mouthfeel, oiliness penalty, price elasticity, and channel substitution behaviour into a single loyalty index.',
    icon: Sigma,
    accent: 'text-accent',
  },
  {
    title: 'Decentralised campus node network',
    description:
      'Studies run simultaneously across university campuses — PDPU Raysan in our pilot, expanding to 10+ nodes. Real students. Real snacking contexts. GPS-verified session logging for methodology auditability.',
    icon: DatabaseZap,
    accent: 'text-secondary',
  },
];

export default function Solution() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4 uppercase tracking-[0.18em] text-[11px]">
            The Engine
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Decentralized Intelligence + Predictive Mathematics
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We combine field-grade sensory evidence with machine-level pattern recognition to reduce launch risk and increase portfolio precision.
          </p>
        </div>

        <div className="space-y-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <div key={solution.title} className="relative">
                <Card className="card-glass border-white/20 bg-background/65 backdrop-blur-xl overflow-hidden">
                  <CardHeader className="md:flex md:flex-row md:items-start md:justify-between gap-6">
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Step {index + 1}</p>
                      <CardTitle className="text-2xl leading-tight">{solution.title}</CardTitle>
                    </div>
                    <div className={`h-12 w-12 rounded-xl bg-background/80 border border-white/20 flex items-center justify-center ${solution.accent}`}>
                      <Icon className="size-5" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed max-w-4xl">{solution.description}</p>
                  </CardContent>
                </Card>

                {index < solutions.length - 1 ? (
                  <div className="flex justify-center py-4">
                    <div className="h-10 w-10 rounded-full border border-white/20 bg-background/70 flex items-center justify-center text-muted-foreground">
                      <ArrowDown className="size-4" />
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-10 card-glass rounded-2xl border border-white/20 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl bg-primary/10 border border-primary/20 p-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Step 1</p>
              <p className="font-semibold">Anonymised physical tasting</p>
            </div>
            <div className="rounded-xl bg-accent/10 border border-accent/20 p-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Step 2</p>
              <p className="font-semibold">Algorithmic scoring</p>
            </div>
            <div className="rounded-xl bg-secondary/10 border border-secondary/20 p-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Step 3</p>
              <p className="font-semibold">R&D directives</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
