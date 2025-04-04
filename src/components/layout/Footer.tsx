
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MessageSquare, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-morha-black text-morha-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-chunkfive text-morha-gold mb-4">MORHA</h3>
            <p className="text-sm mb-4">Agencia de marketing digital que combina innovación y talento joven para impulsar PYMES.</p>
            <p className="text-sm">Piensa en grande y crece sin límite</p>
          </div>
          
          <div>
            <h3 className="text-xl font-chunkfive text-morha-gold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-morha-gold transition-colors">Inicio</Link></li>
              <li><Link to="/about" className="text-sm hover:text-morha-gold transition-colors">Nosotros</Link></li>
              <li><Link to="/services" className="text-sm hover:text-morha-gold transition-colors">Servicios</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-morha-gold transition-colors">Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-chunkfive text-morha-gold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><Link to="/services/raiz" className="text-sm hover:text-morha-gold transition-colors">Paquete RAÍZ</Link></li>
              <li><Link to="/services/impulso" className="text-sm hover:text-morha-gold transition-colors">Paquete IMPULSO</Link></li>
              <li><Link to="/services/escala" className="text-sm hover:text-morha-gold transition-colors">Paquete ESCALA</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-chunkfive text-morha-gold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-morha-gold" />
                <a href="https://web.whatsapp.com/send/?phone=573132765998" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-morha-gold transition-colors">3132765998</a>
              </li>
              <li className="flex items-center">
                <MessageSquare size={16} className="mr-2 text-morha-gold" />
                <a href="mailto:agenciamorha@gmail.com" className="text-sm hover:text-morha-gold transition-colors">agenciamorha@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3 mt-4">
                <a href="https://instagram.com/agencia_morha" target="_blank" rel="noopener noreferrer" className="text-morha-white hover:text-morha-gold transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com/profile.php?id=61566414160583" target="_blank" rel="noopener noreferrer" className="text-morha-white hover:text-morha-gold transition-colors">
                  <Facebook size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-morha-gold/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MORHA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
