
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  textColor: string;
  idealFor: string;
}

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  const services: Record<string, ServiceInfo> = {
    raiz: {
      id: 'raiz',
      title: 'Paquete RAÍZ',
      description: 'Este paquete está diseñado para quienes están iniciando su presencia digital. Incluye la gestión de redes sociales en dos plataformas clave, la creación de contenido gráfico básico y la planificación de un calendario de publicaciones. Además, se proporciona un informe mensual que detalla el rendimiento de las estrategias implementadas, permitiendo al cliente conocer el impacto de su inversión.',
      features: [
        'Gestión de redes sociales en dos plataformas',
        'Creación de contenido gráfico básico',
        'Planificación de calendario de publicaciones',
        'Informe mensual de rendimiento',
        'Asesoramiento básico en estrategia digital'
      ],
      color: 'bg-morha-blue',
      textColor: 'text-morha-blue',
      idealFor: 'Es la opción ideal para emprendedores que desean dar sus primeros pasos en el entorno digital sin complicaciones.'
    },
    impulso: {
      id: 'impulso',
      title: 'Paquete IMPULSO',
      description: 'Pensado para empresas que desean potenciar su crecimiento digital, este paquete incluye todos los servicios del paquete RAÍZ, además de la creación de campañas publicitarias en redes sociales para llegar a un público más amplio. También incorpora el diseño de piezas gráficas avanzadas que refuercen la imagen de marca, la implementación de estrategias de email marketing para fidelizar clientes y una optimización básica del sitio web para mejorar su visibilidad en buscadores.',
      features: [
        'Todos los servicios del paquete RAÍZ',
        'Creación de campañas publicitarias en redes sociales',
        'Diseño de piezas gráficas avanzadas',
        'Implementación de estrategias de email marketing',
        'Optimización básica del sitio web',
        'Informes quincenales de rendimiento'
      ],
      color: 'bg-morha-pink',
      textColor: 'text-morha-pink',
      idealFor: 'Esta opción es ideal para marcas que buscan resultados más rápidos y un mayor impacto en su presencia digital.'
    },
    escala: {
      id: 'escala',
      title: 'Paquete ESCALA',
      description: 'Este paquete está dirigido a empresas que desean llevar su crecimiento digital al siguiente nivel. Además de incluir todos los servicios del paquete IMPULSO, ofrece una estrategia personalizada basada en el modelo Growth Partner, que combina análisis de datos con técnicas avanzadas de marketing. También se realiza un análisis detallado de métricas y KPIs para medir el éxito de las campañas, junto con la implementación de sistemas de automatización de ventas que optimizan los procesos comerciales.',
      features: [
        'Todos los servicios del paquete IMPULSO',
        'Estrategia personalizada basada en modelo Growth Partner',
        'Análisis detallado de métricas y KPIs',
        'Implementación de sistemas de automatización de ventas',
        'Consultoría mensual con asesoramiento estratégico',
        'Optimización avanzada de SEO',
        'Gestión de reputación online',
        'Informes semanales de rendimiento'
      ],
      color: 'bg-morha-purple',
      textColor: 'text-morha-purple',
      idealFor: 'Como valor agregado, se brinda una consultoría mensual con asesoramiento estratégico para garantizar que el negocio se mantenga en constante evolución.'
    }
  };

  const service = serviceId ? services[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-morha-black mb-4">Servicio no encontrado</h2>
          <Button asChild className="bg-morha-purple hover:bg-morha-purple/90 text-white">
            <Link to="/services">Ver todos los servicios</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className={`${service.color} h-2 w-24 mx-auto mb-8 rounded-full`}></div>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-chunkfive text-morha-black mb-6">{service.title}</h1>
          <p className="text-morha-black/70 max-w-3xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-2/3">
            <div className={`${service.color} bg-opacity-5 p-8 rounded-lg border border-opacity-10 border-morha-black`}>
              <h2 className="text-xl font-chunkfive text-morha-black mb-6">Características del Servicio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`${service.color} rounded-full p-1 mr-3 mt-1`}>
                      <Check className="text-white h-4 w-4" />
                    </div>
                    <p className="text-morha-black/80">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-white shadow-lg rounded-lg p-8 border-t-4 border-morha-purple">
              <h2 className="text-xl font-chunkfive text-morha-black mb-4">¿Para quién es ideal?</h2>
              <p className="text-morha-black/70 mb-8">{service.idealFor}</p>
              
              <div className="space-y-4">
                <Button asChild className="w-full bg-morha-turquoise hover:bg-morha-purple text-white">
                  <Link to="/contact">Solicitar este paquete</Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-morha-purple text-morha-purple hover:bg-morha-purple hover:text-white">
                  <Link to="/services">Ver otros servicios</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-chunkfive text-morha-black mb-8">Marcas que confían en nosotros</h2>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {/* Example brand logos - replace with actual client logos */}
            <div className="w-32 h-20 bg-morha-gray/30 rounded flex items-center justify-center">Logo</div>
            <div className="w-32 h-20 bg-morha-gray/30 rounded flex items-center justify-center">Logo</div>
            <div className="w-32 h-20 bg-morha-gray/30 rounded flex items-center justify-center">Logo</div>
            <div className="w-32 h-20 bg-morha-gray/30 rounded flex items-center justify-center">Logo</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
