
import React, { useState, useEffect } from 'react';
import { DollarSign, Clock } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos em segundos

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Banner de Urgência - Compacto no Mobile */}
      <div className="bg-yellow-500 text-black py-1.5 md:py-2 px-4 text-center">
        <div className="container mx-auto flex items-center justify-center gap-2 md:gap-4 text-[9px] md:text-xs font-black uppercase tracking-widest">
          <div className="flex items-center gap-1.5">
            <Clock className="w-2.5 h-2.5 md:w-3 md:h-3 animate-pulse" />
            <span className="whitespace-nowrap">OFERTA EXPIRA EM:</span>
          </div>
          <span className="bg-black text-yellow-500 px-2 md:px-3 py-0.5 md:py-1 rounded font-mono text-xs md:text-sm">
            {formatTime(timeLeft)}
          </span>
          <span className="hidden sm:inline">• SÓ HOJE</span>
        </div>
      </div>

      <header 
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-[#1a1a1e]/95 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-1 group cursor-pointer">
            <div className="p-1 md:p-1.5 bg-yellow-500 rounded-lg group-hover:rotate-12 transition-transform">
              <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-black" />
            </div>
            <span className="font-bold text-base md:text-xl tracking-tight text-white ml-1">
              Destrave sua<span className="text-yellow-500"> Renda</span>
            </span>
          </div>
          
          <nav className="flex items-center gap-4 md:gap-8 text-[10px] md:text-sm font-bold uppercase tracking-widest">
            <a href="#comprar" className="bg-yellow-500/10 text-yellow-500 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-yellow-500/20 hover:bg-yellow-500 hover:text-black transition-all">Comprar</a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
