import React, { useRef } from "react";

const services = [
  "Full stack mobile application development",
  "Modern frontend frameworks (React, Jetpack Compose)",
  "Backend API development (Node.js, Python)",
  "Cloud deployment and DevOps",
];

export const IntroSection = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      // 833px (card width) + 24px (gap-6) = 857px per scroll step
      const scrollAmount = direction === "left" ? -857 : 857;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <section
      className="flex flex-col w-full items-start gap-12 py-16 px-4 md:px-16 mx-auto relative text-white overflow-hidden"
      aria-labelledby="intro-title"
    >
      {/* Container Wrapping Track + Buttons */}
      <div className="relative w-full max-w-full group">
        
        {/* Navigation Buttons (Placed outside the track container so they remain fixed) */}
        <button
          onClick={() => scroll("left")}
          type="button"
          aria-label="Scroll left"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-12 h-12 rounded-full bg-black/50 border border-white/10 text-white items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button
          onClick={() => scroll("right")}
          type="button"
          aria-label="Scroll right"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-12 h-12 rounded-full bg-black/50 border border-white/10 text-white items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Main Track Container */}
        <div 
          ref={scrollContainerRef}
          className="flex flex-row overflow-x-auto py-4 my-4snap-x snap-mandatory items-stretch gap-6 w-full scrolllbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          
          {/* Left Card: Image Banner */}
          <article
            className="relative w-208.25 max-w-208.25 snap-start min-h-100 rounded-[34px] overflow-hidden bg-blend-luminosity shrink-0"
            aria-label="Mobile app developer feature"
          >
            <div
              className="absolute inset-0 bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: "url('/image.png')" }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-black/30 "
              aria-hidden="true"
            />
            <h1
              id="intro-title"
              className="absolute bottom-8 left-8 max-w-sm font-sans font-normal text-white text-4xl md:text-5xl tracking-normal leading-tight"
            >
              Mobile app developer
            </h1>
          </article>

          {/* Right Card: What I Do */}
          <article className="w-[833px] max-w-[833px] snap-start flex flex-col justify-center gap-6 p-8 md:p-12 relative rounded-[34px] overflow-hidden bg-linear-to-r from-[#3b0aed] via-[#301498] to-[#2d187a] shrink-0">
            <h2 className="font-sans font-medium text-white text-4xl md:text-5xl tracking-normal leading-tight">
              What I do?
            </h2>
            <ul className="list-disc pl-6 font-sans font-light text-white/90 text-xl md:text-2xl space-y-3">
              {services.map((service) => (
                <li key={service} className="text-left">
                  {service}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>

      {/* Middle Row: Sub-headline Copy */}
      <div className="w-full max-w-xl mt-4">
        <article className="flex flex-col gap-3">
          <h3 className="font-sans font-semibold text-white text-2xl tracking-normal">
            Mobile app developer
          </h3>
          <p className="font-sans font-light text-gray-400 text-lg md:text-xl leading-relaxed">
            Build production-ready applications with confidence with thoroughly
            designed artifacts and comprehensive verification tests.
          </p>
        </article>
      </div>

      {/* Bottom Row: Approach Philosophy Narrative */}
      <div className="w-full flex justify-end mt-4">
        <p className="w-full lg:max-w-4xl font-sans font-light text-gray-300 text-lg md:text-xl leading-relaxed text-left lg:text-right">
          My approach to software development sits in a unique intersection of
          conceptualization, design, and code implementation. As a developer and
          UI/UX designer, I don&apos;t believe in a wall between design handoffs
          and architecture implementation. My work focuses on translating
          complex operational frameworks into smooth digital experiences.
          Whether I am architecting a native Android ecosystem to help parents
          monitor real-time student analytics or diving into full-stack
          frameworks to build a study-buddy tool to help students, my goal is to
          remove friction from the human experience through clean code.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;