import React, { useState, useEffect } from 'react';
import Navigation from './components/design1/Navigation';
import Navigation2 from './components/design2/Navigation';
import HeroSection from './components/design1/HeroSection';
import HeroSection2 from './components/design2/HeroSection';
import ServicesSection from './components/design1/ServicesSection';
import ServicesSection2 from './components/design2/ServicesSection';
import AboutSection from './components/design1/AboutSection';
import CtaSection from './components/design1/CtaSection';
import Footer from './components/design1/Footer';
import AboutSection2 from './components/design2/AboutSection';
import TeamSection2 from './components/design2/TeamSection';
import TestimonialsSection2 from './components/design2/TestimonialsSection';
import GallerySection2 from './components/design2/GallerySection';
import FaqSection2 from './components/design2/FaqSection';
import CtaSection2 from './components/design2/CtaSection';
import Footer2 from './components/design2/Footer';
import MobileMenu from './components/design1/MobileMenu';
import DesignSwitcher from './components/DesignSwitcher';
import { HardHat, Trash2, ShieldCheck, Zap, Truck, Recycle, Hammer } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentDesign, setCurrentDesign] = useState('design1');

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
      {currentDesign === 'design1' && (
        <>
          {/* Navigation */}
          <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrolled={scrolled} />

          {/* Hero Section */}
          <HeroSection highlights={highlights} />

          {/* Services Section */}
          <ServicesSection services={services} />

          {/* Trust Section */}
          <AboutSection />
          {/* Final CTA */}
          <CtaSection />

          {/* Footer */}
          <Footer />

          {/* Mobile Menu */}
          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </>
      )}

      {currentDesign === 'design2' && (
        <>
          {/* Navigation for Design 2 */}
          {/* <Navigation2 isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrolled={scrolled} /> */}
          {/* Hero Section for Design 2 */}
          <HeroSection2 isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <ServicesSection2 />
          <AboutSection2 />
          <TeamSection2 />
          <TestimonialsSection2 />
          <GallerySection2 />
          <FaqSection2 />
          <CtaSection2 />
          <Footer2 />
        </>
      )}
      <DesignSwitcher currentDesign={currentDesign} setDesign={setCurrentDesign} />
    </div>
  );
};

export default App;