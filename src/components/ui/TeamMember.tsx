import React from 'react';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, role, description }) => {
  return (
    <div className="flex flex-col items-stretch">
      <img
        src={image}
        className="aspect-[0.87] object-contain w-[225px] shrink-0 max-w-full rounded-[200px]"
        alt={name}
      />
      <div className="bg-[rgba(242,247,243,1)] flex grow flex-col items-center text-[32px] text-[rgba(39,124,48,1)] text-center w-full pt-[136px] pb-[47px] px-[49px] border-[rgba(39,124,48,1)] border-solid border-2 max-md:max-w-full max-md:pt-[100px] max-md:px-5">
        <div className="font-black">{name}</div>
        <div className="text-4xl font-light mt-2.5">{role}</div>
        <div className="font-normal self-stretch mt-[109px] max-md:mt-10">
          {description}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
