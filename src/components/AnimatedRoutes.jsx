import React from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// En framer-motion moderno, AnimatePresence con mode="wait" debería esperar 
// a que la animación de salida termine antes de comenzar la animación de entrada
const AnimatedRoutes = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait" initial={false}>
        {React.cloneElement(children, { key: location.pathname })}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;
