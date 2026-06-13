import PillButton from "../button/PillButton";

const workItems = [
  { id: 1, label: "Project preview 1" },
  { id: 2, label: "Project preview 2" },
  { id: 3, label: "Project preview 3" },
];

export const LatestWorkSection = () => {
  const lwsButtons = [{ label: "Try the app", href: "#contact"}, 
                      { label: "About app", href: "https://play.google.com/store/apps/details?id=com.colegiodealicia.mis" },
                      { label: "More stuff", href: "#contact" }];

  return (
    <section
      aria-labelledby="latest-work-title"
      className="flex flex-col w-full h-268.25 items-center gap-15 relative max-w-full"
    >
      <header className="flex flex-col h-71.5 items-center justify-center px-23.5 py-0 relative self-stretch w-full">
        <h2
          id="latest-work-title"
          className="relative flex items-center justify-center w-244 max-w-full h-34 font-['SF_Compact-Bold',Helvetica] font-bold text-white text-[89px] text-center tracking-normal leading-[normal]"
        >
          My latest stuff
        </h2>
        <p className="relative w-238 max-w-full h-23.75 font-['SF_Pro-Regular',Helvetica] font-normal text-white text-[40px] text-center tracking-normal leading-[normal]">
          Colegio De Alicia Management Information System (MIS) mobile app for
          the parents end.
        </p>
      </header>
      <div
        className="flex flex-wrap h-134.5 items-center justify-center gap-[33px_33px] relative self-stretch w-full"
        role="list"
        aria-label="Latest work previews"
      >
        {workItems.map((item) => (
          <div
            key={item.id}
            role="listitem"
            aria-label={item.label}
            className="relative w-81.5 h-122 bg-white"
          />
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-16 relative z-10 px-6">
        {lwsButtons.map((button, index) => (
          <PillButton 
            key={index}
            // For external app links, let's open them in a clean new tab container instead of wiping your site view
            onClick={() => window.open(button.href, button.href.startsWith('http') ? '_blank' : '_self')}
          >
            {button.label} 
          </PillButton>
        ))}
      </div>
    </section>
  );
};
