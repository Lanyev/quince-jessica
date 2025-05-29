import React from 'react';
import InvitationCard from '../components/InvitationCard';

const Invitaciones = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container-responsive py-12 bg-white/90 rounded-lg shadow-lg my-8 content-card">
        {/* Header Principal */}
        <div className="text-center mb-16">
          <h1 className="font-script text-6xl md:text-7xl font-bold text-primary mb-3 animate-fade-in">
            Invitaciones
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-primary-light italic animate-fade-in delay-200">
            Comparte la emoción
          </p>
          <div className="flex justify-center mt-6 animate-fade-in delay-300">
            <div className="w-32 h-1 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* Componente principal de invitación */}
        <div className="max-w-6xl mx-auto mb-16">
          <InvitationCard />
        </div>

        {/* Sección de beneficios */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="font-script text-4xl text-primary mb-4">¿Por qué elegir invitaciones digitales?</h2>
            <p className="font-serif text-gray-600 max-w-2xl mx-auto">
              Las invitaciones digitales ofrecen múltiples ventajas para tu celebración especial
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beneficio 1 */}
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-script text-2xl text-primary mb-3">Instantáneo</h3>
              <p className="font-serif text-gray-600">
                Crea y comparte tu invitación en segundos. Perfecto para invitaciones de último momento.
              </p>
            </div>

            {/* Beneficio 2 */}
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-script text-2xl text-green-700 mb-3">Eco-Amigable</h3>
              <p className="font-serif text-gray-600">
                Ayuda al medio ambiente evitando el uso de papel. Una celebración más consciente.
              </p>
            </div>

            {/* Beneficio 3 */}
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="font-script text-2xl text-purple-700 mb-3">Fácil de compartir</h3>
              <p className="font-serif text-gray-600">
                Comparte por WhatsApp, redes sociales o email. Llega a todos tus invitados al instante.
              </p>
            </div>

            {/* Beneficio 4 */}
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-script text-2xl text-blue-700 mb-3">Personalizable</h3>
              <p className="font-serif text-gray-600">
                Múltiples plantillas y opciones de personalización para que cada invitación sea única.
              </p>
            </div>

            {/* Beneficio 5 */}
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-script text-2xl text-amber-700 mb-3">Sin Costo</h3>
              <p className="font-serif text-gray-600">
                Totalmente gratuito. Crea tantas invitaciones como necesites sin ningún costo adicional.
              </p>
            </div>

            {/* Beneficio 6 */}
            <div className="text-center p-6 bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-script text-2xl text-rose-700 mb-3">Alta Calidad</h3>
              <p className="font-serif text-gray-600">
                Imágenes en alta resolución perfectas para compartir en cualquier plataforma digital.
              </p>
            </div>
          </div>
        </div>

        {/* Guía paso a paso */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="font-script text-4xl text-primary mb-4">Guía Paso a Paso</h2>
            <p className="font-serif text-gray-600">
              Sigue estos sencillos pasos para crear tu invitación perfecta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-serif font-medium text-gray-800 mb-2">Elige tu plantilla</h3>
              <p className="font-serif text-sm text-gray-600">
                Selecciona entre nuestras elegantes plantillas de diseño
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-serif font-medium text-gray-800 mb-2">Personaliza</h3>
              <p className="font-serif text-sm text-gray-600">
                Agrega el nombre del invitado y mensaje personalizado
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-serif font-medium text-gray-800 mb-2">Genera</h3>
              <p className="font-serif text-sm text-gray-600">
                Crea tu invitación en formato PNG o JPEG de alta calidad
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                4
              </div>
              <h3 className="font-serif font-medium text-gray-800 mb-2">Comparte</h3>
              <p className="font-serif text-sm text-gray-600">
                Descarga y comparte en tus redes sociales favoritas
              </p>
            </div>
          </div>
        </div>

        {/* Sección de consejos */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
            <div className="text-center mb-8">
              <h2 className="font-script text-3xl text-primary mb-4">💡 Consejos Útiles</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-gray-800 mb-1">Personaliza el mensaje</h4>
                    <p className="font-serif text-sm text-gray-600">
                      Agrega un mensaje especial para hacer la invitación más emotiva
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-gray-800 mb-1">Elige el formato correcto</h4>
                    <p className="font-serif text-sm text-gray-600">
                      PNG para mejor calidad, JPEG para archivos más pequeños
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-gray-800 mb-1">Comparte con anticipación</h4>
                    <p className="font-serif text-sm text-gray-600">
                      Envía las invitaciones con al menos 2 semanas de anticipación
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-gray-800 mb-1">Prueba diferentes plantillas</h4>
                    <p className="font-serif text-sm text-gray-600">
                      Experimenta con diferentes estilos para encontrar el perfecto
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-gray-800 mb-1">Guarda una copia</h4>
                    <p className="font-serif text-sm text-gray-600">
                      Siempre descarga y guarda una copia en tu dispositivo
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-gray-800 mb-1">Seguimiento personal</h4>
                    <p className="font-serif text-sm text-gray-600">
                      Complementa con una llamada o mensaje personal importante
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action final */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary/10">
            <h3 className="font-script text-3xl text-primary mb-4">¡Empieza a crear ahora!</h3>
            <p className="font-serif text-gray-700 mb-6">
              No esperes más para crear tus invitaciones digitales. Con nuestro generador fácil de usar, 
              tendrás invitaciones hermosas en minutos. Perfectas para complementar tus invitaciones físicas 
              o como opción principal para tu celebración.
            </p>
            <div className="flex justify-center">
              <a 
                href="#invitation-creator" 
                className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors font-serif font-medium shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Crear mi invitación
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitaciones;
