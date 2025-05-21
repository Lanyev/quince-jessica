import React from 'react';

const Fiesta = () => {  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 py-12 bg-white/90 rounded-lg shadow-lg my-8 content-card">
        <div className="text-center mb-16">
          <h1 className="font-script text-6xl md:text-7xl font-bold text-primary mb-3">Celebración</h1>
          <p className="font-serif text-2xl md:text-3xl text-primary-light italic">¡Es hora de festejar!</p>
          <div className="flex justify-center mt-6">
            <div className="w-32 h-1 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-primary/20">
          <div className="md:flex">
            <div className="md:w-1/3 bg-primary p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-white text-6xl font-script font-bold">25</div>
                <div className="text-white/80 uppercase tracking-wide font-serif">Junio</div>
                <div className="text-white font-serif font-bold mt-2">2025</div>
                <div className="mt-6 border-t border-white/20 pt-3">
                  <div className="text-white font-serif font-bold">20:00 hrs</div>
                </div>
              </div>
            </div>
            
            <div className="p-8 flex-1">
              <div className="uppercase tracking-wide text-sm text-primary font-serif font-semibold">Detalles del evento</div>
              <h2 className="mt-2 text-2xl font-script font-semibold text-primary">Salón Jardines del Bosque</h2>
              <p className="mt-2 text-gray-600 font-serif">Av. Los Pinos #456, Zona Residencial</p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 font-serif">Duración: 5 horas</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 font-serif">Cena y postre incluidos</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 font-serif">Música en vivo y DJ</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 font-serif">Estacionamiento disponible</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 bg-primary/5 border-t border-primary/10">
            <h3 className="text-xl font-script font-semibold text-primary mb-4">Código de vestimenta</h3>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <h4 className="font-semibold text-primary-light font-serif mb-2">Damas</h4>
                <p className="text-gray-600 font-serif">Vestido formal o cocktail</p>
              </div>
              <div className="w-full md:w-1/2">
                <h4 className="font-semibold text-primary-light font-serif mb-2">Caballeros</h4>
                <p className="text-gray-600 font-serif">Traje o pantalón de vestir con camisa</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 border border-primary/20">
          <h3 className="text-xl font-script font-semibold text-primary mb-4">Información adicional</h3>
          <div className="space-y-4 text-gray-600 font-serif">
            <p>El salón cuenta con servicio de barra libre para adultos y bebidas sin alcohol para menores de edad.</p>
            <p>Habrá fotógrafo profesional para capturar todos los momentos especiales de la celebración.</p>
            <p>Contaremos con vals, rompimiento de piñata y todos los elementos tradicionales de una fiesta de quince años.</p>
          </div>        </div>
      </div>
    </div>
  );
};

export default Fiesta;
