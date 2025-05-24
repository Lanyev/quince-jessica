# ModularSwiperGallery - Componente de Galería Reutilizable

Este componente permite crear galerías Swiper con Grid de manera fácil y consistente en toda la aplicación.

## Uso Básico

```jsx
import ModularSwiperGallery from '../components/ModularSwiperGallery';

// Array de imágenes
const images = [
  {
    id: 1,
    src: '/images/gallery/img1.webp',
    title: 'Título de la imagen',
    description: 'Descripción opcional',
    alt: 'Texto alternativo'
  },
  // ... más imágenes
];

// Función para manejar clicks en imágenes
const handleImageClick = (image) => {
  console.log('Imagen clickeada:', image);
  // Aquí puedes abrir un lightbox, modal, etc.
};

// Uso del componente
<ModularSwiperGallery 
  images={images}
  onImageClick={handleImageClick}
  showNavigation={true}
  showPagination={true}
  autoplay={true}
  spaceBetween={20}
  rows={2}
  slidesPerView={{
    mobile: 1,
    tablet: 2,
    desktop: 3
  }}
/>
```

## Props Disponibles

### images (obligatorio)
Array de objetos con la estructura:
```jsx
{
  id: number,           // ID único
  src: string,          // URL de la imagen
  title: string,        // Título de la imagen
  description?: string, // Descripción opcional
  alt?: string         // Texto alternativo (opcional, usa title si no se proporciona)
}
```

### onImageClick (opcional)
Función que se ejecuta al hacer click en una imagen.
```jsx
(image) => void
```

### showNavigation (opcional, default: true)
Muestra/oculta las flechas de navegación.

### showPagination (opcional, default: true)
Muestra/oculta la paginación con puntos.

### autoplay (opcional, default: true)
Activa/desactiva el avance automático.

### className (opcional, default: "modular-gallery-swiper")
Clase CSS personalizada para el contenedor Swiper.

### spaceBetween (opcional, default: 20)
Espacio entre slides en píxeles.

### rows (opcional, default: 2)
Número de filas en el grid.

### slidesPerView (opcional)
Objeto que define cuántas columnas mostrar en cada breakpoint:
```jsx
{
  mobile: number,   // Número de columnas en móvil
  tablet: number,   // Número de columnas en tablet  
  desktop: number   // Número de columnas en desktop
}
```

## Ejemplos de Configuración

### Galería para página principal (6 imágenes, 2 filas x 3 columnas)
```jsx
<ModularSwiperGallery 
  images={galleryImages}
  onImageClick={openLightbox}
  rows={2}
  slidesPerView={{
    mobile: 1,
    tablet: 2,
    desktop: 3
  }}
/>
```

### Galería compacta (1 fila, más columnas)
```jsx
<ModularSwiperGallery 
  images={galleryImages}
  onImageClick={openLightbox}
  rows={1}
  spaceBetween={16}
  slidesPerView={{
    mobile: 2,
    tablet: 3,
    desktop: 4
  }}
  autoplay={false}
/>
```

### Galería simple sin navegación
```jsx
<ModularSwiperGallery 
  images={galleryImages}
  onImageClick={openLightbox}
  showNavigation={false}
  showPagination={false}
  autoplay={false}
/>
```

## Estilos CSS

El componente incluye clases CSS predefinidas:
- `.modular-gallery-swiper` - Clase principal
- Estilos responsive automáticos
- Efectos hover y transiciones
- Paginación y navegación estilizada

## Características

✅ **Layout Grid**: Muestra múltiples imágenes en filas y columnas
✅ **Responsive**: Se adapta automáticamente a diferentes tamaños de pantalla
✅ **Navegación**: Flechas prev/next opcionales
✅ **Paginación**: Puntos de navegación opcionales con efectos dinámicos
✅ **Autoplay**: Avance automático configurable
✅ **Efectos hover**: Zoom y overlay con información
✅ **Accesibilidad**: Textos alternativos y navegación por teclado
✅ **Performance**: Lazy loading de imágenes
✅ **Lightbox ready**: Integración fácil con sistemas de lightbox

## Nota

Este componente está optimizado para mostrar galerías de imágenes con un diseño tipo collage, ideal para páginas de quinceañeras, bodas, eventos, portfolios, etc.
