import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { 
          delay: 0.5, // Espera 0.5 segundos antes de comenzar a aparecer (mostrará solo el wallpaper durante este tiempo)
          duration: 0.3, 
          ease: "easeInOut" 
        }
      }}
      exit={{ 
        opacity: 0,
        transition: { 
          duration: 0.3, 
          ease: "easeInOut" 
        }
      }}
      className="w-full h-full"
    >
      {/* Contenedor con fondo semi-transparente que recibirá la animación */}
      <div className="bg-white/90 rounded-lg shadow-lg">
        {children}
      </div>
    </motion.div>
  );
};

export default PageTransition;
