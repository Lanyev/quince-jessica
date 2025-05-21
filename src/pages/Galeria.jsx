import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import PhotoUploader from '../components/PhotoUploader';

// Imágenes de muestra para la galería
const galleryImages = [
  { 
    id: 1, 
    src: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000', 
    title: 'Sesión Pre-XV', 
    description: 'Fotos de estudio para invitación' 
  },
  { 
    id: 2, 
    src: 'https://images.unsplash.com/photo-1518049362265-d5b2a6e911b3?q=80&w=1000', 
    title: 'Con mis amigas', 
    description: 'Preparativos para la gran celebración' 
  },
  { 
    id: 3, 
    src: 'https://images.unsplash.com/photo-1511285560929-80b456f0a429?q=80&w=1000', 
    title: 'Vestido de XV', 
    description: 'Prueba de vestido con mi familia' 
  },
  { 
    id: 4, 
    src: 'https://images.unsplash.com/photo-1604093882750-3ed498f3178b?q=80&w=1000', 
    title: 'Zapatillas', 
    description: 'El complemento perfecto para el gran día' 
  },
  { 
    id: 5, 
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000', 
    title: 'Locación', 
    description: 'El hermoso lugar donde celebraremos' 
  },
  { 
    id: 6, 
    src: 'https://images.unsplash.com/photo-1470816692786-37612294f90f?q=80&w=1000', 
    title: 'Detalles', 
    description: 'Pequeños detalles que hacen la diferencia' 
  }
];

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    // Simular carga de imágenes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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

        <PhotoUploader />

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Si no hay imágenes en galleryImages, mostrar placeholders */}
            {galleryImages.length > 0 ? (
              galleryImages.map((image) => (
                <div 
                  key={image.id} 
                  className="overflow-hidden rounded-xl shadow-xl bg-white border border-primary/10 transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <div className="h-64 bg-primary/5 overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-script font-semibold text-primary">{image.title}</h3>
                    <p className="text-gray-600 mt-2 font-serif">{image.description}</p>
                  </div>
                </div>
              ))
            ) : (
              // Placeholders cuando no hay imágenes aún
              [1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="overflow-hidden rounded-xl shadow-xl bg-white border border-primary/10 transition-transform duration-300 hover:scale-105">
                  <div className="h-64 bg-primary/5 flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="64" 
                      height="64" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-primary/60"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-script font-semibold text-primary">Foto {item}</h3>
                    <p className="text-gray-600 mt-2 font-serif">Próximamente</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}        <div className="mt-10 text-center">
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
