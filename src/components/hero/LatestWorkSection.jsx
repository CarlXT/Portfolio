import PillButton from "../button/PillButton";
import mis_home from "../../assets/mis_home.png";
import mis_login from "../../assets/mis_login.png";
import mis_me from "../../assets/mis_me.png";

const workItems = [
  { id: 1, image: mis_home },
  { id: 2, image: mis_login },
  { id: 3, image: mis_me },
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
      {/* Grid container wrapper mapped for the mobile mockups */}
      <div
        className="flex flex-wrap items-center justify-center gap-8 relative self-stretch w-full px-6"
        role="list"
        aria-label="Latest work previews"
      >
        {workItems.map((item) => (
          <div
            key={item.id}
            role="listitem"
            /* 3. Render container as a premium card structure */
            className="relative w-81.5 h-171 bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl
             group transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
          >
            {/* 4. THE FIX: Displaying your actual image asset inside an HTML tag */}
            <img 
              src={item.image} 
              alt={item.label}
              className="w-full h-full object-cover object-top select-none transition-transform duration-500 group-hover:scale-105"
            />
          </div>
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
