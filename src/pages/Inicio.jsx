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
      <div className={`crown-header py-8 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
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
      <div className={`invitation-header container-responsive desktop-section tablet-section mobile-section transition-all duration-500 ease-out bg-white/40 backdrop-blur-sm ${isVisible ? 'opacity-85 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="content-max-width text-center">
          {/* Parents Names */}
          <div className="mb-8">
            <h2 className="font-script text-4xl md:text-5xl lg:text-6xl xl:text-7xl ultra-wide-subtitle text-primary mb-4 font-medium">
              Sarai <span className="text-primary-light mx-2">y</span> Omar
            </h2>
          </div>

          {/* Invitation Text */}
          <div className="mb-12">
            <p className="font-serif text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed text-content-width">
              Tienen el honor de invitar a usted y a su apreciable familia<br />
              a la celebración de los XV años de su hija:
            </p>
          </div>

          {/* Jessica Paola Name - Main Feature */}
          <div className="mb-16">
            <h1 className="font-script text-6xl md:text-7xl lg:text-8xl xl:text-9xl ultra-wide-title mobile-title font-bold text-primary leading-none mb-4">
              Jessica Paola
            </h1>
            
            {/* Theme - Corona */}
            <div className="mb-8">
            </div>

            {/* Jessica's Photo - Clean Rectangle with responsive sizing */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                {/* Photo container - Responsive rectangle shape */}
                <div className="w-80 h-[520px] mobile-hero-image md:w-96 md:h-[620px] lg:w-[450px] lg:h-[720px] xl:w-[500px] xl:h-[800px] landscape-hero-image overflow-hidden shadow-xl relative group-hover:scale-[1.02] transition-transform duration-700">
                  <img 
                    src="./images/jessica-main.webp" 
                    alt="Jessica Paola" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      // Imagen temporal de placeholder si no existe la imagen principal
                      e.target.src = "https://via.placeholder.com/400x650/800020/FFFFFF?text=Jessica+Paola";
                    }}
                  />
                  
                  {/* Elegant overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-primary-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Decorative Line with Roses */}
            <div className="flex justify-center items-center mb-8">
              <span className="text-primary text-2xl mr-3"></span>
              <div className="w-32 md:w-48 lg:w-64 h-0.5 bg-primary"></div>
              <span className="text-primary text-2xl ml-3"></span>
            </div>

            {/* Date and Event Info */}
            <div className="space-y-8 font-serif text-gray-700">
              <p className="text-lg md:text-xl lg:text-2xl text-center">
                <span className="text-primary font-medium">26 de Julio, 2025</span>
              </p>
              
              {/* Countdown Timer - Responsive grid */}
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-primary/20">
                <h3 className="font-script text-2xl md:text-3xl lg:text-4xl text-primary text-center mb-6">
                  Faltan solo...
                </h3>

                <div className="grid mobile-countdown tablet-countdown lg:grid-cols-4 gap-3 md:gap-4 text-center">
                  {/* Days */}
                  <div style={{backgroundColor: '#800020'}} className="text-white rounded-xl p-3 md:p-4 shadow-md min-h-[80px] flex flex-col justify-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold">{timeLeft.days}</div>
                    <div className="text-xs md:text-sm font-serif uppercase tracking-wide mt-1">
                      {timeLeft.days === 1 ? 'Día' : 'Días'}
                    </div>
                  </div>
                  
                  {/* Hours */}
                  <div style={{backgroundColor: '#800020'}} className="text-white rounded-xl p-3 md:p-4 shadow-md min-h-[80px] flex flex-col justify-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold">{timeLeft.hours}</div>
                    <div className="text-xs md:text-sm font-serif uppercase tracking-wide mt-1">
                      {timeLeft.hours === 1 ? 'Hora' : 'Horas'}
                    </div>
                  </div>
                  
                  {/* Minutes */}
                  <div style={{backgroundColor: '#800020'}} className="text-white rounded-xl p-3 md:p-4 shadow-md min-h-[80px] flex flex-col justify-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold">{timeLeft.minutes}</div>
                    <div className="text-xs md:text-sm font-serif uppercase tracking-wide mt-1">
                      {timeLeft.minutes === 1 ? 'Minuto' : 'Minutos'}
                    </div>
                  </div>
                  
                  {/* Seconds */}
                  <div style={{backgroundColor: '#800020'}} className="text-white rounded-xl p-3 md:p-4 shadow-md min-h-[80px] flex flex-col justify-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold">{timeLeft.seconds}</div>
                    <div className="text-xs md:text-sm font-serif uppercase tracking-wide mt-1">
                      {timeLeft.seconds === 1 ? 'Segundo' : 'Segundos'}
                    </div>
                  </div>
                </div>
                
                <p className="text-center mt-6 font-script text-lg md:text-xl lg:text-2xl text-primary">
                  ¡Para mi celebración de XV años!
                </p>
              </div>
            </div>
            
            {/* Decorative Line */}
            <div className="flex justify-center mt-8">
              <div className="w-32 md:w-48 lg:w-64 h-0.5 bg-primary"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Collage Section */}
      <div className="gallery-section bg-white/30 backdrop-blur-sm py-16 relative">
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

          {/* Coverflow Gallery Container */}
          <div className="gallery-container">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : galleryImages.length > 0 ? (
              <div className="bg-white/35 backdrop-blur-sm rounded-2xl overflow-hidden p-6">
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