import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnRoute = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Función para scroll al top
    const scrollToTop = () => {
      // Método principal - scroll inmediato al top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // Instantáneo, sin animación
      });
      
      // Backup con scrollTo simple
      window.scrollTo(0, 0);
      
      // Asegurar que el documento también esté en el top
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
    };

    // Scroll inmediato al cambiar la ruta
    scrollToTop();
    
    // Asegurar scroll después de que el contenido se renderice
    const timeoutId = setTimeout(() => {
      scrollToTop();
    }, 50);

    // Cleanup
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTopOnRoute;
