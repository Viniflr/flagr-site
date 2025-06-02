import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from 'emailjs-com';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.string().min(10, { message: 'Telefone inválido' }),
  message: z.string().min(10, { message: 'Mensagem deve ter pelo menos 10 caracteres' }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const [isSent, setIsSent] = useState(false);

  const onSubmit = (data: FormValues) => {
    // Substitua os valores abaixo pelos seus IDs do EmailJS
    const SERVICE_ID = 'service_51ky8fp';
    const TEMPLATE_ID = 'template_83h9ivm';
    const USER_ID = 'iQzyG61Oi0LO8GsDx';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID)
      .then(() => {
        setIsSent(true);
        reset(); // limpa o formulário após envio
      })
      .catch(() => {
        alert('Erro ao enviar mensagem, tente novamente mais tarde.');
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[rgba(242,247,243,1)] border border-[rgba(39,124,48,1)] rounded-lg p-12 max-w-full max-md:px-6"
      >
        <div className="flex flex-col max-w-xl mx-auto text-[rgba(39,124,48,1)] font-medium text-lg">

          {/* Inputs e Labels aqui (mesmo código que te passei antes) */}
          {/* ... (copie o mesmo código de inputs e labels aqui) */}

          <label htmlFor="name" className="mb-2 font-semibold">Nome</label>
          <input
            id="name"
            {...register('name')}
            className={`w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-[rgba(39,124,48,1)] transition 
            focus:border-[rgba(39,124,48,1)] focus:ring-2 focus:ring-[rgba(39,124,48,0.4)] focus:outline-none`}
            placeholder="Seu nome"
            autoComplete="name"
          />
          {errors.name && (
            <p className="text-red-600 mt-1 mb-4 text-sm">{errors.name.message}</p>
          )}

          <label htmlFor="email" className="mb-2 mt-6 font-semibold">Email</label>
          <input
            id="email"
            {...register('email')}
            className={`w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-[rgba(39,124,48,1)] transition 
            focus:border-[rgba(39,124,48,1)] focus:ring-2 focus:ring-[rgba(39,124,48,0.4)] focus:outline-none`}
            placeholder="exemplo@dominio.com"
            autoComplete="email"
          />
          {errors.email && (
            <p className="text-red-600 mt-1 mb-4 text-sm">{errors.email.message}</p>
          )}

          <label htmlFor="phone" className="mb-2 mt-6 font-semibold">Telefone</label>
          <input
            id="phone"
            {...register('phone')}
            className={`w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-[rgba(39,124,48,1)] transition 
            focus:border-[rgba(39,124,48,1)] focus:ring-2 focus:ring-[rgba(39,124,48,0.4)] focus:outline-none`}
            placeholder="(XX) XXXXX-XXXX"
            autoComplete="tel"
          />
          {errors.phone && (
            <p className="text-red-600 mt-1 mb-4 text-sm">{errors.phone.message}</p>
          )}

          <label htmlFor="message" className="mb-2 mt-6 font-semibold">Mensagem</label>
          <textarea
            id="message"
            {...register('message')}
            className={`w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-[rgba(39,124,48,1)] transition 
            focus:border-[rgba(39,124,48,1)] focus:ring-2 focus:ring-[rgba(39,124,48,0.4)] focus:outline-none resize-none`}
            placeholder="Digite sua mensagem aqui..."
            rows={5}
          />
          {errors.message && (
            <p className="text-red-600 mt-1 mb-4 text-sm">{errors.message.message}</p>
          )}

          <button
            type="submit"
            className="mt-8 bg-[rgba(39,124,48,1)] hover:bg-[rgba(39,124,48,0.85)] text-white font-semibold rounded-md px-8 py-3 shadow-lg transition-colors"
          >
            Enviar
          </button>
        </div>
      </form>

      {isSent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm mx-4 text-center">
            <h2 className="text-2xl font-bold text-[rgba(39,124,48,1)] mb-4">Obrigado pelo contato!</h2>
            <p className="mb-6">Nossa equipe entrará em contato. Se você já tem login, faça o login na plataforma.</p>
            <button
              onClick={() => setIsSent(false)}
              className="bg-[rgba(39,124,48,1)] text-white px-6 py-2 rounded-md hover:bg-[rgba(39,124,48,0.85)] transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
