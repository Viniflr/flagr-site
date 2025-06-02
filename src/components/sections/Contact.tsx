import React from 'react';
import ContactForm from '../ui/ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <h2 className="text-[rgba(39,124,48,1)] text-5xl font-extrabold text-center mb-[22px]">
        Contate-nos
      </h2>
      <div className="self-center w-full max-w-[1709px] mt-[22px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[34%] max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(39,124,48,1)] flex w-full flex-col text-[32px] text-white font-semibold mx-auto pt-10 pb-[97px] px-20 max-md:max-w-full max-md:px-5">
              <div className="text-[40px] font-bold text-center self-center ml-[13px]">
                Contatos
              </div>
              <div className="flex items-stretch gap-[9px] whitespace-nowrap mt-[73px] max-md:ml-[5px] max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/49763ff30a51c67091078ed7c41982ee98f08e8a?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-10 shrink-0"
                  alt="WhatsApp"
                />
                <div className="basis-auto">Whatsapp</div>
              </div>
              <div className="text-[rgba(234,234,234,1)] font-medium ml-[59px] mt-[19px] max-md:ml-2.5">
                (11) 91441-5130
              </div>
              <div className="flex items-stretch gap-2.5 whitespace-nowrap mt-[72px] max-md:ml-[3px] max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/140a71f8d60c36bfff1c30b18cacb64bb0d80f10?placeholderIfAbsent=true"
                  className="aspect-[0.91] object-contain w-[41px] shrink-0"
                  alt="Email"
                />
                <div className="my-auto">Email</div>
              </div>
              <div className="font-medium self-center mt-[22px]">
                renata@flagrdd.com.br
              </div>
              <div className="flex items-stretch gap-[7px] whitespace-nowrap mt-[71px] max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/f52b39a864a155440fa9d9ebd91588798c69eb67?placeholderIfAbsent=true"
                  className="aspect-[0.84] object-contain w-[47px] shrink-0"
                  alt="LinkedIn"
                />
                <div className="basis-auto my-auto">LInkedin</div>
              </div>
              <div className="font-medium ml-[54px] mt-[15px] max-md:ml-2.5">
                Renataoliveirarau
              </div>
            </div>
          </div>
          <div className="w-[66%] ml-5 max-md:w-full max-md:ml-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
