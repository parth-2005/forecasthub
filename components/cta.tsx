'use client';

import React from 'react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section id="demo" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/15 rounded-full mix-blend-screen filter blur-3xl animate-blob-shift opacity-50"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/15 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/15 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="card-glass p-12 md:p-16 rounded-3xl border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Ready for your category's <span className="gradient-text">Stickiness Score?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              LOGIQ builds custom sensory studies for FMCG brands across any snack, beverage, or packaged food category. Pilot-validated methodology. Campus-verified data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:pjpanot260305@gmail.com?subject=Study%20Request%20for%20LOGIQ"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 text-center hover:scale-105"
              >
                Request a custom study
              </Link>
              <Link
                href="/dashboard"
                className="px-8 py-4 glass-effect text-foreground rounded-full font-medium hover:bg-white/15 transition-all duration-300 text-center"
              >
                View pilot report →
              </Link>
            </div>
          </div>

          {/* Trust signals */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-2">🔬</div>
              <h4 className="font-bold text-foreground mb-2">Methodology</h4>
              <p className="text-sm text-muted-foreground">Double-blind protocol, GPS-verified sessions, honesty-weighted scoring</p>
            </div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold text-foreground mb-2">Turnaround</h4>
              <p className="text-sm text-muted-foreground">Pilot study delivered in 3–4 weeks from brief to report</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📋</div>
              <h4 className="font-bold text-foreground mb-2">Auditability</h4>
              <p className="text-sm text-muted-foreground">Raw data, session logs, and scoring algorithm available to clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
