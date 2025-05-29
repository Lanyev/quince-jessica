import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import html2canvas from 'html2canvas';

const InvitationCard = () => {
  const [invitationName, setInvitationName] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const [cardImage, setCardImage] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('elegant');
  const [customMessage, setCustomMessage] = useState('');
  const cardRef = useRef(null);

  // Plantillas de invitación
  const templates = {
    elegant: {
      name: 'Elegante',
      description: 'Diseño clásico con elementos dorados',
      bgClass: 'bg-gradient-to-br from-primary via-primary-dark to-black',
      accentColor: '#FFD700'
    },
    floral: {
      name: 'Floral',
      description: 'Diseño romántico con patrones florales',
      bgClass: 'bg-gradient-to-br from-pink-600 via-primary to-purple-800',
      accentColor: '#FFE4E1'
    },
    vintage: {
      name: 'Vintage',
      description: 'Estilo vintage con toques dorados',
      bgClass: 'bg-gradient-to-br from-amber-800 via-primary to-amber-900',
      accentColor: '#F4E4C1'
    },
    modern: {
      name: 'Moderno',
      description: 'Diseño contemporáneo y minimalista',
      bgClass: 'bg-gradient-to-br from-slate-800 via-primary to-slate-900',
      accentColor: '#E5E7EB'
    }
  };

  const handleCreateInvitation = async (format = 'png') => {
    if (!invitationName.trim()) return;
    
    setIsCreating(true);
    
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 3, // Mayor resolución
        logging: false,
        useCORS: true,
        backgroundColor: null,
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight,
      });
      
      let image;
      if (format === 'jpeg') {
        // Crear un canvas con fondo blanco para JPEG
        const canvasWithBg = document.createElement('canvas');
        const ctx = canvasWithBg.getContext('2d');
        canvasWithBg.width = canvas.width;
        canvasWithBg.height = canvas.height;
        
        // Fondo blanco
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvasWithBg.width, canvasWithBg.height);
        
        // Dibujar la invitación encima
        ctx.drawImage(canvas, 0, 0);
        
        image = canvasWithBg.toDataURL('image/jpeg', 0.95);
      } else {
        image = canvas.toDataURL('image/png');
      }
      
      setCardImage({ data: image, format });
      setShowDownloadOptions(true);
    } catch (error) {
      console.error('Error creating invitation card:', error);
    } finally {
      setIsCreating(false);
    }
  };

  const handleDownload = (format) => {
    if (!cardImage) return;
    
    const link = document.createElement('a');
    link.href = cardImage.data;
    const extension = format || cardImage.format;
    link.download = `Invitacion_XV_Jessica_${invitationName.trim().replace(/\s+/g, '_')}.${extension}`;
    link.click();
  };

  const handleShare = async () => {
    if (!cardImage || !navigator.share) return;
    
    try {
      const blob = await (await fetch(cardImage.data)).blob();
      const file = new File([blob], `Invitacion_XV_Jessica.${cardImage.format}`, { 
        type: `image/${cardImage.format}` 
      });
      
      await navigator.share({
        title: 'Invitación a mis XV años - Jessica Paola',
        text: '¡Te invito a mi celebración de XV años!',
        files: [file]
      });
    } catch (error) {
      console.error('Error sharing invitation:', error);
      
      // Fallback to clipboard if sharing fails
      try {
        await navigator.clipboard.writeText(
          '¡Te invito a mi celebración de XV años! Visita: ' + window.location.origin + '/quince-jessica/'
        );
        alert('Enlace copiado al portapapeles. Puedes pegarlo en tu aplicación de mensajería favorita.');
      } catch (clipError) {
        console.error('Error copying to clipboard:', clipError);
      }
    }
  };

  const resetCard = () => {
    setCardImage(null);
    setShowDownloadOptions(false);
    setInvitationName('');
    setCustomMessage('');
  };

  const renderInvitationContent = () => {
    const template = templates[selectedTemplate];
    
    return (
      <div 
        ref={cardRef}
        className={`w-full max-w-lg aspect-[3/4] relative rounded-2xl shadow-2xl overflow-hidden mb-6 ${template.bgClass}`}
      >
        {/* Overlay decorativo */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Patrón de fondo */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="floral" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.3"/>
                <path d="M10,5 Q15,10 10,15 Q5,10 10,5" fill="currentColor" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#floral)" />
          </svg>
        </div>
        
        {/* Contenido principal */}
        <div className="absolute inset-0 flex flex-col items-center justify-between p-8 text-white z-10">
          {/* Header */}
          <div className="text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
              <p className="font-serif text-lg tracking-wider pt-8" style={{ color: template.accentColor }}>
                Te invito a mi
              </p>
              <h2 className="font-script text-6xl mt-2 mb-1 drop-shadow-lg">XV Años</h2>
              <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: template.accentColor }}></div>
            </motion.div>
          </div>
          
          {/* Centro - Nombre */}
          <div className="text-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl"></div>
                <h1 className="font-script text-6xl mb-3 relative z-10 drop-shadow-2xl">
                  Jessica Paola
                </h1>
              </div>
              <div className="flex items-center justify-center space-x-4 mt-4">
                <div className="w-8 h-[1px]" style={{ backgroundColor: template.accentColor }}></div>
                <p className="font-serif text-lg tracking-widest" style={{ color: template.accentColor }}>
                  25 • JUNIO • 2025
                </p>
                <div className="w-8 h-[1px]" style={{ backgroundColor: template.accentColor }}></div>
              </div>
            </motion.div>
          </div>
          
          {/* Footer */}
          <div className="text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-full h-[1px] bg-white/30 mb-4"></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p className="font-serif text-sm tracking-wide mb-2" style={{ color: template.accentColor }}>
                  {invitationName ? `Especialmente para: ${invitationName}` : "Para: _______________"}
                </p>
                {customMessage && (
                  <p className="font-serif text-xs text-white/90 italic mb-2">
                    "{customMessage}"
                  </p>
                )}
                <div className="font-serif text-xs tracking-wide text-white/90 space-y-1">
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Ceremonia: 18:00 hrs - Iglesia de San Juan</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                    </svg>
                    <span>Recepción: 20:00 hrs - Salón Jardines del Bosque</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Efectos decorativos en las esquinas */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30 rounded-tl-lg"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/30 rounded-tr-lg"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/30 rounded-bl-lg"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/30 rounded-br-lg"></div>
      </div>
    );
  };

  return (
    <div className="bg-white/95 rounded-xl shadow-lg p-6 border border-primary/10">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-script text-primary mb-2">Invitación Digital Personalizada</h3>
        <p className="font-serif text-gray-600">
          Crea una invitación única y elegante para compartir con tus seres queridos.
        </p>
      </div>
      
      <AnimatePresence mode="wait">
        {!showDownloadOptions ? (
          <motion.div
            key="creator"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center"
          >
            {renderInvitationContent()}
            
            <div className="w-full max-w-lg space-y-6">
              {/* Selector de plantillas */}
              <div>
                <label className="block text-gray-700 font-serif mb-3 text-lg">
                  Elige tu plantilla favorita:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(templates).map(([key, template]) => (
                    <motion.button
                      key={key}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedTemplate(key)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedTemplate === key
                          ? 'border-primary bg-primary/10 shadow-md'
                          : 'border-gray-200 hover:border-primary/50'
                      }`}
                    >
                      <div className={`w-full h-16 rounded ${template.bgClass} mb-2`}></div>
                      <p className="font-serif font-medium text-gray-800">{template.name}</p>
                      <p className="text-xs text-gray-600">{template.description}</p>
                    </motion.button>
                  ))}
                </div>
              </div>
              
              {/* Campos de personalización */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="invitationName" className="block text-gray-700 font-serif mb-2">
                    Nombre del invitado *
                  </label>
                  <input
                    type="text"
                    id="invitationName"
                    value={invitationName}
                    onChange={(e) => setInvitationName(e.target.value)}
                    placeholder="Ejemplo: María González"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-serif transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="customMessage" className="block text-gray-700 font-serif mb-2">
                    Mensaje personalizado (opcional)
                  </label>
                  <input
                    type="text"
                    id="customMessage"
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder="Tu presencia es el mejor regalo"
                    maxLength={50}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-serif transition-all"
                  />
                  <p className="text-xs text-gray-500 mt-1">{customMessage.length}/50 caracteres</p>
                </div>
              </div>
              
              {/* Botones de acción */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleCreateInvitation('png')}
                  disabled={isCreating || !invitationName.trim()}
                  className={`py-3 px-6 rounded-lg font-serif font-medium shadow-md flex items-center justify-center transition-all ${
                    isCreating || !invitationName.trim()
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-primary text-white hover:bg-primary-light'
                  }`}
                >
                  {isCreating ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creando...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Crear PNG
                    </>
                  )}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleCreateInvitation('jpeg')}
                  disabled={isCreating || !invitationName.trim()}
                  className={`py-3 px-6 rounded-lg font-serif font-medium shadow-md flex items-center justify-center transition-all ${
                    isCreating || !invitationName.trim()
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-primary-light text-white hover:bg-primary'
                  }`}
                >
                  {isCreating ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creando...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                      Crear JPEG
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center"
          >
            <div className="w-full max-w-lg mb-6">
              <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={cardImage.data} 
                alt="Invitación XV años Jessica Paola" 
                className="w-full rounded-lg shadow-2xl" 
              />
            </div>
            
            <div className="w-full max-w-lg space-y-3">
              <div className="text-center mb-4">
                <h4 className="font-script text-2xl text-primary mb-2">¡Tu invitación está lista!</h4>
                <p className="font-serif text-gray-600">
                  Descarga en tu formato preferido o compártela directamente
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleDownload('png')}
                  className="py-3 px-6 rounded-lg font-serif font-medium shadow-md flex items-center justify-center bg-primary text-white hover:bg-primary-light transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Descargar PNG
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleDownload('jpeg')}
                  className="py-3 px-6 rounded-lg font-serif font-medium shadow-md flex items-center justify-center bg-primary-light text-white hover:bg-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Descargar JPEG
                </motion.button>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleShare}
                className="w-full py-3 rounded-lg font-serif font-medium shadow-md flex items-center justify-center bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                Compartir invitación
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={resetCard}
                className="w-full py-3 rounded-lg font-serif font-medium shadow-md flex items-center justify-center bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
                Crear otra invitación
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InvitationCard;
