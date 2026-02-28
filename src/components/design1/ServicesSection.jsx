import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServicesSection = ({ services }) => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-7xl font-black uppercase italic mb-4 leading-tight">Profi <span className="text-yellow-500">Demontage.</span></h2>
            <p className="text-slate-500 text-lg md:text-xl">Saubere Trennung und effiziente Entsorgung ist unser Kerngeschäft.</p>
          </div>
          <div className="flex items-center gap-2 text-yellow-600 font-bold uppercase tracking-widest text-sm cursor-pointer hover:gap-4 transition-all pb-2">
            Leistungskatalog <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="bg-slate-50 p-10 hover:bg-white transition-all group cursor-default border border-transparent hover:border-yellow-500 shadow-sm hover:shadow-2xl">
              <div className="mb-8 transform group-hover:scale-110 transition-transform origin-left">{s.icon}</div>
              <h3 className="text-2xl font-black uppercase mb-6 group-hover:text-yellow-600 transition-colors leading-tight">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
