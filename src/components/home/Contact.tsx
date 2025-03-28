
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8 text-morha-purple" />,
      title: 'Teléfono',
      value: '3132765998',
      link: 'tel:3132765998'
    },
    {
      icon: <Mail className="h-8 w-8 text-morha-purple" />,
      title: 'Correo',
      value: 'agenciamorha@gmail.com',
      link: 'mailto:agenciamorha@gmail.com'
    },
    {
      icon: <Instagram className="h-8 w-8 text-morha-purple" />,
      title: 'Instagram',
      value: '@agencia_morha',
      link: 'https://instagram.com/agencia_morha'
    },
    {
      icon: <Facebook className="h-8 w-8 text-morha-purple" />,
      title: 'Facebook',
      value: 'Morha Part',
      link: 'https://facebook.com/MorhaPart'
    }
  ];

  return (
    <section className="py-16 bg-morha-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-chunkfive text-morha-black mb-4">Datos de Contacto</h2>
          <p className="text-morha-black/70 max-w-2xl mx-auto">
            Estamos listos para ayudarte a impulsar tu negocio. Contáctanos por cualquiera de estos medios
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <a 
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="mb-4">{method.icon}</div>
              <h3 className="text-lg font-semibold text-morha-black mb-2">{method.title}</h3>
              <p className="text-morha-black/70">{method.value}</p>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-morha-turquoise hover:bg-morha-purple text-white">
            <Link to="/contact">Contactar ahora</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
