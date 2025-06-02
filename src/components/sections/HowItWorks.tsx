import React from 'react';

interface ProcessStepProps {
  icon: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, description }) => (
  <div className="w-[280px] flex flex-col items-center text-center">
    <img
      src={icon}
      alt={title}
      className="w-[120px] h-[120px] object-contain mb-6"
    />
    <div className="bg-[#F2F7F3] border-2 border-[#277C30] rounded-lg px-6 py-8 w-full min-h-[260px] shadow-md flex flex-col justify-center">
      <h3 className="text-2xl font-extrabold text-[#277C30]">{title}</h3>
      <p className="text-sm text-[#277C30] mt-4 leading-relaxed">{description}</p>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white flex w-full flex-col justify-center items-center py-20">
      <h2 className="text-[70px] font-semibold text-center text-[#003F0D] max-md:text-[40px]">
        <span className="text-[#003F0D]">Como</span> <span className="text-[#277C30]">Funciona?</span>
      </h2>

      <div className="mt-32 flex flex-wrap justify-center gap-[120px] max-md:mt-10 max-md:gap-[60px]">
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
