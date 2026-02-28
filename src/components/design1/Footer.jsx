import React from 'react';
import { Trash2, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="bg-slate-900 p-2 shadow-sm">
              <Trash2 className="text-yellow-500 w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-black uppercase italic tracking-tighter">Rückbau<span className="text-yellow-500">Pro</span></span>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Abbruch | Entkernung | Recycling</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-yellow-500" /> Zürich | Aargau | Zug</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-black">Impressum</a>
              <a href="#" className="hover:text-black">Datenschutz</a>
            </div>
            <span className="text-slate-300">© 2024 RückbauPro</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
