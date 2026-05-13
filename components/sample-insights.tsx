'use client';

import Link from 'next/link';
import { FileText, TrendingUp, ShoppingBag, AlertTriangle, Pipette } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const substitutionData = [
  { name: 'Sample 1 fans', vending: 13, skip: 60, walk: 27, highlight: false },
  { name: 'Sample 2 fans', vending: 38, skip: 15, walk: 46, highlight: false },
  { name: 'Sample 3 fans', vending: 8, skip: 33, walk: 58, highlight: true },
  { name: 'Sample 4 fans', vending: 25, skip: 75, walk: 0, highlight: false },
];

export default function SampleInsights() {
  return (
    <section id="insights" className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4 uppercase tracking-[0.18em] text-[11px]">
            Pilot Results
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            What a LOGIQ pilot output looks like
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Below are real findings from our March 2026 Cream & Onion study. Four competing SKUs, 44 respondents, zero brand visibility. This is the format every LOGIQ client receives.
          </p>
          <Badge variant="outline" className="px-4 py-1.5 text-[11px] font-medium border-primary/20 bg-primary/5 text-primary">
            Pilot study · Brands anonymised · n=44
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="card-glass border-white/20 bg-background/60">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 text-primary mb-2">
                <TrendingUp className="size-4" />
                <span className="text-[10px] uppercase tracking-wider font-bold">The stickiness disconnect</span>
              </div>
              <CardTitle className="text-3xl font-bold">76.56</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Stickiness Score — Sample 3</p>
            </CardContent>
          </Card>

          <Card className="card-glass border-white/20 bg-background/60">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 text-accent mb-2">
                <ShoppingBag className="size-4" />
                <span className="text-[10px] uppercase tracking-wider font-bold">Walk-to-shop loyalty</span>
              </div>
              <CardTitle className="text-3xl font-bold">58%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">of Sample 3 fans walk to another store</p>
            </CardContent>
          </Card>

          <Card className="card-glass border-white/20 bg-background/60">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 text-destructive mb-2">
                <AlertTriangle className="size-4" />
                <span className="text-[10px] uppercase tracking-wider font-bold">Manufacturing penalty</span>
              </div>
              <CardTitle className="text-3xl font-bold">−1.33</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Oil penalty score — Sample 4</p>
            </CardContent>
          </Card>

          <Card className="card-glass border-white/20 bg-background/60">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 text-secondary mb-2">
                <Pipette className="size-4" />
                <span className="text-[10px] uppercase tracking-wider font-bold">Optimal acid profile</span>
              </div>
              <CardTitle className="text-3xl font-bold">19.74%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Tangy/lemony note — Sample 3</p>
            </CardContent>
          </Card>
        </div>

        <Card className="card-glass border-white/20 bg-background/60 overflow-hidden mb-12">
          <CardHeader className="border-b border-white/10 bg-white/5">
            <CardTitle className="text-xl">Channel Substitution Behavior</CardTitle>
            <p className="text-sm text-muted-foreground">What happens when the respondent's favorite SKU is out of stock?</p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/30 text-muted-foreground uppercase text-[10px] tracking-wider font-bold">
                  <tr>
                    <th className="px-6 py-4">Sample</th>
                    <th className="px-6 py-4">Buy from vending</th>
                    <th className="px-6 py-4">Skip buying</th>
                    <th className="px-6 py-4">Walk to shop</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {substitutionData.map((row) => (
                    <tr key={row.name} className={`${row.highlight ? 'bg-primary/10' : ''}`}>
                      <td className="px-6 py-4 font-medium">{row.name}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 bg-primary/40 rounded-full" style={{ width: `${row.vending}%` }}></div>
                          <span>{row.vending}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 bg-muted-foreground/30 rounded-full" style={{ width: `${row.skip}%` }}></div>
                          <span>{row.skip}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className={`h-1.5 rounded-full ${row.highlight ? 'bg-primary' : 'bg-accent/60'}`} style={{ width: `${row.walk}%` }}></div>
                          <span className={row.highlight ? 'font-bold' : ''}>{row.walk}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <TrendingUp className="size-5 text-primary" />
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              <span className="font-bold text-foreground">Sample 3 drives destination retail behaviour</span> — 58% of its fans walk to another store rather than substitute. This translates directly to negotiating leverage for premium shelf placement.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="rounded-full px-8 h-14 text-base">
            <Link href="mailto:pjpanot260305@gmail.com?subject=Custom%20Study%20Inquiry%20for%20LOGIQ">
              Want this for your category? → Request a custom study
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

