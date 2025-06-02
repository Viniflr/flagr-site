import React from 'react';
import ContactForm from '../ui/ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto"> {/* Container mais largo */}
        <h2 className="text-[rgba(39,124,48,1)] text-3xl md:text-4xl font-extrabold text-center mb-10">
          Contate-nos
        </h2>
        
        <div className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg max-w-5xl mx-auto"> {/* Container para as colunas */}
          {/* Coluna de Contatos - mais estreita */}
          <div className="bg-[rgba(39,124,48,1)] w-full md:w-2/5 p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">
              Contatos
            </h3>
            
            <div className="space-y-8">
              {/* WhatsApp */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/49763ff30a51c67091078ed7c41982ee98f08e8a?placeholderIfAbsent=true"
                    className="w-8 h-8 object-contain"
                    alt="WhatsApp"
                  />
                  <span className="text-lg">Whatsapp</span>
                </div>
                <p className="text-[rgba(234,234,234,1)] font-medium text-sm">
                  (11) 91441-5130
                </p>
              </div>
              
              {/* Email */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/140a71f8d60c36bfff1c30b18cacb64bb0d80f10?placeholderIfAbsent=true"
                    className="w-8 h-8 object-contain"
                    alt="Email"
                  />
                  <span className="text-lg">Email</span>
                </div>
                <p className="font-medium text-sm">
                  renata@flagrdd.com.br
                </p>
              </div>
              
              {/* LinkedIn */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/f52b39a864a155440fa9d9ebd91588798c69eb67?placeholderIfAbsent=true"
                    className="w-8 h-8 object-contain"
                    alt="LinkedIn"
                  />
                  <span className="text-lg">Linkedin</span>
                </div>
                <p className="font-medium text-sm">
                  Renataoliveirarau
                </p>
              </div>
            </div>
          </div>
          
          {/* Formulário de Contato - mais largo */}
          <div className="w-full md:w-3/5 bg-white">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;