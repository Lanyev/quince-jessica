import React from 'react';

const Regalos = () => {
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
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-primary mb-4">Mesa de Regalos</h1>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-primary-light italic">Tu presencia es nuestro mayor regalo</p>
            <div className="flex justify-center mt-6">
              <div className="w-32 md:w-48 lg:w-64 h-1 bg-primary rounded-full"></div>
            </div>
          </div>

          {/* Main Message */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-12 border border-primary/20 mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-script font-semibold text-primary mb-6">Un mensaje especial</h3>
              <p className="text-gray-600 font-serif text-lg leading-relaxed mb-8">
                Tu presencia en mi celebración es el regalo más valioso que puedo recibir. 
                Sin embargo, si deseas honrarme con un presente, he preparado algunas sugerencias 
                que me ayudarán a comenzar esta nueva etapa de mi vida.
              </p>
            </div>
          </div>

          {/* Gift Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Traditional Gifts */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/20">
              <div className="bg-primary py-4 px-6">
                <h4 className="text-white text-xl font-script font-semibold flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                  Efectivo
                </h4>
              </div>
              <div className="p-6">
                <p className="text-gray-600 font-serif mb-4">
                  Si prefieres obsequiar dinero, será de gran ayuda para mis estudios universitarios 
                  y para empezar a construir mi futuro.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 font-serif">
                    Puedes entregarlo directamente el día del evento o depositarlo en:
                  </p>
                  <p className="text-primary font-semibold mt-2">
                    Cuenta bancaria disponible en el evento
                  </p>
                </div>
              </div>
            </div>

            {/* Store Registry */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/20">
              <div className="bg-primary py-4 px-6">
                <h4 className="text-white text-xl font-script font-semibold flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"></path>
                  </svg>
                  Mesa de Regalos
                </h4>
              </div>
              <div className="p-6">
                <p className="text-gray-600 font-serif mb-4">
                  He creado una lista de artículos que me serán útiles para mi nuevo hogar 
                  y mi vida universitaria.
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-primary">Liverpool</p>
                    <p className="text-sm text-gray-600">Evento: Jessica Paola Quinceañera</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-primary">Palacio de Hierro</p>
                    <p className="text-sm text-gray-600">Evento: Quinceañera Jessica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gift Suggestions */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-primary/20 mb-8">
            <h3 className="text-xl font-script font-semibold text-primary mb-6 text-center">Sugerencias de regalos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-primary font-serif">Libros</h4>
                <p className="text-sm text-gray-600 font-serif">Para mis estudios universitarios</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-primary font-serif">Tecnología</h4>
                <p className="text-sm text-gray-600 font-serif">Laptop, tablet, accesorios</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2v0"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-primary font-serif">Hogar</h4>
                <p className="text-sm text-gray-600 font-serif">Artículos para mi habitación</p>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="text-center text-gray-600 font-serif">
            <p className="text-base lg:text-lg italic">
              "El mejor regalo es tu compañía en este día tan especial"
            </p>
            <p className="text-sm mt-2">
              Para más información, contacta a mis papás: 
              <a href="tel:+1234567890" className="text-primary hover:text-primary-dark ml-1">
                (123) 456-7890
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Additional spacing for navbar clearance */}
      <div className="h-32 md:h-40"></div>
    </div>
  );
};

export default Regalos;
