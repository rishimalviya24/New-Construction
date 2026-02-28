import React from 'react';
import { X, Phone, MessageCircle } from 'lucide-react';

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    isMenuOpen && (
      <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-300">
        <button className="absolute top-8 right-8 text-slate-900 p-2" onClick={() => setIsMenuOpen(false)}>
          <X size={40} />
        </button>
        <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-4xl font-black uppercase italic hover:text-yellow-500">Leistungen</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-4xl font-black uppercase italic hover:text-yellow-500">Über uns</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-4xl font-black uppercase italic hover:text-yellow-500">Kontakt</a>
        <div className="pt-10 flex gap-6">
           <div className="bg-yellow-500 p-4 rounded-full shadow-lg"><Phone size={24} /></div>
           <div className="bg-yellow-500 p-4 rounded-full shadow-lg"><MessageCircle size={24} /></div>
        </div>
      </div>
    )
  );
};

export default MobileMenu;
