
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Quanto tempo preciso dedicar por dia?",
    answer: "O método foi desenhado exatamente para quem tem uma rotina de trabalho fixa e exaustiva. Com apenas 15 a 30 minutos por dia — seja no deslocamento, na fila ou no intervalo do almoço — você já consegue aplicar as tarefas e ver os primeiros resultados. Não é sobre trabalhar mais, é sobre usar seus tempos livres de forma inteligente."
  },
  {
    question: "Vou precisar vender curso ou fazer marketing multinível?",
    answer: "Absolutamente não. Nosso guia foca em micro-tarefas e serviços digitais reais que empresas e plataformas precisam diariamente. Não é esquema de pirâmide, venda de cursos ou promessas mágicas de ganhar dinheiro sem fazer nada. É um caminho honesto de trabalho remunerado."
  },
  {
    question: "Como e quando recebo o material?",
    answer: "O acesso é imediato e 100% automático. Assim que o seu pagamento (PIX ou Cartão) for processado, nosso sistema envia o link exclusivo de acesso direto para o seu e-mail cadastrado. Em menos de 2 minutos você já pode começar a ler e colocar dinheiro no bolso."
  },
  {
    question: "E se eu não gostar ou achar que não é pra mim?",
    answer: "O risco é todo nosso. Temos tanta confiança no método que oferecemos uma Garantia Incondicional de 7 dias. Se por qualquer motivo você achar que o Guia não vale o investimento, basta nos enviar um único e-mail. Devolvemos 100% do seu dinheiro sem perguntas, sem burocracia e continuamos amigos."
  },
  {
    question: "O pagamento é realmente seguro?",
    answer: "Sim, utilizamos as maiores e mais seguras processadoras de pagamentos do Brasil. Seus dados são criptografados e protegidos com tecnologia bancária. Além disso, você tem o respaldo total da nossa garantia de satisfação."
  },
  {
    question: "Preciso de um computador ou notebook?",
    answer: "Não. 100% das estratégias ensinadas no Guia Renda Extra Profissional podem ser executadas utilizando apenas o seu smartphone com conexão à internet. O objetivo é justamente dar a liberdade de você complementar sua renda de qualquer lugar, a qualquer hora."
  }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase mb-4">
            <HelpCircle className="w-3 h-3" />
            Perguntas Frequentes
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">Dúvidas</h2>
          <p className="text-gray-400">Tudo o que você precisa saber para começar com segurança.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`rounded-2xl border transition-all duration-300 ${
                openIdx === idx ? 'bg-[#1e1e24]/80 backdrop-blur-xl border-yellow-500/30 shadow-lg shadow-yellow-500/5' : 'bg-[#1a1a1e]/40 border-white/5 hover:border-white/10'
              }`}
            >
              <button 
                className="w-full px-6 py-6 text-left flex justify-between items-center gap-4"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className={`font-bold text-lg transition-colors ${openIdx === idx ? 'text-white' : 'text-gray-300'}`}>{faq.question}</span>
                <div className={`p-1 rounded-full transition-all ${openIdx === idx ? 'bg-yellow-500 text-black rotate-0' : 'bg-white/5 text-gray-500 rotate-180'}`}>
                  {openIdx === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <div className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                openIdx === idx ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="h-px w-full bg-white/5 mb-6"></div>
                <p className="text-gray-400 text-base leading-relaxed font-medium">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
