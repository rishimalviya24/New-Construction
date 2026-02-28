import React from 'react';

const Navbar = () => {
  return (
    // Changed bg-[#f2ede4] to bg-transparent
    <nav className="flex items-center justify-between px-10 py-6 bg-transparent w-full">
      
      {/* Logo Section - Replace with your <img> tag */}
      <div className="flex-shrink-0">
        <img 
          src="/path-to-your-logo.png" 
          alt="Elite Contractors LLC" 
          className="h-16 w-auto object-contain"
        />
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center space-x-10">
        <a href="#" className="text-[#c1694f] font-bold text-sm uppercase tracking-wide">
          Home
        </a>
        <a href="#" className="text-[#4a4a4a] hover:text-black font-semibold text-sm uppercase tracking-wide transition-colors">
          About
        </a>
        <div className="relative group flex items-center cursor-pointer">
          <span className="text-[#4a4a4a] hover:text-black font-semibold text-sm uppercase tracking-wide transition-colors">
            Our Services
          </span>
          <svg 
            className="w-3 h-3 ml-1.5 text-[#4a4a4a]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <a href="#" className="text-[#4a4a4a] hover:text-black font-semibold text-sm uppercase tracking-wide transition-colors">
          Gallery
        </a>
        <a href="#" className="text-[#4a4a4a] hover:text-black font-semibold text-sm uppercase tracking-wide transition-colors">
          Contact
        </a>
      </div>

      {/* Call to Action Button */}
      <div className="flex-shrink-0">
        <a 
          href="tel:9132973000" 
          className="bg-[#1a1a1a] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-tight hover:bg-black transition-all shadow-md active:scale-95"
        >
          Call (913) 297-3000
        </a>
      </div>
    </nav>
  );
};

export default Navbar;