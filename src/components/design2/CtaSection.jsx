import React from 'react';

const CtaSection = () => {
  return (
    <section className="relative bg-[#bd5e3b] py-32 px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      
      {/* Wood Grain Texture (Subtle Waves) */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-multiply">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="woodgrain" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q25 20 50 10 T100 10" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M0 30 Q25 40 50 30 T100 30" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M0 50 Q25 40 50 50 T100 50" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M0 70 Q25 80 50 70 T100 70" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M0 90 Q25 80 50 90 T100 90" fill="none" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#woodgrain)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Headline */}
        <h2 className="text-white text-5xl md:text-[64px] font-[900] uppercase tracking-tighter leading-[0.9] mb-8 drop-shadow-sm">
          Where Plans <br />
          Become Projects
        </h2>
        
        {/* Subtext */}
        <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-10">
          Let’s bring your plans to life—reach out today to start your project with a team you can trust.
        </p>
        
        {/* Button */}
        <button className="bg-[#f6f4f0] text-[#1a1a1a] px-12 py-4 rounded-full font-bold text-[15px] hover:bg-white hover:scale-105 transition-all shadow-xl uppercase tracking-wide">
          Contact Us
        </button>

      </div>
    </section>
  );
};

export default CtaSection;
