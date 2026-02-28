import React from 'react';
import { MessageCircle, Calendar, Truck, Zap, Hammer, Recycle } from 'lucide-react';

const HeroSection = ({ highlights }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover absolute inset-0"
          src="https://videos.pexels.com/video-files/5232770/5232770-hd_1080_1920_25fps.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl">
          <div className="mb-8 flex flex-wrap gap-4">
            <span className="inline-block bg-yellow-500 text-black px-3 py-1 font-black uppercase text-[10px] tracking-widest shadow-sm">
              Schweizweiter Service
            </span>
            <span className="inline-block bg-slate-900 text-white px-3 py-1 font-black uppercase text-[10px] tracking-widest">
              Direkt & Effizient
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-[1.1] md:leading-[0.9] uppercase mb-8 italic text-slate-900">
            Wir räumen <br />
            <span className="text-yellow-500 drop-shadow-sm">den Platz.</span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-700 mb-10 max-w-2xl font-medium leading-relaxed">
            Vom Badezimmer bis zur Industriehalle: Wir reissen ab, trennen sauber und hinterlassen alles besenrein. 
            <span className="block mt-4 text-slate-900 font-black italic">
              Kein Job zu dreckig, keine Wand zu dick. Wir erledigen das.
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-yellow-500 text-black px-10 py-5 rounded-sm font-black uppercase flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all shadow-lg hover:shadow-yellow-500/20 transform hover:-translate-y-1 active:scale-95">
              <MessageCircle className="w-6 h-6" />
              WhatsApp Offerte
            </button>
            <button className="bg-white text-slate-900 border-2 border-slate-900 px-10 py-5 rounded-sm font-black uppercase flex items-center justify-center gap-3 hover:bg-slate-900 hover:text-white transition-all">
              <Calendar className="w-6 h-6" />
              Termin buchen
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
                <span className="text-yellow-600">{h.icon}</span>
                {h.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
