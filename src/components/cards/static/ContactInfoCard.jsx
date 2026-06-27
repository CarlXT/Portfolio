import React from "react";
import { Icon } from "@iconify/react";

const contactItems = [
  {
    label: "Gmail",
    value: "carlsagario.cs@gmail.com",
    href: "mailto:carlsagario.cs@gmail.com",
    icon: "logos:google-gmail",
  },
  {
    label: "Location",
    value: "Cebu, Philippines",
    icon: "fluent:location-28-filled",
  },
  {
    label: "Phone",
    value: "+63 9455845110",
    href: "tel:+639455845110",
    icon: "solar:phone-calling-bold",
  },
];

export const ContactInfoCard = () => {
  return (
    <section 
      className="relative w-full bg-[#1e1e1e] border border-white/5 rounded-[34px] p-6 md:p-8 flex flex-col gap-6 shadow-xl min-h-80" 
      aria-labelledby="contact-info-title"
    >
      <h2 
        id="contact-info-title"
        className="font-sans font-medium text-white text-2xl md:text-3xl tracking-tight m-0"
      >
        Contact Info
      </h2>
      
      {/* Information Row Wrapper */}
      <address className="w-full flex flex-col justify-center gap-5 not-italic h-full">
        {contactItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 w-full font-sans text-base md:text-lg font-normal text-white"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Icon icon={item.icon} className="text-xl opacity-90" />
            </div>
            <p className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 overflow-hidden text-ellipsis">
              <span className="font-semibold text-white/50 text-xs tracking-wider uppercase">{item.label}</span>
              <span className="text-white/90 font-medium break-all sm:break-normal">
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
  );
};

export default ContactInfoCard;