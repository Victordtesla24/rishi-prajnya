
'use client';

import { useState } from 'react';
import { ArrowUp, Download, Share2, Bookmark } from 'lucide-react';

export default function FloatingActionButton() {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowMenu(false);
  };

  const shareDocument = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'RishiPrajnya AI Career Guidance Platform - Strategic Analysis',
          text: 'Comprehensive analysis for AI-powered career guidance platform in Maharashtra, India',
          url: window.location.href
        });
      } catch (error) {
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } else {
      // Fallback for browsers without Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
    setShowMenu(false);
  };

  const downloadPDF = () => {
    // This would typically generate and download a PDF version
    alert('PDF download functionality will be implemented in production');
    setShowMenu(false);
  };

  const bookmarkPage = () => {
    // Add to bookmarks or favorites
    try {
      if ((window as any).external && (window as any).external.AddFavorite) {
        (window as any).external.AddFavorite(window.location.href, document.title);
      } else {
        alert('Press Ctrl+D (Cmd+D on Mac) to bookmark this page');
      }
    } catch (error) {
      alert('Press Ctrl+D (Cmd+D on Mac) to bookmark this page');
    }
    setShowMenu(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Menu */}
      <div className={`absolute bottom-16 right-0 space-y-3 transition-all duration-300 ${
        showMenu ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'
      }`}>
        <button
          onClick={shareDocument}
          className="flex items-center justify-center w-12 h-12 bg-white text-[var(--color-navy)] rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
          title="Share Document"
        >
          <Share2 size={20} />
        </button>
        <button
          onClick={downloadPDF}
          className="flex items-center justify-center w-12 h-12 bg-white text-[var(--color-navy)] rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
          title="Download PDF"
        >
          <Download size={20} />
        </button>
        <button
          onClick={bookmarkPage}
          className="flex items-center justify-center w-12 h-12 bg-white text-[var(--color-navy)] rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
          title="Bookmark Page"
        >
          <Bookmark size={20} />
        </button>
      </div>

      {/* Main FAB */}
      <button
        onClick={showMenu ? scrollToTop : () => setShowMenu(!showMenu)}
        onBlur={() => setTimeout(() => setShowMenu(false), 150)}
        className={`fab transform transition-all duration-300 ${
          showMenu ? 'rotate-45 bg-[var(--color-navy)]' : 'rotate-0 bg-[var(--color-gold)]'
        }`}
        title={showMenu ? "Back to Top" : "Quick Actions"}
      >
        {showMenu ? <ArrowUp size={24} /> : <span className="text-2xl">⚡</span>}
      </button>
    </div>
  );
}
