import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {  
  // Estado para controlar la página actual del navbar móvil
  const [currentPage, setCurrentPage] = useState(0);
  // Estado para detectar el tamaño de pantalla
  const [isDesktop, setIsDesktop] = useState(false);
  // Estado para controlar la animación
  const [isAnimating, setIsAnimating] = useState(false);
  // Estado para la dirección de la animación
  const [slideDirection, setSlideDirection] = useState('');
  // Hook para obtener la ubicación actual
  const location = useLocation();
  
  // Detectar tamaño de pantalla
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Definir todos los elementos de navegación en un array
  const navItems = useMemo(() => [
    // Página 0 - Principales
    [
      {
        to: "/",
        label: "Inicio",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
        )
      },
      {
        to: "/ceremonia",
        label: "Ceremonia",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M10 9h4" />
            <path d="M12 7v5" />
            <path d="M14 22v-4a2 2 0 0 0-4 0v4" />
            <path d="M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22" />
            <path d="m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7" />
          </svg>
        )
      },
      {
        to: "/fiesta",
        label: "Fiesta",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M5.8 11.3 2 22l10.7-3.79" />
            <path d="M4 3h.01" />
            <path d="M22 8h.01" />
            <path d="M15 2h.01" />
            <path d="M22 20h.01" />
            <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
            <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" />
            <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" />
            <path d="m11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
          </svg>
        )
      }
    ],
    // Página 1 - Principales continuación
    [
      {
        to: "/asistencia",
        label: "Asistencia",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
            <path d="m9 16 2 2 4-4" />
          </svg>
        )
      },
      {
        to: "/galeria",
        label: "Galería",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        )
      }
    ],
    // Página 2 - Secundarios
    [
      {
        to: "/padrinos",
        label: "Padrinos",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        )
      },
      {
        to: "/chambelanes",
        label: "Chambelanes",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        )
      },
      {
        to: "/regalos",
        label: "Regalos",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <rect x="3" y="8" width="18" height="14" rx="2" />
            <path d="M20 8H8a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a4 4 0 0 0-4-4Z" />
            <path d="M12 8V3" />
            <path d="M8 3h8" />
            <path d="M12 14v4" />
          </svg>
        )
      }
    ]
  ], []);

  // Lista plana de todos los elementos para navegación desktop
  const allNavItems = useMemo(() => {
    return navItems.flat();
  }, [navItems]);
  
  // Función para verificar si un elemento está activo
  const isActiveItem = (itemPath) => {
    return location.pathname === itemPath;
  };
  
  // Obtener el número total de páginas para móvil
  const totalPages = navItems.length;
  
  // Ir a la página siguiente en móvil
  const nextPage = () => {
    if (isAnimating) return; // Prevenir múltiples animaciones
    
    setIsAnimating(true);
    setSlideDirection('left'); // Los elementos se mueven hacia la izquierda
    
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
      setSlideDirection('');
      setIsAnimating(false);
    }, 150); // Duración de la animación de salida
  };
  
  // Ir a la página anterior en móvil
  const prevPage = () => {
    if (isAnimating) return; // Prevenir múltiples animaciones
    
    setIsAnimating(true);
    setSlideDirection('right'); // Los elementos se mueven hacia la derecha
    
    setTimeout(() => {
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
      setSlideDirection('');
      setIsAnimating(false);
    }, 150); // Duración de la animación de salida
  };

  // Desktop Navigation Component
  const DesktopNavigation = () => (
    <nav className="desktop-nav fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="desktop-nav-list">
        {allNavItems.map((item, index) => {
          const isActive = isActiveItem(item.to);
          return (
            <Link
              key={`${item.to}-${index}`}
              to={item.to}
              className={`desktop-nav-item group ${isActive ? 'active' : ''}`}
            >
              <div className={`desktop-nav-icon group-hover:scale-110 transition-transform duration-200 ${isActive ? 'active-icon' : ''}`}>
                {item.icon}
              </div>
              <span className={`desktop-nav-label ${isActive ? 'active-label' : ''}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );

  // Mobile Navigation Component (navegación optimizada sin animaciones complejas)
  const MobileNavigation = () => {
    const NavButton = ({ onClick, icon, label }) => (
      <button
        onClick={onClick}
        disabled={isAnimating}
        className={`hover:bg-white/20 transition-all duration-300 transform hover:scale-105
                   active:scale-95 flex flex-col items-center justify-center gap-1 min-w-[50px] rounded-lg p-2
                   ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{ minHeight: '60px', color: 'var(--silver-color)' }}
        aria-label={label}
      >
        <div className={`w-5 h-5 transition-transform duration-200 ${isAnimating ? 'animate-pulse' : ''}`} style={{ color: 'var(--silver-color)' }}>
          {icon}
        </div>
        <span className="text-xs font-nav font-medium" style={{ color: 'var(--silver-color)' }}>
          {label.split(' ')[0]}
        </span>
      </button>
    );

    // Obtener los elementos de la página actual
    const currentItems = navItems[currentPage];
    
    // Mostrar exactamente 3 iconos (o menos si no hay suficientes)
    const ICONS_TO_SHOW = 3;
    const visibleItems = currentItems.slice(0, ICONS_TO_SHOW);

    return (
      <div className="fixed bottom-0 left-0 right-0 w-full mx-auto max-w-[calc(100%-30px)] bg-primary text-white py-2 px-3 rounded-xl border-2 border-primary" style={{ maxWidth: 'calc(100% - 30px)', marginLeft: 'auto', marginRight: 'auto', marginBottom: '15px', zIndex: 5 }}>
        <div className="flex justify-between items-center w-full h-[70px]">
          {/* Botón Anterior */}
          <NavButton
            onClick={prevPage}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            }
            label="Anterior"
          />

          {/* Contenedor central de los iconos */}
          <div className="flex-1 flex justify-center items-center">
            <div 
              className={`w-full max-w-md flex justify-between items-center transition-all duration-300 ${
                slideDirection === 'left' ? 'navbar-slide-left' : 
                slideDirection === 'right' ? 'navbar-slide-right' : 
                slideDirection ? 'navbar-slide-in' : ''
              }`} 
              key={currentPage}
            >
              {/* Elementos de navegación centrados */}
              {visibleItems.map((item, index) => {
                const isActive = isActiveItem(item.to);
                return (
                  <div 
                    key={`nav-${currentPage}-${index}`} 
                    className={`flex-1 flex justify-center items-center ${slideDirection ? 'navbar-icon-animate' : ''}`}
                    style={slideDirection ? { animationDelay: `${index * 100}ms` } : {}}
                  >
                    <Link
                      to={item.to}
                      className={`flex flex-col items-center justify-center p-2 hover:bg-white/20 rounded-lg transition-all duration-200 active:scale-95 ${isActive ? 'mobile-nav-active' : ''}`}
                      style={{ color: 'var(--silver-color)' }}
                    >
                      <div className={`w-8 h-8 flex items-center justify-center mb-1 ${isActive ? 'mobile-icon-active' : ''}`} style={{ color: 'var(--silver-color)' }}>
                        {item.icon}
                      </div>
                      <span className={`text-xs font-nav text-center ${isActive ? 'mobile-label-active' : ''}`} style={{ color: 'var(--silver-color)' }}>{item.label}</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Botón Siguiente */}
          <NavButton
            onClick={nextPage}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            }
            label="Siguiente"
          />
        </div>
        
        {/* Indicador de página */}
        <div className="flex justify-center mt-0.5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button 
              key={`indicator-${i}`}
              onClick={() => {
                if (i === currentPage) return; // No hacer nada si ya está en esa página
                setCurrentPage(i); // Cambio directo sin animaciones
              }}
              className={`w-1.5 h-1.5 mx-0.5 rounded-full transition-all duration-300 border border-white/20 transform hover:scale-125 ${
                currentPage === i 
                  ? 'bg-white scale-110 shadow-lg' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Ir a la página ${i + 1} de ${totalPages}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {isDesktop ? <DesktopNavigation /> : <MobileNavigation />}
    </>
  );
};

export default Navbar;
