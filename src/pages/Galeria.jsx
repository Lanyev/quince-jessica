import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import PhotoUploader from '../components/PhotoUploader';
import ModularSwiperGallery from '../components/ModularSwiperGallery';
import useGalleryImages from '../hooks/useGalleryImages';

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { images: galleryImages, loading } = useGalleryImages();

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 py-12 bg-white/90 rounded-lg shadow-lg my-8 content-card">
        <div className="text-center mb-16">
          <h1 className="font-script text-6xl md:text-7xl font-bold text-primary mb-3">Galería de Fotos</h1>
          <p className="font-serif text-2xl md:text-3xl text-primary-light italic">Momentos para recordar</p>
          <div className="flex justify-center mt-6">
            <div className="w-32 h-1 bg-primary rounded-full"></div>
          </div>
        </div>

        <PhotoUploader />        {loading ? (
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner />
          </div>
        ) : (
          <ModularSwiperGallery 
            images={galleryImages}
            onImageClick={openLightbox}
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
        )}<div className="mt-10 text-center">
          <p className="font-serif text-primary-light">
            Las fotos del evento se compartirán aquí después de la celebración.
          </p>
        </div>
      </div>

      {/* Lightbox para ver imágenes ampliadas */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={closeLightbox}>
          <div className="relative w-full max-w-4xl flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-2 right-2 text-white bg-primary rounded-full p-2 hover:bg-primary-light z-10"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="overflow-auto max-h-[70vh] w-full flex items-center justify-center">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="object-contain max-h-[70vh] w-auto max-w-full"
              />
            </div>
            <div className="bg-primary py-4 px-6 text-white mt-2 rounded-b-lg w-full">
              <h3 className="text-xl font-script">{selectedImage.title}</h3>
              <p className="mt-1 font-nav text-sm">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;
