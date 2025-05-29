import React from 'react';

const Regalos = () => {
  return (
    <div className="min-h-screen">
      <div className="container-responsive desktop-section tablet-section mobile-section">
        <div className="content-max-width">
          <div className="text-center mb-16">
            <h1 className="font-script text-6xl md:text-7xl lg:text-8xl xl:text-9xl ultra-wide-title mobile-title font-bold text-primary mb-3">Regalos</h1>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary-light italic">Tu presencia es mi regalo</p>
            <div className="flex justify-center mt-6">
              <div className="w-32 md:w-48 lg:w-64 h-1 bg-primary rounded-full"></div>
            </div>
          </div>

          {/* Buzón de dinero section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 lg:p-12 border border-primary/20 content-card mb-8">
            <div className="text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              
              <h2 className="font-script text-3xl lg:text-4xl xl:text-5xl text-primary mb-6">Buzón de Dinero</h2>
              
              <div className="max-w-2xl mx-auto font-serif text-gray-700 text-base lg:text-lg leading-relaxed space-y-4">
                <p>
                  Tu presencia en mi celebración de XV años es el regalo más valioso que puedo recibir. 
                  Compartir este momento especial contigo significa todo para mí.
                </p>
                <p>
                  Si deseas contribuir de alguna manera especial, contaremos con un buzón de dinero 
                  durante el evento, que me ayudará a comenzar esta nueva etapa de mi vida.
                </p>
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="font-script text-xl lg:text-2xl text-primary">Ubicación del buzón</h3>
                </div>
                <p className="font-serif text-gray-700 text-base lg:text-lg">
                  El buzón estará disponible durante la recepción en el Salón Jardines del Bosque
                </p>
              </div>
            </div>
          </div>
          
          {/* Nota personal */}
          <div className="text-center bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 lg:p-12 border border-primary/20 content-card">
            <h3 className="font-script text-3xl lg:text-4xl xl:text-5xl text-primary mb-8">Una nota personal</h3>
            <div className="font-serif text-gray-700 text-base lg:text-lg leading-relaxed space-y-6">
              <p>
                Quiero agradecer profundamente a todos por su amor y apoyo en mi celebración de XV años. 
                Este día marca una transición importante en mi vida, y no hay nada más significativo 
                que poder compartirlo con las personas que más amo.
              </p>
              <p>
                Cada sonrisa, cada abrazo y cada momento compartido será parte de mis recuerdos más preciados. 
                Su presencia es realmente todo lo que necesito para hacer de este día algo mágico e inolvidable.
              </p>
              <div className="mt-8 pt-6 border-t border-primary/20">
                <p className="text-primary font-script text-xl lg:text-2xl xl:text-3xl">
                  Con todo mi amor y gratitud,<br />
                  <span className="text-2xl lg:text-3xl xl:text-4xl">Jessica Paola</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regalos;
