
# RishiPrajnya AI Career Guidance Platform

A sophisticated, executive-level interactive document/webdoc showcasing the RishiPrajnya AI Career Guidance Platform's strategic vision, architecture, and implementation roadmap.

## 🎯 Project Overview

RishiPrajnya is an AI-powered career guidance platform designed to revolutionize career counseling in India, starting with Maharashtra and expanding to tier-2 and tier-3 cities. The platform combines advanced AI/ML capabilities with Subject Matter Expert (SME) insights to deliver personalized career guidance.

## 🏗️ Project Structure

```
rishi-prajnya/
├── app/                       # App directory (Next.js 13+ App Router)
│   ├── api/                  # API routes
│   │   └── contact/          # Contact form API
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/               # React components
│   ├── ui/                  # Shadcn UI components
│   ├── ArchitectureLayers.tsx
│   ├── ContactSection.tsx
│   ├── CostEvidence.tsx
│   ├── ExecutiveSummary.tsx
│   ├── FinancialCharts.tsx
│   ├── FloatingActionButton.tsx
│   ├── HeroSection.tsx
│   ├── ImplementationRoadmap.tsx
│   ├── Navigation.tsx
│   ├── ScrollProgress.tsx
│   └── TeamSection.tsx
├── lib/                      # Utility libraries
│   ├── db.ts                # Database configuration
│   ├── types.ts             # TypeScript type definitions
│   └── utils.ts             # Utility functions
├── prisma/                  # Prisma ORM
│   └── schema.prisma        # Database schema
├── public/                  # Static assets
│   ├── favicon.svg
│   ├── og-image.png
│   └── robots.txt
├── package.json             # Dependencies and scripts
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── vercel.json              # Vercel deployment configuration
└── README.md                # This file
```

## 🚀 Technology Stack

- **Framework**: Next.js 14.2.28 (React 18.2.0)
- **Language**: TypeScript 5.2.2
- **Styling**: Tailwind CSS 3.3.3
- **UI Components**: Radix UI, Shadcn UI
- **Database**: PostgreSQL (via Prisma ORM 6.7.0)
- **Charts**: Chart.js 4.4.9, Recharts 2.15.3, Plotly.js 2.35.3
- **Animation**: Framer Motion 10.18.0
- **Forms**: React Hook Form 7.53.0, Formik 2.4.5
- **State Management**: Zustand 5.0.3, Jotai 2.6.0
- **Package Manager**: Yarn
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js (v18.x or higher)
- Yarn package manager
- PostgreSQL database
- Vercel account (for deployment)
- Git

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Victordtesla24/rishi-prajnya.git
cd rishi-prajnya
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Environment Variables

Create a `.env.local` file in the project root:

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/rishiprajnya?connect_timeout=15"

# Add other environment variables as needed
NODE_ENV=development
```

### 4. Database Setup

```bash
# Generate Prisma Client
yarn prisma generate

# Run database migrations
yarn prisma migrate dev

# Seed the database (optional)
yarn prisma db seed
```

## 🏃 Development

### Start Development Server

```bash
yarn dev
```

The application will be available at `http://localhost:3000`.

### Build for Production

```bash
yarn build
```

### Start Production Server

```bash
yarn start
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

#### Method 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Link project
vercel link

# Deploy to production
vercel --prod
```

#### Method 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure environment variables
6. Click "Deploy"

Vercel will automatically deploy on every push to the `main` branch.

### Environment Variables on Vercel

Add these environment variables in the Vercel Dashboard:

1. Go to Project Settings → Environment Variables
2. Add `DATABASE_URL` and other required variables
3. Select appropriate environments (Production/Preview/Development)
4. Redeploy the project

## 🎨 Key Features

### Interactive Components

- **Executive Summary**: Overview of the platform's vision and value proposition
- **Architecture Layers**: Visual representation of the technical architecture
- **Cost Evidence**: Data-driven cost analysis and projections
- **Financial Charts**: Interactive visualizations of financial metrics
- **Implementation Roadmap**: 5-year phased rollout plan
- **Team Section**: Founder and leadership profiles
- **Contact Section**: Integrated contact form with database persistence

### Design Highlights

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dark Mode Support**: Automatic theme switching based on system preferences
- **Smooth Animations**: Framer Motion-powered transitions
- **Accessibility**: WCAG-compliant with keyboard navigation support
- **Performance**: Optimized images, code splitting, and lazy loading

## 👥 Founding Team

- **Founder & CEO**: Visionary leader with strategic oversight
- **Co-Founder & CTO**: Technical architect and implementation lead

## 💼 Revenue Model

### Hybrid Approach

1. **Government Contracts**: Primary revenue through public sector partnerships
2. **B2B2C Model**: Enterprise partnerships with educational institutions
3. **Premium Subscriptions**: Freemium model with advanced features
4. **Certifications**: Career assessment and certification services

## 🗺️ Market Expansion Plan

### Phase 1-2 (Years 1-2)
- **Focus**: Maharashtra, India
- **Target**: Tier-2 and Tier-3 cities
- **Objective**: Establish market presence and validate model

### Phase 3-5 (Years 3-5)
- **Expansion**: Pan-India rollout
- **Scale**: Multi-state government partnerships
- **Growth**: Enterprise and institutional adoption

## 💰 Funding Status

- **Secured Funding**: [Amount] AUD
- **Required Funding**: [Amount] AUD for 5-year roadmap
- **Investment Stage**: [Series A/B/Seed]

## 📊 Financial Projections

Comprehensive 5-year financial analysis available in the interactive document, including:
- Revenue projections
- Cost breakdowns (Infrastructure, Personnel, Marketing)
- ROI analysis
- Market penetration metrics

## 🤝 Contributing

This is a private project. For inquiries or collaboration opportunities, please contact the team through the website's contact form.

## 📄 License

All rights reserved. © 2024 RishiPrajnya

## 📞 Contact

For business inquiries, partnerships, or technical support:
- Website: [rishi-prajnya.vercel.app](https://rishi-prajnya.vercel.app)
- GitHub: [@Victordtesla24](https://github.com/Victordtesla24)

---

**Built with ❤️ using Next.js, TypeScript, and Abacus.AI Deep Agent**
