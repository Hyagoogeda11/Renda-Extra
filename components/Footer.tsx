
import React from 'react';
import { DollarSign } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#0f0f11] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-1">
            <div className="p-2 bg-yellow-500 rounded-lg">
              <DollarSign className="w-4 h-4 text-black" />
            </div>
            <span className="font-bold text-xl text-white ml-1">Destrave sua<span className="text-yellow-500"> Renda</span></span>
          </div>
          
          <nav className="flex gap-8 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-yellow-500 transition-colors">Termos</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Ajuda</a>
          </nav>
        </div>
        
        <div className="text-center text-gray-600 text-xs">
          <p className="mb-4">&copy; 2024 Destrave sua Renda. Todos os direitos reservados.</p>
          <p className="max-w-2xl mx-auto leading-relaxed">
            Atenção: Os resultados citados são experiências pessoais e podem variar de acordo com o esforço individual. Não garantimos ganhos financeiros sem aplicação prática do método.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
