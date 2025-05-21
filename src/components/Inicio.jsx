import React from 'react';

const Inicio = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Bienvenidos</h1>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Página de Inicio</h2>
        <p className="text-gray-700 mb-4">
          Esta es la página principal de nuestra aplicación. Aquí podrás encontrar toda la información relevante.
        </p>
        <p className="text-gray-700">
          Navega a través de las diferentes secciones utilizando los iconos de la barra de navegación.
        </p>
      </div>
    </div>
  );
};

export default Inicio;
