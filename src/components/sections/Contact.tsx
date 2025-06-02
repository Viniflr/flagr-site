import React from 'react';
import ContactForm from '../ui/ContactForm';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-24 px-6 sm:px-12"
      aria-label="Seção de contato"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-extrabold text-[rgba(39,124,48,1)] mb-16 tracking-wide">
          Contate-nos
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Coluna de contatos */}
          <aside className="md:w-1/3 bg-[rgba(39,124,48,1)] rounded-xl p-10 shadow-lg flex flex-col gap-10 text-white">
            <h3 className="text-3xl font-semibold mb-6 text-center tracking-wide">
              Nossos Contatos
            </h3>

            {/* Contato Item */}
            <div className="flex items-center gap-5">
              <div className="flex-shrink-0 bg-[rgba(27,84,32,1)] rounded-full p-3 shadow-md">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/49763ff30a51c67091078ed7c41982ee98f08e8a?placeholderIfAbsent=true"
                  alt="Ícone WhatsApp"
                  className="w-7 h-7 object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-lg font-semibold">WhatsApp</p>
                <a
                  href="https://wa.me/5511914415130"
                  className="text-green-200 hover:text-green-300 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (11) 91441-5130
                </a>
              </div>
            </div>

            {/* Contato Item */}
            <div className="flex items-center gap-5">
              <div className="flex-shrink-0 bg-[rgba(27,84,32,1)] rounded-full p-3 shadow-md">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/140a71f8d60c36bfff1c30b18cacb64bb0d80f10?placeholderIfAbsent=true"
                  alt="Ícone Email"
                  className="w-7 h-7 object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-lg font-semibold">Email</p>
                <a
                  href="mailto:renata@flagrdd.com.br"
                  className="text-green-200 hover:text-green-300 transition break-words"
                >
                  renata@flagrdd.com.br
                </a>
              </div>
            </div>

            {/* Contato Item */}
            <div className="flex items-center gap-5">
              <div className="flex-shrink-0 bg-[rgba(27,84,32,1)] rounded-full p-3 shadow-md">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/f52b39a864a155440fa9d9ebd91588798c69eb67?placeholderIfAbsent=true"
                  alt="Ícone LinkedIn"
                  className="w-7 h-7 object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-lg font-semibold">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/renataoliveirarau"
                  className="text-green-200 hover:text-green-300 transition break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Renataoliveirarau
                </a>
              </div>
            </div>
          </aside>

          {/* Formulário de contato */}
          <main className="md:w-2/3 bg-white rounded-xl p-12 shadow-lg">
            <ContactForm />
          </main>
        </div>
      </div>
    </section>
  );
};

export default Contact;
