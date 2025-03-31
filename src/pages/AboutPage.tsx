
import Team from '@/components/about/Team';
import MissionVision from '@/components/home/MissionVision';
import Values from '@/components/home/Values';

const AboutPage = () => {
  return (
    <div>
      <section className="py-16 bg-gradient-to-b from-morha-white to-morha-gray/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-chunkfive text-morha-black mb-6">Quiénes Somos</h1>
            <p className="text-morha-black/70 max-w-3xl mx-auto">
              Conoce más sobre MORHA, nuestra historia, misión y valores
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-morha-purple to-morha-pink blur-md opacity-30"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Equipo MORHA trabajando" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="md:w-1/2 space-y-6">
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
              <p className="text-morha-black/80 leading-relaxed">
                En el acelerado mundo digital actual, nos destacamos por nuestra capacidad para adaptarnos rápidamente a las tendencias
                emergentes, manteniendo siempre un enfoque estratégico que prioriza los resultados de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <MissionVision />
      <Team />
      <Values />
    </div>
  );
};

export default AboutPage;
