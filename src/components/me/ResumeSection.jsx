import PillButton from "../button/PillButton";

const experienceData = {
    title: "OJT Experience",
    role: "Technical Assistant",
    company: "Thinking Tools Incorporated",
    durationLocation: "March 2023 (1 month)   Cebu City, Philippines",
    description: [
        "Assembled 15+ custom desktop computers, including high-performance gaming rigs and office workstations for client orders.",
        "Processed Microsoft account setups for 50+ customers during 6-week immersion, handling end-to-end registration and configuration.",
        "Installed Windows OS on newly built PC units, configuring drivers and system software for immediate client use."

    ]
};

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Cebu - Main Campus",
    date: "August 2023 - present",
    description: [
      "Comprehensive study of computer science fundamentals, programming, software development, and AI",
    ],
  },
  {
    degree: "Senior High School Diploma",
    school: "University of Cebu - Main Campus",
    date: "August 2021 - June 2023",
    description: ["Focused on computer hardware studies and computer programming fundamentals in C and Java",],
  },
];

export const ResumeSection = () => {
  const resumeButton = [{ label: "Resume", href: "#contact" }];

  return (
    <main 
      className="flex flex-col w-full items-start gap-12 py-16 px-4 md:px-16 mx-auto relative text-white"
      aria-labelledby="Resume"
    >
      {/* Experience Section */}
      <section className="flex flex-col items-stretch gap-6 w-full">
        <header className="w-full mt-4">
          <h1 className="text-8xl font-SF_Pro font-light tracking-wide text-white mb-6">
            OJT Experience
          </h1>
        </header>
        
        <div className="w-full flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white tracking-normal">
              {experienceData.role}
            </h2>
            <div className="text-3xl font-light text-white mt-4">
              {experienceData.company}
            </div>
            <div className="text-3xl font-light text-white mt-1">
              {experienceData.durationLocation}
            </div>
          </div>

          <ul className="list-disc pl-5 space-y-1 text-neutral-300 text-base mt-4 w-full">
            {experienceData.description.map((bullet, idx) => (
              <li key={idx} className="font-light text-lg max-text-xl">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="flex flex-col gap-6 w-full mt-4">
        <header className="w-full">
          <h2 className="text-8xl font-light tracking-wide text-white mb-6">
            Education
          </h2>
        </header>
        
        <div className="flex flex-col gap-8 w-full">
          {educationData.map((item, index) => (
            <article key={`${item.degree}-${index}`} className="flex flex-col gap-1 w-full">
              <h3 className="text-2xl font-semibold text-white tracking-normal">
                {item.degree}
              </h3>
              <div className="text-3xl font-light text-white mt-4">
                {item.school}
              </div>
              <div className="text-xl font-light text-neutral-400 mt-1">
                {item.date}
              </div>
              
              {item.description.length > 0 && (
                <div className="mt-1 text-base text-neutral-300 font-light">
                  {item.description.map((paragraph, pIdx) => (
                    <p key={pIdx} className="leading-relaxed text-lg max-text-xl">{paragraph}</p>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Footer Block */}
      <footer className="flex items-center justify-center mt-8 w-full gap-4">
        <div className="flex items-center justify-center relative z-10 gap-4">
          {resumeButton.map((button, index) => (
            <PillButton 
              key={index}
              onClick={() => window.open(button.href, '_self')}
            >
              {button.label} 
            </PillButton>
          ))}
        </div>
      </footer>
    </main>
  );
};

export default ResumeSection;