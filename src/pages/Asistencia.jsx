import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Asistencia = () => {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Número de WhatsApp (cambiar por el número real)
  const WHATSAPP_NUMBER = '+5216561498329'; // Formato: +52 para México + número
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    // Crear mensaje de WhatsApp
    const message = `Hola, soy ${name.trim()}, confirmo mi asistencia a la fiesta de Jessica`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
    
    // Reset después de 3 segundos
    setTimeout(() => {
      setName('');
      setIsSubmitted(false);
    }, 3000);
  };

  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Crown Decorative Header */}
      <motion.div 
        className="crown-header py-4 md:py-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
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
      </motion.div>

      {/* Main Content */}
      <div className="invitation-container mt-2 md:mt-4">
        <div className="invitation-card">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
              Confirma tu Asistencia
            </h1>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-primary-light italic">
              Tu presencia es el mejor regalo
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-32 md:w-48 lg:w-64 h-1 bg-primary rounded-full"></div>
            </div>
          </motion.div>

          {/* Formulario de Confirmación */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="max-w-md mx-auto"
          >
            {isSubmitted ? (
              <motion.div
                variants={successVariants}
                initial="hidden"
                animate="visible"
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-primary/20 text-center"
              >
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-script font-semibold text-primary mb-3">
                  ¡Confirmación Enviada!
                </h3>
                <p className="text-gray-600 font-serif text-lg">
                  Tu mensaje ha sido enviado por WhatsApp.<br />
                  ¡Esperamos verte en la celebración! 🎉
                </p>
              </motion.div>
            ) : (
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-10 border border-primary/20">
                <h3 className="text-2xl lg:text-3xl font-script font-semibold text-primary mb-8 text-center">
                  Confirma tu asistencia por WhatsApp
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-serif text-lg lg:text-xl text-primary font-semibold mb-2">
                        Tu nombre completo
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Escribe tu nombre aquí..."
                      className="w-full px-6 py-4 text-lg font-serif bg-gradient-to-r from-white to-gray-50 border-3 border-primary/40 focus:border-primary focus:ring-4 focus:ring-primary/30 rounded-2xl shadow-2xl focus:shadow-xl transition-all duration-300 placeholder:text-gray-400 text-gray-800 hover:border-primary/60"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={!name.trim()}
                    className="w-full py-4 px-6 bg-primary hover:bg-primary-dark text-white font-serif text-lg font-semibold rounded-lg shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    whileHover={name.trim() ? { scale: 1.02 } : {}}
                    whileTap={name.trim() ? { scale: 0.98 } : {}}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
                      </svg>
                      <span>
                        {name.trim() ? 'Confirmar por WhatsApp' : 'Ingresa tu nombre'}
                      </span>
                    </div>
                  </motion.button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 font-serif text-sm lg:text-base">
                    Al hacer clic, se abrirá WhatsApp con un mensaje prellenado.<br />
                    Podrás editarlo antes de enviarlo.
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Información Adicional */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-primary/10">
              <h4 className="text-xl lg:text-2xl font-script font-semibold text-primary mb-4">
                Detalles Importantes
              </h4>
              <div className="space-y-3 text-gray-700 font-serif text-sm lg:text-base">
                <p>📅 <strong>Fecha límite:</strong> Confirma antes del 15 de julio</p>
                <p>👥 <strong>Acompañantes:</strong> Puedes mencionar el número en tu mensaje</p>
              </div>
            </div>
          </motion.div>

          {/* Footer Message */}
          <motion.div 
            className="text-center text-gray-600 font-serif mt-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base lg:text-lg">
              ¡Esperamos celebrar contigo este momento tan especial! 💖
            </p>
          </motion.div>
        </div>
      </div>

      {/* Additional spacing for navbar clearance */}
      <div className="h-32 md:h-40"></div>
    </div>
  );
};

export default Asistencia;
