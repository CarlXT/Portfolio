import React from 'react';
import PillButton from "../../button/PillButton";
import { Icon } from "@iconify/react";

export default function ProjectCard({
  title,
  status,
  isFeatured,
  imageUrl,
  description,
  techStack = [],
  caseHref = "#contact",
  githubHref = "https://github.com",
  extraHref = "#contact",
  showExtraButton = false,
}) {
  
  // 1. Dynamically construct the buttons array based on the boolean flag
  const activeButtons = [
    { label: "Case", href: caseHref },
    { label: "See on Github", href: githubHref }
  ];

  if (showExtraButton) {
    activeButtons.push({ label: "Try it", href: extraHref });
  }

  return (
    <div className="max-w-md overflow-hidden rounded-4xl bg-[#121212] font-sans text-white shadow-xl flex flex-col justify-between">
      <div>
        {/* Top Image Section */}
        <div className="relative w-full aspect-video overflow-hidden">
          <img 
            src={imageUrl} 
            alt={`${title} project preview`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          
          <div className="absolute inset-0 bg-linear-to-t from-[#121212]/99 via-transparent to-transparent pointer-events-none" />

          {/* Featured Badge */}
          {isFeatured && (
            <div className="absolute top-5 left-5 rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#4A25B1]">
                Featured
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 pb-2">
          {/* Title and Status */}
          <div className="flex items-baseline justify-between mb-5 gap-2">
            <h2 className="text-3xl font-medium tracking-tight truncate" title={title}>{title}</h2>
            <span className="text-sm text-gray-400 font-medium shrink-0">{status}</span>
          </div>

          {/* Tech Stack Icons Container */}
          <div 
            className="flex flex-wrap items-center gap-2 mb-6"
            aria-label="Technologies used in this project"
          >
            {techStack.map((iconString, index) => {
                const formattedIcon = iconString.startsWith("material-icon-theme:")
                ? iconString.replace("material-icon-theme:", "devicon:")
                : iconString;

                return (
                  <div 
                      key={index} 
                      className="h-9 w-9 flex items-center justify-center bg-white/3 border border-white/5 rounded-xl hover:border-white/10 hover:bg-white/6 transition-all duration-200 group/icon"
                      title={iconString.split(":")[1] || iconString}
                  >
                      <Icon 
                        icon={formattedIcon} 
                        className="h-5 w-5 text-gray-400 group-hover/icon:text-white transition-colors duration-200" 
                      />
                  </div>
                );
            })}
          </div>

          {/* Description Text */}
          <p className="text-sm leading-relaxed text-gray-400 font-light mb-6">
            {description}
          </p>
        </div>
      </div>

      {/* 🛠️ Fixed Button Container & Corrected Important Rules */}
      <div className="p-6 pt-0 mt-auto">
        <div className="flex flex-row items-center justify-end gap-3 relative z-10 w-full">      
          {activeButtons.map((button, index) => (
            <PillButton 
              key={index}
              // Fixed the important overrides from 'w-auto!' to '!w-auto' and removed constraining layouts
              className="w-auto! max-w-none! px-5 py-2.5 text-center text-sm font-sans tracking-tight whitespace-nowrap inline-flex items-center justify-center cursor-pointer transition-colors"
              onClick={() => window.open(button.href, button.href.startsWith('http') ? '_blank' : '_self')}
            >
              {button.label} 
            </PillButton>
          ))}
        </div>
      </div>

    </div>
  );
}