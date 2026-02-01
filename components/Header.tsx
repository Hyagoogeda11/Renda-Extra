
import React, { useState, useEffect } from 'react';
import { DollarSign } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a1a1e]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-1 group cursor-pointer">
          <div className="p-1.5 bg-yellow-500 rounded-lg group-hover:rotate-12 transition-transform">
            <DollarSign className="w-5 h-5 text-black" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white ml-1">Renda<span className="text-yellow-500">Extra</span></span>
        </div>
        
        <nav className="flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#beneficios" className="hover:text-yellow-500 transition-colors">Conteúdo</a>
          <a href="#depoimentos" className="hover:text-yellow-500 transition-colors">Resultados</a>
          <a href="#faq" className="hover:text-yellow-500 transition-colors">Dúvidas</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
