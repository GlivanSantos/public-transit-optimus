
import { Link } from "react-router-dom";
import { Bus, MapPin, Clock, Smartphone, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-primary font-semibold">
              <Bus className="h-6 w-6" />
              <span className="text-xl font-bold">TransJet</span>
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              Sistema Integrado de Transporte Público para a cidade de Aracaju, 
              otimizando a experiência dos usuários e a gestão da frota.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/routes" className="text-sm text-gray-500 hover:text-primary transition-colors flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Planejador de Rotas
                </Link>
              </li>
              <li>
                <Link to="/map" className="text-sm text-gray-500 hover:text-primary transition-colors flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Mapa em Tempo Real
                </Link>
              </li>
              <li>
                <Link to="/schedules" className="text-sm text-gray-500 hover:text-primary transition-colors flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Horários e Itinerários
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Informações</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-gray-500 hover:text-primary transition-colors">
                  Sobre o Projeto
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-500 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-500 hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-500 hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Baixe o App</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-primary">
                <Smartphone className="h-6 w-6" aria-label="App Store" />
              </a>
              <a href="#" className="text-gray-700 hover:text-primary">
                <Smartphone className="h-6 w-6" aria-label="Google Play" />
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Disponível para iOS e Android
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TransJet. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-primary">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-primary">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
