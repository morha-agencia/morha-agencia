
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-morha-white to-morha-gray/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-chunkfive">
              <span className="text-morha-black">Marketing</span> <span className="text-morha-purple">Digital</span>
            </h1>
            <p className="text-lg text-morha-black/80 leading-relaxed">
              En MORHA, somos como felinos digitales: estratégicos, ágiles y siempre al acecho de las mejores oportunidades para que tu marca destaque. 
              Al igual que un felino en su hábitat, observamos con precisión el entorno digital, nos movemos con sigilo para atacar en el momento perfecto 
              y dejamos una huella poderosa en cada acción.
            </p>
            <p className="text-morha-purple font-medium">
              Agencia de marketing digital como Growth Partner en Bucaramanga
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-morha-purple text-white hover:bg-morha-purple/90">
                <Link to="/contact">Contáctanos</Link>
              </Button>
              <Button asChild variant="outline" className="border-morha-purple text-morha-purple hover:bg-morha-purple hover:text-white">
                <Link to="/services">Nuestros Servicios</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-morha-purple via-morha-pink to-morha-blue blur-md opacity-75"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80" 
                  alt="MORHA Marketing Digital" 
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
