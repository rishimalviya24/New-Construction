import React from 'react';

const AboutSection = () => {
  return (
    <section className="relative bg-[#f6f4f0] py-16 md:py-24 px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      
      {/* Background Watermark (Saw Blade) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1400px] pointer-events-none opacity-[0.03]">
         <img 
          src="/saw-blade.png" 
          alt="" 
          className="absolute top-0 right-0 w-[400px] md:w-[800px] animate-spin-slow"
        />
         <img 
          src="/saw-blade.png" 
          alt="" 
          className="absolute bottom-0 left-0 w-[400px] md:w-[800px] animate-spin-slow"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* --- Top Section: About Us --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
          
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
               <span className="text-[#bd5e3b] text-xl">→</span>
               <span className="text-[#999] font-bold text-[11px] uppercase tracking-[0.2em]">Elite Contractors LLC</span>
            </div>
            <h2 className="text-[#1a1a1a] text-4xl md:text-5xl lg:text-[56px] font-[900] uppercase tracking-tighter leading-none mb-6">About Us</h2>
            <p className="text-[#555] font-medium leading-relaxed mb-8 max-w-xs mx-auto lg:mx-0">
              We take pride in getting the job done right—on time, on budget, and built to last for years to come.
            </p>
            <button className="bg-transparent border-2 border-[#dcdcdc] text-[#1a1a1a] px-8 py-3 rounded-full font-bold text-[13px] uppercase tracking-wider hover:border-[#bd5e3b] hover:bg-[#bd5e3b] hover:text-white transition-all">
              Learn More
            </button>
          </div>

          {/* Right Column: Description & Stats */}
          <div className="lg:col-span-8 flex flex-col justify-center text-center lg:text-left">
            <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-bold leading-tight mb-6">
              We’re a team that <span className="text-[#bd5e3b]">shows up, works hard</span>, and stands behind everything we build.
            </h3>
            <p className="text-[#666] leading-relaxed mb-12 max-w-3xl mx-auto lg:mx-0">
              At Elite Contractors, we believe in honest work that speaks for itself. Founded 15 years ago by Jim—a builder with over 35 years in the construction industry—we’ve grown into a reliable team of 25, running 11 active crews across the region. From day one, we’ve focused on getting the basics right: show up, do the work, and do it well.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-[#e5e5e5] pt-8">
              <div>
                <div className="text-[#bd5e3b] text-4xl font-[900] mb-1">500+</div>
                <div className="text-[#1a1a1a] font-bold text-[13px] uppercase tracking-wide">Projects Done</div>
              </div>
              <div className="relative sm:pl-8 pt-8 sm:pt-0 border-t sm:border-t-0 sm:border-l border-[#e5e5e5]">
                <div className="text-[#bd5e3b] text-4xl font-[900] mb-1">4.8</div>
                <div className="text-[#1a1a1a] font-bold text-[13px] uppercase tracking-wide">Reviews Rating</div>
              </div>
              <div className="relative sm:pl-8 pt-8 sm:pt-0 border-t sm:border-t-0 sm:border-l border-[#e5e5e5]">
                <div className="text-[#bd5e3b] text-4xl font-[900] mb-1">35+</div>
                <div className="text-[#1a1a1a] font-bold text-[13px] uppercase tracking-wide">Years in Construction</div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Middle Section: Large Image --- */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-sm overflow-hidden mb-24 shadow-xl">
          <img 
            src="/img1.avif" 
            alt="Construction Framework" 
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* --- Bottom Section: Our Benefits --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
           {/* Left Column: Heading */}
           <div className="lg:col-span-4">
             <div className="flex items-center gap-2 mb-4">
               <svg className="w-4 h-4 text-[#bd5e3b]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
               <span className="text-[#999] font-bold text-[11px] uppercase tracking-[0.2em]">Why Choose Us</span>
             </div>
             <h2 className="text-[#1a1a1a] text-4xl md:text-[42px] font-[900] uppercase tracking-tighter leading-none mb-6">Our Benefits</h2>
           </div>

           {/* Right Column: Intro Text */}
           <div className="lg:col-span-8">
              <h3 className="text-[#1a1a1a] text-xl md:text-2xl font-bold leading-tight mb-4">
                We keep things <span className="text-[#bd5e3b]">simple, honest, and focused</span> on what matters to you.
              </h3>
              <p className="text-[#666] leading-relaxed max-w-2xl">
                Working with Elite Contractors means less stress and better results. We show up on time, keep you informed, and do what we say we'll do. From start to finish, we stay focused on your goals, your budget, and the quality you expect.
              </p>
           </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-16">
          
          {/* Benefit 1 */}
          <div className="group">
             <div className="w-12 h-12 mb-6 text-[#bd5e3b] group-hover:scale-110 transition-transform duration-300">
               <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
             </div>
             <h4 className="text-[#1a1a1a] font-bold text-lg mb-3">Clear Communication</h4>
             <p className="text-[#666] text-sm leading-relaxed">
               We keep you updated at every step so there are no surprises along the way.
             </p>
          </div>

          {/* Benefit 2 */}
          <div className="group">
             <div className="w-12 h-12 mb-6 text-[#bd5e3b] group-hover:scale-110 transition-transform duration-300">
               <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
             </div>
             <h4 className="text-[#1a1a1a] font-bold text-lg mb-3">Upfront Pricing</h4>
             <p className="text-[#666] text-sm leading-relaxed">
               We give fair, honest quotes and stick to them—no hidden costs later.
             </p>
          </div>

          {/* Benefit 3 */}
          <div className="group">
             <div className="w-12 h-12 mb-6 text-[#bd5e3b] group-hover:scale-110 transition-transform duration-300">
               <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
             </div>
             <h4 className="text-[#1a1a1a] font-bold text-lg mb-3">Built to Last</h4>
             <p className="text-[#666] text-sm leading-relaxed">
               We follow the right methods and use strong materials that hold up.
             </p>
          </div>

          {/* Benefit 4 */}
          <div className="group">
             <div className="w-12 h-12 mb-6 text-[#bd5e3b] group-hover:scale-110 transition-transform duration-300">
               <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
             </div>
             <h4 className="text-[#1a1a1a] font-bold text-lg mb-3">Respect for Your Home</h4>
             <p className="text-[#666] text-sm leading-relaxed">
               We stay clean, safe, and treat your space like it’s our own.
             </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
