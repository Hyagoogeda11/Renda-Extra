
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Objections from './components/Objections';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-white selection:bg-yellow-500/30 overflow-x-hidden relative">
      {/* Grade fixa de fundo para toda a página */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0 opacity-50"></div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <Testimonial />
          <Objections />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
