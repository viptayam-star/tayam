
import React from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { EmailIcon } from './icons/EmailIcon';

const Footer: React.FC = () => {
  const whatsappNumber = '01022065189';
  const whatsappLink = 'https://wa.me/201022065189';
  const email = 'viptayam@gmail.com';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700 text-brand-light">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Contact Me</h3>
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-2">
              <WhatsappIcon className="h-5 w-5 text-green-400" />
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{whatsappNumber}</a>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <EmailIcon className="h-5 w-5 text-blue-400" />
              <a href={`mailto:${email}`} className="hover:text-white transition-colors">{email}</a>
            </div>
          </div>
          <div className="text-sm">
            <p>&copy; {currentYear} Tayam. All Rights Reserved.</p>
            <p>Designed with passion.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
