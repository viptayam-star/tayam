
import React from 'react';

const Hero: React.FC = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 md:py-32 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary via-slate-800 to-brand-secondary opacity-50"></div>
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#0891b2 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
            ELEVATE YOUR BRAND <br /> WITH <span className="text-brand-primary">STUNNING</span> DESIGN
          </h1>
          <p className="text-lg md:text-xl text-brand-light max-w-3xl mx-auto mb-8">
            Crafting compelling visual identities and high-impact social media advertisements that captivate and convert.
          </p>
          <button 
            onClick={scrollToPortfolio}
            className="bg-brand-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-primary/30">
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
