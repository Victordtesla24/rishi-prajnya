
'use client';

import { useState, useEffect } from 'react';
import { ArrowDown, MapPin, Calendar, Users, Target } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToOverview = () => {
    const overviewSection = document.getElementById('overview');
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            RishiPrajnya AI Career
            <br />
            <span className="bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] bg-clip-text text-transparent">
              Guidance Platform
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Strategic Business & Technical Analysis for AI-Powered Career Guidance Platform
            <br />
            <span className="text-lg">Maharashtra and Pan-India Expansion Strategy</span>
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Target className="w-8 h-8 text-[var(--color-gold)]" />
              </div>
              <div className="text-2xl font-bold">2M+</div>
              <div className="text-sm opacity-80">Students Target</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-[var(--color-gold)]" />
              </div>
              <div className="text-2xl font-bold">5,000+</div>
              <div className="text-sm opacity-80">Institutions</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-8 h-8 text-[var(--color-gold)]" />
              </div>
              <div className="text-2xl font-bold">5+ States</div>
              <div className="text-sm opacity-80">Geographic Reach</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="w-8 h-8 text-[var(--color-gold)]" />
              </div>
              <div className="text-2xl font-bold">5 Years</div>
              <div className="text-sm opacity-80">Roadmap</div>
            </div>
          </div>

          {/* Project Details */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold mb-2 text-[var(--color-gold)]">Company Details</h3>
                <div className="space-y-1">
                  <p><strong>Company:</strong> FutureWithAI</p>
                  <p><strong>Platform:</strong> RishiPrajnya AI Career Guidance</p>
                  <p><strong>Location:</strong> Maharashtra, India</p>
                  <p><strong>Currency:</strong> INR (Indian Rupees)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-[var(--color-gold)]">Project Timeline</h3>
                <div className="space-y-1">
                  <p><strong>Start:</strong> November 1, 2025</p>
                  <p><strong>Duration:</strong> 5 Years (2025-2030)</p>
                  <p><strong>Team Size:</strong> 6 Members (Founders + 4)</p>
                  <p><strong>Business Model:</strong> Hybrid (B2B2C + Government)</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={scrollToOverview}
            className="inline-flex items-center space-x-2 bg-[var(--color-gold)] text-[var(--color-navy)] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[var(--color-gold-light)] transition-all transform hover:scale-105 shadow-xl"
          >
            <span>Explore Full Analysis</span>
            <ArrowDown className="w-5 h-5" />
          </button>

          {/* Document Type Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm opacity-80">
            <span className="bg-white/20 px-3 py-1 rounded-full">📊 Financial Projections</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">🏗️ Technical Architecture</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">🎯 Market Strategy</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">📈 Growth Roadmap</span>
          </div>
        </div>
      </div>
    </section>
  );
}
