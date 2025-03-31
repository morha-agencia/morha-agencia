
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'raiz',
      title: 'Paquete RAÍZ',
      description: 'Para quienes están iniciando su presencia digital. Incluye la gestión de redes sociales en dos plataformas clave, la creación de contenido gráfico básico y la planificación de un calendario de publicaciones.',
      color: 'bg-morha-blue',
      link: '/services/raiz'
    },
    {
      id: 'impulso',
      title: 'Paquete IMPULSO',
      description: 'Pensado para empresas que desean potenciar su crecimiento digital. Incluye todos los servicios del paquete RAÍZ, además de la creación de campañas publicitarias en redes sociales para llegar a un público más amplio.',
      color: 'bg-morha-pink',
      link: '/services/impulso'
    },
    {
      id: 'escala',
      title: 'Paquete ESCALA',
      description: 'Dirigido a empresas que desean llevar su crecimiento digital al siguiente nivel. Ofrece una estrategia personalizada basada en el modelo Growth Partner, que combina análisis de datos con técnicas avanzadas de marketing.',
      color: 'bg-morha-purple',
      link: '/services/escala'
    }
  ];

  return (
    <section className="py-16 bg-morha-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-chunkfive text-morha-black mb-4">SERVICIOS</h2>
          <p className="text-morha-black/70 max-w-2xl mx-auto">
            Soluciones digitales diseñadas para cada etapa de crecimiento de tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-2 duration-300"
            >
              <div className={`${service.color} h-4`}></div>
              <div className="p-6 md:p-8 flex flex-col h-full">
                <h3 className="text-xl font-chunkfive text-morha-black mb-4">{service.title}</h3>
                <p className="text-morha-black/70 mb-6 flex-grow">{service.description}</p>
                <Button asChild className="w-full mt-auto bg-morha-turquoise hover:bg-morha-purple text-white">
                  <Link to={service.link} className="flex items-center justify-center">
                    Ver detalles <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
