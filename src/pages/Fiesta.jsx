import React from 'react';

const Fiesta = () => {
  return (
    <div className='min-h-screen'>
      {/* Crown Decorative Header */}
      <div className='crown-header py-4 md:py-6'>
        <div className='flex justify-center'>
          <img
            src='./images/backgrounds/crown1.png'
            alt='Corona decorativa'
            className='w-48 h-auto md:w-64 lg:w-72 xl:w-80 object-contain'
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className='invitation-container mt-2 md:mt-4'>
        <div className='invitation-card'>
          <div className='text-center mb-12'>
            <h1 className='font-script text-4xl md:text-5xl lg:text-6xl text-primary mb-4'>
              Celebración
            </h1>
            <p className='font-serif text-xl md:text-2xl lg:text-3xl text-primary-light italic'>
              ¡Es hora de festejar!
            </p>
            <div className='flex justify-center mt-6'>
              <div className='w-32 md:w-48 lg:w-64 h-1 bg-primary rounded-full'></div>
            </div>
          </div>

          <div className='bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/20 mb-8'>
            <div className='lg:desktop-grid'>
              <div className='bg-primary p-8 lg:p-12 flex items-center justify-center'>
                <div className='text-center'>
                  <div className='text-white text-6xl lg:text-7xl xl:text-8xl font-script font-bold'>
                    25
                  </div>
                  <div className='text-white/80 uppercase tracking-wide font-serif text-lg lg:text-xl'>
                    Junio
                  </div>
                  <div className='text-white font-serif font-bold mt-2 text-xl lg:text-2xl'>
                    2025
                  </div>
                  <div className='mt-6 border-t border-white/20 pt-3'>
                    <div className='text-white font-serif font-bold text-lg lg:text-xl'>
                      20:00 hrs
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-8 lg:p-12 flex-1'>
                <div className='uppercase tracking-wide text-sm lg:text-base text-primary font-serif font-semibold'>
                  Detalles del evento
                </div>
                <h2 className='mt-2 text-2xl lg:text-3xl xl:text-4xl font-script font-semibold text-primary'>
                  Salón Anitas 3
                </h2>
                <p className='mt-2 text-gray-600 font-serif text-lg lg:text-xl'>
                  C. Ramón Rayón #1658
                </p>

                <div className='mt-8 space-y-6 lg:space-y-8'>
                  {/* Info Cards Container - Centered */}
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
                    <div className='text-center'>
                      <div className='w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3'>
                        <svg
                          className='h-6 w-6 lg:h-8 lg:w-8 text-primary'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                          ></path>
                        </svg>
                      </div>
                      <div className='text-sm lg:text-base text-primary-light font-serif mb-1'>
                        Duración
                      </div>
                      <div className='font-medium font-serif text-base lg:text-lg text-gray-800'>
                        5 horas
                      </div>
                    </div>

                    <div className='text-center'>
                      <div className='w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3'>
                        <svg
                          className='h-6 w-6 lg:h-8 lg:w-8 text-primary'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3'
                          ></path>
                        </svg>
                      </div>
                      <div className='text-sm lg:text-base text-primary-light font-serif mb-1'>
                        Entretenimiento
                      </div>
                      <div className='font-medium font-serif text-base lg:text-lg text-gray-800'>
                        Música en vivo y DJ
                      </div>
                    </div>

                    <div className='text-center'>
                      <div className='w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3'>
                        <svg
                          className='h-6 w-6 lg:h-8 lg:w-8 text-primary'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                          ></path>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                          ></path>
                        </svg>
                      </div>
                      <div className='text-sm lg:text-base text-primary-light font-serif mb-1'>
                        Acceso
                      </div>
                      <div className='font-medium font-serif text-base lg:text-lg text-gray-800'>
                        Estacionamiento disponible
                      </div>
                    </div>
                  </div>

                  {/* Google Maps Button */}
                  <div className='flex justify-center mt-8'>
                    <a
                      href='https://www.google.com/maps?q=31.679106348332787,-106.34432375914648'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-serif font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
                    >
                      <svg
                        className='w-5 h-5 mr-2'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                      </svg>
                      Ver ubicación en Google Maps
                    </a>
                  </div>
                </div>

                {/* Additional Info */}
                <div className='mt-8 border-t border-gray-200 pt-6'>
                  <p className='text-gray-700 font-serif text-base lg:text-lg leading-relaxed'>
                    ¡Prepárate para una noche mágica llena de música, baile y
                    alegría! Te esperamos para celebrar este momento tan
                    especial.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dress Code Section */}
          <div className='bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-12 border border-primary/20 mb-8'>
            <h3 className='text-2xl lg:text-3xl xl:text-4xl font-script font-semibold text-primary text-center mb-8'>
              Código de vestimenta
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='text-center'>
                <h4 className='text-lg lg:text-xl font-semibold text-primary-light font-serif mb-4'>
                  Damas
                </h4>
                <p className='text-gray-800 font-serif text-base lg:text-lg font-medium mb-2'>
                  Semiformal
                </p>
                <p className='text-gray-600 font-serif text-sm lg:text-base'>
                  Vestido cocktail, blusa elegante con falda o pantalón de vestir, jumpsuit elegante
                </p>
              </div>
              <div className='text-center'>
                <h4 className='text-lg lg:text-xl font-semibold text-primary-light font-serif mb-4'>
                  Caballeros
                </h4>
                <p className='text-gray-800 font-serif text-base lg:text-lg font-medium mb-2'>
                  Semiformal
                </p>
                <p className='text-gray-600 font-serif text-sm lg:text-base'>
                  Pantalón de vestir con camisa elegante, blazer opcional, zapatos formales
                </p>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className='text-center text-gray-600 font-serif'>
            <p className='text-base lg:text-lg'>
              ¡Tu presencia hará esta celebración aún más especial!
            </p>
          </div>
        </div>
      </div>

      {/* Additional spacing for navbar clearance */}
      <div className='h-32 md:h-40'></div>
    </div>
  );
};

export default Fiesta;
