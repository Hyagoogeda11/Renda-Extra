
import React from 'react';
import { Database, Briefcase, MousePointerClick, CalendarCheck, Smartphone, Zap, Search, Repeat } from 'lucide-react';

const features = [
  {
    icon: <CalendarCheck className="w-6 h-6 text-yellow-500" />,
    title: "Plano de Tarefas Diárias",
    description: "Um cronograma passo a passo para você aplicar em apenas 30 minutos por dia, sem atrapalhar seu trabalho atual."
  },
  {
    icon: <Search className="w-6 h-6 text-yellow-500" />,
    title: "Avaliador de Marcas e Apps",
    description: "O segredo para ser pago por grandes empresas apenas por testar a facilidade de uso de novos aplicativos e sites."
  },
  {
    icon: <MousePointerClick className="w-6 h-6 text-yellow-500" />,
    title: "Micro-Jobs de Alto Retorno",
    description: "Aprenda a encontrar pequenos serviços rápidos que pagam bem por hora, ideais para complementar a renda no trajeto."
  },
  {
    icon: <Repeat className="w-6 h-6 text-yellow-500" />,
    title: "Cashback e Milhas no Automático",
    description: "Como configurar seus gastos mensais básicos para gerarem um retorno financeiro que paga suas contas no fim do mês."
  },
  {
    icon: <Database className="w-6 h-6 text-yellow-500" />,
    title: "Lista de 'Jobs' Escondidos",
    description: "Plataformas pouco conhecidas no Brasil que oferecem trabalhos remotos pontuais para profissionais ativos."
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    title: "Escalabilidade Acelerada",
    description: "Como sair dos R$ 500 extras para R$ 2.000 ou mais, replicando as tarefas que dão maior lucro em menos tempo."
  }
];

const Features: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-black uppercase mb-4 tracking-widest">
            Conteúdo Exclusivo
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">O que você vai <span className="text-yellow-500 italic">Dominar</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto font-medium">
            Um arsenal de estratégias práticas para quem não tem tempo a perder com teorias vazias.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-[2rem] bg-[#1a1a1e]/60 backdrop-blur-md border border-white/5 hover:border-yellow-500/30 transition-all duration-500 shadow-xl relative overflow-hidden"
            >
              {/* Efeito de luz ao passar o mouse */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              <div className="mb-6 inline-block p-4 bg-[#0f0f11] rounded-2xl group-hover:bg-yellow-500/10 group-hover:scale-110 transition-all duration-500 border border-white/5 group-hover:border-yellow-500/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white leading-tight group-hover:text-yellow-500 transition-colors">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
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
