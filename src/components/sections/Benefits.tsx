import React from 'react';
import BenefitCard from '../ui/BenefitCard';

const Benefits: React.FC = () => {
  return (
    <section
      id="benefits"
      className="bg-white flex w-full flex-col items-center pt-20 pb-40 px-5 md:px-20"
    >
      <h2 className="text-[rgba(39,124,48,1)] text-4xl md:text-6xl font-semibold text-center">
        Benefícios{' '}
        <span className="text-[rgba(0,63,13,1)]">dos nossos serviços</span>
      </h2>

      <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 w-full max-w-[1567px] mt-10 md:mt-[124px] px-1"> {/* Removido 'overflow-x-auto' */}
        <div className="min-w-[280px]">
          <BenefitCard
            icon="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/baa0fee75e209b17f0931c7550eebeb2e3570a7e?placeholderIfAbsent=true"
            title="Redução de Custos"
            description="Elimine as despesas exorbitantes com consultorias e escritórios tradicionais."
          />
        </div>
        <div className="min-w-[280px]">
          <BenefitCard
            icon="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/78e2a42a8095d0a001dc05fc354ea4064374aa16?placeholderIfAbsent=true"
            title="Agilidade e Segurança"
            description="Garanta agilidade em fusões, aquisições e operações imobiliárias, com dados sempre atualizados e acessíveis."
          />
        </div>
        {/* Visibilidade - estrutura exata com espaço para imagem */}
        <div className="flex flex-col items-center text-xl md:text-[32px] text-[rgba(39,124,48,1)] font-black text-center max-w-[320px] min-w-[280px] shrink-0">
          <div className="bg-white flex h-[214px] aspect-square rounded-full border-2 border-[rgba(39,124,48,1)] items-center justify-center">
            {/* Imagem visiv.png adicionada aqui */}
            <img src="public/visibilidade.jpg" alt="Visibilidade" className="w-3/4 h-3/4 object-contain" />
          </div>


          <div className="mt-6">Visibilidade</div>
          <div className="text-[rgba(48,158,79,1)] text-base md:text-2xl font-normal tracking-[1px] mt-6">
            Forneça relatórios completos e certificados de forma fácil e rápida para análise de investidores interessados.
          </div>
        </div>
      </div>

      <div className="bg-[rgba(39,124,48,1)] flex flex-col items-center text-white text-center justify-center px-5 md:px-20 py-10 mt-20 w-full">
        <div className="flex flex-col items-center w-full max-w-[1074px]">
          <div className="text-3xl md:text-[45px] font-black">
            Tenha seu Relatório de Due Diligence Sempre Pronto
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/c8a9fa8a9602aeb579cba63cb75bfdfc4f14747d?placeholderIfAbsent=true"
            className="w-full max-w-[690px] object-contain mt-6"
            alt="Due Diligence Report"
          />
          <div className="text-lg md:text-[27px] font-normal tracking-wide mt-6">
            Com a Flagr, sua startup ou empresa estará pronta para consultas a qualquer momento, facilitando a comunicação com investidores e aumentando sua visibilidade no mercado.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;