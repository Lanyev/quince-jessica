# Solución de Rutas de Imágenes para Producción - Vite + React

## 🔧 **Problema Identificado**

Las imágenes de la galería cargaban correctamente en desarrollo (`npm run dev`) pero **no se mostraban en producción** después del deploy a GitHub Pages. 

### Causa Raíz
- **Configuración incorrecta de base URL** en `vite.config.js`
- **Rutas hardcodeadas** que no consideraban el entorno de producción
- **Falta de utilidad centralizada** para generar URLs de imágenes

## ✅ **Soluciones Implementadas**

### 1. **Configuración Correcta de Vite**
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/quince-jessica/', // ✅ Configuración correcta para GitHub Pages
});
```

**Antes:** `base: './'` (problemático)  
**Después:** `base: '/quince-jessica/'` (correcto para GitHub Pages)

### 2. **Utilidad Centralizada para URLs de Imágenes**
Creado `src/utils/imageUtils.js`:

```javascript
// Utilidad para generar URLs correctas en dev y producción
export const getImageUrl = (imagePath) => {
  const basePath = import.meta.env.BASE_URL || '/';
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `${basePath}${cleanPath}`.replace(/\/+/g, '/');
};

export const getGalleryImageUrl = (filename) => {
  return getImageUrl(`images/gallery/${filename}`);
};

export const getBackgroundImageUrl = (filename) => {
  return getImageUrl(`images/backgrounds/${filename}`);
};
```

### 3. **Hook de Galería Actualizado**
```javascript
// src/hooks/useGalleryImages.js
import { getGalleryImageUrl } from '../utils/imageUtils';

const galleryImages = imageFiles.map((filename, index) => ({
  id: index + 1,
  src: getGalleryImageUrl(filename), // ✅ Usa la utilidad
  alt: `Jessica Paola - Momento especial ${index + 1}`,
  title: getTitleForImage(index + 1),
  description: getDescriptionForImage(index + 1),
  filename: filename
}));
```

### 4. **Componentes Actualizados**

#### App.jsx
```javascript
import { getBackgroundImageUrl } from './utils/imageUtils';

useEffect(() => {
  const bgImagePath = getBackgroundImageUrl('bg-pattern.png');
  // ...resto del código
});
```

#### InvitationCard.jsx
```javascript
import { getBackgroundImageUrl } from '../utils/imageUtils';

// En el JSX:
<div className={`absolute inset-0 bg-[url('${getBackgroundImageUrl('bg-pattern.jpg')}')] bg-cover bg-center opacity-20`}></div>
```

## 🎯 **Resultados**

### URLs Generadas Automáticamente:

#### Desarrollo (localhost)
```
http://localhost:5173/images/gallery/img1%20(1).webp
http://localhost:5173/images/gallery/img1%20(2).webp
```

#### Producción (GitHub Pages)
```
https://lanyev.github.io/quince-jessica/images/gallery/img1%20(1).webp
https://lanyev.github.io/quince-jessica/images/gallery/img1%20(2).webp
```

### Características de la Solución:

✅ **Compatibilidad Universal**: Funciona en desarrollo y producción  
✅ **Rutas Dinámicas**: Usa `import.meta.env.BASE_URL` automáticamente  
✅ **Limpieza de URLs**: Elimina barras duplicadas  
✅ **Código Reutilizable**: Utilidades centralizadas  
✅ **Mantenimiento Fácil**: Un solo lugar para modificar lógica de URLs  

## 🔍 **Verificación**

### Desarrollo
```bash
npm run dev
# ✅ Imágenes cargan en http://localhost:5173/
```

### Producción Local
```bash
npm run build
npm run preview
# ✅ Imágenes cargan en http://localhost:4173/quince-jessica/
```

### Producción GitHub Pages
```bash
npm run deploy
# ✅ Imágenes cargan en https://lanyev.github.io/quince-jessica/
```

## 📁 **Estructura de Archivos**

```
public/
└── images/
    ├── gallery/
    │   ├── img1 (1).webp ✅
    │   ├── img1 (2).webp ✅
    │   └── ...
    └── backgrounds/
        └── bg-pattern.jpg ✅

src/
├── utils/
│   └── imageUtils.js ✅ NUEVO
├── hooks/
│   └── useGalleryImages.js ✅ ACTUALIZADO
├── components/
│   └── InvitationCard.jsx ✅ ACTUALIZADO
└── App.jsx ✅ ACTUALIZADO
```

## 🚀 **Estado Final**

- ✅ **Build exitoso** sin errores
- ✅ **Imágenes copiadas** correctamente a `dist/images/`
- ✅ **URLs dinámicas** funcionando en todos los entornos
- ✅ **Deploy exitoso** a GitHub Pages
- ✅ **Galería funcionando** en producción: https://lanyev.github.io/quince-jessica/

## 💡 **Lecciones Aprendidas**

1. **Base URL es crítica** para GitHub Pages
2. **Hardcodear rutas** causa problemas en producción
3. **Utilidades centralizadas** simplifican mantenimiento
4. **Probar con `npm run preview`** simula producción localmente
5. **import.meta.env.BASE_URL** es la clave para rutas dinámicas

---

**Solución completada**: Las imágenes ahora cargan correctamente tanto en desarrollo como en producción.
