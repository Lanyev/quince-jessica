import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useColorPalette } from '../hooks/useColorPalette';

const ColorPaletteSelector = () => {
  const { currentPalette, changePalette, palettes, getContrastColor } = useColorPalette();
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="fixed top-4 right-4 z-40">
      {/* Botón para mostrar/ocultar */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="absolute -left-12 top-0 bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-lg border border-primary/20 text-primary hover:bg-white transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {isVisible ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 5v1.5M12 17.5V19M5 12H3.5M19 12h1.5M7.6 7.6 6.5 6.5M16.4 16.4l1.1 1.1M16.4 7.6l1.1-1.1M7.6 16.4l-1.1 1.1"></path>
            </>
          )}
        </svg>
      </motion.button>

      {/* Panel de paletas */}
      <motion.div
        initial={false}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -20,
          scale: isVisible ? 1 : 0.95,
          display: isVisible ? 'block' : 'none'
        }}
        transition={{ duration: 0.2 }}
        className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-primary/20"
      >
        <h3 className="font-script text-2xl mb-4 text-center"
            style={{ color: 'var(--primary-color)' }}>
          Paleta de Colores
        </h3>
        
        <div className="grid grid-cols-2 gap-3 max-w-[300px]">
          {Object.entries(palettes).map(([key, palette]) => (
            <motion.button
              key={key}
              onClick={() => changePalette(key)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                currentPalette === key 
                  ? 'ring-2 ring-primary shadow-lg' 
                  : 'hover:shadow-md'
              }`}
            >
              {/* Contenedor principal de la paleta */}
              <div className="p-3 bg-white/90">
                {/* Muestra de color principal */}
                <div 
                  className="h-12 rounded-lg mb-2 relative overflow-hidden"
                  style={{ 
                    background: palette.base,
                    color: getContrastColor(palette.base),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 500
                  }}
                >
                  {palette.name}
                </div>
                
                {/* Colores secundarios */}
                <div className="grid grid-cols-3 gap-1 mb-2">
                  <div 
                    className="aspect-square rounded-md"
                    style={{ backgroundColor: palette.light }}
                    title="Color claro"
                  />
                  <div 
                    className="aspect-square rounded-md"
                    style={{ backgroundColor: palette.dark }}
                    title="Color oscuro"
                  />
                  <div 
                    className="aspect-square rounded-md"
                    style={{ backgroundColor: palette.accent }}
                    title="Color acento"
                  />
                </div>

                {/* Colores de texto y fondo */}
                <div className="grid grid-cols-2 gap-1">
                  <div 
                    className="h-6 rounded flex items-center justify-center text-[10px] font-medium"
                    style={{
                      backgroundColor: palette.background,
                      color: palette.text
                    }}
                  >
                    Texto
                  </div>
                  <div 
                    className="h-6 rounded flex items-center justify-center text-[10px] font-medium"
                    style={{
                      backgroundColor: palette.base,
                      color: getContrastColor(palette.base)
                    }}
                  >
                    Fondo
                  </div>
                </div>
              </div>

              {/* Indicador de selección */}
              {currentPalette === key && (
                <motion.div
                  layoutId="selectedPalette"
                  className="absolute inset-0 border-2 rounded-xl"
                  style={{ borderColor: palette.base }}
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ColorPaletteSelector; 