
'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, Database, Container, Bot, Cloud, Shield, Monitor, Code2, Users, Layers3, Settings } from 'lucide-react';

interface ArchitectureLayersProps {
  activeView: 'business' | 'technical';
}

export default function ArchitectureLayers({ activeView }: ArchitectureLayersProps) {
  const [expandedLayer, setExpandedLayer] = useState<string | null>(null);

  const toggleLayer = (layerId: string) => {
    setExpandedLayer(expandedLayer === layerId ? null : layerId);
  };

  const businessLayers = [
    {
      id: 'data',
      title: 'Knowledge Foundation',
      icon: Database,
      description: 'Curated datasets including 13,000+ global job roles, psychometric assessments, and Vedic astrology texts',
      details: {
        overview: 'The knowledge foundation forms the bedrock of our AI career guidance system, ensuring all recommendations are based on verified, comprehensive data sources.',
        components: [
          'Psychometric Student Profiles & Assessments',
          '13,000+ Global Job Role Descriptions',
          'Brihad Parashara Hora Shastra (Vedic Texts)',
          'Market Intelligence & Industry Trends',
          'Educational Institution Database',
          'Skills & Competency Frameworks'
        ],
        businessValue: 'This comprehensive knowledge base enables personalized, accurate career guidance that considers both modern market demands and traditional wisdom, providing students with well-rounded career recommendations.',
        impact: 'Supports decision-making for 2+ million students across 5,000+ educational institutions'
      }
    },
    {
      id: 'training',
      title: 'AI Model Development',
      icon: Bot,
      description: 'Specialized AI models trained on domain-specific datasets to become subject matter experts',
      details: {
        overview: 'Our AI development process creates specialized virtual experts, each trained exclusively on specific knowledge domains to ensure unbiased, expert-level guidance.',
        components: [
          'Career Counseling AI Expert',
          'Market Intelligence Analyst',
          'Vedic Astrology Guidance System',
          'Skills Assessment Engine',
          'Personality Profiling AI',
          'Career Path Optimization Model'
        ],
        businessValue: 'Replaces expensive human experts with 24/7 available AI specialists, reducing operational costs by 60-70% while maintaining superior consistency and availability.',
        impact: 'Eliminates geographical barriers, provides instant guidance, and scales to serve unlimited students simultaneously'
      }
    },
    {
      id: 'collaboration',
      title: 'Intelligent Coordination',
      icon: Users,
      description: 'Multiple AI experts working together to provide comprehensive, multi-dimensional career guidance',
      details: {
        overview: 'Our coordination system orchestrates multiple AI experts to collaborate, ensuring students receive holistic guidance that considers psychological, practical, and spiritual dimensions.',
        components: [
          'Multi-Expert Consensus Engine',
          'Decision Integration Framework',
          'Conflict Resolution System',
          'Recommendation Synthesis',
          'Quality Assurance Protocols',
          'Outcome Tracking & Learning'
        ],
        businessValue: 'Delivers superior guidance quality compared to single-expert consultations, increasing student satisfaction and career success rates by 30-40%.',
        impact: 'Creates unique competitive advantage through comprehensive, multi-perspective career guidance unavailable elsewhere in the market'
      }
    },
    {
      id: 'platform',
      title: 'Scalable Infrastructure',
      icon: Cloud,
      description: 'Cloud-based platform capable of serving millions of students across India with high availability',
      details: {
        overview: 'Our robust platform infrastructure ensures reliable, fast, and secure access to career guidance services for students, schools, and government agencies nationwide.',
        components: [
          'Auto-Scaling Cloud Infrastructure',
          'High-Availability Architecture',
          'Multi-Region Deployment',
          'Load Balancing Systems',
          'Disaster Recovery Protocols',
          'Performance Optimization Engine'
        ],
        businessValue: 'Enables rapid geographic expansion and user growth without proportional infrastructure investment, supporting pan-India deployment within 24 months.',
        impact: 'Supports 2+ million concurrent users with 99.9% uptime, facilitating seamless expansion across all Indian states'
      }
    },
    {
      id: 'security',
      title: 'Data Protection & Compliance',
      icon: Shield,
      description: 'Enterprise-grade security ensuring student data protection and regulatory compliance',
      details: {
        overview: 'Comprehensive security framework protecting sensitive student information while ensuring compliance with Indian data protection laws and educational sector requirements.',
        components: [
          'DPDP Act 2023 Compliance',
          'End-to-End Data Encryption',
          'Access Control & Authentication',
          'Audit Trail & Monitoring',
          'Privacy-by-Design Architecture',
          'Regular Security Assessments'
        ],
        businessValue: 'Builds trust with educational institutions and parents, enabling widespread adoption while avoiding regulatory penalties and reputation risks.',
        impact: 'Ensures sustainable business operations and qualifies platform for government partnerships and institutional contracts'
      }
    },
    {
      id: 'interface',
      title: 'User Experience',
      icon: Monitor,
      description: 'Intuitive interfaces for students, educators, and administrators across web and mobile platforms',
      details: {
        overview: 'User-friendly interfaces designed for diverse audiences, ensuring easy access to career guidance services across various devices and technical literacy levels.',
        components: [
          'Student Career Guidance Portal',
          'Educational Institution Dashboard',
          'Parent/Guardian Access System',
          'Administrator Control Panel',
          'Mobile-First Responsive Design',
          'Multi-Language Support Interface'
        ],
        businessValue: 'Maximizes user adoption and engagement, reducing training costs and support requirements while improving user satisfaction and retention rates.',
        impact: 'Enables seamless onboarding of diverse user groups, from tech-savvy urban students to rural educational institutions with limited digital infrastructure'
      }
    }
  ];

  const technicalLayers = [
    {
      id: 'data',
      title: 'Data Sources Layer',
      icon: Database,
      description: 'Containerized data isolation with specialized datasets for domain-specific model training',
      details: {
        overview: 'Implements strict data isolation using containerized storage volumes to prevent cross-contamination between different knowledge domains during AI model training.',
        components: [
          'Volume-Mounted Specialized Datasets',
          'Data Validation & Quality Pipelines',
          'Version Control & Data Lineage',
          'Automated Data Preprocessing',
          'Schema Validation & Enforcement',
          'Data Access Control & Audit Logs'
        ],
        businessValue: 'Ensures model accuracy and prevents bias through controlled, verifiable training data, crucial for maintaining trust in AI recommendations.',
        impact: 'Enables reproducible model training and maintains data integrity across development, testing, and production environments'
      }
    },
    {
      id: 'training',
      title: 'Training Infrastructure',
      icon: Container,
      description: 'Docker containers providing isolated environments for specialized model training workflows',
      details: {
        overview: 'Containerized training infrastructure that creates reproducible, isolated environments for training specialized Small Language Models on domain-specific datasets.',
        components: [
          'Docker Training Containers',
          'GPU Resource Allocation',
          'Model Version Management',
          'Training Pipeline Automation',
          'Hyperparameter Optimization',
          'Model Performance Validation'
        ],
        businessValue: 'Accelerates model development cycles and ensures consistent training outcomes, reducing time-to-market for new features and capabilities.',
        impact: 'Enables parallel training of multiple specialized models while maintaining resource efficiency and cost optimization'
      }
    },
    {
      id: 'agents',
      title: 'Multi-Agent System',
      icon: Bot,
      description: 'Specialized AI agents with inter-agent communication protocols for collaborative decision making',
      details: {
        overview: 'Distributed system of specialized AI agents that communicate through standardized protocols to provide collaborative intelligence and consensus-based recommendations.',
        components: [
          'Career Counselor Agent (Psychology Focus)',
          'Market Intelligence Agent (Job Market Data)',
          'Vedic Astrology Agent (Traditional Wisdom)',
          'Integration Orchestrator (Consensus Building)',
          'Communication Protocol Stack',
          'Agent Performance Monitoring'
        ],
        businessValue: 'Provides comprehensive analysis from multiple perspectives, increasing recommendation accuracy and user trust through transparent multi-expert validation.',
        impact: 'Creates unique competitive advantage through specialized agent collaboration unavailable in single-model systems'
      }
    },
    {
      id: 'orchestration',
      title: 'Orchestration Layer',
      icon: Layers3,
      description: 'Kubernetes-based container orchestration with auto-scaling and high availability management',
      details: {
        overview: 'Production-grade container orchestration system managing deployment, scaling, and operation of containerized applications with enterprise reliability requirements.',
        components: [
          'Kubernetes Cluster Management',
          'Auto-scaling Policies & Triggers',
          'Service Mesh Architecture',
          'Load Balancing & Traffic Distribution',
          'Health Checks & Self-Healing',
          'Resource Quotas & Limits'
        ],
        businessValue: 'Ensures 99.9% uptime and seamless scaling to handle growth from thousands to millions of users without manual intervention.',
        impact: 'Enables cost-efficient operations through automatic resource optimization and eliminates single points of failure'
      }
    },
    {
      id: 'gateway',
      title: 'API Gateway',
      icon: Settings,
      description: 'Secure API management with authentication, rate limiting, and request routing capabilities',
      details: {
        overview: 'Centralized API management layer that handles security, routing, and performance optimization for all client-server communications.',
        components: [
          'RESTful API Endpoints',
          'JWT Authentication & Authorization',
          'Rate Limiting & Throttling',
          'Request/Response Transformation',
          'API Analytics & Monitoring',
          'Circuit Breaker Patterns'
        ],
        businessValue: 'Provides secure, scalable access to platform services while enabling integration with third-party systems and educational institution APIs.',
        impact: 'Facilitates ecosystem partnerships and integrations while maintaining security and performance standards'
      }
    },
    {
      id: 'interface',
      title: 'User Interface Layer',
      icon: Monitor,
      description: 'Web and mobile interfaces with real-time communication and responsive user experience',
      details: {
        overview: 'Modern web and mobile applications providing intuitive access to career guidance services with real-time interactions and responsive design.',
        components: [
          'React-based Web Application',
          'Progressive Web App (PWA)',
          'WebSocket Real-time Communication',
          'Responsive UI/UX Framework',
          'Offline Capability & Caching',
          'Multi-language Localization'
        ],
        businessValue: 'Maximizes user engagement and accessibility across diverse devices and network conditions, crucial for rural and urban market penetration.',
        impact: 'Enables consistent user experience across platforms while supporting offline usage in areas with limited internet connectivity'
      }
    }
  ];

  const layers = activeView === 'business' ? businessLayers : technicalLayers;

  return (
    <section id="architecture" className="container-custom">
      <h2 className="section-title">
        {activeView === 'business' ? 'Solution Architecture Overview' : 'Technical System Architecture'}
      </h2>
      <p className="section-subtitle">
        {activeView === 'business' 
          ? 'Click on each component to explore how our platform delivers comprehensive career guidance'
          : 'Interactive system layers - click to explore technical implementation details and specifications'
        }
      </p>

      <div className="space-y-4">
        {layers.map((layer) => (
          <div key={layer.id} className="card-layer">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleLayer(layer.id)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-navy)] rounded-lg flex items-center justify-center text-white">
                  <layer.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-navy)]">{layer.title}</h3>
                  <p className="text-[var(--color-text-secondary)] mt-1">{layer.description}</p>
                </div>
              </div>
              <div className="text-[var(--color-teal)]">
                {expandedLayer === layer.id ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
              </div>
            </div>

            {expandedLayer === layer.id && (
              <div className="expandable-content expanded mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[var(--color-navy)] mb-2">Overview</h4>
                    <p className="text-[var(--color-text-secondary)]">{layer.details.overview}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--color-navy)] mb-3">Key Components</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {layer.details.components.map((component, index) => (
                        <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                          <Code2 size={16} className="text-[var(--color-teal)] flex-shrink-0" />
                          <span className="text-sm">{component}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--color-navy)] mb-2">Business Value</h4>
                    <p className="text-[var(--color-text-secondary)]">{layer.details.businessValue}</p>
                  </div>

                  <div className="bg-gradient-to-r from-[var(--color-accent-light)] to-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-[var(--color-navy)] mb-2">Impact & Scale</h4>
                    <p className="text-sm text-[var(--color-text-secondary)]">{layer.details.impact}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Architecture Flow Diagram */}
      <div className="mt-12 card-base">
        <h3 className="text-2xl font-semibold text-[var(--color-navy)] mb-6 text-center">
          {activeView === 'business' ? 'Student Journey Flow' : 'Data Flow Architecture'}
        </h3>
        
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-4">
          {activeView === 'business' ? (
            <>
              <div className="text-center flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto">1</div>
                <h4 className="font-semibold text-[var(--color-navy)] mb-2">Student Registration</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">Basic profile and psychometric assessment</p>
              </div>
              <div className="hidden md:block text-[var(--color-teal)]">→</div>
              <div className="text-center flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-navy)] rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto">2</div>
                <h4 className="font-semibold text-[var(--color-navy)] mb-2">AI Analysis</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">Multi-agent collaborative assessment</p>
              </div>
              <div className="hidden md:block text-[var(--color-teal)]">→</div>
              <div className="text-center flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto">3</div>
                <h4 className="font-semibold text-[var(--color-navy)] mb-2">Personalized Guidance</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">Comprehensive career recommendations</p>
              </div>
              <div className="hidden md:block text-[var(--color-teal)]">→</div>
              <div className="text-center flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-navy)] rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto">4</div>
                <h4 className="font-semibold text-[var(--color-navy)] mb-2">Ongoing Support</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">Continuous guidance and progress tracking</p>
              </div>
            </>
          ) : (
            <>
              <div className="text-center flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-navy)] rounded-full flex items-center justify-center text-white mb-3 mx-auto">
                  <Database size={24} />
                </div>
                <h4 className="font-semibold text-[var(--color-navy)] mb-2">Data Ingestion</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">Structured data validation and preprocessing</p>
              </div>
              <div className="hidden md:block text-[var(--color-teal)]">→</div>
              <div className="text-center flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full flex items-center justify-center text-white mb-3 mx-auto">
                  <Container size={24} />
                </div>
                <h4 className="font-semibold text-[var(--color-navy)] mb-2">Model Training</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">Containerized specialized model development</p>
              </div>
              <div className="hidden md:block text-[var(--color-teal)]">→</div>
              <div className="text-center flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-navy)] rounded-full flex items-center justify-center text-white mb-3 mx-auto">
                  <Bot size={24} />
                </div>
                <h4 className="font-semibold text-[var(--color-navy)] mb-2">Agent Orchestration</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">Multi-agent collaborative processing</p>
              </div>
              <div className="hidden md:block text-[var(--color-teal)]">→</div>
              <div className="text-center flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full flex items-center justify-center text-white mb-3 mx-auto">
                  <Monitor size={24} />
                </div>
                <h4 className="font-semibold text-[var(--color-navy)] mb-2">Response Delivery</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">Synthesized recommendations via API</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
