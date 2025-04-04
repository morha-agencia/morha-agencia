
import ContactForm from '@/components/contact/ContactForm';

const ContactPage = () => {
  const contactInfo = [
    { label: 'Teléfono', value: '3132765998', link: 'https://web.whatsapp.com/send/?phone=573132765998' },
    { label: 'Correo', value: 'agenciamorha@gmail.com', link: 'mailto:agenciamorha@gmail.com' },
    { label: 'Instagram', value: '@agencia_morha', link: 'https://instagram.com/agencia_morha' },
    { label: 'Facebook', value: 'Morha Part', link: 'https://www.facebook.com/profile.php?id=61566414160583' }
  ];

  return (
    <div>
      <section className="py-16 bg-gradient-to-b from-morha-white to-morha-gray/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-chunkfive text-morha-black mb-6">Contáctanos</h1>
            <p className="text-morha-black/70 max-w-3xl mx-auto">
              Estamos listos para ayudarte a impulsar tu negocio. Completa el formulario o utiliza cualquiera de nuestros canales de contacto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <h3 className="text-lg font-semibold text-morha-purple mb-2">{item.label}</h3>
                <p className="text-morha-black/70">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <ContactForm />
      
      <section className="py-16 bg-morha-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-chunkfive text-white mb-4">¿Listo para crecer?</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Únete a las empresas que ya confían en nosotros y comienza a ver resultados
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
