import React, { useState } from "react";
import PillButton from "../button/PillButton";
import ProjectCard from "../cards/dynamic/ProjectCard";
import { iconLoaded } from "@iconify/react";

export const StuffsSection = () => {
  // Manage the active category filter state ("all", "mobile", or "web")
  const [activeCategory, setActiveCategory] = useState("all");

  const stuffButtons = [
    { label: "All Stuff", category: "all" }, 
    { label: "Mobile apps", category: "mobile" },
    { label: "Web apps", category: "web" }
  ];

  // Exactly 6 unique items from your portfolio
  const projects = [
    {
      id: 1,
      title: "Coldea Parent App",
      status: "Ongoing",
      isFetured:  true,
      imageUrl: "src/assets/mis_home.png",
      description: "Management Information System offering paperless student analytics and real-time monitoring.",
      techStack:[
        "material-icon-theme:kotlin", "vscode-icons:file-type-node", "logos:javascript", "simple-icons:railway",
        "logos:postgresql", "material-icon-theme:git", "fe:github", "devicon:sqlite"
      ],
      showExtraButton: true,
      category: "mobile"
    },
    {
      id: 2,
      title: "C-Flow",
      description: "A VS Code extension designed to automate and enforce memory safety in C programming.",
      category: "web"
    },
    {
      id: 3,
      title: "MIS Parent App",
      description: "Management Information System offering paperless student analytics and real-time monitoring.",
      category: "mobile"
    },
    {
      id: 4,
      title: "StudySync",
      description: "Cloud-synchronized task management and collaborative student productivity platform.",
      category: "mobile"
    },
    {
      id: 5,
      title: "Cloud Infrastructure Hub",
      description: "Automated architecture provisioning maps integrated with foundational AI deployment models.",
      category: "web"
    },
    {
      id: 6,
      title: "Binary Analysis Tool",
      description: "A lightweight structural layout inspection tool for reverse engineering and instruction flow tracing.",
      category: "web"
    }
  ];

  // Filters the array on the fly. If "all", evaluates to true for all 6 cards.
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true;
    return project.category === activeCategory;
  });

  const getDynamicHeadline = () => {
    if (activeCategory === "mobile") return "Mobile Applications";
    if (activeCategory === "web") return "Web Applications & Tools";
    return "All Projects & Artifacts";
  };

  return (
    <section
      aria-labelledby="latest-work-title"
      className="flex flex-col w-full min-h-fit py-24 items-center gap-12 relative max-w-full px-4 md:px-16"
    >
      <h2 id="latest-work-title" className="sr-only">Latest Work and Projects</h2>
      
      {/* Action Buttons Row */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 px-6 w-full max-w-md sm:max-w-none mx-auto">      
        {stuffButtons.map((button, index) => (
          <PillButton 
            key={index}
            className={`w-full sm:w-auto text-center transition-all ${
              activeCategory === button.category 
                ? "bg-white text-black font-medium" 
                : "opacity-60 hover:opacity-100"    
            }`}
            onClick={() => setActiveCategory(button.category)}
          >
            {button.label} 
          </PillButton>
        ))}
      </div>

      {/* Dynamic Text Signal Display */}
      <div className="w-full max-w-7xl mx-auto text-left mt-4">
        <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block mb-1">
          Viewing / {activeCategory === "all" ? "6 items total" : `${activeCategory} apps`}
        </span>
        <h3 className="font-sans font-normal text-white text-3xl md:text-4xl tracking-tight">
          {getDynamicHeadline()}
        </h3>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto transition-all duration-300">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            status={project.status}
            isFeatured={project.isFetured}
            imageUrl={project.imageUrl}
            description={project.description}
            techStack={project.techStack}
            showExtraButton={project.showExtraButton}

          />
        ))}
      </div>
    </section>
  );
};

export default StuffsSection;