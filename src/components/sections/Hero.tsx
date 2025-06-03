import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="px-6 max-w-[1800px] mx-auto pb-10 md:pb-20">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
        {/* Texto */}
        <div className="w-full md:w-[48%] flex flex-col justify-center order-2 md:order-1">
          <h1 className="text-[rgba(39,124,48,1)] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-tight tracking-tight max-w-[20rem] sm:max-w-[28rem] md:max-w-[42rem]">
            Flagr, automatizando sua StartUp
          </h1>

          <p className="text-[rgba(0,63,13,1)] text-lg sm:text-xl md:text-2xl font-normal mt-6 md:mt-8 lg:mt-10 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md">
            Transformamos a Due Diligence da sua startup em um processo rápido, preciso e seguro. Reduza riscos e tome decisões com mais confiança.
          </p>

          <div className="mt-8 md:mt-10 lg:mt-12">
            <a href="#contact">
            <button
  className="bg-[rgba(39,124,48,1)] text-white text-base md:text-xl font-medium px-5 py-2.5 md:px-10 md:py-4 rounded-lg hover:bg-[rgba(39,124,48,0.9)] transition-colors duration-300 w-full sm:w-auto text-center"
  type="button"
>
  Agende uma demonstração gratuita!
</button>

            </a>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-[50%] order-1 md:order-2">
          <img
            src="/pessoa.png"
            alt="Flagr Platform"
            className="w-full h-auto object-contain rounded-lg"
            loading="eager" // Prioriza o carregamento da imagem
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;