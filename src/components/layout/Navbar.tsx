import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Certifique-se de ter lucide-react instalado

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="w-full px-6 md:px-16 lg:px-20">
          <div className="flex items-center justify-between w-full max-w-[1800px] mx-auto py-4">
            {/* Logo */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/e563c3b85325a3f95d745b7fbca0139cd1a779a9?placeholderIfAbsent=true"
              className="w-[120px] md:w-[150px] object-contain"
              alt="Flagr Logo"
            />

            {/* Ícone de menu para mobile */}
            <button
              className="md:hidden text-[rgba(0,63,13,1)]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Menu e botões para desktop */}
            <div className="hidden md:flex flex-row items-center gap-8">
              <nav className="flex gap-8 text-xl text-[rgba(0,63,13,1)] font-normal">
                <a href="#home" className="hover:text-[rgba(39,124,48,1)] transition-colors duration-200">Início</a>
                <a href="#benefits" className="hover:text-[rgba(39,124,48,1)] transition-colors duration-200">Benefícios</a>
                <a href="#how-it-works" className="hover:text-[rgba(39,124,48,1)] transition-colors duration-200">Como Funciona</a>
                <a href="#pricing" className="hover:text-[rgba(39,124,48,1)] transition-colors duration-200">Planos</a>
                <a href="#contact" className="hover:text-[rgba(39,124,48,1)] transition-colors duration-200">Contato</a>
              </nav>

              <div className="flex items-center gap-3 text-base font-semibold">
                <a href="http://54.159.135.147:8080">
                  <button className="px-14 py-2 border border-[rgba(39,124,48,1)] rounded text-[rgba(0,63,13,1)] hover:bg-[rgba(39,124,48,0.05)] transition-colors duration-200">
                    Entrar
                  </button>
                </a>
                <a href="#contact">
                  <button className="px-10 py-2 bg-[rgba(39,124,48,1)] rounded text-white hover:bg-[rgba(39,124,48,0.8)] transition-colors duration-200">
                    Comece agora
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Mobile (exibido ao clicar no ícone) */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4">
            <nav className="flex flex-col gap-4 text-lg text-[rgba(0,63,13,1)] font-normal">
              <a href="#home" onClick={() => setMenuOpen(false)}>Início</a>
              <a href="#benefits" onClick={() => setMenuOpen(false)}>Benefícios</a>
              <a href="#how-it-works" onClick={() => setMenuOpen(false)}>Como Funciona</a>
              <a href="#pricing" onClick={() => setMenuOpen(false)}>Planos</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a>
            </nav>
            <div className="flex flex-col gap-3 mt-4 font-semibold text-sm">
              <a href="http://54.159.135.147:8080">
                <button className="w-full px-4 py-2 border border-[rgba(39,124,48,1)] rounded text-[rgba(0,63,13,1)] hover:bg-[rgba(39,124,48,0.05)] transition-colors duration-200">
                  Entrar
                </button>
              </a>
              <a href="#contact">
                <button className="w-full px-4 py-2 bg-[rgba(39,124,48,1)] rounded text-white hover:bg-[rgba(39,124,48,0.8)] transition-colors duration-200">
                  Comece agora
                </button>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Espaço para o conteúdo não ficar escondido atrás da navbar */}
      <div className="h-24" />
    </>
  );
};

export default Navbar;
