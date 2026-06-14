import React from "react";
import { Icon } from "@iconify/react";

const cards = [
  {
    title: "Me",
    description: "A quick look into who I am, my professional path, and what drives my craft.",
    descriptionWidthClass: "w-[244px]",
    icon: "ph:user-bold",
    // Custom glass glow tint for an organic liquid feel
    glowClass: "from-blue-500/10 via-transparent to-transparent",
  },
  {
    title: "Stuff I Built",
    description: "From rough ideas to clean code, here is a look at what I've been working on.",
    descriptionWidthClass: "w-[245px]",
    icon: "solar:code-2-bold",
    glowClass: "from-purple-500/10 via-transparent to-transparent",
  },
  {
    title: "Stack",
    description: "A mix of what I learned in school, certified skills, and languages I speak fluently.",
    descriptionWidthClass: "w-[242px]",
    icon: "fluent:layer-20-filled",
    glowClass: "from-emerald-500/10 via-transparent to-transparent",
  },
  {
    title: "Say Hi",
    description: "My inbox is always open. Let's grab a virtual coffee and build something cool together.",
    descriptionWidthClass: "w-[249px]",
    icon: "solar:letter-bold",
    glowClass: "from-amber-500/10 via-transparent to-transparent",
  },
];

export const HeroSection = () => {
  return (
   <section
      aria-labelledby="latest-work-title"
      className="flex flex-col w-full min-h-fit py-24 items-center gap-16 relative max-w-full"
    >
      <header className="flex flex-col items-center justify-center px-6 py-0 relative self-stretch w-full text-center gap-4">
        {/* Responsive Typography Scales: text-4xl on mobile, text-5xl on tablet, 89px on desktop */}
        <h1
          id="latest-work-title"
          className="relative flex items-center justify-center max-w-5xl font-['SF_Compact-Bold',Helvetica] font-bold text-white text-4xl sm:text-5xl md:text-[89px] tracking-tight leading-tight"
        >
          Coding with sense, designing with feelin'
        </h1>
        <p className="relative max-w-3xl font-['SF_Pro-Regular',Helvetica] font-normal text-white/80 text-lg sm:text-xl md:text-[32px] leading-relaxed mx-auto">
          Hi, I'm Carl. I build smart-friednly applications from the ground up.
        </p>
      </header>
      <nav
        className="flex flex-wrap items-center justify-center gap-8.25 relative self-stretch w-full flex-[0_0_auto]"
        aria-label="Primary section links"
      >
        {cards.map((card) => (
          <a
            key={card.title}
            href="#"
            aria-label={card.title}
            /* 🛠️ THE EXACT DESKTOP SNAP FIX:
              - w-full: Takes up 100% width on mobile views so it adapts neatly.
              - md:w-[282px]: Snaps back to your precise fixed width on desktop screens (768px and up).
              - h-auto md:h-[236px]: Stays fluid on mobile so text doesn't overflow, locks height on desktop.
            */
            className="relative block w-full md:w-70.5 h-auto md:h-59 min-h-45 rounded-[28px] sm:rounded-[34px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent group overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          >
            {/* 1. Pure CSS Internal Liquid Glow */}
            <div className={`absolute inset-0 bg-linear-to-br ${card.glowClass} opacity-100 transition-opacity duration-500 group-hover:opacity-100`} />

            {/* 2. Primary Glass Panel Base */}
            <div className="absolute inset-0 rounded-[28px] sm:rounded-[34px] bg-white/2 backdrop-blur-[20px] border border-white/6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_12px_40px_rgba(0,0,0,0.2)] transition-colors duration-300 group-hover:border-white/12" />
            
            {/* 3. Sleek Subtle Lighting Overlays */}
            <div className="absolute inset-0 rounded-[28px] sm:rounded-[34px] bg-linear-to-b from-white/6 to-transparent pointer-events-none" />

            {/* 4. Active Content Layout */}
            <div className="relative z-10 w-full h-full p-6 flex flex-col justify-between text-left">
              
              {/* Floating Glass Icon Box */}
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white/90 bg-white/4 border border-white/8 text-xl shadow-inner transition-transform duration-300 group-hover:scale-105 group-hover:text-white">
                <Icon icon={card.icon} />
              </div>

              {/* Text Blocks */}
              <div className="mt-6 md:mt-auto">
                <div className="font-['SF_Pro-Regular',Helvetica] font-semibold text-white text-2xl sm:text-3xl tracking-tight mb-2 leading-tight">
                  {card.title}
                </div>
                <p className={`${card.descriptionWidthClass || 'w-full'} font-['SF_Pro-Regular',Helvetica] font-normal text-white/50 text-xs leading-normal transition-colors duration-300 group-hover:text-white/70`}>
                  {card.description}
                </p>
              </div>

            </div>
          </a>
        ))}
      </nav>
    </section>
  );
};

export default HeroSection;