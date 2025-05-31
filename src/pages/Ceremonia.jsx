import React from 'react';

const Ceremonia = () => {
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
            <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-primary mb-4">Ceremonia Religiosa</h1>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-primary-light italic">Un momento de bendición</p>
            <div className="flex justify-center mt-6">
              <div className="w-32 md:w-48 lg:w-64 h-1 bg-primary rounded-full"></div>
            </div>
          </div>

          {/* Main Card - Responsive Layout */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/20 mb-8">
            <div className="lg:desktop-grid">
              {/* Date/Time Section */}
              <div className="bg-primary p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white text-6xl lg:text-7xl xl:text-8xl font-script font-bold">26</div>
                  <div className="text-white/80 uppercase tracking-wide font-serif text-lg lg:text-xl">Julio</div>
                  <div className="text-white font-serif font-bold mt-2 text-xl lg:text-2xl">2025</div>
                  <div className="mt-6 border-t border-white/20 pt-3">
                    <div className="text-white font-serif font-bold text-lg lg:text-xl">18:00 hrs</div>
                  </div>
                </div>
              </div>
              
              {/* Details Section */}
              <div className="p-8 lg:p-12 flex-1">
                <div className="uppercase tracking-wide text-sm lg:text-base text-primary font-serif font-semibold">Detalles importantes</div>
                <h2 className="mt-2 text-2xl lg:text-3xl xl:text-4xl font-script font-semibold text-primary">Parroquia de San Juan</h2>
                <p className="mt-2 text-gray-600 font-serif text-lg lg:text-xl">Calle Principal #123, Centro Histórico</p>
                
                {/* Info Cards - Responsive Grid */}
                <div className="mt-8 space-y-4 lg:space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4 lg:mr-6">
                      <svg className="h-6 w-6 lg:h-8 lg:w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm lg:text-base text-primary-light font-serif">Duración</div>
                      <div className="font-medium font-serif text-base lg:text-lg">1 hora aproximadamente</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4 lg:mr-6">
                      <svg className="h-6 w-6 lg:h-8 lg:w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm lg:text-base text-primary-light font-serif">Código de vestimenta</div>
                      <div className="font-medium font-serif text-base lg:text-lg">Formal</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4 lg:mr-6">
                      <svg className="h-6 w-6 lg:h-8 lg:w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm lg:text-base text-primary-light font-serif">Transporte</div>
                      <div className="font-medium font-serif text-base lg:text-lg">Estacionamiento disponible</div>
                    </div>
                  </div>
                </div>
                
                {/* Additional Info */}
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <p className="text-gray-700 font-serif text-base lg:text-lg leading-relaxed">
                    Te esperamos para compartir este momento tan especial. La puntualidad será apreciada ya que la ceremonia comenzará a la hora indicada.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Message */}
          <div className="text-center text-gray-600 font-serif">
            <p className="text-base lg:text-lg">Si tienes alguna pregunta, no dudes en contactarnos</p>
          </div>
        </div>
      </div>

      {/* Additional spacing for navbar clearance */}
      <div className="h-32 md:h-40"></div>
    </div>
  );
};

export default Ceremonia;