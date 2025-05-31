import React from 'react';

const Fiesta = () => {
  return (
    <div className="min-h-screen">
      {/* Crown Decorative Header */}
      <div className="crown-header py-4 md:py-6">
        <div className="flex justify-center">
          <img 
            src="./images/backgrounds/crown1.png" 
            alt="Corona decorativa" 
            className="w-48 h-auto md:w-64 lg:w-72 xl:w-80 object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="invitation-container mt-2 md:mt-4">
        <div className="invitation-card">
          <div className="text-center mb-12">
            <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-primary mb-4">Celebración</h1>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-primary-light italic">¡Es hora de festejar!</p>
            <div className="flex justify-center mt-6">
              <div className="w-32 md:w-48 lg:w-64 h-1 bg-primary rounded-full"></div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/20 mb-8">
            <div className="lg:desktop-grid">
              <div className="bg-primary p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white text-6xl lg:text-7xl xl:text-8xl font-script font-bold">25</div>
                  <div className="text-white/80 uppercase tracking-wide font-serif text-lg lg:text-xl">Junio</div>
                  <div className="text-white font-serif font-bold mt-2 text-xl lg:text-2xl">2025</div>
                  <div className="mt-6 border-t border-white/20 pt-3">
                    <div className="text-white font-serif font-bold text-lg lg:text-xl">20:00 hrs</div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex-1">
                <div className="uppercase tracking-wide text-sm lg:text-base text-primary font-serif font-semibold">Detalles del evento</div>
                <h2 className="mt-2 text-2xl lg:text-3xl xl:text-4xl font-script font-semibold text-primary">Salón Jardines del Bosque</h2>
                <p className="mt-2 text-gray-600 font-serif text-lg lg:text-xl">Av. Los Pinos #456, Zona Residencial</p>
                
                <div className="mt-8 space-y-4 lg:space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4 lg:mr-6">
                      <svg className="h-6 w-6 lg:h-8 lg:w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm lg:text-base text-primary-light font-serif">Duración</div>
                      <div className="font-medium font-serif text-base lg:text-lg">5 horas</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4 lg:mr-6">
                      <svg className="h-6 w-6 lg:h-8 lg:w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm lg:text-base text-primary-light font-serif">Gastronomía</div>
                      <div className="font-medium font-serif text-base lg:text-lg">Cena y postre incluidos</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4 lg:mr-6">
                      <svg className="h-6 w-6 lg:h-8 lg:w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm lg:text-base text-primary-light font-serif">Entretenimiento</div>
                      <div className="font-medium font-serif text-base lg:text-lg">Música en vivo y DJ</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4 lg:mr-6">
                      <svg className="h-6 w-6 lg:h-8 lg:w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm lg:text-base text-primary-light font-serif">Acceso</div>
                      <div className="font-medium font-serif text-base lg:text-lg">Estacionamiento disponible</div>
                    </div>
                  </div>
                </div>
                
                {/* Additional Info */}
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <p className="text-gray-700 font-serif text-base lg:text-lg leading-relaxed">
                    ¡Prepárate para una noche mágica llena de música, baile y alegría! 
                    Te esperamos para celebrar este momento tan especial.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dress Code Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-12 border border-primary/20 mb-8">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-script font-semibold text-primary text-center mb-8">Código de vestimenta</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h4 className="text-lg lg:text-xl font-semibold text-primary-light font-serif mb-4">Damas</h4>
                <p className="text-gray-600 font-serif text-base lg:text-lg">Vestido formal o cocktail</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg lg:text-xl font-semibold text-primary-light font-serif mb-4">Caballeros</h4>
                <p className="text-gray-600 font-serif text-base lg:text-lg">Traje o pantalón de vestir con camisa</p>
              </div>
            </div>
          </div>
          
          {/* Additional Information */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-12 border border-primary/20 mb-8">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-script font-semibold text-primary text-center mb-8">Información adicional</h3>
            <div className="space-y-4 text-gray-600 font-serif text-base lg:text-lg leading-relaxed">
              <p>El salón cuenta con servicio de barra libre para adultos y bebidas sin alcohol para menores de edad.</p>
              <p>Habrá fotógrafo profesional para capturar todos los momentos especiales de la celebración.</p>
              <p>Contaremos con vals, rompimiento de piñata y todos los elementos tradicionales de una fiesta de quince años.</p>
            </div>
          </div>
          
          {/* Footer Message */}
          <div className="text-center text-gray-600 font-serif">
            <p className="text-base lg:text-lg">¡Tu presencia hará esta celebración aún más especial!</p>
          </div>
        </div>
      </div>

      {/* Additional spacing for navbar clearance */}
      <div className="h-32 md:h-40"></div>
    </div>
  );
};

export default Fiesta;
