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
            <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-primary mb-4">Regalos</h1>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-primary-light italic">Tu presencia es nuestro mayor regalo</p>
            <div className="flex justify-center mt-6">
              <div className="w-32 md:w-48 lg:w-64 h-1 bg-primary rounded-full"></div>
            </div>
          </div>

          {/* Main Message */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-12 border border-primary/20 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
              </div>
              
              <h3 className="text-3xl font-script font-semibold text-primary mb-6">Buzón de Regalos</h3>
              
              <p className="text-gray-700 font-serif text-lg lg:text-xl leading-relaxed mb-6">
                Si deseas obsequiarme algo en este día tan especial, habrá un 
                <span className="text-primary font-semibold"> buzón de dinero </span>
                en el salón de eventos.
              </p>
              
              <p className="text-gray-600 font-serif text-base lg:text-lg leading-relaxed mb-8">
                Además de tu regalo, podrás dejar un mensaje especial que atesoraré para siempre.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <p className="text-primary font-serif text-lg font-medium italic">
                  "Tu presencia y buenos deseos son los regalos más preciados que puedo recibir"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional spacing for navbar clearance */}
      <div className="h-32 md:h-40"></div>
    </div>
  );
};

export default Regalos;
