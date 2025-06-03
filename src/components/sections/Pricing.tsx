import React from "react";
import PricingCard from "../sections/PricingCard";
import { useNavigate } from "react-router-dom";

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const startFeatures = [
    "Dashboard",
    "Data Room Jurídico",
    "Relatório de Due Diligence / 2x por ano",
    "Assistente virtual para Dúvidas (24/7)",
  ];

  const essentialFeatures = [
    "Dashboard",
    "Consultoria Jurídico / 15min por Mês",
    "Data Room Jurídico",
    "Relatório de Due Diligence / 3x por ano",
    "Correção de Riscos do Relatório de Due Diligence / 3x por ano",
    "Assistente virtual para Dúvidas (24/7)",
    "Análise de Pitch Deck / 1x por Mês",
  ];

  const masterFeatures = [
    "Dashboard",
    "Consultoria Jurídico / 30min por Mês",
    "Data Room Jurídico",
    "Gestão de contratos / até 4",
    "Relatório de Due Diligence / 6x por ano",
    "Correção de Riscos do Relatório de Due Diligence / 6x por ano",
    "Assistente virtual para Dúvidas (24/7)",
    "Análise de Pitch Deck / 1x por Mês",
    "Divulgação de Score para Investidores",
  ];

  return (
    <section
      id="pricing"
      className="bg-white z-10 flex w-full flex-col justify-center items-center mt-[264px] pb-[54px] max-md:mt-10"
    >
      <div className="w-full max-w-[1200px] flex flex-col items-center text-center px-5">
        <h2 className="text-[70px] font-semibold text-[rgba(0,63,13,1)] max-md:text-[40px]">
          <span className="text-[rgba(48,158,79,1)]">Conheça Nossos</span> Planos!
        </h2>

        {/* Container dos cards */}
        <div className="mt-12 w-full flex flex-col gap-8 md:flex-row md:justify-center md:gap-6">
          {/* Start */}
          <PricingCard
            title="Start"
            price="R$ 250"
            features={startFeatures}
            bgImage="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/86802ed29fbc546766da943a32d53fd5c13e9293?placeholderIfAbsent=true"
            bgColor="rgba(70,183,102,1)" // mesma cor do Essential
            type="start"
          />

          {/* Master - destaque maior */}
          <PricingCard
            title="Master"
            price="R$ 600"
            features={masterFeatures}
            bgColor="rgba(39,124,48,1)"
            isHighlighted
            type="master"
          />

          {/* Essential */}
          <PricingCard
            title="Essential"
            price="R$ 400"
            features={essentialFeatures}
            bgColor="rgba(70,183,102,1)"
            type="essential"
          />
        </div>

        {/* Botão Ver Mais */}
        <div className="mt-10 w-full max-w-xs max-md:mx-auto">
          <button
            onClick={() => navigate("/second")}
            className="bg-[rgba(39,124,48,1)] text-white px-10 py-2 text-lg font-medium transition-colors hover:bg-[rgba(39,124,48,0.9)] w-full rounded"
          >
            Ver Mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
