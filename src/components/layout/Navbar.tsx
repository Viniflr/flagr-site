import React from 'react';

const Navbar: React.FC = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="w-full px-6 md:px-16 lg:px-20">
          <div className="flex flex-wrap items-center justify-between w-full max-w-[1800px] mx-auto gap-4 py-3">
            {/* Logo */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/e563c3b85325a3f95d745b7fbca0139cd1a779a9?placeholderIfAbsent=true"
              className="w-[120px] md:w-[150px] object-contain"
              alt="Flagr Logo"
            />

            {/* Menu e Botões */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-8 w-full md:w-auto">
              {/* Navegação */}
              <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-10 text-lg md:text-xl text-[rgba(0,63,13,1)] font-normal py-3 md:py-0">
                <a href="#home" className="hover:text-[rgba(39,124,48,1)] transition-colors duration-200">Início</a>
                <a href="#benefits" className="hover:text-[rgba(39,124,48,1)] transition-colors duration-200">Benefícios</a>
                <a href="#how-it-works" className="hover:text-[rgba(39,124,48,1)] transition-colors duration-200">Como Funciona</a>
                <a href="#pricing" className="hover:text-[rgba(39,124,48,1)] transition-colors duration-200">Planos</a>
                <a href="#contact" className="hover:text-[rgba(39,124,48,1)] transition-colors duration-200">Contato</a>
              </nav>

              {/* Botões */}
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 text-sm md:text-base font-semibold my-2 md:my-0">
                <a href="http://54.159.135.147:8080">
                  <button className="px-4 py-1.5 md:px-14 md:py-2 border border-[rgba(39,124,48,1)] rounded text-[rgba(0,63,13,1)] hover:bg-[rgba(39,124,48,0.05)] transition-colors duration-200">
                    Entrar
                  </button>
                </a>
                <a href="#contact">
                  <button className="px-4 py-1.5 md:px-10 md:py-2 bg-[rgba(39,124,48,1)] rounded text-white hover:bg-[rgba(39,124,48,0.8)] transition-colors duration-200">
                  Comece agora
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Espaço para o conteúdo não ficar escondido atrás da navbar */}
      <div className="h-24" />
    </>
  );
};

export default Navbar;