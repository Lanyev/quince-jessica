import React, { useState } from 'react';

const Asistencia = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companions: '1',
    dietaryRestrictions: '',
    attendance: 'ceremony',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          companions: '1',
          dietaryRestrictions: '',
          attendance: 'ceremony',
          message: ''
        });
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Crown Decorative Header */}
      <div className="crown-header py-4 md:py-6">
        <div className="flex justify-center">
          <img 
            src="./images/backgrounds/crown1.png" 
            alt="Corona decorativa" 
            className="w-48 h-auto md:w-64 lg:w-72 xl:w-80 object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="invitation-container mt-2 md:mt-4">
        <div className="invitation-card">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-primary mb-4">Confirma tu Asistencia</h1>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-primary-light italic">Tu presencia es el mejor regalo</p>
            <div className="flex justify-center mt-6">
              <div className="w-32 md:w-48 lg:w-64 h-1 bg-primary rounded-full"></div>
            </div>
          </div>

          {submitStatus === 'success' ? (
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-primary/20 mb-8">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-script font-semibold text-primary mb-2">¡Confirmación Recibida!</h3>
                <p className="text-gray-600 font-serif">Gracias por confirmar tu asistencia. ¡Te esperamos!</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-primary/20 mb-8">
                <h3 className="text-xl font-script font-semibold text-primary mb-6 text-center">Información Personal</h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-serif mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary font-serif"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-serif mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary font-serif"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 font-serif mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary font-serif"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-primary/20 mb-8">
                <h3 className="text-xl font-script font-semibold text-primary mb-6 text-center">Detalles de Asistencia</h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="attendance" className="block text-sm font-medium text-gray-700 font-serif mb-2">
                      Asistiré a: *
                    </label>
                    <select
                      id="attendance"
                      name="attendance"
                      required
                      value={formData.attendance}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary font-serif"
                    >
                      <option value="ceremony">Solo ceremonia religiosa</option>
                      <option value="reception">Solo recepción</option>
                      <option value="both">Ceremonia y recepción</option>
                      <option value="none">No podré asistir</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="companions" className="block text-sm font-medium text-gray-700 font-serif mb-2">
                      Número de acompañantes (incluyéndote)
                    </label>
                    <select
                      id="companions"
                      name="companions"
                      value={formData.companions}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary font-serif"
                    >
                      <option value="1">1 persona</option>
                      <option value="2">2 personas</option>
                      <option value="3">3 personas</option>
                      <option value="4">4 personas</option>
                      <option value="5">5 o más personas</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700 font-serif mb-2">
                      Restricciones alimentarias o alergias
                    </label>
                    <input
                      type="text"
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary font-serif"
                      placeholder="Vegetariano, alérgico a..., etc."
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-primary/20 mb-8">
                <h3 className="text-xl font-script font-semibold text-primary mb-6 text-center">Mensaje Especial</h3>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-serif mb-2">
                    ¿Tienes algún mensaje especial para Jessica?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary font-serif"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary-dark text-white font-serif font-semibold py-4 px-8 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    'Confirmar Asistencia'
                  )}
                </button>
              </div>
            </form>
          )}

          <div className="text-center text-gray-600 font-serif mt-8">
            <p className="text-base lg:text-lg">
              Para cualquier duda, puedes contactarnos al{' '}
              <a href="tel:+1234567890" className="text-primary hover:text-primary-dark">
                (123) 456-7890
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Additional spacing for navbar clearance */}
      <div className="h-32 md:h-40"></div>
    </div>
  );
};

export default Asistencia;
