import React from 'react';

const AnimatedBackground = () => {
  // Debug: verificar que el componente se renderiza
  console.log('🌈 AnimatedBackground component rendering - FINAL ELEGANT VERSION!');
  
  // Crear elementos de arcoíris
  const rainbowElements = Array.from({ length: 6 }, (_, index) => (
    <div 
      key={index} 
      className="rainbow"
      style={{
        // Espaciado entre elementos para un efecto más distribuido
        left: `${index * 20}vw`,
        // Delay escalonado para efecto continuo
        animationDelay: `${index * -3}s`,
        // Asegurar visibilidad pero sutil
        opacity: 0.3
      }}
    />
  ));

  return (
    <div 
      className="animated-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, // DE VUELTA AL FONDO
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {/* Efecto de arcoíris principal */}
      {rainbowElements}
      
      {/* Elementos de overlay para suavizar el efecto */}
      <div className="bg-overlay-h" />
      <div className="bg-overlay-v" />
      
      {/* Elementos adicionales de luz - SUTILES Y ELEGANTES */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '0',
          width: '3px',
          height: '60vh',
          background: 'linear-gradient(45deg, rgba(150, 0, 1, 0.2), rgba(212, 175, 55, 0.3), rgba(184, 38, 41, 0.2))',
          transform: 'rotate(15deg)',
          animation: 'moveAcross 25s linear infinite',
          boxShadow: '0 0 60px 30px rgba(212, 175, 55, 0.15)',
          animationDelay: '-5s'
        }}
      />
      
      <div 
        style={{
          position: 'absolute',
          top: '40%',
          left: '0',
          width: '2px',
          height: '40vh',
          background: 'linear-gradient(45deg, rgba(184, 38, 41, 0.25), rgba(150, 0, 1, 0.2), rgba(212, 175, 55, 0.3))',
          transform: 'rotate(12deg)',
          animation: 'moveAcross 30s linear infinite',
          boxShadow: '0 0 40px 20px rgba(150, 0, 1, 0.12)',
          animationDelay: '-12s'
        }}
      />
      
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '0',
          width: '4px',
          height: '80vh',
          background: 'linear-gradient(45deg, rgba(212, 175, 55, 0.2), rgba(184, 38, 41, 0.3), rgba(150, 0, 1, 0.2))',
          transform: 'rotate(8deg)',
          animation: 'moveAcross 35s linear infinite',
          boxShadow: '0 0 80px 40px rgba(184, 38, 41, 0.1)',
          animationDelay: '-18s'
        }}
      />
      
      {/* Elemento adicional para más variedad */}
      <div 
        style={{
          position: 'absolute',
          top: '60%',
          left: '0',
          width: '2px',
          height: '50vh',
          background: 'linear-gradient(45deg, rgba(150, 0, 1, 0.15), rgba(212, 175, 55, 0.25), rgba(184, 38, 41, 0.15))',
          transform: 'rotate(20deg)',
          animation: 'moveAcross 22s linear infinite',
          boxShadow: '0 0 50px 25px rgba(212, 175, 55, 0.08)',
          animationDelay: '-8s'
        }}
      />
      
      {/* Elemento más pequeño para llenar espacios */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          left: '0',
          width: '1px',
          height: '30vh',
          background: 'linear-gradient(45deg, rgba(184, 38, 41, 0.2), rgba(212, 175, 55, 0.15), rgba(150, 0, 1, 0.18))',
          transform: 'rotate(25deg)',
          animation: 'moveAcross 28s linear infinite',
          boxShadow: '0 0 30px 15px rgba(150, 0, 1, 0.06)',
          animationDelay: '-15s'
        }}
      />
    </div>
  );
};

export default AnimatedBackground; 