import { useState } from 'react';

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome.trim() === '' || mensagem.trim() === '') {
      setErro('Por favor, preencha todos os campos.');
      return;
    }

    if (!validarEmail(email)) {
      setErro('Email inválido.');
      return;
    }

    setErro('');
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <main className="min-h-screen flex items-center justify-center transition-colors px-4">
      <section className="w-full max-w-xl p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
        <h1 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white text-center">
          Contato
        </h1>

        <form onSubmit={handleSubmit} noValidate>
          <label
            htmlFor="nome"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Nome
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Seu nome"
            />
          </label>

          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300 mt-4"
          >
            Email
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="seu@email.com"
            />
          </label>

          <label
            htmlFor="mensagem"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300 mt-4"
          >
            Mensagem
            <textarea
              id="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
              rows="4"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
              placeholder="Digite sua mensagem..."
            ></textarea>
          </label>

          {erro && (
            <p className="mt-2 text-red-600 dark:text-red-400 font-medium">
              {erro}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-teal-600 px-4 py-2 text-white font-semibold hover:bg-teal-700 transition-colors"
          >
            Enviar Mensagem
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contato;
