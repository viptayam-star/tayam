
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Cta from './components/Cta';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-secondary min-h-screen font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default App;
