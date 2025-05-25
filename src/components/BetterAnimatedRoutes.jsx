import React, { useState, useEffect } from 'react';
import { Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTopOnRoute from './ScrollToTopOnRoute';

const BetterAnimatedRoutes = ({ children }) => {
  const location = useLocation();
  const [isChangingPage, setIsChangingPage] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(location);
  
  useEffect(() => {
    // Cuando cambia la ubicación, inicia el proceso de transición
    if (location !== currentLocation) {
      setIsChangingPage(true);
      
      // Scroll al top inmediatamente al cambiar de página
      window.scrollTo(0, 0);
        // Después de un breve retraso (durante el cual el wallpaper es visible),
      // actualiza la ubicación actual para mostrar la nueva página
      const timer = setTimeout(() => {
        setCurrentLocation(location);
        setIsChangingPage(false);
        // Asegurar scroll al top después de la transición
        window.scrollTo(0, 0);
      }, 200); // Reducido de 500ms a 200ms para transición más rápida
      
      return () => clearTimeout(timer);
    }
  }, [location, currentLocation]);
    return (
    <div className="relative w-full min-h-screen">
      {/* Componente para manejar scroll al top en cambios de ruta */}
      <ScrollToTopOnRoute />
      
      <AnimatePresence mode="wait" initial={false}>
        {!isChangingPage && (
          <motion.div
            key={currentLocation.pathname}            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="w-full"
          >
            <Routes location={currentLocation}>
              {children}
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BetterAnimatedRoutes;
