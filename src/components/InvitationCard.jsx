import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import { getBackgroundImageUrl } from '../utils/imageUtils';

const InvitationCard = () => {
  const [invitationName, setInvitationName] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const [cardImage, setCardImage] = useState(null);
  const cardRef = useRef(null);

  const handleCreateInvitation = async () => {
    if (!invitationName.trim()) return;
    
    setIsCreating(true);
    
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: null
      });
      
      const image = canvas.toDataURL('image/png');
      setCardImage(image);
      setShowDownloadOptions(true);
    } catch (error) {
      console.error('Error creating invitation card:', error);
    } finally {
      setIsCreating(false);
    }
  };

  const handleDownload = () => {
    if (!cardImage) return;
    
    const link = document.createElement('a');
    link.href = cardImage;
    link.download = `Invitacion_XV_Jessica_${invitationName.trim()}.png`;
    link.click();
  };

  const handleShare = async () => {
    if (!cardImage || !navigator.share) return;
    
    try {
      const blob = await (await fetch(cardImage)).blob();
      const file = new File([blob], 'Invitacion_XV_Jessica.png', { type: 'image/png' });
      
      await navigator.share({
        title: 'Invitación a mis XV años',
        text: '¡Te invito a mi celebración de XV años!',
        files: [file]
      });
    } catch (error) {
      console.error('Error sharing invitation:', error);
      
      // Fallback to clipboard if sharing fails
      try {
        await navigator.clipboard.writeText(
          '¡Te invito a mi celebración de XV años! Visita mi sitio web para más detalles.' +
          window.location.origin
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
  };

  return (
    <div className="bg-white/95 rounded-xl shadow-lg p-6 border border-primary/10">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-script text-primary mb-2">Invitación Digital</h3>
        <p className="font-serif text-gray-600">
          Personaliza una invitación digital para compartir con tus amigos y familiares.
        </p>
      </div>
      
      {!showDownloadOptions ? (
        <div className="flex flex-col items-center">
          <div 
            ref={cardRef}
            className="w-full max-w-md aspect-[3/4] bg-primary relative rounded-lg shadow-lg overflow-hidden mb-6"
          >
            <div className={`absolute inset-0 bg-[url('${getBackgroundImageUrl('bg-pattern.jpg')}')] bg-cover bg-center opacity-20`}></div>
            <div className="absolute inset-0 flex flex-col items-center justify-between p-8 text-white">
              <div className="text-center w-full">
                <p className="font-serif text-lg tracking-wide">Te invito a mi</p>
                <h2 className="font-script text-5xl mt-2 mb-1">XV Años</h2>
                <div className="w-16 h-1 bg-white/70 mx-auto rounded-full"></div>
              </div>
              
              <div className="text-center w-full">
                <h1 className="font-script text-5xl mb-3">Jessica Paola</h1>
                <p className="font-serif text-sm tracking-wide uppercase">25 • JUNIO • 2025</p>
              </div>
              
              <div className="text-center w-full">
                <div className="w-full h-[1px] bg-white/30 mb-4"></div>
                <p className="font-serif text-sm tracking-wide">
                  {invitationName ? `Para: ${invitationName}` : "Para: ______________"}
                </p>
                <div className="mt-3 font-serif text-xs tracking-wide">
                  <p>Ceremonia: 18:00 hrs - Iglesia de San Juan</p>
                  <p>Recepción: 20:00 hrs - Salón Jardines del Bosque</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="invitationName" className="block text-gray-700 font-serif mb-2">
                Nombre del invitado
              </label>
              <input
                type="text"
                id="invitationName"
                value={invitationName}
                onChange={(e) => setInvitationName(e.target.value)}
                placeholder="Escribe el nombre del invitado"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-serif"
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleCreateInvitation}
              disabled={isCreating || !invitationName.trim()}
              className={`w-full py-3 rounded-lg font-serif font-medium shadow-md flex items-center justify-center ${
                isCreating || !invitationName.trim()
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-primary text-white hover:bg-primary-light transition-colors'
              }`}
            >
              {isCreating ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creando invitación...
                </>
              ) : 'Crear invitación digital'}
            </motion.button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md mb-6">
            <img 
              src={cardImage} 
              alt="Invitación XV años" 
              className="w-full rounded-lg shadow-lg" 
            />
          </div>
          
          <div className="w-full max-w-md flex flex-col space-y-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleDownload}
              className="w-full py-3 rounded-lg font-serif font-medium shadow-md flex items-center justify-center bg-primary text-white hover:bg-primary-light transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Descargar invitación
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleShare}
              className="w-full py-3 rounded-lg font-serif font-medium shadow-md flex items-center justify-center bg-primary-light text-white hover:bg-primary-dark transition-colors"
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
        </div>
      )}
    </div>
  );
};

export default InvitationCard;
