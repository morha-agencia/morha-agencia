
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Team = () => {
  const profile = {
    name: "Margarita Becerra",
    education: [
      "Técnica Contable - SENA",
      "Tecnóloga en Gestión Administrativa - SENA",
      "Diplomado en Marketing Digital - Universidad del Rosario",
      "Ingeniería Industrial - Universidad Industrial de Santander",
      "Complementaria Virtual en Toma de Decisiones en el Nivel Gerencial - SENA",
      "Complementaria Virtual en Fundamentos de Diseño - SENA",
      "Complementaria Virtual en Indicadores de Gestión - SENA",
      "Complementaria Virtual en Emprendimiento Digital - SENA",
      "Curso de Emprendimiento Digital - Álvaro Luque",
      "Curso Virality - Álvaro Luque",
      "Curso The Perfect Launch - Álvaro Luque",
      "Ilustración de Personajes en Medios Digitales - SENA"
    ]
  };

  const departments = [
    {
      name: "Laboratorio Creativo",
      description: "Donde las ideas toman forma y se transforman en estrategias visuales impactantes."
    },
    {
      name: "Fábrica de Ideas",
      description: "El corazón de nuestra innovación, donde nacen conceptos disruptivos para cada cliente."
    },
    {
      name: "Zona de Conexión",
      description: "Espacio dedicado a fortalecer las relaciones con nuestros clientes y su audiencia."
    },
    {
      name: "Central de Enlace",
      description: "Donde coordinamos todos los esfuerzos para lograr resultados coherentes y eficaces."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-chunkfive text-morha-black mb-4">Equipo de Trabajo</h2>
          <p className="text-morha-black/70 max-w-2xl mx-auto">
            Conoce a los profesionales que hacen posible que MORHA ofrezca soluciones de marketing digital de excelencia
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/3">
            <div className="bg-morha-purple/5 rounded-lg p-6 text-center">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-morha-purple">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Margarita Becerra" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-chunkfive text-morha-black mb-2">{profile.name}</h3>
              <p className="text-morha-purple font-medium mb-4">Núcleo Estratégico</p>
              <Button asChild className="w-full bg-morha-turquoise hover:bg-morha-purple text-white">
                <Link to="/contact">Contactar</Link>
              </Button>
            </div>
          </div>

          <div className="md:w-2/3">
            <h3 className="text-xl font-chunkfive text-morha-black mb-4">Perfil Profesional</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {profile.education.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-morha-purple/10 rounded-full p-1 mr-2 mt-1">
                    <div className="w-2 h-2 bg-morha-purple rounded-full"></div>
                  </div>
                  <p className="text-morha-black/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-chunkfive text-morha-black mb-6 text-center">Otras Áreas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 border-t-4 border-morha-purple">
                <h4 className="text-lg font-semibold text-morha-black mb-3">{dept.name}</h4>
                <p className="text-morha-black/70">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
