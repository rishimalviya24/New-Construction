import React from 'react';

const HeroSection = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="relative min-h-screen font-sans selection:bg-[#c1694f] selection:text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/img1.avif" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <div className="flex-shrink-0">
          <div className="flex flex-col items-center">
             {/* <img src="/logo.png" alt="Elite Contractors LLC" className="h-20 w-auto" /> */}
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          <a href="#" className="text-white font-bold text-[15px]">Home</a>
          <a href="#" className="text-gray-200 hover:text-white font-semibold text-[15px] transition-colors">About</a>
          <div className="flex items-center gap-1 text-gray-200 hover:text-white font-semibold text-[15px] cursor-pointer group">
            <span>Our Services</span>
            <svg className="w-4 h-4 mt-0.5 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
          </div>
          <a href="#" className="text-gray-200 hover:text-white font-semibold text-[15px]">Gallery</a>
          <a href="#" className="text-gray-200 hover:text-white font-semibold text-[15px]">Contact</a>
        </div>

        <div className="flex items-center gap-4">
            <a href="tel:9132973000" className="hidden sm:block bg-[#bd5e3b] text-white px-7 py-3 rounded-full font-bold text-[14px] hover:bg-[#a64d2e] transition-all shadow-sm">
            Call (913) 297-3000
            </a>
            
            {/* Mobile Menu Button */}
            <button 
                className="lg:hidden text-white p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
        </div>
      </nav>

      {/* Hero Content Section */}
      <main className="relative z-10 grid grid-cols-1 lg:grid-cols-12 px-6 md:px-12 lg:px-20 pt-10 pb-20 items-center min-h-[calc(100vh-120px)]">
        
        {/* Left Content (Text) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Subheading with Icon */}
          <div className="flex items-center gap-3 text-[#bd5e3b] mb-6">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <span className="uppercase tracking-[0.3em] font-black text-[13px] text-white">Baustelle Rückbau</span>
          </div>
          
          <h1 className="text-white text-6xl md:text-7xl lg:text-[88px] font-[900] leading-[0.85] uppercase tracking-tighter mb-10">
            Wir räumen <br /> 
            <span className="block mt-2">den Platz.</span>
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl font-medium leading-[1.6] max-w-lg mb-10">
            Vom Badezimmer bis zur Industriehalle: Wir reissen ab, trennen sauber und hinterlassen alles besenrein. Kein Job zu dreckig, keine Wand zu dick. Wir erledigen das.
          </p>

          {/* Dual Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#bd5e3b] text-white px-9 py-4 rounded-full font-bold text-[14px] uppercase tracking-wider hover:scale-105 transition-transform">
              WhatsApp Offerte
            </button>
            <button className="bg-transparent border-2 border-white text-white px-9 py-4 rounded-full font-bold text-[14px] uppercase tracking-wider hover:bg-white hover:text-black transition-all">
              Termin buchen
            </button>
          </div>
        </div>

        {/* Right Content (Review Only) */}
        <div className="lg:col-span-5 relative mt-16 lg:mt-0 flex items-center justify-center lg:justify-end">
            <div className="bg-white p-8 shadow-2xl max-w-[340px] rounded-sm border-t-4 border-[#bd5e3b]">
              <div className="flex gap-1 text-[#f39c12] mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-[#444] text-[15px] font-semibold leading-relaxed mb-6">
                "Fantastic work! Professional, careful, and high-quality results on our deck and siding. Highly recommend!"
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="font-extrabold text-[14px] text-gray-900">Emily Rowland</span>
                <div className="flex gap-2">
                  <div className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-[#bd5e3b] cursor-pointer hover:bg-gray-50 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                  </div>
                  <div className="w-9 h-9 bg-[#bd5e3b] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#a64d2e] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;