import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(39,124,48,1)] flex min-h-[117px] w-full mt-[109px] max-md:max-w-full max-md:mt-10">
      <div className="container mx-auto flex items-center justify-between text-white py-8 px-6">
        <div>
          <p className="text-sm">© 2023 Flagr. Todos os direitos reservados.</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            Termos de Uso
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
