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
        /* 🛠️ THE RESPONSIVE FIX:
            - Swapped w-72.25 for w-full md:w-auto: Lets the parent container force it full-width on mobile, but keep content size on desktop.
            - Swapped h-21 for h-auto min-h-[52px] sm:min-h-[64px]: Dropped rigid height for text safety, using flexible min-height constraints instead.
            - Fixed the padding class concatenation typos completely.
        */
        className={`relative flex w-full md:w-auto h-auto min-h-13.5 sm:min-h-15 items-center justify-center gap-2 px-8 py-3 rounded-full overflow-hidden 
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
        {/* 💡 Fluid Typography Fix: Uses text-base on mobile, scaling cleanly up to text-xl on desktop layouts */}
        <span className="relative z-10 flex items-center justify-center gap-2 w-fit font-['SF_Pro-Regular',Helvetica] font-normal
        text-white text-base sm:text-lg md:text-xl tracking-tight leading-none whitespace-nowrap">
            {children}
        </span>
    </button>
  );
}