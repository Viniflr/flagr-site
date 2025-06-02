import React from 'react';

interface PricingCardProps {
  type: 'start' | 'essential' | 'master';
  title: string;
  price: string;
  features: string[];
  bgImage?: string;
  bgColor?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  type,
  title,
  price,
  features,
  bgImage,
  bgColor = 'rgba(39,124,48,1)',
}) => {
  const renderFeatures = () =>
    features.map((feature, index) => (
      <React.Fragment key={index}>
        {feature}
        <br />
        <br />
      </React.Fragment>
    ));

  // Estilos reutilizáveis
  const baseCard = 'flex flex-col w-full max-w-[400px] mx-auto shadow-md rounded-lg min-h-[700px]';
  const titleText = 'text-2xl md:text-3xl';
  const priceText = 'text-4xl md:text-5xl';
  const dividerImg = 'object-contain mt-6';
  const featuresText = 'text-base font-bold mt-6';
  const buttonStyle = 'mt-auto px-6 py-2 text-lg text-[rgba(39,124,48,1)] bg-white hover:bg-gray-100 transition-colors rounded-full mx-auto';

  if (type === 'start') {
    return (
      <div className={`relative ${baseCard} text-white font-semibold text-center p-5 md:p-10 bg-cover bg-center overflow-hidden`}>
        {bgImage && (
          <img
            src={bgImage}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
        )}

        <h3 className={titleText}>{title}</h3>
        <p className={`${priceText} mt-6`}>{price}</p>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/5fb36f385de9e4e12cdb2c71f45dbf7dc74c9342?placeholderIfAbsent=true"
          alt="Divider"
          className={`w-full ${dividerImg}`}
        />

        <div className={featuresText}>{renderFeatures()}</div>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/5fb36f385de9e4e12cdb2c71f45dbf7dc74c9342?placeholderIfAbsent=true"
          alt="Divider"
          className={`w-full ${dividerImg}`}
        />

        <button className={buttonStyle}>Obter</button>
      </div>
    );
  }

  // para 'essential' e 'master'
  return (
    <div
      className={`${baseCard} items-center text-white font-semibold text-center p-5 md:p-10`}
      style={{ backgroundColor: bgColor }}
    >
      <h3 className={titleText}>{title}</h3>
      <p className={`${priceText} mt-4`}>{price}</p>
      <p className="text-base md:text-xl">por mês</p>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/48802326c50d2c5984fe81bb27b0dceafa1e5482?placeholderIfAbsent=true"
        alt="Divider"
        className="w-[200px] md:w-[301px] object-contain mt-4"
      />

      <div className="text-base font-bold mt-4">{renderFeatures()}</div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/5fb36f385de9e4e12cdb2c71f45dbf7dc74c9342?placeholderIfAbsent=true"
        alt="Divider"
        className="w-[200px] md:w-[301px] object-contain mt-6"
      />

      <button className={buttonStyle}>Obter</button>
    </div>
  );
};

export default PricingCard;
