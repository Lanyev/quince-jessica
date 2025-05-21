import React from 'react';

const Chambelanes = () => {  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 py-12 bg-white/90 rounded-lg shadow-lg my-8 content-card">
        <div className="text-center mb-16">
          <h1 className="font-script text-6xl md:text-7xl font-bold text-primary mb-3">Chambelanes</h1>
          <p className="font-serif text-2xl md:text-3xl text-primary-light italic">Acompañantes de honor en mi celebración</p>
          <div className="flex justify-center mt-6">
            <div className="w-32 h-1 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden mb-10 border border-primary/20">
          <div className="p-8 text-center">
            <h2 className="text-2xl font-script font-semibold text-primary mb-4">Mis Chambelanes</h2>
            <p className="text-gray-600 mb-6 font-serif">
              Quiero expresar mi sincero agradecimiento a estos jóvenes extraordinarios que me acompañan en este día tan especial. Su tiempo, dedicación y esfuerzo durante los ensayos han hecho posible que esta celebración sea perfecta.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Lista de Chambelanes */}
          {[
            "Miguel Ángel Rodríguez",
            "Alejandro Sánchez",
            "Daniel González",
            "José Eduardo Martínez",
            "Ricardo Morales",
            "Diego Hernández",
            "Carlos Torres",
            "Javier Ramírez",
            "Fernando López"
          ].map((nombre, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden border border-primary/10 transition-transform duration-300 hover:scale-105">
              <div className="h-52 bg-primary/5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/60">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-serif font-semibold text-primary">{nombre}</h3>
                <p className="text-gray-600 mt-2 font-serif">Chambelán #{index + 1}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 border border-primary/20">
          <h3 className="text-xl font-script font-semibold text-primary mb-4 text-center">Sobre los Bailes</h3>
          <div className="space-y-4 text-gray-600 font-serif">
            <p>Durante la celebración, disfrutaremos de varios bailes coreografiados:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vals tradicional</li>
              <li>Baile sorpresa moderno</li>
              <li>Coreografía especial</li>
            </ul>
            <p className="mt-4">
              Hemos ensayado durante meses para ofrecerles un espectáculo inolvidable que refleje la alegría de esta celebración.
            </p>
          </div>
        </div>      </div>
    </div>
  );
};

export default Chambelanes;
