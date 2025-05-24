# Carpeta de Imágenes para Galería

Esta carpeta es donde debes colocar las imágenes que quieres mostrar en la galería de fotos de la quinceañera.

## Instrucciones:

1. Coloca aquí las fotos en formato JPG o PNG.
2. Para que aparezcan en la galería, debes editar el archivo `src/pages/Galeria.jsx`.
3. Busca el arreglo `galleryImages` al principio del archivo y añade tus imágenes siguiendo el formato de ejemplo:

```javascript
const galleryImages = [
  { id: 1, src: '/images/gallery/foto1.jpg', title: 'Sesión Pre-XV', description: 'Fotos de la sesión previa' },
  { id: 2, src: '/images/gallery/foto2.jpg', title: 'Con mis amigas', description: 'Preparativos' },
  // Añade más imágenes siguiendo el mismo formato
];
```

## Recomendaciones:

- Redimensiona tus imágenes antes de añadirlas (tamaño recomendado: 1200x800 píxeles).
- Usa nombres descriptivos para los archivos.
- Mantén un buen balance entre calidad y tamaño de archivo para que la página cargue rápido.
