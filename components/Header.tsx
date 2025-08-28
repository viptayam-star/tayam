
import React from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { EmailIcon } from './icons/EmailIcon';

const Header: React.FC = () => {
  const whatsappNumber = '201022065189';
  const email = 'viptayam@gmail.com';

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-secondary/80 backdrop-blur-lg shadow-lg shadow-black/20">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black text-white tracking-wider">
          <a href="#" className="hover:text-brand-primary transition-colors">TAYAM</a>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('portfolio')} className="text-brand-light hover:text-brand-primary transition-colors font-semibold">Portfolio</button>
          <button onClick={() => scrollToSection('contact')} className="text-brand-light hover:text-brand-primary transition-colors font-semibold">Contact</button>
        </div>
        <div className="flex items-center space-x-4">
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-brand-light hover:text-green-400 transition-colors">
            <WhatsappIcon className="h-6 w-6" />
          </a>
          <a href={`mailto:${email}`} className="text-brand-light hover:text-blue-400 transition-colors">
            <EmailIcon className="h-6 w-6" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
