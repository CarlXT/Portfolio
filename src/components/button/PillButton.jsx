import React from 'react';

export default function Button({ 
  children, 
  onClick, 
  type = "button", 
  className = "", 
  ...props 
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex w-72.25 h-21 items-center justify-center gap-0.75 px-2.5 py-1px-8 py-3 rounded-full overflow-hidden 
        transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none backdrop-brightness-100 backdrop-saturate-100 
        /* 1. Base 3D lighting frame (Top light & Bottom deep crease) */
        shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_1px_rgba(255,255,255,0.25)]
        
        /* 2. Outer ambient white rim reflection on the bottom edge */
        after:absolute after:inset-0 after:rounded-full after:pointer-events-none
        after:shadow-[0_1px_0_rgba(255,255,255,0.1),0_2px_4px_rgba(255,255,255,0.03)]
        ${className}`}
      {...props}
    >
      {/* 3. Left and Right subtle dark vignette gradients */}
      <div className="absolute inset-y-0 left-0 w-8 bg-linear-to-r from-black/10 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 bg-linear-to-l from-black/10 to-transparent pointer-events-none" />

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2 elative w-fit font-['SF_Pro-Regular',Helvetica] font-normal
       text-white text-2xl tracking-[-0.23px] leading-5 whitespace-nowrap">
        {children}
      </span>
    </button>
  );
}