import React from 'react';
import { Trash2, Menu, X } from 'lucide-react';

const Navigation = ({ isMenuOpen, setIsMenuOpen, scrolled }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="bg-yellow-500 p-2 rounded-sm group-hover:rotate-12 transition-transform shadow-sm">
            <Trash2 className="text-black w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase italic">Rückbau<span className="text-yellow-500">Pro</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-bold uppercase text-xs tracking-[0.2em]">
          <a href="#services" className="hover:text-yellow-600 transition-colors">Leistungen</a>
          <a href="#about" className="hover:text-yellow-600 transition-colors">Über uns</a>
          <a href="#contact" className="bg-slate-900 text-white px-5 py-2 hover:bg-yellow-500 hover:text-black transition-all">Projekt starten</a>
        </div>

        <button className="md:hidden text-black p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
