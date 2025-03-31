
import { Check } from 'lucide-react';

const Values = () => {
  const values = [
    "Apertura a Nuevas Tendencias",
    "Creatividad al Máximo",
    "Apoyo al Cuidado de la Biodiversidad, Mascotas y Medio Ambiente",
    "Compromiso con Causas Sociales",
    "Importancia de la Puntualidad",
    "Pasión por el Trabajo",
    "Ambientes Serenos y de Felicidad"
  ];

  return (
    <section className="py-16 bg-morha-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-chunkfive text-morha-gold mb-4">Principios y Valores</h2>
          <p className="text-morha-white/80 max-w-2xl mx-auto">
            Estos son los valores que guían nuestro trabajo diario y definen quiénes somos como agencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-morha-black/40 border border-morha-gold/20 rounded-lg p-6 flex items-start"
            >
              <div className="bg-morha-gold/10 rounded-full p-2 mr-4 mt-1">
                <Check className="text-morha-gold h-5 w-5" />
              </div>
              <p className="text-morha-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
