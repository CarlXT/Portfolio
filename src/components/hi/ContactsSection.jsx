import React from "react";
import { ConnectWithMeCard } from "../cards/static/ConnectWithMeCard";
import { ContactInfoCard } from "../cards/static/ContactInfoCard";

export const ContactsSection = () => {
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
          Say Hi!
        </h1>
        <p className="relative max-w-4xl font-['SF_Pro-Regular',Helvetica] font-normal text-white/80 text-lg sm:text-xl md:text-[32px] leading-relaxed mx-auto">
          Get in touch with me! Whether you want to collaborate or just want to say hi, feel free to send me a message or connect with me through the following platforms below.
        </p>
      </header>

      {/* 🛠️ ADDED GRID WRAPPER FOR YOUR IMPORTED CARDS */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
        <ConnectWithMeCard />
        <ContactInfoCard />
      </div>

    </section>
  );
};

export default ContactsSection;