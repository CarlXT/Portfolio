import React from "react";
import { Icon } from "@iconify/react";

const contactItems = [
  {
    label: "Gmail:",
    value: "carlsagario.cs@gmail.com",
    href: "mailto:carlsagario.cs@gmail.com",
    icon: "logos:google-gmail",
  },
  {
    label: "Location:",
    value: "Cebu, Philippines",
    icon: "fluent:location-28-filled",
  },
  {
    label: "Phone:",
    value: "+63 9455845110",
    href: "tel:+639455845110",
    icon: "solar:phone-calling-bold",
  },
];

// Defined professional social handles setup
const socialLinks = [
  {
    name: "Gmail",
    icon: "logos:google-gmail",
    href: "https://gmail.com", // Replace with your link
    color: "hover:text-white hover:bg-white/10",
  },
  {
    name: "GitHub",
    icon: "akar-icons:github-fill",
    href: "https://github.com/your-username", // Replace with your link
    color: "hover:text-white hover:bg-white/10",
  },
  {
    name: "LinkedIn",
    icon: "entypo-social:linkedin-with-circle",
    href: "https://linkedin.com/in/your-profile", // Replace with your link
    color: "hover:text-[#0077B5] hover:bg-[#0077B5]/10",
  },
];

export const ContactFooterSection = () => {
  return (
    <footer
      className="relative flex w-full max-w-full flex-col items-center gap-[60px] bg-transparent text-left font-sans"
      aria-label="Contact footer"
    >
      <div className="grid h-fit w-full max-w-[1440px] grid-cols-2 px-[94px] py-0 gap-y-12">
        
        {/* Left Column - Core Address Info */}
        <section className="relative col-[1/2] row-[1/2]  flex h-fit w-[627px] flex-col items-start gap-[15px] px-0 py-[9px] [align-self:start]">
          <h2 className="relative -mt-px flex h-[61px] items-center self-stretch font-['SF_Pro-Regular',Helvetica] text-[35px] font-normal 
          leading-[normal] tracking-[0] text-white">
            Contact Info
          </h2>
          <address className="relative inline-flex flex-[0_0_auto] flex-col items-start not-italic gap-4">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="relative flex items-center gap-3 w-[626px] font-['SF_Pro-Bold',Helvetica] text-lg font-normal leading-[normal] tracking-[0] text-white"
              >
                <Icon icon={item.icon} className="text-xl opacity-80 shrink-0" />
                <p>
                  <span className="font-bold mr-1">{item.label}</span>
                  <span className="font-['SF_Pro-Regular',Helvetica] text-white/80">
                    {item.href ? (
                      <a
                        className="outline-none hover:text-white hover:underline transition-colors focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-white"
                        href={item.href}
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </span>
                </p>
              </div>
            ))}
          </address>
        </section>

        {/* Right Column Tool Indicator - Upper Corner Dynamic Anchor */}
        

        {/* Left Column  - Real Connect Buttons */}
        <section className="relative col-[2/3] row-[1/2]  flex h-fit w-[627px] flex-col items-start gap-[15px] px-0 py-[9px] [align-self:start]">
          <h2 className="relative -mt-px flex h-[61px] items-center self-stretch font-['SF_Pro-Regular',Helvetica] text-[35px] font-normal 
          leading-[normal] tracking-[0] text-white">
            Connect with me
          </h2>
          
          <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-5 w-full">
            {/* Interactive Liquid Glass Action Buttons */}
            <div className="flex items-center gap-4 w-full">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-md text-white/80 text-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:border-white/20 ${social.color}`}
                >
                  <Icon icon={social.icon} className="text-2xl" />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>

            <div className="relative flex h-[33px] w-[627px] items-center gap-2 text-white/60">
              <Icon icon="solar:clock-circle-bold" className="text-md text-[#3b0aed]" />
              <p className="font-['SF_Pro-Regular',Helvetica] text-md font-normal leading-[normal] tracking-[0]">
                Usually responds within 24 hrs.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Lower Decorative Border Line & Meta Credits */}
      <div className="grid h-fit w-full max-w-[1440px] grid-cols-2 border-t border-[#3b0aed]/40 px-[94px] py-6">
        <div className="relative col-[1/2] row-[1/2] flex items-center [align-self:start]">
          <p className="font-['SF_Pro-Regular',Helvetica] text-base font-normal tracking-[0] text-white/40">
            © 2026 Carl Sagario. All rights reserved.
          </p>
        </div>
        <div className="relative col-[2/3] row-[1/2] flex items-center justify-end [align-self:start]">
          <p className="text-right font-['SF_Pro-Regular',Helvetica] text-base font-normal tracking-[0] text-white/40 flex items-center gap-1.5">
            <Icon icon="logos:react" className="text-sm" /> Made with React &amp; Tailwind v4
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooterSection;