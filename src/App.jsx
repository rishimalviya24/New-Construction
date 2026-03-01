import React, { useState, useEffect } from 'react';
import Navigation2 from './components/design2/Navigation';
import HeroSection2 from './components/design2/HeroSection';
import ServicesSection2 from './components/design2/ServicesSection';
import AboutSection2 from './components/design2/AboutSection';
import TeamSection2 from './components/design2/TeamSection';
import TestimonialsSection2 from './components/design2/TestimonialsSection';
import GallerySection2 from './components/design2/GallerySection';
import FaqSection2 from './components/design2/FaqSection';
import CtaSection2 from './components/design2/CtaSection';
import Footer2 from './components/design2/Footer';
import MobileMenu2 from './components/design2/MobileMenu';
import { HardHat, Trash2, ShieldCheck, Zap, Truck, Recycle, Hammer } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // design now fixed to design2; no switching logic required

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
      {/* only design2 is used now */}
          <HeroSection2 isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <ServicesSection2 />
          <AboutSection2 />
          <TeamSection2 />
          <TestimonialsSection2 />
          <GallerySection2 />
          <FaqSection2 />
          <CtaSection2 />
          <Footer2 />
          <MobileMenu2 isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default App;