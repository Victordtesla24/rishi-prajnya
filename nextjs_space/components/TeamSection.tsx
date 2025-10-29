
'use client';

import { Users, Briefcase, Code, GraduationCap, Award, MapPin } from 'lucide-react';

interface TeamSectionProps {
  activeView: 'business' | 'technical';
}

export default function TeamSection({ activeView }: TeamSectionProps) {
  const teamStructure = [
    {
      role: 'Founder & CEO',
      count: 1,
      salary: '₹50 Lakhs',
      responsibilities: activeView === 'business' 
        ? ['Strategic vision and business development', 'Government relations and partnerships', 'Investor relations and fundraising', 'Market expansion strategy']
        : ['Product strategy and roadmap', 'Technical vision alignment', 'Stakeholder management', 'Strategic technology decisions'],
      icon: Briefcase,
      color: 'from-[var(--color-gold)] to-[var(--color-gold-light)]'
    },
    {
      role: 'Co-Founder & CTO',
      count: 1,
      salary: '₹60 Lakhs',
      responsibilities: activeView === 'business'
        ? ['Technology leadership and innovation', 'Platform architecture and scalability', 'Team management and hiring', 'Technical partnerships']
        : ['System architecture design', 'AI/ML model development', 'Infrastructure management', 'Development team leadership'],
      icon: Code,
      color: 'from-[var(--color-teal)] to-[var(--color-navy)]'
    },
    {
      role: 'Senior Software Developers',
      count: 2,
      salary: '₹15 Lakhs each',
      responsibilities: activeView === 'business'
        ? ['Platform development and maintenance', 'Feature implementation and testing', 'Code quality and optimization', 'Junior developer mentoring']
        : ['Full-stack application development', 'AI/ML integration and optimization', 'Database design and management', 'DevOps and deployment automation'],
      icon: GraduationCap,
      color: 'from-[var(--color-navy)] to-[var(--color-teal)]'
    },
    {
      role: 'Technical Interns',
      count: 2,
      salary: '₹20K/month each',
      responsibilities: activeView === 'business'
        ? ['Research and development support', 'Content creation and documentation', 'Testing and quality assurance', 'Data collection and analysis']
        : ['Code development and testing', 'Documentation and technical writing', 'Research and proof-of-concepts', 'Support for senior developers'],
      icon: Users,
      color: 'from-[var(--color-gold-light)] to-[var(--color-gold)]'
    }
  ];

  const organizationalBenefits = [
    {
      title: 'Startup India Recognition',
      description: 'DPIIT certification providing tax benefits and simplified compliance',
      icon: Award
    },
    {
      title: 'Maharashtra Advantage',
      description: 'Strategic location in Pune/Mumbai with access to top talent and government support',
      icon: MapPin
    },
    {
      title: 'Equity Participation',
      description: 'All team members participate in company growth through equity programs',
      icon: Users
    },
    {
      title: 'Continuous Learning',
      description: 'Annual budget allocated for professional development and upskilling',
      icon: GraduationCap
    }
  ];

  const yearlyProgressions = [
    {
      year: 'Year 1-2',
      focus: 'Foundation & MVP',
      teamSize: '6 members',
      keyHires: 'Core founding team establishment',
      budget: '₹14.5 Cr annually'
    },
    {
      year: 'Year 2-3',
      focus: 'Scale & Expansion',
      teamSize: '12-15 members',
      keyHires: 'Sales, Marketing, Customer Success',
      budget: '₹18-22 Cr annually'
    },
    {
      year: 'Year 3-5',
      focus: 'National Expansion',
      teamSize: '25-40 members',
      keyHires: 'Regional teams, Advanced AI/ML specialists',
      budget: '₹30-45 Cr annually'
    }
  ];

  return (
    <section id="team" className="container-custom">
      <h2 className="section-title">Team Structure & Human Resources</h2>
      <p className="section-subtitle">
        {activeView === 'business' 
          ? 'Strategic team composition designed for rapid growth and market expansion'
          : 'Technical expertise and organizational structure for platform development and operations'
        }
      </p>

      {/* Current Team Structure */}
      <div className="space-y-6 mb-12">
        <h3 className="text-2xl font-semibold text-[var(--color-navy)] mb-6">Founding Team Structure (6 Members)</h3>
        
        {teamStructure.map((member, index) => (
          <div key={index} className="card-base">
            <div className="flex items-start space-x-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${member.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                <member.icon size={28} />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-[var(--color-navy)]">{member.role}</h4>
                    <p className="text-[var(--color-text-secondary)]">
                      {member.count > 1 ? `${member.count} positions` : '1 position'} • {member.salary}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="bg-gradient-to-r from-[var(--color-accent-light)] to-blue-50 px-4 py-2 rounded-full text-sm font-medium text-[var(--color-navy)]">
                      Total: ₹{member.count > 1 ? parseInt(member.salary.split(' ')[0].slice(1)) * member.count : member.salary.split(' ')[0].slice(1)} Lakhs
                    </span>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-[var(--color-navy)] mb-3">Key Responsibilities:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {member.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[var(--color-teal)] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-[var(--color-text-secondary)]">{responsibility}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total HR Investment */}
      <div className="card-base mb-12 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-teal)] text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="text-3xl font-bold mb-2">₹14.48 Cr</h4>
            <p className="text-sm opacity-90">Annual HR Investment</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold mb-2">68.3%</h4>
            <p className="text-sm opacity-90">Of Total Operating Budget</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold mb-2">6 Members</h4>
            <p className="text-sm opacity-90">Initial Core Team</p>
          </div>
        </div>
      </div>

      {/* Organizational Benefits */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-[var(--color-navy)] mb-6">Organizational Advantages</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {organizationalBenefits.map((benefit, index) => (
            <div key={index} className="card-base text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <benefit.icon size={24} />
              </div>
              <h4 className="font-semibold text-[var(--color-navy)] mb-2">{benefit.title}</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Growth Projections */}
      <div className="card-base">
        <h3 className="text-2xl font-semibold text-[var(--color-navy)] mb-6">5-Year Team Growth Strategy</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {yearlyProgressions.map((phase, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-lg p-6 hover:border-[var(--color-teal)] transition-colors">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-navy)] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                  {index + 1}
                </div>
                <h4 className="font-bold text-[var(--color-navy)] text-lg">{phase.year}</h4>
                <p className="text-[var(--color-gold)] font-semibold">{phase.focus}</p>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-[var(--color-navy)]">Team Size: </span>
                  <span className="text-[var(--color-text-secondary)]">{phase.teamSize}</span>
                </div>
                <div>
                  <span className="font-semibold text-[var(--color-navy)]">Key Hires: </span>
                  <span className="text-[var(--color-text-secondary)]">{phase.keyHires}</span>
                </div>
                <div>
                  <span className="font-semibold text-[var(--color-navy)]">HR Budget: </span>
                  <span className="text-[var(--color-text-secondary)]">{phase.budget}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {activeView === 'business' && (
          <div className="mt-8 p-6 bg-gradient-to-r from-[var(--color-accent-light)] to-blue-50 rounded-lg">
            <h4 className="font-semibold text-[var(--color-navy)] mb-3">Talent Acquisition Strategy</h4>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Maharashtra's position as an education and technology hub provides access to top-tier talent from institutions like 
              IITs, NITs, and Pune University. Our competitive compensation packages, equity participation, and mission-driven culture 
              will attract high-quality professionals committed to transforming India's education landscape through AI innovation.
            </p>
          </div>
        )}

        {activeView === 'technical' && (
          <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-[var(--color-accent-light)] rounded-lg">
            <h4 className="font-semibold text-[var(--color-navy)] mb-3">Technical Expertise Requirements</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Core Technologies:</strong> Python, TensorFlow, Kubernetes, Docker, React, Node.js, PostgreSQL
              </div>
              <div>
                <strong>AI/ML Specializations:</strong> NLP, Computer Vision, Recommendation Systems, Multi-Agent Systems
              </div>
              <div>
                <strong>Infrastructure:</strong> AWS/Azure, DevOps, CI/CD, Monitoring, Security
              </div>
              <div>
                <strong>Domain Knowledge:</strong> EdTech, Career Psychology, Indian Education System
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
