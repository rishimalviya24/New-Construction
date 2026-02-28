import React from 'react';
import { Trash2, Phone, MessageCircle } from 'lucide-react';

const CtaSection = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-yellow-500 p-8 md:p-20 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
              <Trash2 size={400} />
           </div>
           <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black uppercase italic mb-8 tracking-tighter">Bereit für den Durchbruch?</h2>
              <p className="text-lg md:text-xl font-bold mb-12 max-w-2xl mx-auto uppercase leading-tight text-slate-900">
                Kein Job zu dreckig, keine Wand zu dick. <br />
                Foto via WhatsApp genügt für eine erste Einschätzung.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+41790000000" className="bg-slate-900 text-white px-8 md:px-12 py-5 rounded-sm font-black uppercase text-lg md:text-xl flex items-center gap-4 hover:scale-105 transition-transform shadow-xl w-full sm:w-auto justify-center">
                  <Phone className="w-6 h-6" />
                  079 000 00 00
                </a>
                <button className="bg-white text-slate-900 border-2 border-slate-900 px-8 md:px-12 py-5 rounded-sm font-black uppercase text-lg md:text-xl flex items-center gap-4 hover:bg-slate-900 hover:text-white transition-all shadow-xl w-full sm:w-auto justify-center">
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp
                </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
