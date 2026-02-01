
import React from 'react';
import { Database, Briefcase, MousePointerClick, CalendarCheck } from 'lucide-react';

const features = [
  {
    icon: <CalendarCheck className="w-6 h-6 text-yellow-500" />,
    title: "Plano de Tarefas Diárias",
    description: "Um cronograma passo a passo para você aplicar em apenas 30 minutos por dia, sem atrapalhar seu trabalho atual."
  },
  {
    icon: <Briefcase className="w-6 h-6 text-yellow-500" />,
    title: "Caminhos Estratégicos",
    description: "Filtramos apenas as oportunidades que aceitam quem trabalha em horário comercial, focando em flexibilidade total."
  },
  {
    icon: <MousePointerClick className="w-6 h-6 text-yellow-500" />,
    title: "Micro-Jobs de Alto Retorno",
    description: "Aprenda a encontrar pequenos serviços rápidos que pagam bem por hora, ideais para complementar a renda."
  },
  {
    icon: <Database className="w-6 h-6 text-yellow-500" />,
    title: "Lista de 'Jobs' Escondidos",
    description: "Plataformas pouco conhecidas no Brasil que oferecem trabalhos remotos pontuais para profissionais ativos."
  }
];

const Features: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">O que está dentro do <span className="text-yellow-500 italic">Guia</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Não é apenas um e-book, é o mapa de tarefas para quem quer ganhar mais sem precisar abandonar a estabilidade do emprego fixo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl bg-[#1e1e24]/60 backdrop-blur-md border border-white/5 hover:border-yellow-500/20 transition-all group shadow-lg"
            >
              <div className="mb-6 inline-block p-3 bg-yellow-500/5 rounded-2xl group-hover:scale-110 transition-transform border border-yellow-500/5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white leading-tight">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
