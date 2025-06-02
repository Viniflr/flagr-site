import React from 'react';

const Team: React.FC = () => {
  return (
    <section className="relative bg-white w-full py-[108px] max-md:py-[80px]">
      {/* Linha Verde de Fundo */}
      <div
        className="absolute bg-[#277C30] w-full h-[247px] top-[270px] left-0 z-0"
      ></div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 max-w-[1114px] mx-auto px-5">
        {/* Título com cores divididas e margin-bottom aumentada */}
        <h2 className="text-[70px] max-md:text-[40px] font-semibold text-center mb-[80px]"> {/* Aumentei de 60px para 80px */}
          <span className="text-[#003F0D]">Conheça Nosso</span>{' '}
          <span className="text-[#277C30]">Time!</span>
        </h2>

        {/* Membros do Time */}
        <div className="flex justify-center gap-[80px] max-md:flex-col max-md:items-center max-md:gap-[60px]">
          {/* Membro 1 - Renata */}
          <div className="w-[280px] flex flex-col items-center">
            {/* Foto */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/21b9d402beaa3144e5a420251f1845fd23adccd6?placeholderIfAbsent=true"
              alt="Renata Oliveira"
              className="w-full rounded-full aspect-square object-cover border-4 border-white shadow-md"
            />

            {/* Card de Informações */}
            <div className="bg-[#F2F7F3] border-2 border-[#277C30] rounded-md mt-6 px-6 py-8 w-full min-h-[320px] text-center flex flex-col justify-center">
              <h3 className="text-[32px] font-black text-[#277C30] leading-none">Renata Oliveira</h3>
              <p className="text-[36px] font-light text-[#277C30] mt-[10px]">CEO</p>
              <p className="text-base font-normal text-[#277C30] mt-6">
                Fundadora e CEO da Flagr e Especialista em Direito Empresarial/Societário, com foco em startups.
              </p>
            </div>
          </div>

          {/* Membro 2 - Marcela */}
          <div className="w-[280px] flex flex-col items-center">
            {/* Foto */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/0ae8363914c0a58981cd21b964fc24337e16c909?placeholderIfAbsent=true"
              alt="Marcela Ventura"
              className="w-full rounded-full aspect-square object-cover border-4 border-white shadow-md"
            />

            {/* Card de Informações */}
            <div className="bg-[#F2F7F3] border-2 border-[#277C30] rounded-md mt-6 px-6 py-8 w-full min-h-[320px] text-center flex flex-col justify-center">
              <h3 className="text-[32px] font-black text-[#277C30] leading-none">Marcela Ventura</h3>
              <p className="text-[36px] font-light text-[#277C30] mt-[10px]">COO</p>
              <p className="text-base font-normal text-[#277C30] mt-6">
                Fundadora e COO da Flagr e Especialista em Direito Tributário, com foco em startups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;