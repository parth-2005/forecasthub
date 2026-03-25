'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl gradient-text">
          Sensory Intelligence
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#insights" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Insights
          </Link>
          <Link href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Demo
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link
            href="#"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="#insights"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Insights
            </Link>
            <Link
              href="#demo"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Demo
            </Link>
            <Link
              href="#"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="block px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-300 text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
