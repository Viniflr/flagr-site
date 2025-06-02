import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="bg-[rgba(39,124,48,1)] z-10 flex flex-col items-center text-white text-center ml-[13px] pt-[19px] pb-20 px-20 max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1565px] flex-col items-stretch max-md:max-w-full">
        <h2 className="text-5xl font-black self-center ml-[15px] max-md:text-[40px]">
          Sobre nós
        </h2>
        <p className="text-[32px] font-normal tracking-[3.2px] mt-10 max-md:max-w-full">
          A Flagr revoluciona o processo de due diligence jurídica, oferecendo uma solução automatizada que é rápida, eficiente e acessível. Evite os altos custos e a demora tradicionalmente associados ao processo, mantendo sua empresa pronta para investimentos e transações a qualquer momento.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
