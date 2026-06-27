import React, { useState, useEffect } from 'react';
import { AvailabilitySection } from "../components/hi/AvailabilitySection";
import { ContactFooterSection } from "../components/hi/ContactFooterSection";
import { ContactsSection } from "../components/hi/ContactsSection";
import  MessageSection  from "../components/hi/MessageSection";
import portfolio from "../assets/portfolio.svg";
import { Link } from "react-router-dom"; // Essential tracking import

// Ordered structural sections mapping out your layout pipeline
const sections = [
  { id: "contacts", Component: ContactsSection },
  { id: "message", Component: MessageSection },
  { id: "availability", Component: AvailabilitySection },
  { id: "contact-footer", Component: ContactFooterSection },
];

export default function SayHiPage() {
  const [showTopbar, setShowTopbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [text, setText] = useState("Want to collaborate, or just say hi?");
  const [fade, setFade] = useState(true);
  

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

  useEffect(() => {
      const interval = setInterval(() => {
        // Start fade out
        setFade(false);
        
        setTimeout(() => {
          // Toggle the wording while hidden
          setText((prev) => 
            prev === "Hi I'm Carl" ? "Want to collaborate, or just say hi?" : "Hi I'm Carl" 
          );
          // Fade back in
          setFade(true);
        }, 300); // Matches the duration-300 transition time
      }, 3000); // Changes text every 4 seconds
  
      return () => clearInterval(interval);
    
    } , []);

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
                className={`font-medium text-white tracking-tight cursor-pointer select-none text-sm sm:text-base transition-opacity duration-300 ${
                    fade ? "opacity-100" : "opacity-0"
                }`} 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
            {text}
            </span>
          </div>
          
          {/* Right Navigation Controls */}
          {/* 🛠️ FIXED: Swapped 'href' for 'to' and stripped 'e.preventDefault()' so pages resolve cleanly */}
          <nav className="hidden sm:flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium">
            <Link 
              to="/me" 
              className="text-gray-400 hover:text-white transition-colors py-1"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}v
            >
              Me
            </Link>
            <Link
              to="/stuffbuilt" 
              className="text-gray-400 hover:text-white transition-colors py-1"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Stuff
            </Link>
            <Link
              to="/stack" 
              className="text-gray-400 hover:text-white transition-colors py-1"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Stack
            </Link>
            
            {/* Premium CTA Button */}
            <Link
              to="/" 
              className="text-gray-400 hover:text-white transition-colors py-1"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}

            >
              Home
            </Link>
          </nav>

          {/* HAMBURGER BUTTON: Visible on mobile, hidden on desktop (sm:hidden) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 relative focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

          {/* MOBILE MENU OVERLAY: Slides/Fades down when active on mobile viewports */}
          <div
            className={`fixed inset-0 top-0 left-0 w-full h-screen bg-[#191919]/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 sm:hidden ${
              isMenuOpen 
                ? "opacity-100 translate-y-0 pointer-events-auto" 
                : "opacity-0 -translate-y-full pointer-events-none"
            }`}
          >
            <nav className="flex flex-col items-center gap-8 text-xl font-medium">
              <Link
                to="/me" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Me
              </Link>
              <Link
                to="/stuffbuilt" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Stuff
              </Link>
              <Link
                to="/stack" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Stack
              </Link>
              <Link
                to="/" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-6 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all active:scale-95 text-center w-40"
              >
                Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Structural Flow */}
      <main className="flex w-full flex-col items-center gap-15">
        <div className="relative inline-flex w-full flex-col items-start flex-[0_0_auto] gap-3">
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