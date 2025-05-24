// Utilidad para generar URLs de imágenes correctas en desarrollo y producción
export const getImageUrl = (imagePath) => {
  // Obtener la base URL de Vite
  const basePath = import.meta.env.BASE_URL || '/';
  
  // Eliminar la barra inicial de imagePath si existe
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // Construir la URL completa y limpiar barras dobles
  const fullUrl = `${basePath}${cleanPath}`.replace(/\/+/g, '/');
  
  return fullUrl;
};

// Función específica para imágenes de la galería
export const getGalleryImageUrl = (filename) => {
  return getImageUrl(`images/gallery/${filename}`);
};

// Función específica para imágenes de fondo
export const getBackgroundImageUrl = (filename) => {
  return getImageUrl(`images/backgrounds/${filename}`);
};
