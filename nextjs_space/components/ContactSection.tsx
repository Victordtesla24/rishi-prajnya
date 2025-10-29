
'use client';

import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Building, Users, TrendingUp, Code } from 'lucide-react';

interface ContactSectionProps {
  activeView: 'business' | 'technical';
}

export default function ContactSection({ activeView }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    subject: '',
    message: '',
    formType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        subject: '',
        message: '',
        formType: 'general'
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to submit form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@futurewithAI.in',
      href: 'mailto:info@futurewithAI.in'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9876543210',
      href: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: 'https://maps.google.com/?q=Pune,Maharashtra,India'
    }
  ];

  const inquiryTypes = activeView === 'business' 
    ? [
        { value: 'partnership', label: 'Government Partnership', icon: Building },
        { value: 'investment', label: 'Investment Opportunity', icon: TrendingUp },
        { value: 'institutional', label: 'Institutional Adoption', icon: Users },
        { value: 'general', label: 'General Business Inquiry', icon: Mail }
      ]
    : [
        { value: 'technical', label: 'Technical Integration', icon: Code },
        { value: 'architecture', label: 'System Architecture', icon: Building },
        { value: 'implementation', label: 'Implementation Support', icon: Users },
        { value: 'general', label: 'General Technical Inquiry', icon: Mail }
      ];

  const businessContacts = [
    {
      title: 'Government Relations',
      description: 'Partnerships with state education departments and national skill development programs',
      contact: 'govt-relations@futurewithAI.in'
    },
    {
      title: 'Investment & Funding',
      description: 'Series A funding opportunities and strategic investment discussions',
      contact: 'investors@futurewithAI.in'
    },
    {
      title: 'Institutional Partnerships',
      description: 'Educational institution onboarding and bulk licensing agreements',
      contact: 'partnerships@futurewithAI.in'
    }
  ];

  const technicalContacts = [
    {
      title: 'Technical Integration',
      description: 'API documentation, SDKs, and system integration support',
      contact: 'tech-support@futurewithAI.in'
    },
    {
      title: 'Developer Relations',
      description: 'Technical documentation, developer resources, and implementation guidance',
      contact: 'developers@futurewithAI.in'
    },
    {
      title: 'System Architecture',
      description: 'Infrastructure consulting, scalability planning, and deployment support',
      contact: 'architecture@futurewithAI.in'
    }
  ];

  const specializedContacts = activeView === 'business' ? businessContacts : technicalContacts;

  return (
    <section id="contact" className="container-custom">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        {activeView === 'business' 
          ? 'Connect with our team for partnership opportunities, investment discussions, or institutional adoption'
          : 'Contact our technical team for integration support, system architecture, or implementation guidance'
        }
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="card-base">
          <h3 className="text-2xl font-semibold text-[var(--color-navy)] mb-6">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form Type Selection */}
            <div>
              <label className="block text-sm font-semibold text-[var(--color-navy)] mb-3">
                Inquiry Type *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {inquiryTypes.map((type) => (
                  <label key={type.value} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="formType"
                      value={type.value}
                      checked={formData.formType === type.value}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[var(--color-teal)] border-gray-300 focus:ring-[var(--color-teal)]"
                    />
                    <type.icon size={16} className="text-[var(--color-teal)]" />
                    <span className="text-sm">{type.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-navy)] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--color-navy)] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Company and Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[var(--color-navy)] mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your organization name"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-[var(--color-navy)] mb-2">
                  Role/Position
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your role or position"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-navy)] mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="form-input"
                placeholder={activeView === 'business' ? 'Partnership inquiry, investment opportunity, etc.' : 'Integration support, technical question, etc.'}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--color-navy)] mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Please provide details about your inquiry..."
                rows={5}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="loading-spinner"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="flex items-center space-x-2 text-[var(--color-success)] bg-green-50 p-3 rounded-lg">
                <CheckCircle size={20} />
                <span>Thank you! Your message has been sent successfully. We'll respond within 24 hours.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                <AlertCircle size={20} />
                <span>{errorMessage}</span>
              </div>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Direct Contact */}
          <div className="card-base">
            <h3 className="text-xl font-semibold text-[var(--color-navy)] mb-6">Direct Contact</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[var(--color-accent-light)] transition-colors"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-navy)] rounded-lg flex items-center justify-center text-white">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-[var(--color-navy)]">{item.label}</div>
                    <div className="text-sm text-[var(--color-text-secondary)]">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Specialized Contact Points */}
          <div className="card-base">
            <h3 className="text-xl font-semibold text-[var(--color-navy)] mb-6">
              {activeView === 'business' ? 'Business Contacts' : 'Technical Contacts'}
            </h3>
            <div className="space-y-4">
              {specializedContacts.map((contact, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--color-navy)] mb-2">{contact.title}</h4>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-3">{contact.description}</p>
                  <a 
                    href={`mailto:${contact.contact}`}
                    className="text-[var(--color-teal)] text-sm font-medium hover:underline"
                  >
                    {contact.contact}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="card-base bg-gradient-to-r from-[var(--color-accent-light)] to-blue-50">
            <h3 className="text-xl font-semibold text-[var(--color-navy)] mb-4">
              {activeView === 'business' ? 'Partnership Opportunities' : 'Developer Resources'}
            </h3>
            {activeView === 'business' ? (
              <div className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <p>• Government education departments and skill development agencies</p>
                <p>• Educational institutions and career counseling centers</p>
                <p>• Angel investors and venture capital firms</p>
                <p>• EdTech companies and technology integration partners</p>
              </div>
            ) : (
              <div className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <p>• API documentation and technical specifications</p>
                <p>• Integration guides and implementation examples</p>
                <p>• System architecture consultation and support</p>
                <p>• Developer tools, SDKs, and testing environments</p>
              </div>
            )}
            <div className="mt-4 pt-4 border-t border-gray-300">
              <p className="text-xs text-[var(--color-text-secondary)]">
                Response time: 24-48 hours for all inquiries • Available Monday-Friday, 9 AM - 6 PM IST
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
