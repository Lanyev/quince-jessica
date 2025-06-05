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

          {/* Padrinos de Honor */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/20">
              <div className="bg-white py-4 px-6 border-b border-gray-200">
                <h2 className="text-gray-800 text-2xl font-script font-semibold text-center">Padrinos de Honor</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 font-serif">Fabian Castañeda</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 font-serif">Martha Gutierrez</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 font-serif">Fernando Navarro</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 font-serif">Ana Mancha</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 font-serif">Yesenia de la O</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 font-serif">Virginia Roque</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-center font-serif text-lg">
                  A mis queridos padrinos de honor, gracias por ser pilares fundamentales en mi vida. Su amor, consejos y apoyo incondicional han sido mi fortaleza. Es un honor tenerlos a mi lado en este día tan especial.
                </p>
              </div>
            </div>
          </div>

          {/* Padrinos de Regalo Sorpresa */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/20">
              <div className="bg-white py-4 px-6 border-b border-gray-200">
                <h2 className="text-gray-800 text-2xl font-script font-semibold text-center">Padrinos de Regalo Sorpresa</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 font-serif">Cindy Mireles</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 font-serif">Fernando Gamon</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-center font-serif text-lg">
                  Su generosidad y cariño me llenan de emoción. Gracias por hacer posible esa sorpresa especial que hará de este día un momento aún más mágico e inolvidable.
                </p>
              </div>
            </div>
          </div>

          {/* Padrinos */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/20">
              <div className="bg-white py-4 px-6 border-b border-gray-200">
                <h2 className="text-gray-800 text-2xl font-script font-semibold text-center">Padrinos</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 font-serif">Carmen Gonzalez</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 font-serif">Armando Enriquez</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 font-serif">Ivette Sanchez</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 font-serif">Alan Yeverino</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 font-serif">Guadalupe de La O</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 font-serif">Sonia de la O</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 font-serif">Gerardo de la O</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-center font-serif text-lg">
                  A cada uno de ustedes, mis queridos padrinos, les agradezco de corazón por acompañarme en esta etapa tan importante. Su presencia, cariño y apoyo hacen que este momento sea perfecto.
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
