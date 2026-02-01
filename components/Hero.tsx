
import React from 'react';
import { ChevronRight, TrendingUp, ShieldCheck, DollarSign, ListChecks, MessageSquare, Star, Smartphone, Lock, RefreshCw, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Brilhos e Gradientes de profundidade */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full -z-10"></div>
      
      {/* Formas geométricas flutuantes sutis */}
      <div className="absolute top-40 right-10 w-24 h-24 border border-white/5 rotate-45 hidden lg:block backdrop-blur-sm"></div>
      <div className="absolute bottom-60 left-20 w-40 h-40 border border-white/5 rounded-full hidden lg:block backdrop-blur-sm"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/5 border border-yellow-500/20 text-yellow-500/80 text-[11px] font-bold uppercase tracking-[0.15em] mb-8 backdrop-blur-md">
          <Clock className="w-3 h-3" />
          Pequenas ações nos seus intervalos, grandes mudanças no seu bolso
        </div>
        
        <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto tracking-tight text-white">
          Aumente seu salário com <span className="text-yellow-500 italic">Renda Extra</span> sem sair do seu emprego.
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          O guia prático com tarefas diárias para quem já possui um emprego fixo e precisa complementar a renda mensal de forma segura.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#comprar" 
            className="group bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-4 rounded-2xl font-black text-lg flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-yellow-500/20"
          >
            QUERO MEU ACESSO AGORA
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <span className="text-gray-500 text-sm flex items-center gap-2 font-medium">
            <ShieldCheck className="w-4 h-4 text-yellow-500" />
            Método validado por +5.000 alunos
          </span>
        </div>

        {/* Product Showcase Card */}
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="bg-[#1e1e24]/80 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            {/* Linha de luz superior */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side: Icon and Core Info */}
              <div className="text-left">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 border border-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.1)]">
                  <DollarSign className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-3xl font-black text-white mb-2 leading-tight">Guia Renda Extra <span className="text-yellow-500">Profissional</span></h3>
                <p className="text-gray-400 mb-8 font-medium">Cronograma de tarefas diárias desenhado para quem tem uma jornada de trabalho cheia mas precisa de resultados.</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/5">
                      <ListChecks className="w-4 h-4 text-yellow-500" />
                    </div>
                    <span className="text-sm font-semibold text-gray-300">Checklist de Tarefas Diárias (15-30 min)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/5">
                      <Smartphone className="w-4 h-4 text-yellow-500" />
                    </div>
                    <span className="text-sm font-semibold text-gray-300">Acesso a Micro-Gigs e Jobs Freelance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/5">
                      <MessageSquare className="w-4 h-4 text-yellow-500" />
                    </div>
                    <span className="text-sm font-semibold text-gray-300">Modelos de Mensagens de Venda</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Specific Details and Badges */}
              <div className="bg-[#15151a]/60 rounded-3xl p-8 border border-white/5 relative shadow-inner">
                <div className="absolute -top-3 -right-3 bg-yellow-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                  Foco em Resultados
                </div>
                
                <h4 className="text-yellow-500 font-bold mb-6 flex items-center gap-2 text-xs uppercase tracking-widest">
                  <Star className="w-4 h-4 fill-current" />
                  PILATERES DO MÉTODO
                </h4>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-yellow-500/30 transition-colors">
                      <Clock className="w-6 h-6 text-gray-400 group-hover:text-yellow-500 transition-colors" />
                    </div>
                    <div className="text-left">
                      <p className="text-white font-bold text-sm">Otimização de Tempo</p>
                      <p className="text-xs text-gray-500 leading-relaxed">Aprenda a fazer o que traz dinheiro rápido sem sacrificar suas horas de lazer.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-yellow-500/30 transition-colors">
                      <RefreshCw className="w-6 h-6 text-gray-400 group-hover:text-yellow-500 transition-colors" />
                    </div>
                    <div className="text-left">
                      <p className="text-white font-bold text-sm">Rotina Sustentável</p>
                      <p className="text-xs text-gray-500 leading-relaxed">Novas oportunidades mensais que se encaixam no seu horário de almoço ou pós-expediente.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-yellow-500/30 transition-colors">
                      <TrendingUp className="w-6 h-6 text-gray-400 group-hover:text-yellow-500 transition-colors" />
                    </div>
                    <div className="text-left">
                      <p className="text-white font-bold text-sm">Escalabilidade</p>
                      <p className="text-xs text-gray-500 leading-relaxed">Comece com pouco e aumente seu faturamento conforme domina as tarefas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle Labels below card */}
          <div className="flex flex-wrap justify-center gap-8 mt-10 opacity-70">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 text-gray-400">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
              Ideal para quem já trabalha
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 text-gray-400">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
              Apenas R$ 19,90 (Único)
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 text-gray-400">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
              Resultados Reais Comprovados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
