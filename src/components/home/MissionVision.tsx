
const MissionVision = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-morha-purple to-morha-purple/80 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-chunkfive text-morha-white mb-4">Misión y Visión</h2>
          <p className="text-morha-white/80 max-w-2xl mx-auto">
            Nuestro propósito y hacia dónde nos dirigimos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
            <h3 className="text-xl font-chunkfive text-morha-white mb-4">Misión</h3>
            <p className="text-morha-white/90 leading-relaxed">
              "En nuestra agencia reinventamos la manera de impulsar PYMES, combinando innovación y talento joven para ser partners 
              estratégicos que generan soluciones creativas y transformadoras en el mundo digital."
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
            <h3 className="text-xl font-chunkfive text-morha-white mb-4">Visión</h3>
            <p className="text-morha-white/90 leading-relaxed">
              "Convertirnos en una agencia de marketing digital de referencia, reconocida por nuestro enfoque innovador y 
              nuestra capacidad para formar y empoderar talento joven. Aspiramos a ser líderes tanto a nivel nacional como internacional, 
              brindando soluciones creativas y estratégicas que generen un impacto positivo en nuestros clientes y en el crecimiento de sus negocios."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
