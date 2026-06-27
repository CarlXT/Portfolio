import React from "react";
import { Icon } from "@iconify/react";

const cards = [
  {
    title: "Clean, maintable code",
    description: "Writing clean, decoupled code using architectural patterns like MVVM and Unidirectional Data Flow so that features can scale or change without breaking the system.",
    descriptionWidthClass: "w-[244px]",
    icon: "material-symbols:code",
    glowClass: "from-blue-500/10 via-transparent to-transparent",
  },
  {
    title: "Empathetic engineering",
    description: "From rough ideas to clean code, here is a look at what I've been working on.Prioritizing user and developer experience equally—ensuring interfaces are fluid and responsive on the front end, while the back end remains highly optimized and readable. ",
    descriptionWidthClass: "w-[245px]",
    icon: "carbon:ibm-elo-engineering-insights",
    glowClass: "from-purple-500/10 via-transparent to-transparent",
  },
  {
    title: "Kaizen",
    description: "Constantly exploring next-generation standards of coding and making software like cloud AI integration and memory safety proposals—to evolve my coding practices.",
    descriptionWidthClass: "w-[242px]",
    icon: "carbon:growth",
    glowClass: "from-emerald-500/10 via-transparent to-transparent",
  },
  {
    title: "Collaborative synergy",
    description: "Fostering a unified team environment.",
    descriptionWidthClass: "w-[249px]",
    icon: "streamline-flex:user-collaborate-group-solid",
    glowClass: "from-amber-500/10 via-transparent to-transparent",
  },
];

export const PrinciplesSection = () => {
  return (
    <section
      aria-labelledby="principles-title"
      className="flex flex-col w-full min-h-fit py-24 items-center gap-16 relative"
    >
      <header className="flex flex-col items-center justify-center px-6 py-0 relative self-stretch w-full text-center gap-4">
        <p id="principles-title" className="relative max-w-3xl font-['SF_Pro-Regular',Helvetica] font-normal text-white/80 text-lg sm:text-xl md:text-[32px] leading-relaxed mx-auto">
          My core values
        </p>
      </header>
      
      <div
        className="flex flex-wrap items-stretch justify-center gap-6 px-6 max-w-7xl mx-auto relative self-stretch w-full"
        role="region"
        aria-label="Core principles grid"
      >
        {cards.map((card) => (
          <div
            key={card.title}
            className="relative flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-h-60rounded-[10px] sm:rounded-[34px] group overflow-hidden bg-[#1e1e1e]/40 border border-white/5"
          >
          
            {/* Content Layout Container */}
            <div className="relative z-10 w-full flex-1 p-8 flex flex-col justify-start items-start text-left gap-6">
              
              {/* Top-aligned Vector Icon */}
              <div className="text-white/90 text-3xl shrink-0">
                <Icon icon={card.icon} />
              </div>

              {/* Title & Description Stacked Directly Below Icon */}
              <div className="w-full flex flex-col gap-3">
                <h3 className="font-['SF_Pro-Regular',Helvetica] font-semibold text-white text-xl sm:text-2xl tracking-tight leading-tight">
                  {card.title}
                </h3>
                <p className="w-full font-['SF_Pro-Regular',Helvetica] font-normal text-white/50 text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrinciplesSection;