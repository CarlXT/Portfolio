export const CollaborationCTASection = () => {
  const ctaButtons = [{ label: "Let&apos;s collaborate", href: "#contact" }];

  return (
    
    <section
      className="flex flex-col w-full h-118.5 items-center gap-15 relative 
      bg-[linear-gradient(90deg,rgba(59,10,237,1)_0%,rgba(48,20,152,1)_49%,rgba(45,24,122,1)_100%)]"
      aria-labelledby="collaboration-cta-title"
    >
      <div className="flex flex-col h-[286px] items-center justify-center px-[94px] py-0 relative self-stretch w-full">
        <h2
          id="collaboration-cta-title"
          className="relative flex items-center justify-center w-[976px] h-[136px] font-['SF_Compact-Bold',Helvetica] font-bold text-white text-[89px] text-center tracking-[0] leading-[normal]"
        >
          Want to work with me?
        </h2>
        <p className="relative w-[952px] h-[95px] font-['SF_Pro-Regular',Helvetica] font-normal text-white text-[40px] text-center tracking-[0] leading-[normal]">
          Currently open to new opportunities. Let&apos;s collaborate and ship
          some great software.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-[52px_52px] relative self-stretch w-full flex-[0_0_auto]">
        {ctaButtons.map((button) => (
          <a
            key={button.label}
            href={button.href}
            aria-label="Let's collaborate"
            className="flex w-[289px] h-[84px] items-center justify-center gap-[3px] px-2.5 py-1 relative bg-[#00000001] rounded-[1000px] backdrop-blur-[2.0px]  backdrop-saturate-100 [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_0_-1px_1px_rgba(0,0,0,0.13)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <span className="relative w-fit font-['SF_Pro-Regular',Helvetica] font-normal text-colors-grays-white text-2xl tracking-[-0.23px] leading-5 whitespace-nowrap">
              Let&apos;s collaborate
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};
