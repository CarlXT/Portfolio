import React from "react";

export const IntroSection = () => {
  return (
   <section
      aria-labelledby="contacts-title"
      className="flex flex-col w-full min-h-fit py-24 items-center gap-10 relative max-w-full"
    >
      <header className="flex flex-col items-center justify-center px-6 py-0 relative self-stretch w-full text-center gap-4">
        {/* Responsive Typography Scales */}
        <h1
          id="contacts-title"
          className="relative flex items-center justify-center max-w-5xl font-['SF_Compact-Bold',Helvetica] font-bold text-white text-4xl sm:text-5xl md:text-[89px] tracking-tight leading-tight"
        >
          Stuff I Built
        </h1>
        <p className="relative max-w-4xl font-['SF_Pro-Regular',Helvetica] font-normal text-white/80 text-lg sm:text-xl md:text-[32px] leading-relaxed mx-auto">
          Where visual design meets engineering logic. These are the select projects I've made to turn complex real-world problems into fluid, responsive human experiences.
        </p>
      </header>

    </section>
  );
};

export default IntroSection;