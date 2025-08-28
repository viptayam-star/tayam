import React from 'react';

interface PortfolioItemProps {
  name: string;
  onContact: () => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ name, onContact }) => {
  return (
    <div className="group bg-brand-secondary rounded-lg overflow-hidden shadow-lg shadow-black/30 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/20">
      <div className="relative aspect-square flex flex-col justify-center items-center p-6 text-center bg-slate-800/50 group-hover:bg-slate-800/30 transition-colors duration-300">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at center, #0891b2 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        <h3 className="text-2xl font-bold text-white mb-6 z-10">{name}</h3>
        <button
          onClick={onContact}
          className="z-10 bg-slate-700 text-brand-light font-semibold py-3 px-6 rounded-md transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white"
        >
          Contact for Sample
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
