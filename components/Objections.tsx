
import React from 'react';
import { ShieldCheck, Clock, Ban, MousePointer2, HelpCircle } from 'lucide-react';

const Objections: React.FC = () => {
  const points = [
    {
      icon: <Clock className="w-6 h-6 text-yellow-500" />,
      title: "Trabalho o dia todo",
      text: "Fique tranquilo. O método foi criado justamente para quem só tem alguns minutos livres no dia. Você aplica no seu tempo, sem pressão."
    },
    {
      icon: <Ban className="w-6 h-6 text-yellow-500" />,
      title: "Não quero mais cansaço",
      text: "Nossas tarefas são leves e objetivas. O foco é ganhar dinheiro, não te dar um segundo emprego exaustivo."
    },
    {
      icon: <MousePointer2 className="w-6 h-6 text-yellow-500" />,
      title: "É fácil de aplicar?",
      text: "Se você sabe usar o WhatsApp e navegar na internet, você consegue seguir o cronograma diário de tarefas."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-yellow-500" />,
      title: "Funciona de verdade?",
      text: "Sim, os resultados são comprovados por centenas de alunos que mantiveram a rotina. Caso não goste, devolvemos seu dinheiro."
    }
  ];

  return (
    <section className="py-24 bg-transparent border-y border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase mb-4">
            <HelpCircle className="w-3 h-3" />
            Transparência Total
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ainda na dúvida se este <span className="text-yellow-500 italic">guia</span> cabe na sua vida?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium">
            Entendemos que sua rotina é pesada. Por isso, nosso material é o único focado em eficiência máxima com tempo mínimo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="p-8 bg-[#1e1e24]/60 backdrop-blur-md rounded-3xl border border-white/5 flex gap-6 items-start hover:border-yellow-500/20 transition-colors"
            >
              <div className="p-3 bg-yellow-500/5 rounded-2xl flex-shrink-0">
                {point.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{point.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6">
            Lembre-se: Se mantiver a rotina, o resultado é uma consequência natural.
          </p>
          <div className="inline-block px-6 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-500/80 text-[10px] font-bold uppercase tracking-widest">
            A solução pensada para quem busca liberdade
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objections;
