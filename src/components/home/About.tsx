
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-morha-white to-morha-gray/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-morha-purple to-morha-pink blur-md opacity-30"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Equipo MORHA" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-chunkfive text-morha-black">Quiénes Somos</h2>
            <p className="text-morha-black/80 leading-relaxed">
              Somos MORHA, una agencia de marketing digital que combina innovación y talento joven para impulsar PYMES. 
              Nos guiamos por la creatividad, el compromiso con causas sociales y el crecimiento de las empresas. Creemos en 
              ofrecer soluciones transformadoras que no solo impacten positivamente a nuestros clientes, sino también al entorno 
              que nos rodea.
            </p>
            <p className="text-morha-black/80 leading-relaxed">
              Contamos con registro en la Cámara de Comercio, lo que respalda nuestra formalidad, profesionalismo y compromiso 
              con brindar un servicio transparente y confiable.
            </p>
            <Button asChild className="bg-morha-purple hover:bg-morha-purple/90 text-white">
              <Link to="/about">Conoce más sobre nosotros</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
