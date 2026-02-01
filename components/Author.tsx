
import React from 'react';
import { UserCheck, Award, ShieldCheck } from 'lucide-react';

const Author: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0b]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 order-2 md:order-1">
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-4 block">Autor do Guia</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Experiência Real no Digital</h2>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              Diferente de quem só vende curso, eu criei o **Renda Extra** baseado em 4 anos de testes reais. Saí de um salário mínimo para uma liberdade financeira que me permitiu escrever este material.
            </p>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Meu foco é acessibilidade. Por isso, decidi manter o preço popular para que qualquer pessoa, independente da condição financeira, possa começar hoje.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-[#1e1e24] rounded-xl border border-white/5">
                <Award className="w-6 h-6 text-yellow-500" />
                <span className="text-sm font-bold text-gray-200">+5.000 Alunos</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-[#1e1e24] rounded-xl border border-white/5">
                <ShieldCheck className="w-6 h-6 text-yellow-500" />
                <span className="text-sm font-bold text-gray-200">Método 100% Seguro</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-yellow-500/10 rounded-[3rem] border-2 border-yellow-500/20 flex items-center justify-center rotate-3 transition-transform hover:rotate-0">
              <UserCheck className="w-32 h-32 md:w-40 md:h-40 text-yellow-500 -rotate-3" />
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-black px-6 py-2 rounded-xl font-black shadow-xl">
                MARCOS O.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
