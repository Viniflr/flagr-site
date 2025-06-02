import React from 'react';

interface PricingCardProps {
  planName: string;
  price: string;
  period: string;
  features: string[];
  isHighlighted?: boolean;
  onGetPlan?: () => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  planName,
  price,
  period,
  features,
  isHighlighted = false,
  onGetPlan
}) => {
  const shadowClass = isHighlighted
    ? "shadow-[7px_7px_7px_0px_rgba(0,0,0,0.25)]"
    : "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]";

  const handleGetPlan = () => {
    if (onGetPlan) {
      onGetPlan();
    } else {
      alert(`Selecionado plano: ${planName}`);
    }
  };

  return (
    <article className={`w-[320px] bg-[linear-gradient(0deg,#277C30_0%,#277C30_100%)] ${shadowClass} flex flex-col flex-shrink-0 max-md:w-[280px] max-sm:w-[250px]`}>
      <div className="flex flex-col h-full p-[25px] max-md:p-[20px] max-sm:p-4">
        <header className="text-white text-center text-[32px] font-semibold mb-4 max-md:text-[28px] max-sm:text-[24px]">
          {planName}
        </header>

        <div className="text-white text-center text-4xl font-semibold mb-2 max-md:text-[32px] max-sm:text-[28px]">
          {price}
        </div>

        <div className="text-white text-center text-lg font-semibold mb-4 max-md:text-base max-sm:text-sm">
          {period}
        </div>

        <hr className="w-full h-px bg-white mb-4 border-0" />

        {/* === Ajuste para expandir verticalmente e melhorar o espaçamento das features === */}
        <div className="text-white text-center text-xs font-bold leading-[18px] mb-4 
                      flex-1 flex flex-wrap justify-center items-center gap-x-2 gap-y-1 max-md:text-[11px] 
                      max-md:leading-[16px] max-sm:text-[10px] max-sm:leading-[15px]">
          {features.map((feature, index) => (
            // Adicionado 'py-0.5' para um pequeno padding vertical em cada feature, melhorando a legibilidade ao quebrar a linha.
            <span key={index} className="py-0.5">{feature}</span>
          ))}
        </div>
      </div>
    </article>
  );
};