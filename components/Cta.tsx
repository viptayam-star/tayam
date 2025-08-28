
import React from 'react';

const Cta: React.FC = () => {
  const whatsappNumber = '201022065189';
  
  const handleContact = () => {
    const message = encodeURIComponent("Hi Tayam, I'd like to discuss a design project.");
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-brand-light mb-8">
            All types of social media advertisements are available at an affordable price. Let's create something amazing together.
          </p>
          <button 
            onClick={handleContact}
            className="bg-brand-accent text-brand-secondary font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-accent/30">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
