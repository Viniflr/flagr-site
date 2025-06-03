import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio }) => (
  <div className="w-[280px] flex flex-col items-center transition-transform hover:scale-105">
    <img
      src={image}
      alt={`Foto de ${name}`}
      className="w-full rounded-full aspect-square object-cover border-4 border-white shadow-lg"
    />
    <div className="bg-[#F2F7F3] border-2 border-[#277C30] rounded-lg mt-6 px-6 py-8 w-full min-h-[320px] text-center flex flex-col justify-center">
      <h3 className="text-2xl font-extrabold text-[#277C30]">{name}</h3>
      <p className="text-3xl font-light text-[#277C30] mt-2">{role}</p>
      <p className="text-sm text-[#277C30] mt-4 leading-relaxed">{bio}</p>
    </div>
  </div>
);

const Team: React.FC = () => {
  return (
    <section className="relative bg-white w-full min-h-screen py-16 flex justify-center items-center">

      {/* Conteúdo */}
      <div className="relative z-10 max-w-[1114px] w-full mx-auto px-5">
        {/* Título */}
        <h2 className="text-5xl md:text-[70px] font-semibold text-center mb-20">
          <span className="text-[#003F0D]">Conheça Nosso </span>
          <span className="text-[#277C30]">Time!</span>
        </h2>

        {/* Membros */}
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <TeamMember
            name="Renata Oliveira"
            role="CEO"
            image="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/21b9d402beaa3144e5a420251f1845fd23adccd6?placeholderIfAbsent=true"
            bio="Fundadora e CEO da Flagr e Especialista em Direito Empresarial/Societário, com foco em startups."
          />
          <TeamMember
            name="Marcela Ventura"
            role="COO"
            image="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/0ae8363914c0a58981cd21b964fc24337e16c909?placeholderIfAbsent=true"
            bio="Fundadora e COO da Flagr e Especialista em Direito Tributário, com foco em startups."
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
