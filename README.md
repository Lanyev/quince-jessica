# 🌹 Quinceañera Jessica Paola - Sitio Web Responsive

## 🎨 Paleta de Colores Bordeaux Reserve

Este elegante sitio web utiliza una paleta de colores refinada con **Bordeaux Reserve** como color principal, creando una atmósfera sofisticada y memorable para la celebración.

### 🎨 Colores Principales
- **Bordeaux Reserve**: `#960001` (Color principal)
- **Bordeaux Light**: `#B82629` (Variante clara)
- **Bordeaux Dark**: `#6A0001` (Variante oscura)
- **Gold Accent**: `#D4AF37` (Acento dorado)
- **Background**: `#FFF5F5` (Fondo suave)

## ✨ Características Principales

### 📱 Diseño Mobile-First & Responsive
- **Mobile-First**: Optimizado primero para dispositivos móviles
- **Tablet Friendly**: Layouts especiales para tablets (768px - 1024px)
- **Desktop Enhanced**: Experiencia mejorada para escritorio (1024px+)
- **Ultra-Wide Support**: Soporte para pantallas grandes (1536px+)

### 🧭 Sistema de Navegación Inteligente

#### Navegación Móvil (< 1024px)
- Sistema de carrusel con 3 páginas organizadas
- **Página 1**: Inicio, Ceremonia, Fiesta
- **Página 2**: Asistencia, Galería
- **Página 3**: Padrinos, Chambelanes, Regalos
- Navegación por flechas con indicadores de página
- Animaciones suaves entre páginas

#### Navegación Desktop (1024px+)
- Dock flotante en la parte inferior
- Todos los elementos visibles simultáneamente
- Efectos hover elegantes con glassmorphism

### 🏗️ Arquitectura del Proyecto

#### 📄 Páginas Principales (8)
```
src/pages/
├── Inicio.jsx          # Página principal con hero y countdown
├── Ceremonia.jsx       # Detalles de la ceremonia religiosa
├── Fiesta.jsx          # Información de la recepción
├── Asistencia.jsx      # Formulario de confirmación
├── Galeria.jsx         # Galería de fotos dinámica
├── Padrinos.jsx        # Lista de padrinos
├── Chambelanes.jsx     # Lista de chambelanes
└── Regalos.jsx         # Información de regalos
```

#### 🧩 Componentes Activos (9)
```
src/components/
├── Navbar.jsx                  # Navegación principal adaptiva
├── PageLayout.jsx              # Layout reutilizable para páginas
├── BetterAnimatedRoutes.jsx    # Sistema de rutas con transiciones
├── MusicPlayer.jsx             # Reproductor de música de fondo
├── ModularSwiperGallery.jsx    # Galería con Swiper.js
├── ThemeToggle.jsx             # Alternador de tema
├── ScrollToTop.jsx             # Botón scroll hacia arriba
├── ScrollToTopOnRoute.jsx      # Auto-scroll en cambio de ruta
└── LoadingSpinner.jsx          # Indicador de carga
```

#### 🎣 Hooks Personalizados (2)
```
src/hooks/
├── useColorPalette.js          # Gestión de paleta de colores
└── useGalleryImages.js         # Gestión dinámica de imágenes
```

#### 🛠️ Utilidades (1)
```
src/utils/
└── imageUtils.js               # Funciones para manejo de imágenes
```

## 🎨 Sistema de Diseño Unificado

### 📐 Layout Consistente
Todas las páginas utilizan el componente `PageLayout.jsx` que proporciona:
- Headers estilizados con tipografía `font-script`
- Contenedores con efectos `backdrop-blur-sm`
- Bordes consistentes `border-primary/20`
- Espaciado y responsive behavior unificado

### 🖼️ Efectos Visuales
- **Glassmorphism**: `bg-white/90 backdrop-blur-sm`
- **Bordes Sutiles**: `border border-primary/20`
- **Tipografía Elegante**: 
  - Títulos: `font-script text-primary`
  - Subtítulos: `font-serif text-primary-light`
- **Hover Effects**: Transformaciones suaves en tarjetas

### 📊 Grid Systems Responsive
```css
/* Mobile Grid */
.grid-cols-1          /* 1 columna en móvil */

/* Tablet Grid */
.md:grid-cols-2       /* 2 columnas en tablet */

/* Desktop Grid */
.lg:grid-cols-3       /* 3 columnas en desktop */
```

## 🎭 Sistema de Galería Dinámico

### 📁 Estructura Organizada
```
public/images/gallery/
├── sesion-vestido/     # Fotos formales con vestido
├── sesion-casual/      # Fotos casuales
├── padrinos/          # Fotos con padrinos
└── evento/            # Fotos del evento (futuras)
```

### ⚡ Características Técnicas
- **Carga Dinámica**: Detección automática de imágenes
- **Swiper.js**: Carrusel fluido con efectos 3D
- **Responsive Loading**: Optimización por dispositivo
- **Autoplay Inteligente**: 4s con pausa en interacción

## 🚀 Tecnologías y Herramientas

### Core Technologies
- **React 18**: Framework principal con Hooks
- **React Router**: Navegación SPA con HashRouter
- **Vite**: Build tool ultrarrápido
- **Tailwind CSS**: Utility-first CSS framework

### Librerías Especializadas
- **Swiper.js**: Carruseles y sliders elegantes
- **Framer Motion**: Animaciones fluidas (en routes)

