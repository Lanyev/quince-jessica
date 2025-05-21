import React, { useState } from 'react';

const Asistencia = () => {
  const [nombre, setNombre] = useState('');
  const [invitados, setInvitados] = useState(1);
  const [telefono, setTelefono] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [asistira, setAsistira] = useState('si');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se podría implementar la lógica para enviar los datos a un servidor
    console.log({ nombre, invitados, telefono, comentarios, asistira });
    setSubmitted(true);
  };
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 py-12 bg-white/90 rounded-lg shadow-lg my-8 content-card">
        <div className="text-center mb-16">
          <h1 className="font-script text-6xl md:text-7xl font-bold text-primary mb-3">Confirmación</h1>
          <p className="font-serif text-2xl md:text-3xl text-primary-light italic">Esperamos contar con tu presencia</p>
          <div className="flex justify-center mt-6">
            <div className="w-32 h-1 bg-primary rounded-full"></div>
          </div>
        </div>        {submitted ? (
          <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg text-center border border-primary/20 relative">
            {/* Elementos decorativos */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary/30 rounded-tl-xl"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-primary/30 rounded-tr-xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-primary/30 rounded-bl-xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary/30 rounded-br-xl"></div>
            
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-script font-bold text-primary mb-4">¡Gracias por confirmar!</h2>
            <p className="text-gray-600 font-serif mb-4">
              {asistira === 'si' 
                ? `Hemos registrado tu asistencia con ${invitados} invitado(s).` 
                : 'Lamentamos que no puedas acompañarnos, pero agradecemos tu respuesta.'}
            </p>
            <p className="text-gray-500 font-serif italic mb-8 text-sm">
              {asistira === 'si' 
                ? 'Espero verte en mi celebración. ¡Será un día inolvidable!' 
                : 'Espero poder compartir otro momento especial contigo pronto.'}
            </p>
            <button 
              onClick={() => setSubmitted(false)} 
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition duration-300 font-serif flex items-center mx-auto"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              <span>Regresar</span>
            </button>
          </div>
        ) : (<div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-primary/20">
              <div className="p-8 relative">
                {/* Elementos decorativos */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-primary/30 rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-primary/30 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-primary/30 rounded-bl-xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-primary/30 rounded-br-xl"></div>
                
                <div className="text-center mb-8 relative z-10">
                  <h2 className="text-3xl font-script font-semibold text-primary mb-2">R.S.V.P.</h2>
                  <p className="font-serif text-gray-600 italic">El placer de tu compañía es solicitado</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-serif">
                      ¿Asistirás a mi celebración?
                    </label>
                    <div className="flex space-x-6">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio text-primary"
                          name="asistencia"
                          value="si"
                          checked={asistira === 'si'}
                          onChange={() => setAsistira('si')}
                        />
                        <span className="ml-2 font-serif">Sí, asistiré</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio text-primary"
                          name="asistencia"
                          value="no"
                          checked={asistira === 'no'}
                          onChange={() => setAsistira('no')}
                        />
                        <span className="ml-2 font-serif">No podré asistir</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2 font-serif">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-serif bg-white/70"                      required
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  {asistira === 'si' && (
                    <div>
                      <label htmlFor="invitados" className="block text-sm font-medium text-gray-700 mb-2 font-serif">
                        Número de invitados (incluyéndote)
                      </label>
                      <select
                        id="invitados"
                        value={invitados}
                        onChange={(e) => setInvitados(Number(e.target.value))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-serif bg-white/70"
                      >
                        {[1, 2, 3, 4, 5].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2 font-serif">
                      Teléfono de contacto
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-serif bg-white/70"
                      required
                      placeholder="Tu número telefónico"
                    />
                  </div>

                  <div>
                    <label htmlFor="comentarios" className="block text-sm font-medium text-gray-700 mb-2 font-serif">
                      Comentarios o mensajes para la quinceañera
                    </label>
                    <textarea
                      id="comentarios"
                      value={comentarios}
                      onChange={(e) => setComentarios(e.target.value)}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-serif bg-white/70"
                      placeholder="Un mensaje especial para Jessica Paola..."
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 rounded-lg font-serif font-medium hover:bg-primary-light transition duration-300 shadow-md flex items-center justify-center"
                    >
                      <span>Confirmar Asistencia</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 ml-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="text-center mt-8 text-gray-600 font-serif">
              <p>Por favor confirma tu asistencia antes del 10 de junio de 2025</p>
              <p className="mt-2 text-sm text-primary-light italic">Para cualquier duda, contacta al: (555) 123-4567</p>
            </div>
          </div>        )}      </div>
    </div>
  );
};

export default Asistencia;
