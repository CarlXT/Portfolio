import PillButton from "../button/PillButton";
import mis_home from "../../assets/mis_home.png";
import mis_login from "../../assets/mis_login.png";
import mis_me from "../../assets/mis_me.png";

const workItems = [
  { id: 1, label: "Home Screen", image: mis_home },
  { id: 2, label: "Login Portal", image: mis_login },
  { id: 3, label: "Profile View", image: mis_me },
];

export const LatestWorkSection = () => {
  const lwsButtons = [
    { label: "Try the app", href: "#contact"}, 
    { label: "About app", href: "https://play.google.com/store/apps/details?id=com.colegiodealicia.mis" },
    { label: "More stuff", href: "#contact" }
  ];

  return (
    <section
      aria-labelledby="latest-work-title"
      className="flex flex-col w-full min-h-fit py-24 items-center gap-16 relative max-w-full"
    >
      <header className="flex flex-col items-center justify-center px-6 py-0 relative self-stretch w-full text-center gap-4">
        {/* Responsive Typography Scales: text-4xl on mobile, text-5xl on tablet, 89px on desktop */}
        <h1
          id="latest-work-title"
          className="relative flex items-center justify-center max-w-5xl font-['SF_Compact-Bold',Helvetica] font-bold text-white text-4xl sm:text-5xl md:text-[89px] tracking-tight leading-tight"
        >
          My latest stuff
        </h1>
        <p className="relative max-w-3xl font-['SF_Pro-Regular',Helvetica] font-normal text-white/80 text-lg sm:text-xl md:text-[32px] leading-relaxed mx-auto">
          Colegio De Alicia Management Information System (MIS) mobile app for the parents end.
        </p>
      </header>

      {/* 🛠️ HORIZONTAL SCROLL CAROUSEL WRAPPER:
        - flex-nowrap: Prevents the cards from wrapping into a vertical column.
        - overflow-x-auto: Enables horizontal swiping on mobile.
        - md:overflow-x-visible md:justify-center: Centers the row normally on desktops.
        - snap-x snap-mandatory: Smooth, app-like native snapping for mobile swiping gestures.
        - no-scrollbar: Optional class if you want to hide the ugly desktop scrollbar tracks.
      */}
      <div
        className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-6 sm:gap-8 relative w-full overflow-x-auto md:overflow-x-visible snap-x snap-mandatory px-6 py-4 scroll-smooth no-scrollbar"
        role="list"
        aria-label="Latest work previews"
      >
        {workItems.map((item) => (
          <div
            key={item.id}
            role="listitem"
            /* 🛠️ FLEX SHRINK & SNAP FIX:
              - flex-shrink-0: ABSOLUTELY CRITICAL. Keeps the mockups from squishing down to 0 width.
              - w-[280px] sm:w-81.5: Makes the cards slightly narrower on tiny phones so users can see the next card peeking out.
              - h-[560px] sm:h-175: Proportional fluid mobile height scaling.
              - snap-center: Locks the card into the center of the viewport on smartphone swipes.
            */
            className="relative shrink-0 w-70 sm:w-81.5 h-150 sm:h-175 snap-center bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl group transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
          >
            <img 
              src={item.image} 
              alt={`Colegio De Alicia MIS Preview - ${item.label}`}
              className="w-full h-full object-cover object-top select-none transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Action Buttons Row */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 px-6 w-full max-w-md sm:max-w-none mx-auto">        {lwsButtons.map((button, index) => (
          <PillButton 
            key={index}
            className="w-full sm:w-auto text-center"
            onClick={() => window.open(button.href, button.href.startsWith('http') ? '_blank' : '_self')}
          >
            {button.label} 
          </PillButton>
        ))}
      </div>
    </section>
  );
};