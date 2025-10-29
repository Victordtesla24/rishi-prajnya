
'use client';

import { Target, Zap, DollarSign, Globe, Building2, Users, TrendingUp, Shield } from 'lucide-react';

interface ExecutiveSummaryProps {
  activeView: 'business' | 'technical';
}

export default function ExecutiveSummary({ activeView }: ExecutiveSummaryProps) {
  const businessBenefits = [
    {
      icon: Target,
      title: '100% Objective Insights',
      description: 'AI-powered decisions based purely on verified, constrained training data'
    },
    {
      icon: Zap,
      title: 'Scalable Architecture',
      description: 'Kubernetes-orchestrated multi-agent collaboration for unlimited capacity'
    },
    {
      icon: DollarSign,
      title: '60-70% Cost Reduction',
      description: 'Significant reduction in operational expenses vs traditional career counseling'
    },
    {
      icon: Globe,
      title: '24/7 Availability',
      description: 'Always-on expert guidance accessible from anywhere in India'
    }
  ];

  const technicalBenefits = [
    {
      icon: Building2,
      title: 'Containerized Training',
      description: 'Docker containers with isolated environments for specialized AI model training'
    },
    {
      icon: Shield,
      title: 'Multi-Agent System',
      description: 'Career Counselor, Market Intelligence, and Vedic Astrology agents working collaboratively'
    },
    {
      icon: Users,
      title: 'RAG Architecture',
      description: 'Retrieval-Augmented Generation ensures responses are grounded in authorized knowledge'
    },
    {
      icon: TrendingUp,
      title: 'Kubernetes Orchestration',
      description: 'Auto-scaling, load balancing, and high availability for production workloads'
    }
  ];

  const benefits = activeView === 'business' ? businessBenefits : technicalBenefits;

  return (
    <div className="container-custom">
      <div className="card-summary fade-in-up">
        <h2 className="text-3xl font-bold text-[var(--color-navy)] mb-6">Executive Summary</h2>
        
        {activeView === 'business' ? (
          <div className="space-y-6">
            <p className="text-lg text-[var(--color-text)] leading-relaxed">
              RishiPrajnya AI Career Guidance Platform represents a transformative approach to career counseling in India, 
              combining artificial intelligence, traditional Vedic wisdom, and modern market intelligence to guide students 
              from age 12 towards optimal career paths. This comprehensive analysis presents a scalable business model 
              with strong government partnerships and proven technology architecture.
            </p>
            
            <div className="bg-gradient-to-r from-[var(--color-accent-light)] to-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[var(--color-navy)] mb-3">Investment Opportunity Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Market Opportunity:</strong> ₹15,000+ crore addressable market in Indian EdTech career guidance
                </div>
                <div>
                  <strong>Revenue Model:</strong> Hybrid approach with 65% recurring revenue from subscriptions
                </div>
                <div>
                  <strong>Government Support:</strong> Maharashtra State backing and National IKS framework alignment
                </div>
                <div>
                  <strong>Competitive Advantage:</strong> First-mover in AI-powered Vedic career guidance integration
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-lg text-[var(--color-text)] leading-relaxed">
              This technical architecture presents a containerized ecosystem for training specialized Small Language Models (SLMs) 
              as Subject Matter Experts, deployed through multi-agent systems to provide unbiased career guidance. The solution 
              leverages Docker, Kubernetes, and advanced RAG frameworks to create scalable, objective AI systems constrained 
              to specific knowledge domains.
            </p>
            
            <div className="bg-gradient-to-r from-gray-50 to-[var(--color-accent-light)] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[var(--color-navy)] mb-3">Technical Implementation Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Container Strategy:</strong> Isolated training environments preventing cross-domain contamination
                </div>
                <div>
                  <strong>Multi-Agent Framework:</strong> Specialized agents for Psychology, Market Intelligence, and Vedic Astrology
                </div>
                <div>
                  <strong>Orchestration:</strong> Kubernetes-based auto-scaling with 99.9% uptime guarantee
                </div>
                <div>
                  <strong>Data Architecture:</strong> Vector databases with semantic similarity search for precise responses
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid-benefits mt-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="benefit-icon">
                <benefit.icon size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--color-navy)] mb-2">{benefit.title}</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {activeView === 'business' && (
          <div className="mt-8 p-6 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-teal)] text-white rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Strategic Value Proposition</h3>
            <p className="text-sm leading-relaxed">
              RishiPrajnya bridges the critical gap between traditional career counseling and modern market demands by 
              integrating AI technology with India's rich knowledge tradition. With government backing, proven technology, 
              and a clear path to profitability, this platform positions itself as the definitive career guidance solution 
              for India's 250+ million students entering the workforce over the next decade.
            </p>
          </div>
        )}

        {activeView === 'technical' && (
          <div className="mt-8 p-6 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Architecture Innovation</h3>
            <p className="text-sm leading-relaxed">
              By constraining AI models to specific knowledge domains through containerization, this architecture ensures 
              objective, unbiased decision-making while enabling collaborative intelligence. The system represents a 
              breakthrough in responsible AI deployment, providing measurable outcomes while maintaining explainability 
              and ethical alignment with traditional Indian knowledge systems.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
