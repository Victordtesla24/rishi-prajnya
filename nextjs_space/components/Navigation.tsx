
'use client';

import { useState, useEffect } from 'react';
import { Menu, X, FileText, TrendingUp, Settings, Users, DollarSign, Phone } from 'lucide-react';

interface NavigationProps {
  activeView: 'business' | 'technical';
  onViewToggle: (view: 'business' | 'technical') => void;
}

export default function Navigation({ activeView, onViewToggle }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'financial', label: 'Financial', icon: DollarSign },
    { id: 'architecture', label: 'Architecture', icon: Settings },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'roadmap', label: 'Roadmap', icon: TrendingUp },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  return (
    <nav className={`nav-fixed ${isScrolled ? 'bg-white/95' : 'bg-white/90'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-light)] flex items-center justify-center">
              <span className="text-[var(--color-navy)] font-bold text-sm">RP</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[var(--color-navy)] font-bold text-lg leading-tight">RishiPrajnya</span>
              <span className="text-[var(--color-text-secondary)] text-xs leading-tight">AI Career Guidance Platform</span>
            </div>
          </div>

          {/* View Toggle - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-2 bg-gray-100 p-1 rounded-full">
              <button
                onClick={() => onViewToggle('business')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeView === 'business'
                    ? 'bg-[var(--color-navy)] text-white shadow-md'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-navy)]'
                }`}
              >
                Business View
              </button>
              <button
                onClick={() => onViewToggle('technical')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeView === 'technical'
                    ? 'bg-[var(--color-navy)] text-white shadow-md'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-navy)]'
                }`}
              >
                Technical View
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-1 text-[var(--color-text-secondary)] hover:text-[var(--color-navy)] transition-colors"
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[var(--color-navy)]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              {/* Mobile View Toggle */}
              <div className="px-3 py-2 border-b border-gray-200">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onViewToggle('business')}
                    className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      activeView === 'business'
                        ? 'bg-[var(--color-navy)] text-white'
                        : 'text-[var(--color-text-secondary)] hover:bg-gray-100'
                    }`}
                  >
                    Business
                  </button>
                  <button
                    onClick={() => onViewToggle('technical')}
                    className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      activeView === 'technical'
                        ? 'bg-[var(--color-navy)] text-white'
                        : 'text-[var(--color-text-secondary)] hover:bg-gray-100'
                    }`}
                  >
                    Technical
                  </button>
                </div>
              </div>
              
              {/* Mobile Menu Items */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 px-3 py-2 w-full text-left rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-navy)] hover:bg-gray-50 transition-colors"
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
