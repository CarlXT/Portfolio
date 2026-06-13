import React, { useState, useEffect } from 'react';
import { HeroSection } from "../components/hero/HeroSection";
import { LatestWorkSection } from "../components/hero/LatestWorkSection";
import { CollaborationCTASection } from "../components/hero/CollaborationCTASection";
import { ContactFooterSection } from "../components/hero/ContactFooterSection";

// Ordered structural sections mapping out your layout pipeline
const sections = [
  { id: "hero", Component: HeroSection },
  { id: "latest-work", Component: LatestWorkSection },
  { id: "collaboration-cta", Component: CollaborationCTASection },
  { id: "contact-footer", Component: ContactFooterSection },
];

export default function HeroPage() {
  const [showTopbar, setShowTopbar] = useState(false);

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
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#191919]/80 border-b border-white/6 transition-all duration-300 ${
          showTopbar 
            ? "translate-y-0 opacity-100 pointer-events-auto" 
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-281.5 mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[#3b0aed] font-bold text-lg">&lt;g&gt;</span>
            <span className="font-medium text-white tracking-tight">Hi I'm Carl</span>
          </div>
          
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="#hero" className="text-gray-400 hover:text-white transition-colors">Me</a>
            <a href="#latest-work" className="text-gray-400 hover:text-white transition-colors">Stuff I Built</a>
            <a href="#collaboration-cta" className="text-gray-400 hover:text-white transition-colors">Stack</a>
            <a href="#contact-footer" className="px-3 py-1.5 rounded-md bg-white/4 text-white hover:bg-white/10 transition-colors border border-white/8">
              Say Hi
            </a>
          </nav>
        </div>
      </header>

      {/* Main Structural Flow */}
      <main className="flex w-full flex-col items-center gap-15">
        <div className="relative inline-flex w-full flex-col items-start flex-[0_0_auto] gap-30">
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