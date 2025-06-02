import React from 'react';

interface ProcessStepProps {
  icon: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-stretch flex-1">
      <div className="flex items-center justify-center aspect-square px-11 max-md:px-5 rounded-full border-2 border-[rgba(39,124,48,1)] bg-white">
        <img
          src={icon}
          alt={title}
          className="w-[90px] aspect-square object-contain"
        />
      </div>

      <h3 className="mt-7 text-center text-[32px] font-black text-[rgba(39,124,48,1)]">
        {title}
      </h3>

      <p className="mt-8 text-center text-3xl font-normal tracking-[3px] text-[rgba(48,158,79,1)] max-md:max-w-full">
        {description}
      </p>
    </div>
  );
};

export default ProcessStep;
