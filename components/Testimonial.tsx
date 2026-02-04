
import React from 'react';
import { UserCircle, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "André L.",
    role: "CLT • Aluno do Guia",
    content: "Olha, eu trabalho o dia todo e chego em casa cansado, mas precisava de uma grana extra. O guia me mostrou como usar o tempo que eu perdia no celular pra fazer tarefas que realmente pagam. Tirei R$ 800 a mais esse mês só seguindo os passos.",
    time: "Há 2 dias"
  },
  {
    name: "Juliana M.",
    role: "Atendente • Aluna do Guia",
    content: "Consegui pagar meu cartão de crédito atrasado só com as dicas dos aplicativos. No começo achei que era golpe, mas recebi o primeiro Pix de R$ 50 no segundo dia. O método é muito direto ao ponto.",
    time: "Há 1 semana"
  },
  {
    name: "Ricardo S.",
    role: "Segurança • Aluno do Guia",
    content: "Trabalho como segurança e tenho muito tempo 'parado' no posto. O guia me ensinou a monetizar esse tempo pelo celular. Faço uma média de R$ 30 por turno agora sem atrapalhar meu serviço.",
    time: "Há 3 dias"
  },
  {
    name: "Carla F.",
    role: "Vendedora • Aluna do Guia",
    content: "O que eu mais gostei foi que não precisa vender nada pra ninguém nem convidar amigos. É só fazer as tarefas e pronto. Simples e direto como eu precisava.",
    time: "Há 5 dias"
  }
];

const Testimonial: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experiências Reais</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Veja o que outros alunos estão conseguindo após destravar suas rendas.
          </p>
        </div>

        {/* Container rolável */}
        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory no-scrollbar lg:grid lg:grid-cols-2 lg:overflow-visible lg:snap-none max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="min-w-[85vw] md:min-w-[400px] snap-center bg-[#1a1a1e]/40 backdrop-blur-sm rounded-3xl border border-white/5 p-8 relative flex flex-col justify-between hover:border-yellow-500/20 transition-all group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5 group-hover:text-yellow-500/10 transition-colors" />
              
              <div className="relative z-10">
                <p className="text-lg font-medium leading-relaxed text-gray-300 italic mb-8">
                  "{t.content}"
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="h-px w-full bg-white/5"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <UserCircle className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{t.name}</h4>
                      <p className="text-gray-500 text-[10px] uppercase tracking-wider">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">{t.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center lg:hidden">
          <p className="text-gray-600 text-[10px] uppercase font-black tracking-widest">
            Deslize para ver mais →
          </p>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
