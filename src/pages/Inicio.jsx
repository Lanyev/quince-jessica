import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SaveTheDate from '../components/SaveTheDate';

const Inicio = () => {
  // Función para calcular la cuenta regresiva
  const calculateTimeLeft = () => {
    const eventDate = new Date('June 25, 2025 18:00:00');
    const difference = eventDate - new Date();
    
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 py-12 bg-white/90 rounded-lg shadow-lg my-8 content-card">
        <div className="text-center mb-16">
          <h1 className="font-script text-6xl md:text-7xl font-bold text-primary mb-3">Jessica Paola</h1>
          <p className="font-serif text-2xl md:text-3xl text-primary-light italic">Mis XV Años</p>
          <div className="flex justify-center mt-6">
            <div className="w-32 h-1 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-primary/20">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="font-script text-4xl font-bold text-primary mb-6">¡Bienvenidos a mi sitio!</h2>                <p className="font-serif text-gray-700 mb-6">
                  Estoy muy emocionada de compartir con ustedes los detalles de mi fiesta de XV años.
                  En este sitio encontrarán toda la información necesaria para este día tan especial.
                </p>
                <p className="font-serif text-gray-700 mb-6">
                  Les agradezco de antemano su presencia y cariño en esta celebración tan importante para mí y mi familia.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/ceremonia" 
                    className="inline-block bg-primary text-white font-serif font-bold px-6 py-3 rounded-lg shadow-md hover:bg-primary-light transition duration-300"
                  >
                    Ver detalles de la ceremonia
                  </Link>
                  
                  <SaveTheDate />
                </div>              </div>              <div className="md:w-1/2 bg-primary/5 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-script text-6xl font-bold text-primary">25</div>
                  <div className="font-serif text-xl uppercase tracking-wide text-primary-light mt-1">Junio 2025</div>
                  <div className="mt-8 p-6 bg-white rounded-lg shadow-md inline-block border border-primary/10">
                    <div className="text-primary-light font-serif font-medium">Faltan</div>
                    <div className="flex justify-center gap-4 md:gap-6 mt-3">
                      <div className="text-center relative overflow-hidden">
                        <div className="text-3xl font-bold text-primary flex items-center justify-center h-14 w-14 bg-primary/5 rounded-lg border border-primary/10">
                          {timeLeft.days}
                        </div>
                        <div className="text-xs font-serif text-gray-600 mt-1">DÍAS</div>
                        <div className={`absolute top-0 left-0 h-full w-full bg-primary/10 transform ${timeLeft.seconds % 2 === 0 ? 'scale-y-0' : 'scale-y-0'} origin-bottom transition-transform duration-500`}></div>
                      </div>
                      <div className="text-center relative overflow-hidden">
                        <div className="text-3xl font-bold text-primary flex items-center justify-center h-14 w-14 bg-primary/5 rounded-lg border border-primary/10">
                          {timeLeft.hours}
                        </div>
                        <div className="text-xs font-serif text-gray-600 mt-1">HORAS</div>
                        <div className={`absolute top-0 left-0 h-full w-full bg-primary/10 transform ${timeLeft.seconds % 2 === 0 ? 'scale-y-0' : 'scale-y-0'} origin-bottom transition-transform duration-500`}></div>
                      </div>
                      <div className="text-center relative overflow-hidden">
                        <div className="text-3xl font-bold text-primary flex items-center justify-center h-14 w-14 bg-primary/5 rounded-lg border border-primary/10">
                          {timeLeft.minutes}
                        </div>
                        <div className="text-xs font-serif text-gray-600 mt-1">MIN</div>
                        <div className={`absolute top-0 left-0 h-full w-full bg-primary/10 transform ${timeLeft.seconds % 2 === 0 ? 'scale-y-0' : 'scale-y-0'} origin-bottom transition-transform duration-500`}></div>
                      </div>
                      <div className="text-center relative overflow-hidden">
                        <div className="text-3xl font-bold text-primary flex items-center justify-center h-14 w-14 bg-primary/5 rounded-lg border border-primary/10 relative">
                          {timeLeft.seconds}
                          <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-primary/30 animate-ping"></span>
                        </div>
                        <div className="text-xs font-serif text-gray-600 mt-1">SEG</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="font-script text-3xl text-primary mb-4">Un momento inolvidable</h3>
            <p className="font-serif text-gray-700 max-w-2xl mx-auto">
              Me emociona mucho poder compartir este día especial con las personas que más quiero. 
              Mi fiesta de XV años marca un momento importante en mi vida y es un honor contar 
              con tu presencia para celebrarlo.
            </p>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-primary/10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-script text-xl text-primary mb-2">Horario</h4>
                <p className="font-serif text-gray-600">Ceremonia religiosa a las 18:00 hrs, seguida por la recepción a las 20:00 hrs.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-primary/10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-script text-xl text-primary mb-2">Ubicación</h4>
                <p className="font-serif text-gray-600">Iglesia de San Juan para la ceremonia y Salón Jardines del Bosque para la fiesta.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-primary/10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h4 className="font-script text-xl text-primary mb-2">Confirmación</h4>
                <p className="font-serif text-gray-600">Por favor confirma tu asistencia antes del 10 de junio para reservar tu lugar.</p>
              </div>
            </div>
          </div>

          {/* Sección de bendición/oración */}
          <div className="mt-16 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-primary/10 text-center max-w-3xl mx-auto">
              <h3 className="font-script text-3xl text-primary mb-4">Bendición Especial</h3>
              <div className="font-serif text-gray-700 italic">
                <p className="mb-4">
                  "En este día tan especial, celebro el regalo de estos quince años, 
                  dando gracias por las bendiciones recibidas, por mi familia y amigos.
                  Que esta nueva etapa de mi vida esté llena de sueños cumplidos y momentos felices."
                </p>
                <p className="text-primary text-sm font-medium">— Jessica Paola</p>
              </div>
            </div>
          </div>        </div>
      </div>      
    </div>
  );
};

export default Inicio;