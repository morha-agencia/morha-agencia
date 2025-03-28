
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-morha-white fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-bold font-chunkfive">
              <span className="text-morha-black">Agencia de Marketing Digital</span> <span className="text-morha-purple">MORHA</span>
            </span>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-morha-black"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-morha-black hover:text-morha-purple font-medium transition-colors">
              Inicio
            </Link>
            <Link to="/about" className="text-morha-black hover:text-morha-purple font-medium transition-colors">
              Nosotros
            </Link>
            <Link to="/services" className="text-morha-black hover:text-morha-purple font-medium transition-colors">
              Servicios
            </Link>
            <Link to="/contact" className="text-morha-black hover:text-morha-purple font-medium transition-colors">
              Contacto
            </Link>
            <div className="flex space-x-2">
              <Button asChild variant="outline" className="border-morha-purple text-morha-purple hover:bg-morha-purple hover:text-white">
                <Link to="/services/raiz">Paquete RAÍZ</Link>
              </Button>
              <Button asChild variant="outline" className="border-morha-purple text-morha-purple hover:bg-morha-purple hover:text-white">
                <Link to="/services/impulso">Paquete IMPULSO</Link>
              </Button>
              <Button asChild className="bg-morha-turquoise text-white hover:bg-morha-purple">
                <Link to="/services/escala">Paquete ESCALA</Link>
              </Button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-morha-black hover:text-morha-purple font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/about" 
                className="text-morha-black hover:text-morha-purple font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                to="/services" 
                className="text-morha-black hover:text-morha-purple font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                to="/contact" 
                className="text-morha-black hover:text-morha-purple font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button asChild variant="outline" className="border-morha-purple text-morha-purple hover:bg-morha-purple hover:text-white w-full">
                  <Link to="/services/raiz" onClick={() => setIsMenuOpen(false)}>Paquete RAÍZ</Link>
                </Button>
                <Button asChild variant="outline" className="border-morha-purple text-morha-purple hover:bg-morha-purple hover:text-white w-full">
                  <Link to="/services/impulso" onClick={() => setIsMenuOpen(false)}>Paquete IMPULSO</Link>
                </Button>
                <Button asChild className="bg-morha-turquoise text-white hover:bg-morha-purple w-full">
                  <Link to="/services/escala" onClick={() => setIsMenuOpen(false)}>Paquete ESCALA</Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
