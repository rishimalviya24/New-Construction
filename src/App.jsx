
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  Trash2, 
  HardHat, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X, 
  MapPin,
  Truck,
  Zap,
  Hammer,
  Recycle,
  ShieldCheck
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Innentrennung & Entkernung",
      desc: "Wir holen alles raus: Böden, Wände, Decken. Bis nur noch der Rohbau steht.",
      icon: <HardHat className="w-10 h-10 text-yellow-600" />
    },
    {
      title: "Totalabbruch",
      desc: "Vom Gartenhaus bis zur ganzen Liegenschaft – wir machen Platz für Neues.",
      icon: <Trash2 className="w-10 h-10 text-yellow-600" />
    },
    {
      title: "Schadstoffsanierung",
      desc: "Fachgerechte Entsorgung von Asbest & PCB nach höchsten Schweizer Sicherheitsnormen.",
      icon: <ShieldCheck className="w-10 h-10 text-yellow-600" />
    }
  ];

  const highlights = [
    { icon: <Zap size={20} />, text: "Schnelle Abwicklung" },
    { icon: <Truck size={20} />, text: "Eigener Maschinenpark" },
    { icon: <Recycle size={20} />, text: "Fachgerechtes Recycling" },
    { icon: <Hammer size={20} />, text: "Profi-Equipment" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-yellow-400 selection:text-black">
      
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070" 
            alt="Baustelle Rückbau" 
            className="w-full h-full object-cover grayscale opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl">
            {/* Fix: Padding/Margin angepasst um Überschneidungen zu vermeiden */}
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

      {/* Services Section */}
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

      {/* Trust Section */}
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

      {/* Final CTA */}
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

      {/* Footer */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
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
      )}
    </div>
  );
};

export default App;