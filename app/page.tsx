
'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import HeroSection from '@/components/HeroSection';
import ExecutiveSummary from '@/components/ExecutiveSummary';
import FinancialCharts from '@/components/FinancialCharts';
import ArchitectureLayers from '@/components/ArchitectureLayers';
import TeamSection from '@/components/TeamSection';
import ImplementationRoadmap from '@/components/ImplementationRoadmap';
import ContactSection from '@/components/ContactSection';
import CostEvidence from '@/components/CostEvidence';
import FloatingActionButton from '@/components/FloatingActionButton';

export default function Home() {
  const [activeView, setActiveView] = useState<'business' | 'technical'>('business');

  const handleViewToggle = (view: 'business' | 'technical') => {
    setActiveView(view);
  };

  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      {/* Navigation and Progress */}
      <ScrollProgress />
      <Navigation activeView={activeView} onViewToggle={handleViewToggle} />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Executive Summary */}
      <section id="overview">
        <ExecutiveSummary activeView={activeView} />
      </section>

      {/* Financial Analysis */}
      <FinancialCharts activeView={activeView} />

      {/* Architecture Overview */}
      <ArchitectureLayers activeView={activeView} />

      {/* Team Structure */}
      <TeamSection activeView={activeView} />

      {/* Implementation Roadmap */}
      <ImplementationRoadmap activeView={activeView} />

      {/* Cost Evidence & Sources */}
      <CostEvidence activeView={activeView} />

      {/* Contact Section */}
      <ContactSection activeView={activeView} />

      {/* Footer */}
      <footer className="bg-[var(--color-navy)] text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-light)] flex items-center justify-center">
                  <span className="text-[var(--color-navy)] font-bold text-sm">RP</span>
                </div>
                <div>
                  <div className="font-bold text-lg">RishiPrajnya</div>
                  <div className="text-sm opacity-75">AI Career Guidance Platform</div>
                </div>
              </div>
              <p className="text-sm opacity-75">
                Transforming career guidance through AI-powered solutions, combining modern technology with traditional Indian wisdom.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company Information</h4>
              <div className="space-y-2 text-sm opacity-75">
                <p>FutureWithAI Private Limited</p>
                <p>Pune, Maharashtra, India</p>
                <p>Founded: 2025</p>
                <p>DPIIT Recognized Startup</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Project Details</h4>
              <div className="space-y-2 text-sm opacity-75">
                <p>Timeline: November 2025 - October 2030</p>
                <p>Target: 2+ Million Students</p>
                <p>Coverage: 5+ States in India</p>
                <p>Investment: ₹21.2 Crore (Year 1)</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm opacity-75">
            <p>
              © 2025 FutureWithAI Private Limited. This document contains confidential business information. 
              Distribution is restricted to authorized stakeholders only.
            </p>
            <p className="mt-2">
              Document prepared for strategic partnerships, government relations, and investment opportunities.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </main>
  );
}
