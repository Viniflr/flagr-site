import React from 'react';

const ReportBanner: React.FC = () => {
  return (
    <div className="w-screen bg-[#277C30] py-10 mt-20">
      <div className="max-w-6xl mx-auto px-5 md:px-12">
        <div className="flex flex-col items-center text-white text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">
            Tenha seu Relatório de Due Diligence Sempre Pronto
          </h3>

          <div className="w-24 h-1 bg-white/30 mx-auto mb-10"></div>

          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-loose max-w-6xl mx-auto">
            Com a Flagr, sua startup ou empresa estará pronta para consultas a qualquer momento, facilitando a comunicação com investidores e aumentando sua visibilidade no mercado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportBanner;
