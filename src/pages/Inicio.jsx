import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import useGalleryImages from '../hooks/useGalleryImages';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Inicio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Use dynamic gallery images hook
  const { loading, getRandomImages } = useGalleryImages();
  
  // Get 3 random images for homepage
  const galleryImages = getRandomImages(3);

  // Countdown to event date (July 26, 2025 at 6:00 PM)
  useEffect(() => {
    const eventDate = new Date('2025-07-26T18:00:00').getTime();
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = eventDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Precargar imágenes críticas
    const preloadImages = async () => {
      const imagesToLoad = [
        './images/backgrounds/crown1.png',
        './images/jessica-main.webp'
      ];
      
      const imagePromises = imagesToLoad.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve; // Continuar incluso si hay error
          img.src = src;
        });
      });
      
      await Promise.all(imagePromises);
    };
    
    preloadImages();
    
    // Mostrar contenido después de precargar o con timeout
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Crown Decorative Header */}
      <div className={`crown-header py-4 md:py-6 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <div className="flex justify-center">
          <img 
            src="./images/backgrounds/crown1.png" 
            alt="Corona decorativa" 
            className="w-48 h-auto md:w-64 lg:w-72 xl:w-80 object-contain animate-fade-in"
            onError={(e) => {
              console.log('Error loading crown image:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Invitation Header Section */}
      <div className="invitation-container mt-2 md:mt-4">
        <div className="invitation-card">
          {/* Parents Names */}
          <h2 className="parents-names font-script text-4xl md:text-5xl lg:text-6xl text-primary">
            Sarai <span className="text-primary-light mx-2">y</span> Omar
          </h2>

          {/* Invitation Text */}
          <p className="invitation-phrase font-serif text-base md:text-lg lg:text-xl text-gray-700">
            Tienen el honor de invitar a usted y a su apreciable familia<br className="hidden sm:inline" />
            <span className="sm:hidden"> </span>a la celebración de los XV años de su hija
          </p>

          {/* Nombre de la Quinceañera */}
          <h1 className="quinceanera-name font-script">
            Jessica Paola
          </h1>

          {/* Imagen Principal */}
          <div className="quinceanera-photo-container">
            <div className="photo-frame">
              <img 
                src="./images/jessica-main.webp" 
                alt="Jessica Paola" 
                className="quinceanera-photo"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x650/800020/FFFFFF?text=Jessica+Paola";
                }}
              />
            </div>
            {/* Corner Decorations */}
            <div className="corner-decoration corner-top-left"></div>
            <div className="corner-decoration corner-top-right"></div>
            <div className="corner-decoration corner-bottom-left"></div>
            <div className="corner-decoration corner-bottom-right"></div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="section-divider"></div>

        {/* Date and Countdown Section */}
        <div className="countdown-container">
          <div className="countdown-title">
            <h3>26 de Julio, 2025</h3>
          </div>

          <div className="countdown-grid">
            {/* Days */}
            <div className="countdown-item">
              <div className="number">{timeLeft.days}</div>
              <div className="label">
                {timeLeft.days === 1 ? 'Día' : 'Días'}
              </div>
            </div>
            
            {/* Hours */}
            <div className="countdown-item">
              <div className="number">{timeLeft.hours}</div>
              <div className="label">
                {timeLeft.hours === 1 ? 'Hora' : 'Horas'}
              </div>
            </div>
            
            {/* Minutes */}
            <div className="countdown-item">
              <div className="number">{timeLeft.minutes}</div>
              <div className="label">
                {timeLeft.minutes === 1 ? 'Minuto' : 'Minutos'}
              </div>
            </div>
            
            {/* Seconds */}
            <div className="countdown-item">
              <div className="number">{timeLeft.seconds}</div>
              <div className="label">
                {timeLeft.seconds === 1 ? 'Segundo' : 'Segundos'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Collage Section */}
      <div className="gallery-section bg-white/15 backdrop-blur-sm py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          
          {/* Gallery Title */}
          <div className="text-center mb-12">
            <h3 className="font-script text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
              Momentos Especiales
            </h3>
            <p className="font-serif text-gray-600 text-base md:text-lg px-2 sm:px-0">
              Una colección de recuerdos de estos años maravillosos
            </p>
          </div>

          {/* Coverflow Gallery Container */}
          <div className="gallery-container">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : galleryImages.length > 0 ? (
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl overflow-hidden p-6">
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
      </div>
      
      {/* Additional spacing for navbar clearance */}
      <div className="h-32 md:h-40"></div>
    </div>
  );
};

export default Inicio;