import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const Inicio = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Gallery images for collage
  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/img1 (1).webp",
      alt: "Jessica Paola - Sesión fotográfica",
      title: "Sesión Fotográfica"
    },
    {
      id: 2,
      src: "/images/gallery/img1 (2).webp",
      alt: "Jessica Paola - Retrato elegante",
      title: "Retrato Elegante"
    },
    {
      id: 3,
      src: "/images/gallery/img1 (3).webp",
      alt: "Jessica Paola - Momentos especiales",
      title: "Momentos Especiales"
    },
    {
      id: 4,
      src: "/images/gallery/img1 (4).webp",
      alt: "Jessica Paola - Preparativos",
      title: "Preparativos"
    },
    {
      id: 5,
      src: "/images/gallery/img1 (5).webp",
      alt: "Jessica Paola - Con familia",
      title: "Con Familia"
    },
    {
      id: 6,
      src: "/images/gallery/img1 (6).webp",
      alt: "Jessica Paola - Sonrisa radiante",
      title: "Sonrisa Radiante"
    }  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);return (
    <div className="min-h-screen">      {/* Invitation Header Section */}
      <div className={`invitation-header px-4 py-12 md:py-20 transition-all duration-1000 bg-white/60 backdrop-blur-sm ${isVisible ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Parents Names */}
          <div className="mb-8 animate-fade-in">
            <h2 className="font-script text-2xl md:text-3xl lg:text-4xl text-primary mb-4 font-medium">
              Sarai <span className="text-primary-light mx-2">y</span> Omar
            </h2>
          </div>

          {/* Invitation Text */}
          <div className="mb-12 animate-fade-in delay-200">
            <p className="font-serif text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Tienen el honor de invitar a usted y a su apreciable familia<br />
              a la celebración de los XV años de su hija:
            </p>
          </div>

          {/* Jessica Paola Name - Main Feature */}
          <div className="mb-16 animate-fade-in delay-300">
            <h1 className="font-script text-6xl md:text-8xl lg:text-9xl font-bold text-primary leading-none mb-6 animate-pulse-slow">
              Jessica Paola
            </h1>
            
            {/* Decorative Line */}
            <div className="flex justify-center mb-8">
              <div className="w-32 md:w-48 h-0.5 bg-primary"></div>
            </div>

            {/* Date and Time Info */}
            <div className="space-y-4 font-serif text-gray-700">
              <p className="text-lg md:text-xl">
                <span className="text-primary font-medium">26 de Julio, 2025</span>
              </p>
              <p className="text-base md:text-lg">
                Ceremonia religiosa: <span className="text-primary">6:00 PM</span>
              </p>
              <p className="text-base md:text-lg">
                Recepción: <span className="text-primary">8:00 PM</span>
              </p>
            </div>

            {/* Action Button */}
            <div className="mt-8">
              <Link 
                to="/ceremonia" 
                className="inline-block bg-primary hover:bg-primary-light text-white font-serif px-8 py-3 rounded-none shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wide text-sm"
              >
                Ver Detalles del Evento
              </Link>
            </div>
          </div>
        </div>
      </div>      {/* Photo Gallery Collage Section */}
      <div className="gallery-section bg-gray-50/70 backdrop-blur-sm py-16">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Gallery Title */}
          <div className="text-center mb-12">
            <h3 className="font-script text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
              Momentos Especiales
            </h3>
            <p className="font-serif text-gray-600 text-base md:text-lg">
              Una colección de recuerdos de estos años maravillosos
            </p>
          </div>

          {/* Swiper Gallery Container */}
          <div className="gallery-container">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-4">
              <Swiper
                slidesPerView={1}
                grid={{
                  rows: 3,
                  fill: 'row',
                }}
                spaceBetween={16}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                modules={[Grid, Pagination, Autoplay]}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    grid: {
                      rows: 2,
                      fill: 'row',
                    },
                  },
                  768: {
                    slidesPerView: 3,
                    grid: {
                      rows: 2,
                      fill: 'row',
                    },
                  },
                  1024: {
                    slidesPerView: 3,
                    grid: {
                      rows: 2,
                      fill: 'row',
                    },
                  },
                }}
                className="gallery-swiper"
              >
                {galleryImages.map((image) => (
                  <SwiperSlide key={image.id}>
                    <div className="relative group aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Image Overlay with Title */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h4 className="text-white font-serif text-sm md:text-base font-medium">
                            {image.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Link
              to="/galeria"
              className="inline-flex items-center font-serif text-primary hover:text-primary-dark transition-colors duration-300 text-lg group"
            >
              <span>Ver galería completa</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>{/* Footer Message */}
      <div className="footer-section bg-white/60 backdrop-blur-sm py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <div className="border border-primary/20 rounded-lg p-8 md:p-12">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h4 className="font-script text-2xl md:text-3xl text-primary mb-6">
              Tu presencia es nuestro mejor regalo
            </h4>
            
            <p className="font-serif text-gray-700 leading-relaxed text-base md:text-lg">
              Este día tan especial será aún más memorable con la compañía de las personas que más queremos. 
              Esperamos poder compartir juntos este momento de alegría y celebración.
            </p>

            <div className="mt-8 pt-6 border-t border-primary/10">
              <p className="font-serif text-sm text-gray-500 italic">
                — Con cariño, Familia García
              </p>
            </div>          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;