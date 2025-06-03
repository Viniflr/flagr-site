import React from "react";
import PricingCard from "../ui/PricingCard";

const juridicoFeatures = [
  "Atendimento especializado",
  "Consultoria online",
  "Documentação jurídica",
];

const plataformaFeatures = [
  "Plataforma completa",
  "Suporte 24/7",
  "Atualizações automáticas",
];

export const PricingPlans: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4">
      {/* Planos Mensais Jurídicos */}
      <h2 className="text-green-800 text-xl font-semibold mb-4 text-center">
        Planos Mensais Jurídicos
      </h2>
      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center">
        <PricingCard
          title="Jurídico Básico"
          price="R$ 150"
          features={juridicoFeatures}
          type="start"
        />
        <PricingCard
          title="Jurídico Intermediário"
          price="R$ 200"
          features={juridicoFeatures}
          type="essential"
        />
        <PricingCard
          title="Jurídico Avançado"
          price="R$ 250"
          features={juridicoFeatures}
          type="master"
        />
        <PricingCard
          title="Jurídico Completo"
          price="R$ 300"
          features={juridicoFeatures}
          isHighlighted
          type="master"
        />
      </div>

      {/* Planos Mensais Plataforma + Jurídico */}
      <h2 className="text-green-800 text-xl font-semibold mb-4 mt-10 text-center">
        Planos Mensais Plataforma + Jurídico
      </h2>
      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center">
        <PricingCard
          title="Plataforma + Jurídico Starter"
          price="R$ 250"
          features={plataformaFeatures}
          type="start"
        />
        <PricingCard
          title="Plataforma + Jurídico Intermediário"
          price="R$ 350"
          features={plataformaFeatures}
          type="essential"
        />
        <PricingCard
          title="Plataforma + Jurídico Avançado"
          price="R$ 400"
          features={plataformaFeatures}
          type="master"
        />
        <PricingCard
          title="Plataforma + Jurídico Pro"
          price="R$ 450"
          features={plataformaFeatures}
          isHighlighted
          type="master"
        />
      </div>
    </section>
  );
};
