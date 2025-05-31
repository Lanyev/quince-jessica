import React from 'react';

const Padrinos = () => {
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
            <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-primary mb-4">Padrinos</h1>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-primary-light italic">Personas especiales que me acompañan en este día</p>
            <div className="flex justify-center mt-6">
              <div className="w-32 md:w-48 lg:w-64 h-1 bg-primary rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {/* Padrino de Misa */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/20">
              <div className="bg-primary py-3 px-4">
                <h2 className="text-white text-xl font-script font-semibold">Padrinos de Misa</h2>
              </div>
              <div className="p-6">
                <div className="mb-5 text-center">
                  <div className="h-24 w-24 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-primary font-serif">Sr. Roberto González y Sra. María Hernández</h3>
                </div>
                <p className="text-gray-600 font-serif">
                  Gracias por ser un ejemplo de amor y compromiso. Su apoyo y guía espiritual han sido fundamentales en mi camino.
                </p>
              </div>
            </div>

            {/* Padrinos de Anillos */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/20">
              <div className="bg-primary py-3 px-4">
                <h2 className="text-white text-xl font-script font-semibold">Padrinos de Anillos</h2>
              </div>
              <div className="p-6">
                <div className="mb-5 text-center">
                  <div className="h-24 w-24 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-primary font-serif">Sr. Carlos Mendoza y Sra. Ana Juárez</h3>
                </div>
                <p className="text-gray-600 font-serif">
                  Les agradezco por aceptar ser parte de esta celebración tan importante. Su presencia hace este día aún más especial.
                </p>
              </div>
            </div>

            {/* Padrinos de Zapatillas */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/20">
              <div className="bg-primary py-3 px-4">
                <h2 className="text-white text-xl font-script font-semibold">Padrinos de Zapatillas</h2>
              </div>
              <div className="p-6">
                <div className="mb-5 text-center">
                  <div className="h-24 w-24 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-primary font-serif">Sr. Manuel López y Sra. Laura Ramírez</h3>
                </div>
                <p className="text-gray-600 font-serif">
                  Su cariño y apoyo significan mucho para mí. Gracias por acompañarme en este paso tan importante.
                </p>
              </div>
            </div>

            {/* Padrinos de Corona */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/20">
              <div className="bg-primary py-3 px-4">
                <h2 className="text-white text-xl font-script font-semibold">Padrinos de Corona</h2>
              </div>
              <div className="p-6">
                <div className="mb-5 text-center">
                  <div className="h-24 w-24 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-primary font-serif">Sr. Diego Martínez y Sra. Patricia Flores</h3>
                </div>
                <p className="text-gray-600 font-serif">
                  Agradezco inmensamente su generosidad y el tiempo que han dedicado para hacer esta celebración posible.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-primary/20 mb-8">
            <h3 className="text-xl font-script font-semibold text-primary mb-4 text-center">Agradecimiento Especial</h3>
            <p className="text-gray-600 text-center font-serif">
              A todos mis padrinos, gracias por su apoyo incondicional, por compartir este momento tan especial y por hacer posible esta celebración. Su presencia y cariño hacen de este día un momento inolvidable.
            </p>
          </div>
        </div>
      </div>

      {/* Additional spacing for navbar clearance */}
      <div className="h-32 md:h-40"></div>
    </div>
  );
};

export default Padrinos;