### Optimizaciones
- **CSS Custom Properties**: Variables CSS dinámicas
- **CSS Grid & Flexbox**: Layouts modernos
- **Lazy Loading**: Carga diferida de imágenes
- **Tree Shaking**: Eliminación de código no usado

## 📱 Experiencia por Dispositivo

### 📱 Mobile (< 768px)
- Navegación touch-optimizada con carrusel
- Grid single-column para contenido
- Countdown en formato 2x2
- Texto optimizado para lectura móvil
- Efectos táctiles en botones

### 📱 Tablet (768px - 1023px)
- Navegación móvil con mejor espaciado
- Grid dual-column híbrido
- Countdown horizontal
- Aprovechamiento de espacio intermedio

### 🖥️ Desktop (1024px+)
- Navegación dock flotante
- Layouts multi-columna (2-3 cols)
- Hover effects completos
- Aprovechamiento total del viewport
- Experiencia premium con efectos visuales

### 🖥️ Ultra-Wide (1536px+)
- Contenido centrado con max-width
- Tipografía escalada para pantallas grandes
- Grid systems optimizados
- Spacing generoso y elegante

## ⚙️ Configuración y Desarrollo

### 🔧 Instalación
```bash
# Clonar repositorio
git clone [repository-url]

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

### 📝 Scripts Disponibles
```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint src --ext js,jsx"
}
```

### 🎨 Personalización de Colores
Edita las variables CSS en `src/index.css`:
```css
:root {
  --primary-color: #960001;      /* Bordeaux Reserve */
  --primary-light: #B82629;      /* Bordeaux Light */
  --primary-dark: #6A0001;       /* Bordeaux Dark */
  --accent-color: #D4AF37;       /* Gold Accent */
  --secondary-color: #FFF5F5;    /* Background */
}
```

### 🖼️ Gestión de Imágenes
1. **Galería**: Coloca imágenes en las carpetas correspondientes en `public/images/gallery/`
2. **Backgrounds**: Usa `public/images/backgrounds/` para fondos
3. **Optimización**: Preferir formato WebP para mejor rendimiento

## 🔄 Limpieza y Optimización Reciente

### ❌ Componentes Eliminados
- `Invitaciones.jsx` - Sección no requerida
- `InvitationCard.jsx` - Componente de invitaciones
- `GiftRegistry.jsx` - Registro no utilizado
- `PhotoUploader.jsx` - Subidor no necesario
- `SaveTheDate.jsx` - Componente extra
- `AnimatedRoutes.jsx` - Duplicado (se usa BetterAnimatedRoutes)
- Archivos temporales y duplicados

### ✅ Optimizaciones Aplicadas
- Eliminación de imports no utilizados
- Limpieza de rutas muertas
- Navegación reorganizada sin invitaciones
- Código más limpio y mantenible
- Mejor rendimiento sin dependencias muertas

## 🎯 Funcionalidades Destacadas

### 🎵 Reproductor de Música
- Música de fondo opcional
- Controles elegantes flotantes
- Autoplay con políticas del navegador

### ⏰ Countdown Dinámico
- Contador regresivo hasta el evento
- Actualización en tiempo real
- Diseño responsive adaptativo

### 📝 Formulario de Asistencia
- Validación de datos
- Interfaz amigable
- Feedback visual inmediato

### 🎁 Lista de Regalos
- Información de regalos preferidos
- Diseño elegante con cards
- Información de contacto

## 🔮 Roadmap Futuro

### Mejoras Planificadas
- [ ] Modo oscuro completo
- [ ] PWA (Progressive Web App)
- [ ] Optimización para dispositivos plegables
- [ ] Más efectos de transición
- [ ] Sistema de notificaciones

### Optimizaciones Técnicas
- [ ] Implementación de Service Workers
- [ ] Lazy loading avanzado
- [ ] Compresión de imágenes automática
- [ ] Analytics de uso

## 📊 Métricas y Performance

### Lighthouse Scores (Objetivo)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 85+

### Optimizaciones Implementadas
- Imágenes optimizadas y lazy loading
- CSS crítico inline
- JavaScript optimizado con tree shaking
- Fonts locales para mejor performance

## 🤝 Contribución

### Estructura de Commits
```
feat: nueva funcionalidad
fix: corrección de errores
style: cambios de estilo/formato
refactor: refactorización de código
docs: actualización de documentación
```

### Guidelines de Desarrollo
1. Seguir convenciones de Tailwind CSS
2. Mantener consistencia en componentes
3. Documentar cambios importantes
4. Testear en múltiples dispositivos

---

## 📞 Información del Proyecto

**Evento**: Quinceañera de Jessica Paola  
**Tecnología**: React + Vite + Tailwind CSS  
**Diseño**: Mobile-First Responsive  
**Paleta**: Bordeaux Reserve (#960001)  

---

*Desarrollado con ❤️ para una celebración inolvidable*

### 📋 Última Actualización

**Versión 3.0.0 - Limpieza y Optimización** *(Actual)*
- ❌ Eliminada sección de invitaciones completa
- 🧹 Limpieza de 12 archivos no utilizados
- 🚀 Optimización de navegación y rendimiento
- 📱 Navegación reorganizada (8 páginas activas)
- ✨ Código más limpio y mantenible
