import React from 'react';
import { CheckCircle, Recycle, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-500/10 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" 
              alt="Rückbau Profis" 
              className="relative z-10 w-full rounded-sm shadow-2xl grayscale contrast-125"
            />
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-slate-900 p-8 z-20 hidden md:block shadow-2xl">
              <p className="text-5xl font-black leading-none">15+</p>
              <p className="uppercase font-black tracking-widest text-[10px] mt-1">Jahre Erfahrung</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-8">Einfach <span className="text-yellow-500">machen lassen.</span></h2>
            <div className="space-y-8">
              {[ 
                { icon: <CheckCircle className="text-yellow-500" />, t: "Besenrein", d: "Wir verlassen die Baustelle erst, wenn man vom Boden essen könnte." },
                { icon: <Recycle className="text-yellow-500" />, t: "Recycling", d: "Wir trennen Materialien direkt vor Ort für eine effiziente Entsorgung." },
                { icon: <Zap className="text-yellow-500" />, t: "Express", d: "Kurze Vorlaufzeiten und Termintreue sind bei uns Gesetz." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-black uppercase text-xl mb-2 group-hover:text-yellow-500 transition-colors">{item.t}</h4>
                    <p className="text-slate-400 text-lg leading-snug">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
