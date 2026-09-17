import { Link } from 'react-router-dom'
import whatsappIcon from '../assets/whatsapp.png'
import instagramIcon from '../assets/instagram.png'
import twitterIcon from '../assets/twitter.png'

const Footer = () => {
  return (
    <>
    <hr />
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-700 pb-6">
      
      
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-wide">Stack Society</h2>
          <p className="text-sm text-gray-400 mt-1">Tecnologia, criatividade e inovação.</p>
        </div>
        
      
        <div className="flex gap-5">
          <a href="#" aria-label="WhatsApp" className="transition-transform hover:scale-110">
            <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Instagram" className="transition-transform hover:scale-110">
            <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Twitter" className="transition-transform hover:scale-110">
            <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
          </a>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500">
        <p className="text-center md:text-left">&copy; 2025 Stack Society. Todos os direitos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Termos de uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de privacidade</a>
          <Link to="/Contato" className="hover:text-white transition-colors">Contato</Link>
        </div>
        </div>
      </div>
      </footer>
    </>
  )
}

export default Footer
