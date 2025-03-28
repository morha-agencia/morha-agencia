
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 'raiz',
      title: 'Paquete RAÍZ',
      description: 'Este paquete está diseñado para quienes están iniciando su presencia digital. Incluye la gestión de redes sociales en dos plataformas clave, la creación de contenido gráfico básico y la planificación de un calendario de publicaciones.',
      features: [
        'Gestión de redes sociales en dos plataformas',
        'Creación de contenido gráfico básico',
        'Planificación de calendario de publicaciones',
        'Informe mensual de rendimiento'
      ],
      color: 'bg-morha-blue',
      link: '/services/raiz'
    },
    {
      id: 'impulso',
      title: 'Paquete IMPULSO',
      description: 'Pensado para empresas que desean potenciar su crecimiento digital, este paquete incluye todos los servicios del paquete RAÍZ, además de la creación de campañas publicitarias en redes sociales para llegar a un público más amplio.',
      features: [
        'Todos los servicios del paquete RAÍZ',
        'Creación de campañas publicitarias en redes sociales',
        'Diseño de piezas gráficas avanzadas',
        'Implementación de estrategias de email marketing',
        'Optimización básica del sitio web'
      ],
      color: 'bg-morha-pink',
      link: '/services/impulso'
    },
    {
      id: 'escala',
      title: 'Paquete ESCALA',
      description: 'Este paquete está dirigido a empresas que desean llevar su crecimiento digital al siguiente nivel. Ofrece una estrategia personalizada basada en el modelo Growth Partner, que combina análisis de datos con técnicas avanzadas de marketing.',
      features: [
        'Todos los servicios del paquete IMPULSO',
        'Estrategia personalizada basada en modelo Growth Partner',
        'Análisis detallado de métricas y KPIs',
        'Implementación de sistemas de automatización de ventas',
        'Consultoría mensual con asesoramiento estratégico'
      ],
      color: 'bg-morha-purple',
      link: '/services/escala'
    }
  ];

  return (
    <div>
      <section className="py-16 bg-gradient-to-b from-morha-white to-morha-gray/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-chunkfive text-morha-black mb-6">Nuestros Servicios</h1>
            <p className="text-morha-black/70 max-w-3xl mx-auto">
              Soluciones digitales diseñadas para cada etapa de crecimiento de tu negocio
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-morha-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
              >
                <div className="md:w-1/2">
                  <div className={`${service.color} h-2 w-16 rounded-full mb-6`}></div>
                  <h2 className="text-2xl md:text-3xl font-chunkfive text-morha-black mb-4">{service.title}</h2>
                  <p className="text-morha-black/80 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className={`${service.color} rounded-full p-1 mr-3 mt-1`}>
                          <Check className="text-white h-4 w-4" />
                        </div>
                        <p className="text-morha-black/80">{feature}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="bg-morha-turquoise hover:bg-morha-purple text-white">
                    <Link to={service.link} className="flex items-center">
                      Ver detalles <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </div>
                
                <div className="md:w-1/2">
                  <div className="relative">
                    <div className={`absolute -inset-1 rounded-lg ${service.color} opacity-20 blur-md`}></div>
                    <div className="relative bg-white p-4 rounded-lg shadow-lg">
                      <img 
                        src={`https://images.unsplash.com/photo-${1552664730 + index * 100}-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80`} 
                        alt={service.title} 
                        className="w-full h-auto rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-morha-black text-morha-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-chunkfive text-morha-gold mb-6">¿Necesitas una solución personalizada?</h2>
          <p className="text-morha-white/80 max-w-2xl mx-auto mb-8">
            Contáctanos para discutir tus necesidades específicas y crear una estrategia a medida para tu negocio
          </p>
          <Button asChild className="bg-morha-gold hover:bg-morha-gold/90 text-morha-black">
            <Link to="/contact">Solicitar propuesta personalizada</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
