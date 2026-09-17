import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registrar = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');

  const validarEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarEmail(email)) {
      setErro('Por favor, insira um email válido.');
      return;
    }
    if (senha.length < 6) {
      setErro('A senha deve ter pelo menos 6 caracteres.');
      return;
    }
    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return;
    }

    setErro('');
    alert(`Conta criada com sucesso!\nEmail: ${email}`);
    navigate('/Login');
  };

  return (
    <main className="min-h-screen flex items-center justify-center transition-colors">
      <section className="w-full max-w-sm p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white text-center">
          Registrar
        </h1>

        <form onSubmit={handleSubmit} noValidate>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="seu@email.com"
            />
          </label>

          <label
            htmlFor="senha"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Senha
            <input
              id="senha"
              type="password"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              minLength={6}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="********"
            />
          </label>

          <label
            htmlFor="confirmarSenha"
            className="block mb-4 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Confirmar Senha
            <input
              id="confirmarSenha"
              type="password"
              name="confirmarSenha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
              minLength={6}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="********"
            />
          </label>

          {erro && (
            <p className="mb-4 text-red-600 dark:text-red-400 font-medium">{erro}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-md bg-teal-600 px-4 py-2 text-white font-semibold hover:bg-teal-700 transition-colors"
          >
            Registrar
          </button>
        </form>
      </section>
    </main>
  );
};

export default Registrar;
