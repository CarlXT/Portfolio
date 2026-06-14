import React, { useState, useEffect } from 'react';
import { HeroSection } from "../components/hero/HeroSection";
import { LatestWorkSection } from "../components/hero/LatestWorkSection";
import { CollaborationCTASection } from "../components/hero/CollaborationCTASection";
import { ContactFooterSection } from "../components/hero/ContactFooterSection";
import portfolio  from "../assets/portfolio.svg";

// Ordered structural sections mapping out your layout pipeline
const sections = [
  { id: "hero", Component: HeroSection },
  { id: "latest-work", Component: LatestWorkSection },
  { id: "collaboration-cta", Component: CollaborationCTASection },
  { id: "contact-footer", Component: ContactFooterSection },
];

export default function HeroPage() {
  const [showTopbar, setShowTopbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger threshold: Show the topbar if scrolled down more than 500 pixels
      if (window.scrollY > 500) {
        setShowTopbar(true);
      } else {
        setShowTopbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Clean up the window listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#191919] text-(--text) selection:bg-(--accent-bg) selection:text-(--accent) font-sans antialiased">
      
      {/* Global Navigation Header - Fades and slides in on scroll */}
<header 
  className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#191919]/80 border-b border-white/5 transition-all duration-300 ${
    showTopbar 
      ? "translate-y-0 opacity-100 pointer-events-auto" 
      : "-translate-y-full opacity-0 pointer-events-none"
  }`}
>
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
    
    {/* Left Branding Group */}
    <div className="flex items-center gap-2">
      <img 
        src={portfolio} 
        alt="Logo" 
        className="h-7 sm:h-8 w-auto cursor-pointer select-none active:scale-95 transition-transform"  
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
      {/* 💡 Typo Fix: Swapped 'selection:' for 'select-none' + hidden on ultra-small mobile to save layout space */}
      <span 
        className="font-medium text-white tracking-tight cursor-pointer select-none text-sm sm:text-base" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Hi I'm Carl
      </span>
    </div>
    
    {/* Right Navigation Controls */}
    {/* 💡 Mobile-First Navigation spacing scales up on tablet/desktop targets */}
    <nav className="hidden sm:flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium">
      <a 
        href="#hero" 
        onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }}
        className="text-gray-400 hover:text-white transition-colors py-1"
      >
        Me
      </a>
      <a 
        href="#latest-work" 
        onClick={(e) => { e.preventDefault(); document.getElementById('latest-work')?.scrollIntoView({ behavior: 'smooth' }); }}
        className="text-gray-400 hover:text-white transition-colors py-1"
      >
        Stuff
      </a>
      <a 
        href="#collaboration-cta" 
        onClick={(e) => { e.preventDefault(); document.getElementById('collaboration-cta')?.scrollIntoView({ behavior: 'smooth' }); }}
        className="text-gray-400 hover:text-white transition-colors py-1"
      >
        Stack
      </a>
      
      {/* Premium CTA Button */}
      <a 
        href="#contact-footer" 
        onClick={(e) => { e.preventDefault(); document.getElementById('contact-footer')?.scrollIntoView({ behavior: 'smooth' }); }}
        className="ml-1 sm:ml-2 px-2.5 sm:px-4 py-1.5 rounded-full bg-white/5 text-white hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 active:scale-95 text-center"
      >
        Say Hi
      </a>
    </nav>

            {/* 2. HAMBURGER BUTTON: Visible on mobile, hidden on desktop (sm:hidden) */}
        <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 relative focus:outline-none"
            aria-label="Toggle Menu"
        >
            {/* Animated Line 1 */}
            <span className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            {/* Animated Line 2 */}
            <span className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
            {/* Animated Line 3 */}
            <span className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* 3. MOBILE MENU OVERLAY: Slides/Fades down when active on mobile viewports */}
        <div
            className={`fixed inset-0 top-0 left-0 w-full h-screen bg-[#191919]/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 sm:hidden ${
            isMenuOpen 
                ? "opacity-100 translate-y-0 pointer-events-auto" 
                : "opacity-0 -translate-y-full pointer-events-none"
            }`}
        >
            <nav className="flex flex-col items-center gap-8 text-xl font-medium">
                <a 
                    href="#hero" 
                    onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    Me
                </a>
                <a 
                    href="#latest-work" 
                    onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.getElementById('latest-work')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    Stuff
                </a>
                <a 
                    href="#collaboration-cta" 
                    onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.getElementById('collaboration-cta')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    Stack
                </a>
                <a 
                    href="#contact-footer" 
                    onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.getElementById('contact-footer')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="px-6 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all active:scale-95 text-center w-40"
                >
                    Say Hi
                </a>
            </nav>
        </div>
  </div>
</header>

      {/* Main Structural Flow */}
      <main className="flex w-full flex-col items-center gap-15">
        <div className="relative inline-flex w-full flex-col items-start flex-[0_0_auto] gap-10">
          {sections.map(({ id, Component }) => (
            <section key={id} id={id} className="w-full">
              <Component />
            </section>
          ))}
        </div>
      </main>

    </div>
  );
}