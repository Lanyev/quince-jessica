# Sitio Web para Quinceañera 👑

Este proyecto es un sitio web personalizado para la celebración de XV años de Jessica Paola, diseñado para ser móvil-friendly con una interfaz elegante y fácil de usar.


## 🌟 Características

- **Diseño Mobile-First**: Optimizado para dispositivos móviles con una navegación intuitiva
- **Barra de navegación fija**: Ubicada en la parte inferior para facilitar la navegación
- **Reproductor de música**: Con controles de reproducción y volumen
- **Cuenta regresiva**: Muestra el tiempo restante hasta el gran día
- **Galería de fotos**: Con efecto lightbox y opción para que los invitados suban fotos
- **Confirmación de asistencia**: Formulario para que los invitados confirmen su asistencia
- **Detalles del evento**: Secciones para la ceremonia religiosa y fiesta
- **Mesa de regalos**: Con sugerencias para los invitados
- **Animaciones de página**: Efectos suaves al navegar entre secciones
- **Fondo personalizable**: Posibilidad de cambiar la imagen de fondo

## 🛠️ Tecnologías Utilizadas

- [React](https://reactjs.org/) - Biblioteca para construir interfaces de usuario
- [React Router](https://reactrouter.com/) - Enrutamiento para aplicaciones React
- [Framer Motion](https://www.framer.com/motion/) - Animaciones fluidas
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitario
- [DaisyUI](https://daisyui.com/) - Componentes para Tailwind CSS
- [Vite](https://vitejs.dev/) - Herramienta de construcción rápida para proyectos web

## 📱 Secciones Principales

1. **Inicio**: Página principal con cuenta regresiva y detalles generales
2. **Ceremonia**: Información sobre la ceremonia religiosa
3. **Fiesta**: Detalles sobre la recepción y celebración
4. **Asistencia**: Formulario para confirmar asistencia
5. **Galería**: Fotos del evento y opción para compartir fotos
6. **Padrinos**: Información sobre los padrinos
7. **Chambelanes**: Información sobre los chambelanes
8. **Regalos**: Mesa de regalos con sugerencias

## 🚀 Instalación y Uso

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/quince-jessica.git
   cd quince-jessica
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Para construir para producción:
   ```bash
   npm run build
   ```

## 📁 Estructura de Archivos

```
quince-jessica/
├── public/                 # Archivos estáticos
│   ├── audio/              # Archivos de música
│   │   └── background-music.mp3  # Música de fondo
│   ├── audio-check.html    # Herramienta para verificar audio
│   └── images/             # Imágenes
│       ├── backgrounds/    # Fondos para el sitio
│       └── gallery/        # Imágenes para la galería
├── src/                    # Código fuente
│   ├── components/         # Componentes reutilizables
│   ├── pages/              # Páginas principales
│   ├── App.jsx             # Componente principal
│   ├── main.jsx           # Punto de entrada
│   └── index.css           # Estilos globales
├── .gitignore              # Archivos ignorados por Git
├── package.json            # Dependencias y scripts
├── vite.config.js          # Configuración de Vite
├── diagnostico.html        # Herramienta de diagnóstico
├── deploy-gh-pages.ps1     # Script para desplegar en GitHub Pages
└── README.md               # Este archivo
```

## 🔧 Personalización

### Cambiar la imagen de fondo

1. Coloca tu imagen en la carpeta `public/images/backgrounds/`
2. Renómbrala como `bg-pattern.jpg` o modifica la ruta en `src/App.jsx`

### Cambiar la música de fondo

1. Coloca tu archivo de audio en la carpeta `public/audio/`
2. Renómbralo como `background-music.mp3` o modifica la ruta en `src/App.jsx`

### Personalizar información

Modifica los archivos en la carpeta `src/pages/` para actualizar la información específica del evento.

## 🔄 Recuperación del Proyecto

Si encuentras problemas con el repositorio o necesitas recuperar una versión anterior:

```powershell
# En PowerShell: Recupera la rama main desde el repositorio remoto
git fetch origin
git reset --hard origin/main
git clean -fd
```

Esto descargará la última versión del repositorio y eliminará cualquier archivo no rastreado por Git.

## 🚢 Despliegue en GitHub Pages

Para desplegar el sitio en GitHub Pages, simplemente ejecuta:

```bash
./deploy-gh-pages.ps1
```

Este script:
1. Compila el sitio con Vite
2. Crea una rama temporal
3. Copia los archivos compilados
4. Crea y actualiza la rama gh-pages
5. Sube los cambios a GitHub

### Solución de problemas

Después del despliegue, puedes acceder a la herramienta de diagnóstico online visitando:
```
https://[tu-usuario].github.io/[tu-repo]/diagnostico.html
```

Si encuentras problemas al desplegar, verifica:

#### El audio no funciona en GitHub Pages

Asegúrate de que:
1. La ruta del audio en `App.jsx` sea relativa (`./audio/background-music.mp3`)
2. El archivo de audio exista en la carpeta `public/audio/`
3. La configuración `base: './'` esté presente en `vite.config.js`
4. Usa la herramienta `diagnostico.html` para verificar el audio

#### Las imágenes no cargan

Asegúrate de que todas las rutas de imágenes sean relativas:
```jsx
const bgImagePath = './images/backgrounds/bg-pattern.png';
```

#### La navegación no funciona

El sitio usa `HashRouter` en lugar de `BrowserRouter` para funcionar correctamente en GitHub Pages.

## �📝 Licencia

Este proyecto es de uso personal y está destinado para la celebración de XV años de Jessica Paola.

## 🙏 Agradecimientos

- A todos los desarrolladores de las bibliotecas y herramientas utilizadas
- A la familia y amigos que hacen posible esta celebración especial
