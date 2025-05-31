import React from 'react';
import ModularSwiperGallery from '../components/ModularSwiperGallery';
import useGalleryImages from '../hooks/useGalleryImages';

const Galeria = () => {
  const { images, loading } = useGalleryImages();

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
            <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-primary mb-4">Galería de Fotos</h1>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-primary-light italic">Momentos especiales capturados en el tiempo</p>
            <div className="flex justify-center mt-6">
              <div className="w-32 md:w-48 lg:w-64 h-1 bg-primary rounded-full"></div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/20 mb-8">
            <div className="p-8">
              {loading ? (
                <div className="flex flex-col justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                  <p className="text-gray-600 font-serif">Cargando galería...</p>
                </div>
              ) : images.length > 0 ? (
                <ModularSwiperGallery 
                  images={images}
                  showNavigation={true}
                  showPagination={true}
                  autoplay={true}
                  className="main-gallery-swiper"
                  spaceBetween={20}
                  rows={2}
                  slidesPerView={{
                    mobile: 1,
                    tablet: 2,
                    desktop: 3
                  }}
                />
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-script text-primary mb-2">Galería Próximamente</h3>
                  <p className="text-gray-600 font-serif">
                    Las fotos se estarán agregando pronto. ¡Regresa después de la celebración!
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Description Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-primary/20 mb-8">
            <h3 className="text-2xl font-script font-semibold text-primary text-center mb-6">Recuerdos de una vida</h3>
            <div className="space-y-4 text-gray-600 font-serif text-base lg:text-lg leading-relaxed">
              <p>
                Esta galería reúne algunos de los momentos más preciados de estos quince años maravillosos. 
                Cada fotografía cuenta una historia, cada sonrisa captura un momento de felicidad que permanecerá 
                para siempre en nuestros corazones.
              </p>
              <p>
                Desde los primeros pasos hasta este día tan especial, cada imagen refleja el crecimiento, 
                los sueños y las experiencias que han moldeado a la joven que Jessica es hoy.
              </p>
            </div>
          </div>

          {/* Footer Message */}
          <div className="text-center text-gray-600 font-serif">
            <p className="text-base lg:text-lg italic">
              "Los momentos más hermosos no se viven, se recuerdan"
            </p>
          </div>
        </div>
      </div>

      {/* Additional spacing for navbar clearance */}
      <div className="h-32 md:h-40"></div>
    </div>
  );
};

export default Galeria;
