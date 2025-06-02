import React from 'react';
import ProcessStep from '../ui/ProcessStep';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white flex w-full flex-col items-center py-20">
      <h2 className="text-[rgba(39,124,48,1)] text-[70px] font-semibold text-center self-center max-md:max-w-full max-md:text-[40px] max-md:mt-10">
        <span style={{ color: 'rgba(0,63,13,1)' }}>Como</span> Funciona?
      </h2>
      <div className="self-center flex w-full max-w-[1522px] gap-[40px_100px] flex-wrap mt-[142px] max-md:max-w-full max-md:mt-10">
        <ProcessStep 
          icon="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/c1c3ff10125b0e7ce6cfac2acd907862733bb6a0?placeholderIfAbsent=true"
          title="Upload"
          description="Faça o upload dos documentos da sua startup e deixe a Flagr analisar tudo automaticamente."
        />
        <ProcessStep 
          icon="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/3e5a04890ed5d09edaa7bd65ff8aa3c93568a5fe?placeholderIfAbsent=true"
          title="Revisão"
          description="Tenha seus contratos e riscos jurídicos revisados com agilidade, economizando tempo e reduzindo erros."
        />
        <ProcessStep 
          icon="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/59b6e2f4b6a4636d9750ce8104be05e87c94ef05?placeholderIfAbsent=true"
          title="Relatório"
          description="Receba insights detalhados e tome decisões estratégicas com confiança e transparência."
        />
      </div>
    </section>
  );
};

export default HowItWorks;
