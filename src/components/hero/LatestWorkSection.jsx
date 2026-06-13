const workItems = [
  { id: 1, label: "Project preview 1" },
  { id: 2, label: "Project preview 2" },
  { id: 3, label: "Project preview 3" },
];

const actionButtons = [
  {
    id: 1,
    label: "Try MVP",
    shadow:
      "shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_0_-1px_1px_rgba(0,0,0,0.13)]",
  },
  {
    id: 2,
    label: "More about this app",
    shadow:
      "shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]",
  },
  {
    id: 3,
    label: "View more stuff",
    shadow:
      "shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]",
  },
];

export const LatestWorkSection = () => {
  return (
    <section
      aria-labelledby="latest-work-title"
      className="flex flex-col w-full h-[1073px] items-center gap-[60px] relative max-w-full"
    >
      <header className="flex flex-col h-[286px] items-center justify-center px-[94px] py-0 relative self-stretch w-full">
        <h2
          id="latest-work-title"
          className="relative flex items-center justify-center w-[976px] max-w-full h-[136px] font-['SF_Compact-Bold',Helvetica] font-bold text-white text-[89px] text-center tracking-[0] leading-[normal]"
        >
          My latest stuff
        </h2>
        <p className="relative w-[952px] max-w-full h-[95px] font-['SF_Pro-Regular',Helvetica] font-normal text-white text-[40px] text-center tracking-[0] leading-[normal]">
          Colegio De Alicia Management Information System (MIS) mobile app for
          the parents end.
        </p>
      </header>
      <div
        className="flex flex-wrap h-[537px] items-center justify-center gap-[33px_33px] relative self-stretch w-full"
        role="list"
        aria-label="Latest work previews"
      >
        {workItems.map((item) => (
          <div
            key={item.id}
            role="listitem"
            aria-label={item.label}
            className="relative w-[326px] h-[488px] bg-white"
          />
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-[52px_52px] relative self-stretch w-full flex-[0_0_auto]">
        {actionButtons.map((button) => (
          <button
            key={button.id}
            type="button"
            className={`flex w-[289px] h-[84px] items-center justify-center gap-[3px] px-2.5 py-1 relative
               bg-[#00000001] rounded-[1000px] backdrop-blur-[2.0px] backdrop-brightness-100 backdrop-saturate-100 
               my-glass ${button.shadow} 
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70`}
            aria-label={button.label}
          >
            <span className="relative w-fit font-['SF_Pro-Regular',Helvetica] font-normal text-colors-grays-white text-2xl tracking-[-0.23px] leading-5 whitespace-nowrap">
              {button.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};
