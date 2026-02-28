import React, { useState } from 'react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(1); // Default open index matches the image

  const faqs = [
    {
      question: "What types of projects do you take on?",
      answer: "We handle a wide range of residential projects including custom home builds, major renovations, additions, decks, and siding. If you have a specific project in mind, feel free to reach out!"
    },
    {
      question: "Do you offer free estimates?",
      answer: "Yes, we offer free, no-obligation estimates to help you plan and budget your project."
    },
    {
      question: "How long will my project take?",
      answer: "Timeline depends on the scope of work. A simple deck might take a week, while a full remodel could take several months. We provide a detailed schedule before we start so you know what to expect."
    },
    {
      question: "Can you help with design ideas?",
      answer: "Absolutely! We work with talented architects and designers who can help bring your vision to life, or we can work with plans you already have."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed and insured for all the work we perform. We prioritize safety and professionalism on every job site."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy. Just give us a call or fill out our contact form. We'll schedule a time to meet, discuss your project, and provide a free estimate."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#efeae2] py-16 md:py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-start">
        
        {/* Left Column: Heading & Intro */}
        <div className="lg:col-span-5 relative lg:sticky lg:top-24">
          <h2 className="text-[#1a1a1a] text-4xl md:text-5xl lg:text-[56px] font-[900] uppercase tracking-tighter leading-none mb-6">FAQS</h2>
          <p className="text-[#555] font-medium leading-relaxed mb-8 md:mb-10 max-w-sm">
            Have questions? Here are some common things homeowners ask before starting a project with us.
          </p>
          <button className="bg-transparent border-2 border-[#bd5e3b] text-[#1a1a1a] px-10 py-3.5 rounded-full font-bold text-[14px] uppercase tracking-wider hover:bg-[#bd5e3b] hover:text-white transition-all">
            Contact Us
          </button>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-7">
          <div className="border-t border-[#d1cec6]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-[#d1cec6]">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
                  >
                    <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-[#bd5e3b]' : 'text-[#1a1a1a] group-hover:text-[#bd5e3b]'}`}>
                      {faq.question}
                    </span>
                    <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <svg className={`w-5 h-5 ${isOpen ? 'text-[#bd5e3b]' : 'text-[#666]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-[#666] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
