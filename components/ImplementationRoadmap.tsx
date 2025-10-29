
'use client';

import { useState } from 'react';
import { Calendar, CheckCircle, Clock, ArrowRight, Target, Zap, Users, Shield, Rocket, TrendingUp } from 'lucide-react';

interface ImplementationRoadmapProps {
  activeView: 'business' | 'technical';
}

export default function ImplementationRoadmap({ activeView }: ImplementationRoadmapProps) {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);

  const togglePhase = (phaseId: string) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  const businessPhases = [
    {
      id: 'foundation',
      phase: 1,
      title: 'Foundation & Market Entry',
      duration: 'Nov 2025 - Apr 2026 (6 months)',
      icon: Target,
      color: 'from-blue-500 to-blue-600',
      status: 'upcoming',
      keyObjectives: [
        'Establish legal entity and complete DPIIT registration',
        'Secure Maharashtra State Government partnership',
        'Build MVP with core AI career guidance features',
        'Onboard first 50 educational institutions',
        'Achieve 10,000+ student registrations'
      ],
      businessMilestones: [
        'Company incorporation and startup registration',
        'Initial seed funding round (₹2.5 crore)',
        'First government contract signed',
        'Beta launch with select schools',
        'Initial revenue generation (₹15-20 lakhs)'
      ],
      deliverables: [
        'Functional AI career guidance platform',
        'Government partnership agreements',
        'Initial user base and feedback',
        'Proof of concept validation',
        'Team and infrastructure setup'
      ]
    },
    {
      id: 'expansion',
      phase: 2,
      title: 'Maharashtra Expansion',
      duration: 'May 2026 - Oct 2026 (6 months)',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      status: 'upcoming',
      keyObjectives: [
        'Scale to 500+ educational institutions in Maharashtra',
        'Reach 50,000+ active students',
        'Launch premium individual subscription service',
        'Establish partnerships with career counseling centers',
        'Achieve monthly recurring revenue of ₹50+ lakhs'
      ],
      businessMilestones: [
        'Series A funding round (₹5-8 crore)',
        'State-wide government deployment',
        'Premium service launch',
        'Corporate partnerships established',
        'Positive unit economics achieved'
      ],
      deliverables: [
        'Scalable platform infrastructure',
        'Multi-tier service offerings',
        'Strong market presence in Maharashtra',
        'Proven business model',
        'Customer success stories'
      ]
    },
    {
      id: 'multistate',
      phase: 3,
      title: 'Multi-State Rollout',
      duration: 'Nov 2026 - Apr 2028 (18 months)',
      icon: Rocket,
      color: 'from-purple-500 to-purple-600',
      status: 'upcoming',
      keyObjectives: [
        'Expand to 5+ states across India',
        'Scale to 2,000+ educational institutions',
        'Serve 500,000+ students annually',
        'Launch advanced AI features and personalization',
        'Achieve ₹15-20 crore annual revenue'
      ],
      businessMilestones: [
        'Series B funding (₹15-25 crore)',
        'Multi-state government contracts',
        'Advanced feature rollout',
        'Strategic partnerships with EdTech companies',
        'Break-even achievement'
      ],
      deliverables: [
        'National-scale platform',
        'Advanced AI capabilities',
        'Multi-language support',
        'Comprehensive analytics platform',
        'Sustainable profitability'
      ]
    },
    {
      id: 'national',
      phase: 4,
      title: 'National Leadership',
      duration: 'May 2028 - Oct 2030 (30 months)',
      icon: Users,
      color: 'from-amber-500 to-orange-500',
      status: 'upcoming',
      keyObjectives: [
        'Become leading career guidance platform in India',
        'Serve 2+ million students annually',
        'Partner with 5,000+ educational institutions',
        'Launch international expansion pilot',
        'Achieve ₹50+ crore annual revenue'
      ],
      businessMilestones: [
        'IPO preparation or acquisition opportunity',
        'International market entry',
        'AI research and development center',
        'Strategic acquisitions',
        'Market leadership position'
      ],
      deliverables: [
        'Market-leading platform',
        'International presence',
        'Advanced AI research capabilities',
        'Ecosystem partnerships',
        'Exit strategy execution'
      ]
    }
  ];

  const technicalPhases = [
    {
      id: 'foundation',
      phase: 1,
      title: 'Infrastructure & Core Development',
      duration: 'Nov 2025 - Apr 2026 (6 months)',
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      status: 'upcoming',
      keyObjectives: [
        'Set up Kubernetes cluster and containerized infrastructure',
        'Develop and train initial AI models for career guidance',
        'Build multi-agent system architecture',
        'Implement secure data pipelines and storage',
        'Create REST API and basic web interface'
      ],
      businessMilestones: [
        'Docker containerization complete',
        'Initial SLM training completed',
        'Multi-agent communication protocols established',
        'Security framework implementation',
        'MVP deployment and testing'
      ],
      deliverables: [
        'Containerized AI training environment',
        'Three specialized AI agents (Career, Market, Astrology)',
        'Kubernetes orchestration platform',
        'Secure API gateway',
        'Web-based user interface'
      ]
    },
    {
      id: 'scaling',
      phase: 2,
      title: 'Platform Scaling & Optimization',
      duration: 'May 2026 - Oct 2026 (6 months)',
      icon: Zap,
      color: 'from-green-500 to-green-600',
      status: 'upcoming',
      keyObjectives: [
        'Implement auto-scaling and load balancing',
        'Optimize AI models for production performance',
        'Build comprehensive monitoring and alerting',
        'Develop mobile-responsive interface',
        'Integrate external data sources and APIs'
      ],
      businessMilestones: [
        'Auto-scaling infrastructure deployed',
        'Performance optimization (sub-second response times)',
        'Monitoring and observability platform',
        'Mobile application development',
        'Third-party integrations complete'
      ],
      deliverables: [
        'Production-ready scalable infrastructure',
        'Optimized AI model inference',
        'Comprehensive monitoring stack',
        'Mobile-first user experience',
        'Integrated data ecosystem'
      ]
    },
    {
      id: 'advanced',
      phase: 3,
      title: 'Advanced AI & Features',
      duration: 'Nov 2026 - Apr 2028 (18 months)',
      icon: Rocket,
      color: 'from-purple-500 to-purple-600',
      status: 'upcoming',
      keyObjectives: [
        'Implement advanced NLP and personalization',
        'Build predictive analytics and success modeling',
        'Develop multi-language support infrastructure',
        'Create advanced agent collaboration frameworks',
        'Implement edge computing for reduced latency'
      ],
      businessMilestones: [
        'Advanced AI features deployment',
        'Predictive modeling system',
        'Multi-language platform support',
        'Edge computing infrastructure',
        'Advanced analytics platform'
      ],
      deliverables: [
        'Next-generation AI capabilities',
        'Predictive career success models',
        'Multi-language AI agents',
        'Edge-optimized infrastructure',
        'Advanced user analytics'
      ]
    },
    {
      id: 'research',
      phase: 4,
      title: 'AI Research & Innovation',
      duration: 'May 2028 - Oct 2030 (30 months)',
      icon: Users,
      color: 'from-amber-500 to-orange-500',
      status: 'upcoming',
      keyObjectives: [
        'Establish AI research and development division',
        'Implement quantum computing integration',
        'Build federated learning capabilities',
        'Develop AR/VR career simulation platform',
        'Create blockchain-based credential verification'
      ],
      businessMilestones: [
        'AI R&D center establishment',
        'Quantum computing integration',
        'Federated learning deployment',
        'AR/VR platform development',
        'Blockchain credential system'
      ],
      deliverables: [
        'Cutting-edge AI research platform',
        'Quantum-enhanced computations',
        'Privacy-preserving federated learning',
        'Immersive career simulation',
        'Decentralized credential verification'
      ]
    }
  ];

  const phases = activeView === 'business' ? businessPhases : technicalPhases;

  return (
    <section id="roadmap" className="container-custom">
      <h2 className="section-title">
        {activeView === 'business' ? '5-Year Business Roadmap' : '5-Year Technical Implementation'}
      </h2>
      <p className="section-subtitle">
        {activeView === 'business' 
          ? 'Strategic milestones and business objectives from startup to market leadership'
          : 'Technical development phases and infrastructure evolution timeline'
        }
      </p>

      {/* Timeline Overview */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-2 text-center md:text-left">
            <Calendar className="w-6 h-6 text-[var(--color-teal)]" />
            <div>
              <div className="font-bold text-[var(--color-navy)]">November 2025</div>
              <div className="text-sm text-[var(--color-text-secondary)]">Project Start</div>
            </div>
          </div>
          <ArrowRight className="w-6 h-6 text-[var(--color-gold)] hidden md:block" />
          <div className="text-center">
            <div className="font-bold text-[var(--color-navy)]">October 2030</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Market Leadership</div>
          </div>
          <ArrowRight className="w-6 h-6 text-[var(--color-gold)] hidden md:block" />
          <div className="text-center md:text-right">
            <div className="font-bold text-[var(--color-navy)]">5 Years</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Total Duration</div>
          </div>
        </div>
      </div>

      {/* Detailed Phase Cards */}
      <div className="space-y-6">
        {phases.map((phase) => (
          <div key={phase.id} className="card-phase">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => togglePhase(phase.id)}
            >
              <div className="flex items-center space-x-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center text-white text-xl font-bold`}>
                  {phase.phase}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-navy)]">{phase.title}</h3>
                  <p className="text-[var(--color-text-secondary)] mt-1">{phase.duration}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Clock className="w-4 h-4 text-[var(--color-gold)]" />
                    <span className="text-sm bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] bg-clip-text text-transparent font-medium">
                      {phase.status === 'upcoming' ? 'Upcoming Phase' : 'Completed'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-[var(--color-teal)]">
                {expandedPhase === phase.id ? (
                  <div className="transform rotate-90"><ArrowRight size={24} /></div>
                ) : (
                  <ArrowRight size={24} />
                )}
              </div>
            </div>

            {expandedPhase === phase.id && (
              <div className="expandable-content expanded mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Key Objectives */}
                  <div>
                    <h4 className="font-semibold text-[var(--color-navy)] mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Key Objectives
                    </h4>
                    <div className="space-y-2">
                      {phase.keyObjectives.map((objective, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-[var(--color-text-secondary)]">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Business Milestones */}
                  <div>
                    <h4 className="font-semibold text-[var(--color-navy)] mb-4 flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {activeView === 'business' ? 'Business Milestones' : 'Technical Milestones'}
                    </h4>
                    <div className="space-y-2">
                      {phase.businessMilestones.map((milestone, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-[var(--color-text-secondary)]">{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Deliverables */}
                  <div>
                    <h4 className="font-semibold text-[var(--color-navy)] mb-4 flex items-center">
                      <Rocket className="w-5 h-5 mr-2" />
                      Key Deliverables
                    </h4>
                    <div className="space-y-2">
                      {phase.deliverables.map((deliverable, index) => (
                        <div key={index} className="bg-[var(--color-accent-light)] px-3 py-2 rounded text-sm">
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Phase Summary */}
                <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-[var(--color-accent-light)] rounded-lg">
                  <h4 className="font-semibold text-[var(--color-navy)] mb-2">Phase Summary</h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {activeView === 'business' ? (
                      phase.id === 'foundation' ? 'Establish strong foundations with government partnerships and proven MVP to secure market entry and initial funding.' :
                      phase.id === 'expansion' ? 'Scale operations across Maharashtra while building sustainable revenue streams and proving business model viability.' :
                      phase.id === 'multistate' ? 'Expand nationally with advanced features and strategic partnerships to achieve market leadership position.' :
                      'Consolidate market leadership while preparing for international expansion and potential exit strategies.'
                    ) : (
                      phase.id === 'foundation' ? 'Build core containerized infrastructure and multi-agent AI system with secure, scalable architecture.' :
                      phase.id === 'scaling' ? 'Optimize platform for production workloads with auto-scaling, monitoring, and mobile-first user experience.' :
                      phase.id === 'advanced' ? 'Implement cutting-edge AI features with predictive analytics, multi-language support, and edge computing.' :
                      'Establish AI research capabilities with quantum computing, federated learning, and immersive technologies.'
                    )}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Success Metrics Dashboard */}
      <div className="mt-12 card-base bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-teal)] text-white">
        <h3 className="text-2xl font-semibold mb-6 text-center">5-Year Success Targets</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">2M+</div>
            <div className="text-sm opacity-90">Students Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">₹67Cr</div>
            <div className="text-sm opacity-90">Annual Revenue</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">5,000+</div>
            <div className="text-sm opacity-90">Partner Institutions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">5+ States</div>
            <div className="text-sm opacity-90">Geographic Presence</div>
          </div>
        </div>
      </div>
    </section>
  );
}
