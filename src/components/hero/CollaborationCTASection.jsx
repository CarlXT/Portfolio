import PillButton from "../button/PillButton";

export const CollaborationCTASection = () => {
  const ctaButtons = [{ label: "Let's collaborate", href: "#contact" }];

  return (
    <section
      /* 1. Changed fixed h-118.5 to py-24. This lets the section scale organically with your content padding */
      className="flex flex-col w-full min-h-fit py-24 items-center gap-12 relative       
      bg-[linear-gradient(90deg,rgba(59,10,237,1)_0%,rgba(48,20,152,1)_49%,rgba(45,24,122,1)_100%)]"
      aria-labelledby="collaboration-cta-title"
    >
      {/* 2. Switched from a fixed 286px height to max-w-5xl to ensure the inner container is responsive */}
      <div className="flex flex-col items-center justify-center max-w-5xl px-6 text-center relative w-full gap-6">
        <h2
          id="collaboration-cta-title"
          /* 3. Removed rigid h-[136px] and w-[976px]. Let text track flows naturally */
          className="font-['SF_Compact-Bold',Helvetica] font-bold text-white text-6xl md:text-[89px] tracking-tight leading-tight"
        >
          Want to work with me?
        </h2>
        <p 
          /* 4. Removed rigid h-[95px] and w-[952px]. Added text-white/80 for a smoother visual contrast */
          className="font-['SF_Pro-Regular',Helvetica] font-normal text-white/80 text-xl md:text-[32px] max-w-3xl leading-relaxed"
        >
          Currently open to new opportunities. Let's collaborate and ship some great software.
        </p>
      </div>

      {/* Reusable pill buttons layer rendering loop */}
      <div className="flex items-center justify-center relative z-10">
        {ctaButtons.map((button, index) => (
          <PillButton 
            key={index}
            onClick={() => window.open(button.href, '_self')}
          >
            {button.label} 
          </PillButton>
        ))}
      </div>
    </section>
  );
};