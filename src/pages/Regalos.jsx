import React from 'react';
import GiftRegistry from '../components/GiftRegistry';

const Regalos = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 py-12 bg-white/90 rounded-lg shadow-lg my-8 content-card">
        <div className="text-center mb-16">
          <h1 className="font-script text-6xl md:text-7xl font-bold text-primary mb-3">Mesa de Regalos</h1>
          <p className="font-serif text-2xl md:text-3xl text-primary-light italic">Sugerencias para mi día especial</p>
          <div className="flex justify-center mt-6">
            <div className="w-32 h-1 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <GiftRegistry />
          
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <h3 className="font-script text-3xl text-primary mb-4">Una nota personal</h3>
            <div className="font-serif text-gray-700 space-y-4">
              <p>
                Quiero agradecer a todos por su amor y apoyo en mi celebración de XV años. 
                Su presencia es el regalo más significativo que puedo recibir, y estoy muy 
                emocionada de compartir este día especial con cada uno de ustedes.
              </p>
              <p>
                Si estás considerando un regalo, he incluido algunas ideas que me encantarían, 
                pero lo más importante es celebrar juntos este momento tan especial en mi vida.
              </p>
              <p className="text-primary font-script text-xl mt-8">
                Con cariño,<br />Jessica Paola
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regalos;
