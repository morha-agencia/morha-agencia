
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'none'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Display success toast
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo lo antes posible.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      service: 'none'
    });
  };

  return (
    <section className="py-16 bg-morha-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-chunkfive text-morha-black mb-4">Contáctanos</h2>
            <p className="text-morha-black/70 max-w-2xl mx-auto">
              Completa el formulario y nos pondremos en contacto contigo lo antes posible
            </p>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-morha-black mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-morha-gray/50 rounded-lg focus:ring-2 focus:ring-morha-purple focus:border-transparent outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-morha-black mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-morha-gray/50 rounded-lg focus:ring-2 focus:ring-morha-purple focus:border-transparent outline-none transition-all"
                    placeholder="ejemplo@correo.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-morha-black mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-morha-gray/50 rounded-lg focus:ring-2 focus:ring-morha-purple focus:border-transparent outline-none transition-all"
                    placeholder="Tu número de contacto"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-morha-black mb-2">
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-morha-gray/50 rounded-lg focus:ring-2 focus:ring-morha-purple focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="none">Selecciona un servicio</option>
                    <option value="raiz">Paquete RAÍZ</option>
                    <option value="impulso">Paquete IMPULSO</option>
                    <option value="escala">Paquete ESCALA</option>
                    <option value="other">Otro servicio</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-morha-black mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-morha-gray/50 rounded-lg focus:ring-2 focus:ring-morha-purple focus:border-transparent outline-none transition-all"
                  placeholder="Asunto de tu mensaje"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-morha-black mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-morha-gray/50 rounded-lg focus:ring-2 focus:ring-morha-purple focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <Button type="submit" className="bg-morha-purple hover:bg-morha-purple/90 text-white px-8 py-2">
                  Enviar mensaje
                </Button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-morha-purple/10 p-3 rounded-full mb-4">
                <Check className="text-morha-purple h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-morha-black mb-2">Respuesta rápida</h3>
              <p className="text-morha-black/70">Nos comunicamos contigo en menos de 24 horas</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-morha-purple/10 p-3 rounded-full mb-4">
                <Check className="text-morha-purple h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-morha-black mb-2">Asesoría personalizada</h3>
              <p className="text-morha-black/70">Adaptamos nuestras soluciones a tus necesidades</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-morha-purple/10 p-3 rounded-full mb-4">
                <Check className="text-morha-purple h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-morha-black mb-2">Soporte continuo</h3>
              <p className="text-morha-black/70">Te acompañamos en todo el proceso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
