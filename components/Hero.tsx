
import React from 'react';
import { ChevronRight, ShieldCheck, DollarSign, ListChecks, MessageSquare, Star, Smartphone, RefreshCw, Clock, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const checkoutUrl = "https://pay.kiwify.com.br/F9LfAUz";

  return (
    <section className="relative pt-32 pb-16 md:pt-56 md:pb-32 overflow-hidden">
      {/* Brilhos e Gradientes de profundidade */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full -z-10 animate-pulse"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/5 border border-yellow-500/20 text-yellow-500/80 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.15em] mb-6 md:mb-8 backdrop-blur-md">
          <Clock className="w-3 h-3" />
          Aproveite seus intervalos para faturar
        </div>
        
        <h1 className="text-3xl md:text-7xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto tracking-tight text-white px-2">
          <span className="text-yellow-500 italic">Destrave sua Renda</span> sem precisar largar seu emprego.
        </h1>
        
        <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium px-4">
          O guia prático para transformar seu tempo ocioso em dinheiro vivo, com estratégias validadas para quem tem rotina fixa.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-6">
          <a 
            href={checkoutUrl} 
            className="w-full sm:w-auto group bg-yellow-500 hover:bg-yellow-600 text-black px-8 md:px-10 py-4 rounded-2xl font-black text-base md:text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl shadow-yellow-500/20"
          >
            QUERO DESTRAVAR MINHA RENDA
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-2 text-gray-500 text-[10px] md:text-sm font-medium">
            <ShieldCheck className="w-4 h-4 text-yellow-500" />
            <span>Acesso Vitalício + Atualizações</span>
          </div>
        </div>

        {/* Showcase Card - Otimizado para Mobile */}
        <div className="relative max-w-4xl mx-auto px-2 md:px-4">
          <div className="bg-[#1e1e24]/80 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] border border-white/10 p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-left">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-500/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 border border-yellow-500/20">
                  <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">Método <span className="text-yellow-500">Destrave</span></h3>
                <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base font-medium">Tarefas curtas que cabem no seu horário de almoço ou trajeto.</p>
                
                <div className="space-y-3 md:space-y-4">
                  {[
                    "Checklist de Tarefas Diárias",
                    "Acesso a Micro-Gigs Secretos",
                    "Scripts de Venda Prontos"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <ListChecks className="w-4 h-4 text-yellow-500 shrink-0" />
                      <span className="text-xs md:text-sm font-semibold text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#15151a]/60 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/5 relative shadow-inner">
                <h4 className="text-yellow-500 font-bold mb-6 flex items-center gap-2 text-[10px] uppercase tracking-widest">
                  <Star className="w-3 h-3 fill-current" />
                  PILARES DO MÉTODO
                </h4>
                <div className="space-y-6 text-left">
                  <div className="flex gap-4">
                    <Clock className="w-5 h-5 text-yellow-500 shrink-0" />
                    <div>
                      <p className="text-white font-bold text-xs md:text-sm">Tempo Otimizado</p>
                      <p className="text-[10px] md:text-xs text-gray-500">Sem sacrificar seu lazer ou descanso.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <TrendingUp className="w-5 h-5 text-yellow-500 shrink-0" />
                    <div>
                      <p className="text-white font-bold text-xs md:text-sm">Ganhos em Escala</p>
                      <p className="text-[10px] md:text-xs text-gray-500">Você decide quanto quer faturar a mais.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
