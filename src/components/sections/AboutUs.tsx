import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-[rgba(39,124,48,1)] w-full py-10 text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="w-full text-center mb-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">
            Sobre <span className="text-white/90">nós</span>
          </h2>

          <div className="w-24 h-1 bg-white/30 mx-auto mb-10"></div>

          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-loose max-w-6xl mx-auto">
            A Flagr revoluciona o processo de due diligence jurídica, oferecendo uma solução automatizada que é rápida, eficiente e acessível. Evite os altos custos e a demora tradicionalmente associados ao processo, mantendo sua empresa pronta para investimentos e transações a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;