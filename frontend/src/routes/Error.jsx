import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-2">Oops! Página não encontrada.</p>
      <p className="mb-6 text-center max-w-md">
        A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
      >
        Voltar para o início
      </Link>
    </main>
  );
};

export default Error;
