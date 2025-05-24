import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {  
  // Estado para controlar la página actual del navbar
  const [currentPage, setCurrentPage] = useState(0);
  // Estado para controlar la dirección de la animación
  const [direction, setDirection] = useState(0);
  
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
        to: "/invitaciones",
        label: "Invitaciones",
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
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <path d="m2 10 20 0" />
            <path d="m20 5-9 6.5L2 5" />
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
  
  // Obtener el número total de páginas
  const totalPages = navItems.length;
  
  // Ir a la página siguiente
  const nextPage = () => {
    setDirection(1); // Ir a la derecha
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  // Ir a la página anterior
  const prevPage = () => {
    setDirection(-1); // Ir a la izquierda
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Variantes para animación de transición que respetan la dirección correcta
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  // Obtener los elementos de la página actual
  const currentItems = navItems[currentPage];
  
  // Mostrar exactamente 3 iconos (o menos si no hay suficientes)
  const ICONS_TO_SHOW = 3;
  const visibleItems = currentItems.slice(0, ICONS_TO_SHOW);
  // Botón de navegación (para reutilizar código)
  const NavButton = ({ onClick, icon, label, position }) => (
    <div className={`w-12 h-full flex items-center ${position === 'left' ? 'justify-start' : 'justify-end'}`}>
      <button
        onClick={onClick}
        className="w-10 h-10 flex items-center justify-center hover:bg-primary-light rounded-lg transition-all duration-200 active:scale-95"
        aria-label={label}
      >
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-light bg-opacity-30 shadow-inner">
          {icon}
        </div>
      </button>
    </div>
  );
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full mx-auto max-w-[calc(100%-30px)] bg-primary text-white py-2 px-3 rounded-xl" style={{ maxWidth: 'calc(100% - 30px)', marginLeft: 'auto', marginRight: 'auto', marginBottom: '15px', zIndex: 5 }}>
      <div className="flex justify-between items-center w-full h-[70px]">
        {/* Botón Anterior (siempre visible) */}        <NavButton
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
          label="Página anterior"
          position="left"
        />

        {/* Contenedor central de los iconos con ancho fijo */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-md flex justify-between items-center">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={`page-${currentPage}`}
                className="flex justify-between items-center w-full"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ 
                  duration: 0.3, 
                  ease: "easeInOut",
                  opacity: { duration: 0.2 }
                }}
              >
                {/* Elementos de navegación centrados y espaciados uniformemente */}
                {visibleItems.map((item, index) => (
                  <div key={`nav-${currentPage}-${index}`} className="flex-1 flex justify-center items-center">                    <Link
                      to={item.to}
                      className="flex flex-col items-center justify-center p-1 hover:bg-primary-light rounded-lg transition-all duration-200 active:scale-95"
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-light bg-opacity-30 shadow-inner mb-1">
                        {item.icon}
                      </div>
                      <span className="text-xs font-nav text-center">{item.label}</span>
                    </Link>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Botón Siguiente (siempre visible) */}        <NavButton
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
          label="Página siguiente"
          position="right"
        />
      </div>
        {/* Indicador de página */}
      <div className="flex justify-center mt-0.5">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button 
            key={`indicator-${i}`}
            onClick={() => {
              setDirection(i > currentPage ? 1 : -1);
              setCurrentPage(i);
            }}
            className={`w-1.5 h-1.5 mx-0.5 rounded-full ${currentPage === i ? 'bg-white' : 'bg-white/30'}`}
            aria-label={`Ir a la página ${i + 1} de ${totalPages}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
