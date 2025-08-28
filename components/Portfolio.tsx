import React from 'react';
import PortfolioItem from './PortfolioItem';

const portfolioData = [
  { name: 'Burger' },
  { name: 'Red Bull' },
  { name: 'Chips' },
  { name: 'Juhayna Juice' },
];

const Portfolio: React.FC = () => {
  const whatsappNumber = '201022065189';

  const handleContact = (itemName: string) => {
    const message = encodeURIComponent(`Hi Tayam, I'm interested in the design for "${itemName}".`);
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-4xl font-bold text-white mb-2">Design Samples</h2>
          <p className="text-brand-light">Contact me to see the full design for any of these samples.</p>
          <div className="w-24 h-1 bg-brand-primary mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.map((item, index) => (
            <div key={item.name} className="animate-fade-in-up" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
              <PortfolioItem
                name={item.name}
                onContact={() => handleContact(item.name)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
