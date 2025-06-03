import React from 'react';
import { PricingHeader } from './PricingHeader';
import PricingCard from '../ui/PricingCard';

interface PricingPlan {
  planName: string;
  price: string;
  period: string;
  features: string[];
  isHighlighted?: boolean;
}

interface PricingSectionProps {
  title: string;
  subtitle?: string;
  plans: PricingPlan[];
  onPlanSelect?: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  title,
  subtitle,
  plans,
  onPlanSelect
}) => {
  const handlePlanSelect = (planName: string) => {
    if (onPlanSelect) {
      onPlanSelect(planName);
    }
  };

  return (
    <section className="w-full bg-[rgba(70,183,102,0.40)] py-[50px] max-md:py-10 max-sm:py-[30px]">
      {/* Este div já centraliza o PricingHeader e o container de cards horizontalmente e organiza em coluna */}
      <div className="flex flex-col items-center px-5"> 
        <PricingHeader title={title} subtitle={subtitle} />
        
        {/*
          Para centralizar a linha de cards quando ela não ocupa a largura total do 'max-w-[1800px]',
          transformamos este div em um flex container e usamos justify-center.
          O 'overflow-x-auto' ainda permitirá o scroll se os cards excederem a largura disponível.
        */}
        <div className="w-full max-w-[1800px] overflow-x-auto flex justify-center">
          {/*
            Este div contém os cards.
            'min-w-max' garante que os cards permaneçam em uma única linha
            e não quebrem (ativando o scroll do pai se necessário).
            O padding horizontal (px-5) foi movido para o container mais externo para evitar problemas com o overflow-x-auto.
          */}
          <div className="flex gap-[30px] min-w-max max-md:gap-5 max-sm:gap-[15px]">
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.planName}
                price={plan.price}
                features={plan.features}
                isHighlighted={plan.isHighlighted}
                onGetPlan={() => handlePlanSelect(plan.planName)}
                type={index === 0 ? "start" : index === plans.length - 1 ? "master" : "essential"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};