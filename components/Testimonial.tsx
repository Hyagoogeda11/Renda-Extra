
import React from 'react';
import { UserCircle } from 'lucide-react';

const Testimonial: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-[#1a1a1e]/40 backdrop-blur-sm rounded-2xl border border-white/5 p-8 md:p-12 relative">
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <UserCircle className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">André L.</h4>
                <p className="text-gray-500 text-[10px] uppercase tracking-wider">Aluno do Guia</p>
              </div>
            </div>

            <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-300 italic">
              "Olha, eu trabalho o dia todo e chego em casa cansado, mas precisava de uma grana extra. O guia me mostrou como usar o tempo que eu perdia no celular pra fazer tarefas que realmente pagam. Não é mágica, mas se fizer todo dia o resultado aparece. Tirei R$ 800 a mais esse mês só seguindo os passos."
            </p>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Resultado real • Há 2 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
