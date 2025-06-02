import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.string().min(10, { message: 'Telefone inválido' }),
  message: z.string().min(10, { message: 'Mensagem deve ter pelo menos 10 caracteres' }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form data:', data);
    // Here you would typically send the data to your backend
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[rgba(242,247,243,1)] border flex grow flex-col text-2xl text-[rgba(39,124,48,1)] font-medium justify-center w-full px-20 py-[29px] border-[rgba(39,124,48,1)] border-solid max-md:max-w-full max-md:px-5"
    >
      <div className="flex w-[768px] max-w-full flex-col items-stretch">
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          {...register('name')}
          className="w-full bg-transparent focus:outline-none"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        <div className="w-full shrink-0 h-0.5 mt-[26px] border-[rgba(39,124,48,1)] border-solid border-2" />
        
        <label htmlFor="email" className="mt-[43px] max-md:mt-10">Email</label>
        <input
          id="email"
          {...register('email')}
          className="w-full bg-transparent focus:outline-none"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        <div className="w-full shrink-0 h-0.5 mt-[34px] border-[rgba(39,124,48,1)] border-solid border-2" />
        
        <label htmlFor="phone" className="mt-[43px] max-md:mt-10">Telefone</label>
        <input
          id="phone"
          {...register('phone')}
          className="w-full bg-transparent focus:outline-none"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        <div className="w-full shrink-0 h-1 mt-[35px] border-[rgba(39,124,48,1)] border-solid border-2" />
        
        <label htmlFor="message" className="mt-10">Mensagem</label>
        <textarea
          id="message"
          {...register('message')}
          className="w-full h-24 bg-transparent focus:outline-none resize-none"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        <div className="w-full shrink-0 h-0.5 mt-[140px] border-[rgba(39,124,48,1)] border-solid border-2 max-md:mt-10" />
        
        <button
          type="submit"
          className="bg-[rgba(39,124,48,1)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white mt-[33px] px-[51px] py-[9px] max-md:px-5 hover:bg-[rgba(39,124,48,0.9)] transition-colors"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
