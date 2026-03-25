'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl animate-blob-shift opacity-50"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl animate-blob-shift opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl animate-blob-shift opacity-50" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 glass-effect text-sm font-medium text-accent">
                ✨ Real-World Market Intelligence
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-balance">
                Real Consumer Insights from <span className="gradient-text">Real Environments</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Stop guessing. Start knowing. Collect authentic behavioral data through our campus ambassador network and transform market research from slow & biased to fast & actionable.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#demo" className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 text-center">
                Request Demo
              </Link>
              <Link href="#insights" className="px-8 py-3 glass-effect text-foreground rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-center">
                View Sample Insights →
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl font-bold gradient-text">44+</div>
                <p className="text-sm text-muted-foreground">Universities</p>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">2,000+</div>
                <p className="text-sm text-muted-foreground">Ambassadors</p>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">Real-time</div>
                <p className="text-sm text-muted-foreground">Data Flow</p>
              </div>
            </div>
          </div>

          {/* Right Visual - Data Dashboard Preview */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="card-glass p-8 space-y-6 animate-float">
              {/* Dashboard Header */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">Market Analysis Dashboard</h3>
                <p className="text-sm text-muted-foreground">Real-time consumer sentiment & preferences</p>
              </div>

              {/* Chart Preview */}
              <div className="space-y-4">
                <div className="h-40 bg-gradient-to-b from-primary/20 to-transparent rounded-lg border border-white/10 flex items-end gap-2 p-4">
                  <div className="flex-1 h-20 bg-primary/40 rounded-t" style={{ height: '65%' }}></div>
                  <div className="flex-1 h-20 bg-accent/40 rounded-t" style={{ height: '45%' }}></div>
                  <div className="flex-1 h-20 bg-secondary/40 rounded-t" style={{ height: '75%' }}></div>
                  <div className="flex-1 h-20 bg-primary/40 rounded-t" style={{ height: '55%' }}></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-xs text-muted-foreground">Preference Rate</p>
                    <p className="text-lg font-bold gradient-text">87%</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-xs text-muted-foreground">Response Time</p>
                    <p className="text-lg font-bold gradient-text">24h</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-xs text-muted-foreground">Data Quality</p>
                    <p className="text-lg font-bold gradient-text">99%</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-xs text-muted-foreground">Accuracy</p>
                    <p className="text-lg font-bold gradient-text">95%</p>
                  </div>
                </div>
              </div>

              {/* Glow accent */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/10 to-accent/0 rounded-2xl -z-10 blur-2xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
