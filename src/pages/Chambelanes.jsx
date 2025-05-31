import React from 'react';

const Chambelanes = () => {
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
            <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-primary mb-4">Chambelanes</h1>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-primary-light italic">Mis acompañantes de honor</p>
            <div className="flex justify-center mt-6">
              <div className="w-32 md:w-48 lg:w-64 h-1 bg-primary rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {/* Chambelán 1 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/20">
              <div className="p-6 text-center">
                <div className="h-24 w-24 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary font-serif mb-2">Alejandro Morales</h3>
                <p className="text-gray-600 font-serif text-sm">Primo</p>
              </div>
            </div>

            {/* Chambelán 2 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/20">
              <div className="p-6 text-center">
                <div className="h-24 w-24 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary font-serif mb-2">Gabriel Rivera</h3>
                <p className="text-gray-600 font-serif text-sm">Mejor amigo</p>
              </div>
            </div>

            {/* Chambelán 3 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/20">
              <div className="p-6 text-center">
                <div className="h-24 w-24 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary font-serif mb-2">Sebastián Castro</h3>
                <p className="text-gray-600 font-serif text-sm">Hermano</p>
              </div>
            </div>

            {/* Chambelán 4 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/20">
              <div className="p-6 text-center">
                <div className="h-24 w-24 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary font-serif mb-2">Miguel Vargas</h3>
                <p className="text-gray-600 font-serif text-sm">Compañero de escuela</p>
              </div>
            </div>

            {/* Chambelán 5 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/20">
              <div className="p-6 text-center">
                <div className="h-24 w-24 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary font-serif mb-2">Daniel Herrera</h3>
                <p className="text-gray-600 font-serif text-sm">Primo</p>
              </div>
            </div>

            {/* Chambelán 6 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/20">
              <div className="p-6 text-center">
                <div className="h-24 w-24 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary font-serif mb-2">Ricardo Mendoza</h3>
                <p className="text-gray-600 font-serif text-sm">Amigo de la familia</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-primary/20 mb-8">
            <h3 className="text-xl font-script font-semibold text-primary mb-4 text-center">Agradecimiento</h3>
            <p className="text-gray-600 text-center font-serif">
              Gracias a todos mis chambelanes por aceptar ser parte de esta celebración tan especial. Su amistad y apoyo han sido fundamentales en mi vida. ¡Será una noche inolvidable!
            </p>
          </div>
        </div>
      </div>

      {/* Additional spacing for navbar clearance */}
      <div className="h-32 md:h-40"></div>
    </div>
  );
};

export default Chambelanes;
