'use client';

import React from 'react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager, TasteBox Inc.',
    content: 'The insights from campus ambassadors helped us identify flavor trends 3 months ahead of competitors. Game-changing.',
    avatar: '👩‍💼',
  },
  {
    name: 'Marcus Thompson',
    role: 'CEO, FreshBrand Co.',
    content: 'Real consumer data from real people. No more guessing. Our launch strategy was backed by actual market intelligence.',
    avatar: '👨‍💼',
  },
  {
    name: 'Priya Patel',
    role: 'CMO, SnackMaster Inc.',
    content: 'The data quality is exceptional. The platform delivered insights in weeks, not months. Exactly what FMCG brands need.',
    avatar: '👩‍💼',
  },
];

export default function SocialProof() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Trusted by <span className="gradient-text">Leading FMCG Brands</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Pilot study conducted with 44 students from diverse backgrounds across leading universities.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group card-glass p-8 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">"{testimonial.content}"</p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-sm">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="card-glass p-12 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">44</div>
              <p className="text-muted-foreground">Diverse Students</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">12</div>
              <p className="text-muted-foreground">Universities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">99%</div>
              <p className="text-muted-foreground">Data Accuracy</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24h</div>
              <p className="text-muted-foreground">Turnaround Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
