import React from "react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  bgColor?: string;
  bgImage?: string;
  isHighlighted?: boolean;
  onGetPlan?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  bgColor = "rgba(39,124,48,1)",
  bgImage,
  isHighlighted = false,
  onGetPlan,
}) => {
  const shadowClass = isHighlighted ? "shadow-lg" : "shadow-md";

  return (
    <article
      className={`
        w-full max-w-[320px]
        rounded-md
        flex flex-col
        min-h-[460px]
        text-white
        p-5
        ${shadowClass}
        bg-green-800
        ${bgImage ? "bg-cover bg-center" : ""}
      `}
      style={{
        backgroundColor: bgColor,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
      }}
    >
      <header className="text-center text-2xl font-bold mb-3">{title}</header>

      <div className="text-center text-3xl font-extrabold mb-4">{price}</div>

      <hr className="border-white mb-4" />

      <ul className="flex-grow list-disc list-inside space-y-1 text-sm">
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      {/* Botão opcional para "Get Plan" */}
      {onGetPlan && (
        <button
          onClick={onGetPlan}
          className="mt-6 bg-white text-green-800 font-semibold rounded px-4 py-2 hover:bg-gray-100 transition"
        >
          Escolher Plano
        </button>
      )}
    </article>
  );
};

export default PricingCard;
