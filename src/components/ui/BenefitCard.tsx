import React from 'react';

interface BenefitCardProps {
    icon: string;
    title: string;
    description: string;
    smallText?: boolean;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, smallText = false }) => {
    return (
        <div className="bg-white border border-[#277C30] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center h-full">
            <img
                src={icon}
                alt={title}
                className="w-20 h-20 object-contain mb-6"
            />
            <h3 className="text-2xl font-bold text-[#277C30] mb-4">{title}</h3>
            <p className={`${smallText ? 'text-sm md:text-base' : 'text-base md:text-lg'} text-[#309E4F]`}>
                {description}
            </p>
        </div>
    );
};

export default BenefitCard;
