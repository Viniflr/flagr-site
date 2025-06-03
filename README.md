# 📬 Landing Page — Flagr

Uma landing page de contato responsiva para a empresa **Flagr**, construída com React, TypeScript e Tailwind CSS. Inclui informações de contato, formulário validado com [React Hook Form](https://react-hook-form.com/) e [Zod](https://zod.dev/), envio automático de e-mail via [EmailJS](https://www.emailjs.com/) e feedback ao usuário.

---

## 📦 Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Tailwind CSS**
- **React Hook Form**
- **Zod**
- **EmailJS** (envio de e-mail sem backend)

---

## 🚀 Como rodar o projeto localmente

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências:**

   ```sh
   npm install
   # ou
   yarn
   ```

3. **Configure o EmailJS**  
   Para que o envio de emails funcione, siga os passos abaixo:

   a. Crie uma conta em EmailJS  
   b. Crie um serviço de email e um template:  
   Vá até “Email Services” e conecte seu email (ex: Gmail).

   Em “Email Templates”, crie um novo template com os campos: name, email, phone, message.

   c. Copie os dados:
   Service ID

   Template ID

   Public Key

   d. Crie um arquivo .env na raiz do projeto com as variáveis:

   ```env
   VITE_EMAILJS_SERVICE_ID=seu_service_id
   VITE_EMAILJS_TEMPLATE_ID=seu_template_id
   VITE_EMAILJS_PUBLIC_KEY=sua_public_key
   ```

   ⚠️ Certifique-se de reiniciar o servidor após criar ou alterar o .env.

4. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   # ou
   yarn dev
   ```

---

## ✨ Funcionalidades

- Exibição de contatos com ícones
- Formulário com validação de dados
- Envio automático de email com as informações preenchidas
- Mensagem de sucesso com orientação após envio
- Scroll suave entre seções

---

## 🗂️ Como rodar o Dataroom (Nextcloud)
O Dataroom utilizado pela Flagr é baseado no Nextcloud e está disponível em um repositório próprio.
Para rodar o Dataroom localmente ou em produção, utilize o repositório abaixo:

- https://github.com/Viniflr/flagr-dataroom.git
Siga as instruções do README desse repositório para subir o Nextcloud via Docker.

Importante:
Após rodar o Dataroom, troque o link do botão "Entrar" no componente Navbar para o endereço do seu Dataroom.

---

## 🧪 Teste de envio de mensagem

1. Preencha o formulário com seus dados reais ou de teste.
2. Clique em "Enviar".
3. Você verá um pop-up confirmando que a mensagem foi enviada com sucesso.
4. A mensagem será enviada para o email renata@flagrdd.com.br.

---

## 🚀 Deploy na Vercel

1. Faça login em [vercel.com](https://vercel.com) com sua conta do GitHub.
2. Importe o repositório do projeto.
3. Defina as variáveis de ambiente (`VITE_EMAILJS_SERVICE_ID`, etc) em "Environment Variables".
4. Clique em **Deploy**.
5. O site estará disponível em `https://seu-projeto.vercel.app`.

---

## 📫 Suporte

Em caso de dúvidas ou problemas, entre em contato pelo e-mail: [limarezendev1@gmail.com](mailto:limarezendev1@gmail.com)

---

## 📄 Licença

Este projeto está licenciado sob a MIT License.