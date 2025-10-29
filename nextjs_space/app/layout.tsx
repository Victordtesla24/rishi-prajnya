
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: "RishiPrajnya AI Career Guidance Platform - Strategic Business & Technical Analysis",
  description: "Comprehensive strategic analysis and technical architecture for RishiPrajnya AI Career Guidance Platform by FutureWithAI. Government partnerships, financial projections, and scalable AI implementation for Maharashtra and pan-India expansion.",
  keywords: [
    "RishiPrajnya", 
    "AI Career Guidance", 
    "EdTech Platform", 
    "Maharashtra Government", 
    "Artificial Intelligence", 
    "Career Counseling", 
    "Educational Technology",
    "FutureWithAI",
    "Startup India",
    "Business Plan",
    "Technical Architecture"
  ],
  authors: [{ name: "FutureWithAI Team" }],
  openGraph: {
    title: "RishiPrajnya AI Career Guidance Platform - Strategic Analysis",
    description: "Publication-ready analysis for RishiPrajnya AI Career Guidance Platform. Financial projections, technical architecture, and market strategy for Maharashtra and pan-India expansion.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RishiPrajnya AI Career Guidance Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RishiPrajnya AI Career Guidance Platform",
    description: "Comprehensive business and technical analysis for AI-powered career guidance platform",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
