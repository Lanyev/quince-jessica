import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ModularSwiperGallery = ({ 
  images, 
  onImageClick,
  showNavigation = true,
  showPagination = true,
  autoplay = true,
  className = "modular-gallery-swiper",
  spaceBetween = 20,
  rows = 2,
  slidesPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  }
}) => {
  return (
    <div className="gallery-container">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6">
        <Swiper
          slidesPerView={slidesPerView.mobile}
          grid={{
            rows: rows,
            fill: 'row',
          }}
          spaceBetween={spaceBetween}
          pagination={showPagination ? {
            clickable: true,
            dynamicBullets: true,
          } : false}
          navigation={showNavigation}
          autoplay={autoplay ? {
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          } : false}
          modules={[Grid, Pagination, Navigation, Autoplay]}
          breakpoints={{
            480: {
              slidesPerView: slidesPerView.tablet,
              grid: {
                rows: rows,
                fill: 'row',
              },
              spaceBetween: spaceBetween - 4,
            },
            768: {
              slidesPerView: slidesPerView.desktop,
              grid: {
                rows: rows,
                fill: 'row',
              },
              spaceBetween: spaceBetween,
            },
            1024: {
              slidesPerView: slidesPerView.desktop,
              grid: {
                rows: rows,
                fill: 'row',
              },
              spaceBetween: spaceBetween + 4,
            },
          }}
          className={className}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div 
                className="relative group aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border border-primary/10"
                onClick={() => onImageClick && onImageClick(image)}
              >
                <div className="h-full overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt || image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                {/* Overlay con información */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-script text-base md:text-lg font-semibold mb-1">
                      {image.title}
                    </h4>
                    {image.description && (
                      <p className="font-serif text-xs md:text-sm opacity-90">
                        {image.description}
                      </p>
                    )}
                  </div>
                </div>
                {/* Icono de zoom */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary/80 text-white rounded-full p-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ModularSwiperGallery;
