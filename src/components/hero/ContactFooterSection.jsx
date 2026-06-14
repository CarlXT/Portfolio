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
      className="relative flex w-full flex-col items-center bg-transparent text-left font-sans"
      aria-label="Contact footer"
    >
      <div className="w-full max-w-7xl px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 h-fit">
        
        {/* Left Column - Core Address Info */}
        <section className="relative w-full md:w-auto flex h-fit flex-col items-start gap-4 px-0 py-2.25 self-start">
          <h2 className="relative flex items-center self-stretch font-['SF_Pro-Regular',Helvetica] text-2xl sm:text-3xl lg:text-[35px] font-normal leading-snug tracking-normal text-white">
          Contact Info
        </h2>
        <address className="relative w-full inline-flex flex-col items-start not-italic gap-4">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="relative flex items-center gap-3 w-156.5 font-['SF_Pro-Bold',Helvetica] text-lg font-normal leading-[normal]
                 tracking-normal text-white"
              >
                <Icon icon={item.icon} className="text-xl opacity-80 shrink-0" />
                <p>
                  <span className="font-bold mr-1">{item.label}</span>
                  <span className="font-['SF_Pro-Regular',Helvetica] text-white/80">
                    {item.href ? (
                      <a
                        className="outline-none hover:text-white hover:underline transition-colors focus-visible:rounded-sm 
                        focus-visible:ring-2 focus-visible:ring-white"
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
        <section className="relative w-full md:w-auto flex h-fit flex-col items-start gap-4 px-0 py-2.25 self-start">
          <h2 className="relative flex items-center self-stretch font-['SF_Pro-Regular',Helvetica] text-2xl sm:text-3xl lg:text-[35px] font-normal leading-snug tracking-normal text-white">
            Connect with me
          </h2>
        
        <div className="relative inline-flex flex-col items-start gap-5 w-full">
          {/* Interactive Liquid Glass Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/2 border border-white/6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-md text-white/80 text-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:border-white/20 ${social.color}`}
                >
                  <Icon icon={social.icon} className="text-2xl" />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>

            <div className="relative flex h-8.25 w-156.5 items-center gap-2 text-white/60">
              <Icon icon="solar:clock-circle-bold" className="text-md text-[#3b0aed]" />
              <p className="font-['SF_Pro-Regular',Helvetica] text-md font-normal leading-[normal] tracking-normal">
                Usually responds within 24 hrs.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Lower Decorative Border Line & Meta Credits */}
      <div className="w-full max-w-7xl border-t border-white/10 px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 h-fit">
        <div className="relative flex items-center self-center md:self-start text-sm text-gray-400">
          <p className="font-['SF_Pro-Regular',Helvetica] text-base font-normal tracking-normal text-white/40">
            © 2026 Carl Sagario. All rights reserved.
          </p>
        </div>
        <div className="relative w-full md:w-auto flex items-center justify-center md:justify-end self-center md:self-start">
          <p className="text-right font-['SF_Pro-Regular',Helvetica] text-base font-normal tracking-normal text-white/40 flex items-center gap-1.5">
            <Icon icon="logos:react" className="text-sm" /> Made with React &amp; Tailwind v4
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooterSection;