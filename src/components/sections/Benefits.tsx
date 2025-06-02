import React from 'react';
import BenefitCard from '../ui/BenefitCard';

const Benefits: React.FC = () => {
  return (
    <section
      id="benefits"
      className="bg-white w-full flex flex-col justify-center items-center h-screen"
    >
      {/* Title Section */}
      <div className="w-full max-w-6xl text-center mb-16 md:mb-28">
        <h2 className="text-4xl md:text-6xl font-bold">
          <span className="text-[#277C30]">Benefícios</span>{' '}
          <span className="text-[#003F0D]">dos nossos serviços</span>
        </h2>
      </div>

      {/* Benefits Cards Grid */}
      <div className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 md:gap-16">
          {/* seus BenefitCards aqui */}
          <div className="flex-1 min-w-[280px] max-w-[380px]">
            <BenefitCard
              icon="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/baa0fee75e209b17f0931c7550eebeb2e3570a7e?placeholderIfAbsent=true"
              title="Redução de Custos"
              description="Elimine as despesas exorbitantes com consultorias e escritórios tradicionais."
              smallText
            />
          </div>
          <div className="flex-1 min-w-[280px] max-w-[380px]">
            <BenefitCard
              icon="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/78e2a42a8095d0a001dc05fc354ea4064374aa16?placeholderIfAbsent=true"
              title="Agilidade e Segurança"
              description="Garanta agilidade em fusões, aquisições e operações imobiliárias, com dados sempre atualizados e acessíveis."
              smallText
            />
          </div>
          <div className="flex-1 min-w-[280px] max-w-[380px]">
            <BenefitCard
              icon="/visibilidade.jpg"
              title="Visibilidade"
              description="Forneça relatórios completos e certificados de forma fácil e rápida para análise de investidores interessados."
              smallText
            />
          </div>
        </div>
      </div>

      {/* Aqui está o banner separado */}
      
    </section>
  );
};

export default Benefits;
