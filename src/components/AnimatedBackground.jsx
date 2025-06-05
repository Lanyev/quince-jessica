import React from 'react';

const AnimatedBackground = () => {
  // Crear 20 elementos de arcoíris con diferentes variaciones de colores
  const rainbowElements = Array.from({ length: 20 }, (_, index) => {
         // Paleta suave y elegante con tonos tenues
     const colorVariations = [
       ['rgb(248, 231, 233)', 'rgb(240, 240, 240)', 'rgb(255, 245, 245)'], // rosa muy suave, plata, blanco rosado
       ['rgb(255, 245, 245)', 'rgb(248, 231, 233)', 'rgb(230, 230, 230)'], // blanco rosado, rosa suave, plata claro  
       ['rgb(240, 240, 240)', 'rgb(255, 250, 250)', 'rgb(248, 231, 233)'], // plata, blanco nieve, rosa suave
       ['rgb(255, 250, 250)', 'rgb(235, 235, 235)', 'rgb(252, 238, 240)'], // blanco nieve, plata medio, rosa pálido
       ['rgb(235, 235, 235)', 'rgb(248, 231, 233)', 'rgb(255, 255, 255)'], // plata medio, rosa suave, blanco puro
       ['rgb(252, 238, 240)', 'rgb(245, 245, 245)', 'rgb(248, 231, 233)']  // rosa pálido, plata claro, rosa suave
     ];
    
    const colors = colorVariations[index % 6];
    const animationDuration = 45 - ((index + 1) * 1.8); // Duración variable
    const animationDelay = -((index + 1) / 20 * 45); // Delay escalonado
    
    return (
      <div 
        key={index} 
        className="rainbow"
        style={{
          boxShadow: `-130px 0 80px 40px white, -50px 0 50px 25px ${colors[0]}, 0 0 50px 25px ${colors[1]}, 50px 0 50px 25px ${colors[2]}, 130px 0 80px 40px white`,
          animation: `${animationDuration}s linear infinite slide`,
          animationDelay: `${animationDelay}s`
        }}
      />
    );
  });

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {/* Elementos de arcoíris animados */}
      {rainbowElements}
      
      {/* Overlays de fondo para suavizar el efecto */}
      <div className="bg-overlay-h" />
      <div className="bg-overlay-v" />
    </div>
  );
};

export default AnimatedBackground; 