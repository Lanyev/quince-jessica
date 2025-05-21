import React from 'react';

const Ceremonia = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Ceremonia Religiosa</h1>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Detalles de la Ceremonia</h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Ubicación</h3>
          <p className="text-gray-700">Parroquia de San Juan, Calle Principal #123</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Fecha y Hora</h3>
          <p className="text-gray-700">Sábado, 25 de Junio de 2025 a las 18:00 horas</p>
        </div>
        <div>
          <h3 className="text-lg font-medium">Indicaciones</h3>
          <p className="text-gray-700">Se agradece puntualidad. La ceremonia comenzará a la hora indicada.</p>
        </div>
      </div>
    </div>
  );
};

export default Ceremonia;
