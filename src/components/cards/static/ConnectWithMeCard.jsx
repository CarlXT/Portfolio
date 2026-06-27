import React from "react";
import { Icon } from "@iconify/react";

const socialLinks = [
  {
    icon: "logos:google-gmail",
    href: "https://gmail.com",
    color: "hover:text-white hover:bg-white/10",
  },
  {
    icon: "akar-icons:github-fill",
    href: "https://github.com/your-username",
    color: "hover:text-white hover:bg-white/10",
  },
  {
    icon: "entypo-social:linkedin-with-circle",
    href: "https://linkedin.com/in/your-profile",
    color: "hover:text-[#0077B5] hover:bg-[#0077B5]/10",
  },
];

export const ConnectWithMeCard = () => {
  return (
    <section 
      className="relative w-full bg-[#1e1e1e] border border-white/5 rounded-[34px] p-6 md:p-8 flex flex-col justify-between shadow-xl min-h-80" 
      aria-labelledby="connect-with-me-title"
    >
      {/* Content wrapper */}
      <div className="flex flex-col w-full gap-6">
        <h2 
          id="connect-with-me-title"
          className="font-sans font-medium text-white text-2xl md:text-3xl tracking-tight m-0"
        >
          Connect with me
        </h2>
        
        {/* 🛠️ HORIZONTAL LAYOUT CONTAINER */}
        <div className="flex flex-row flex-wrap items-center gap-2 w-full">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              /* Changed w-full to a fixed aspect ratio square (w-12 h-12) 
                and centered the icon perfectly inside using flex items-center justify-center.
              */
              className={`flex items-center justify-center w-28 h-28 rounded-2xl bg-white/5 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-md text-white/80 text-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 shrink-0 ${social.color}`}
            >
              <Icon icon={social.icon} className="text-4xl shrink-0" />
            </a>
          ))}        
        </div>
      </div>
      
      {/* Response Time Indicator Bottom Block */}
      <div className="flex items-center gap-2 text-white/50 mt-6 pt-2 border-t border-white/5">
        <Icon icon="solar:clock-circle-bold" className="text-lg text-[#3b0aed]" />
        <p className="font-sans text-xs font-normal">
          Usually responds within 24 hrs.
        </p>
      </div>
    </section>
  );
};

export default ConnectWithMeCard;