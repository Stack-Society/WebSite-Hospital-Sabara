import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [cardapio, setCardapio] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    const apiUrl = (import.meta.env.VITE_API_URL || 'http://localhost:3000').replace(/\/$/, '');

    axios.get(`${apiUrl}/refeicoes`, { signal: controller.signal })
      .then(response => {
        if (active) {
          setCardapio(response.data);
          setErro('');
        }
      })
      .catch(error => {
        if (active && error.code !== 'ERR_CANCELED') {
          console.error('Erro ao buscar cardápio:', error);
          setErro('Não foi possível carregar o cardápio. Verifique se a API está em execução.');
        }
      })
      .finally(() => {
        if (active) setCarregando(false);
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  const handlePedido = (refeicao) => {
    alert(`Você escolheu ${refeicao}`);
  };

  return (
    <main className='font-roboto'>
      <h1 className='text-5xl flex justify-center mt-5'>Pratos do dia</h1>

      {carregando && <p className='mt-8 text-center'>Carregando cardápio...</p>}
      {erro && <p className='mt-8 px-4 text-center text-red-600' role='alert'>{erro}</p>}

      {/* Cards-cardapios */}
      <div className='mt-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10'>
        {cardapio.map(item => (
          <div
            key={item.id}
            className='bg-white rounded-2xl shadow-md p-6 transition transform hover:scale-105 hover:shadow-lg'
          >
            <img
              src={item.imagem}
              alt={item.refeicao}
              className='border-10 border-green-400'
            />
            <h2 className='text-2xl text-black font-semibold mt-3'>{item.refeicao}</h2>
            <p className='text-gray-600'>{item.descricao}</p>
            <button
              className='mt-3 bg-[#008000] p-3 rounded text-white hover:bg-[#808000] transition-colors duration-300'
              onClick={() => handlePedido(item.refeicao)}
            >
              Pedir
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
