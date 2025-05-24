import { useState, useEffect } from 'react';

// Hook personalizado para cargar imágenes dinámicamente
const useGalleryImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        // Lista de nombres de archivos conocidos en la carpeta gallery
        // En un entorno real, esto vendría de una API o sistema de archivos
        const imageFiles = [
          'img1 (1).webp',
          'img1 (2).webp', 
          'img1 (3).webp',
          'img1 (4).webp',
          'img1 (5).webp',
          'img1 (6).webp'
        ];

        // Generar array de imágenes con metadatos
        const galleryImages = imageFiles.map((filename, index) => ({
          id: index + 1,
          src: `/images/gallery/${filename}`,
          alt: `Jessica Paola - Momento especial ${index + 1}`,
          title: getTitleForImage(index + 1),
          description: getDescriptionForImage(index + 1),
          filename: filename
        }));

        setImages(galleryImages);
        setLoading(false);
      } catch (error) {
        console.error('Error loading gallery images:', error);
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  // Función para obtener 3 imágenes aleatorias
  const getRandomImages = (count = 3) => {
    if (images.length === 0) return [];
    
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, images.length));
  };

  return {
    images,
    loading,
    getRandomImages
  };
};

// Funciones auxiliares para generar títulos y descripciones
const getTitleForImage = (index) => {
  const titles = [
    'Sesión Fotográfica',
    'Retrato Elegante', 
    'Momentos Especiales',
    'Preparativos',
    'Con Familia',
    'Sonrisa Radiante',
    'Recuerdos Hermosos',
    'Celebración',
    'Alegría Pura',
    'Tradición Familiar'
  ];
  return titles[index - 1] || `Momento Especial ${index}`;
};

const getDescriptionForImage = (index) => {
  const descriptions = [
    'Hermosos momentos capturados en estudio',
    'Un retrato lleno de gracia y elegancia',
    'Cada momento es único e irrepetible',
    'Los detalles que hacen la diferencia',
    'Momentos compartidos con los seres queridos',
    'La alegría de este día especial',
    'Memorias que durarán para siempre',
    'Una celebración llena de amor',
    'La felicidad se refleja en cada foto',
    'Honrando las tradiciones familiares'
  ];
  return descriptions[index - 1] || `Una hermosa fotografía del evento especial de Jessica Paola`;
};

export default useGalleryImages;
