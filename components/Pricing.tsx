
import React from 'react';
import { Check, Flame, Link2Off } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="comprar" className="py-24 bg-[#0f0f11] relative overflow-hidden">
      {/* Elemento Visual: Correntes se quebrando ao fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 opacity-[0.03] flex items-center justify-center">
        <Link2Off className="w-[600px] h-[600px] text-white rotate-12" strokeWidth={0.5} />
      </div>
      
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 blur-[150px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Chegou a hora de <span className="text-yellow-500 italic">Quebrar as Correntes</span></h2>
          <p className="text-gray-400">O investimento que separa sua vida atual da liberdade financeira que você merece.</p>
        </div>
        
        <div className="max-w-md mx-auto bg-[#1a1a1e]/90 backdrop-blur-xl rounded-[2.5rem] border-2 border-yellow-500 p-8 md:p-12 shadow-[0_0_50px_rgba(234,179,8,0.15)] relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg">
            <Flame className="w-3 h-3" />
            VAGAS PROMOCIONAIS LIMITADAS
          </div>
          
          <div className="text-center mb-8">
            <p className="text-gray-500 line-through text-lg mb-1">De R$ 67,00</p>
            <div className="flex items-center justify-center gap-1">
              <span className="text-2xl font-bold mt-2 text-gray-400">R$</span>
              <span className="text-7xl font-black text-white tracking-tighter">19,90</span>
            </div>
            <div className="inline-block mt-4 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20">
              <p className="text-yellow-500 font-bold text-[10px] uppercase tracking-widest">PAGAMENTO ÚNICO • ACESSO VITALÍCIO</p>
            </div>
            <p className="text-gray-500 mt-2 text-xs">Sem mensalidades, sem taxas escondidas.</p>
          </div>
          
          <ul className="space-y-4 mb-10 border-t border-white/5 pt-8">
            {[
              "E-book Digital Renda Extra (PDF)",
              "Lista de 15 Aplicativos Pagos",
              "Guia de Cadastro em Plataformas",
              "Acesso imediato no E-mail",
              "Garantia Incondicional de 7 Dias"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-yellow-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <a 
              href="https://pay.kiwify.com.br/F9LfAUz"
              className="relative block w-full bg-yellow-500 hover:bg-yellow-600 text-black py-6 rounded-2xl font-black text-lg md:text-xl text-center transition-all hover:scale-[1.03] active:scale-95 shadow-xl shadow-yellow-500/20 mb-4 leading-tight"
            >
              QUERO QUEBRAR AS CORRENTES E MUDAR MINHA REALIDADE AGORA
            </a>
          </div>
          
          <p className="text-center text-[10px] text-gray-500 font-bold mb-6 uppercase tracking-wider leading-relaxed px-4">
            Assuma o controle. <span className="text-gray-300">A decisão de hoje é o seu resultado de amanhã.</span>
          </p>
          
          <div className="flex justify-center items-center gap-4 opacity-70">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" alt="Pix" className="h-3" />
            <div className="h-4 w-px bg-white/20"></div>
            <span className="text-[9px] text-gray-500 font-bold uppercase tracking-tight">Compra 100% Segura e Criptografada</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
