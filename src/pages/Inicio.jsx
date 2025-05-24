import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import useGalleryImages from '../hooks/useGalleryImages';

// Import crown image
import crownImage from '/images/backgrounds/crown1.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Inicio = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Use dynamic gallery images hook
  const { images: allImages, loading, getRandomImages } = useGalleryImages();
  
  // Get 3 random images for homepage
  const galleryImages = getRandomImages(3);

  useEffect(() => {
    setIsVisible(true);
  }, []);  return (
    <div className="min-h-screen">      {/* Crown Decorative Header */}
      <div className={`crown-header py-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="flex justify-center">
          <img 
            src="./images/backgrounds/crown1.png" 
            alt="Corona decorativa" 
            className="w-48 h-auto md:w-64 lg:w-72 object-contain animate-fade-in"
            onError={(e) => {
              console.log('Error loading crown image:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Invitation Header Section */}
      <div className={`invitation-header px-4 py-8 md:py-16 transition-all duration-1000 bg-white/60 backdrop-blur-sm ${isVisible ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
            {/* Parents Names */}
          <div className="mb-8 animate-fade-in">
            <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-primary mb-4 font-medium">
              Sarai <span className="text-primary-light mx-2">y</span> Omar
            </h2>
          </div>

          {/* Invitation Text */}
          <div className="mb-12 animate-fade-in delay-200">
            <p className="font-serif text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Tienen el honor de invitar a usted y a su apreciable familia<br />
              a la celebración de los XV años de su hija:
            </p>
          </div>          {/* Jessica Paola Name - Main Feature */}
          <div className="mb-16 animate-fade-in delay-300">
            <h1 className="font-script text-6xl md:text-8xl lg:text-9xl font-bold text-primary leading-none mb-8 animate-pulse-slow">
              Jessica Paola
            </h1>
              {/* Jessica's Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img 
                    src="./images/jessica-main.webp" 
                    alt="Jessica Paola" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Imagen temporal de placeholder si no existe la imagen principal
                      e.target.src = "https://via.placeholder.com/200x200/800020/FFFFFF?text=Jessica+Paola";
                    }}
                  />
                </div>
                {/* Decorative ring around photo */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse"></div>
              </div>
            </div>
            
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
              </p>              <p className="text-base md:text-lg">
                Recepción: <span className="text-primary">8:00 PM</span>
              </p>
            </div>
            
            {/* Decorative Line */}
            <div className="flex justify-center mt-8">
              <div className="w-32 md:w-48 h-0.5 bg-primary"></div>
            </div>
          </div>
        </div>
      </div>{/* Photo Gallery Collage Section */}      {/* Photo Gallery Preview Section */}
      <div className="gallery-section bg-gray-50/70 backdrop-blur-sm py-16 relative">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Gallery Title */}
          <div className="text-center mb-12">
            <h3 className="font-script text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
              Momentos Especiales
            </h3>
            <p className="font-serif text-gray-600 text-base md:text-lg">
              Una colección de recuerdos de estos años maravillosos
            </p>
          </div>{/* Coverflow Gallery Container */}
          <div className="gallery-container">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>            ) : galleryImages.length > 0 ? (
              <div className="bg-white/80 rounded-2xl overflow-hidden p-6">
                <Swiper
                  effect={'coverflow'}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={'auto'}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  modules={[EffectCoverflow, Pagination, Autoplay]}
                  className="coverflow-swiper"
                >
                  {galleryImages.map((image) => (
                    <SwiperSlide key={image.id}>
                      <div className="relative group rounded-xl overflow-hidden">
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
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 font-serif">
                  Las fotos se cargarán pronto...
                </p>
              </div>
            )}
          </div>          {/* View More Button */}
          <div className="text-center mt-12">
            <Link
              to="/galeria"
              className="inline-flex items-center font-serif text-primary hover:text-primary-dark transition-colors duration-300 text-lg group"
            >
              <span>Ver galería completa</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>            </Link>
          </div>
        </div>
          {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50/90 via-gray-50/40 to-transparent pointer-events-none"></div>
      </div>
      
      {/* Additional spacing for navbar clearance */}
      <div className="h-32 md:h-40"></div>
    </div>
  );
};

export default Inicio;