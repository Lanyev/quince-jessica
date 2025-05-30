import { useState, useEffect } from 'react';

// Función para calcular el contraste y elegir el color de texto
const getContrastColor = (bgColor) => {
  // Convertir el color hex a RGB
  const r = parseInt(bgColor.slice(1, 3), 16);
  const g = parseInt(bgColor.slice(3, 5), 16);
  const b = parseInt(bgColor.slice(5, 7), 16);
  
  // Calcular la luminancia relativa
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Retornar color de texto basado en luminancia
  return luminance > 0.5 ? '#1A1A1A' : '#FFFFFF';
};

// Función para generar variantes de color
const generateColorVariants = (baseColor) => {
  // Convertir hex a RGB
  const r = parseInt(baseColor.slice(1, 3), 16);
  const g = parseInt(baseColor.slice(3, 5), 16);
  const b = parseInt(baseColor.slice(5, 7), 16);
  
  // Generar variantes
  const darken = (amount) => {
    return '#' + [r, g, b].map(c => {
      const hex = Math.max(0, Math.min(255, Math.round(c * (1 - amount)))).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  };
  
  const lighten = (amount) => {
    return '#' + [r, g, b].map(c => {
      const hex = Math.max(0, Math.min(255, Math.round(c + (255 - c) * amount))).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  };
  
  return {
    dark: darken(0.3),
    light: lighten(0.2),
    lighter: lighten(0.4),
    darkText: darken(0.6),
    lightText: lighten(0.95)
  };
};

// Definir las paletas de colores completas
const COLOR_PALETTES = {
  bordeaux: {
    name: 'Bordeaux Reserve',
    base: '#960001',      // Rojo Bordeaux profundo
    dark: '#6A0001',      // Bordeaux añejado
    light: '#B82629',     // Bordeaux joven
    accent: '#D4AF37',    // Dorado vintage
    background: '#FFF5F5', // Blanco cálido
    text: '#2D0001',      // Casi negro con tinte
    textLight: '#4A0002', // Texto para fondos claros
    textDark: '#FFFFFF',  // Texto para fondos oscuros
    silver: '#C0C0C0',    // Plateado clásico
    muted: '#8B0001'      // Versión muted del color base
  },
  burgundy: {
    name: 'Burgundy Estate',
    base: '#800020',
    dark: '#590018',
    light: '#A13D56',
    accent: '#B8860B',
    background: '#FFF4F6',
    text: '#260009',
    textLight: '#400012',
    textDark: '#FFFFFF',
    silver: '#D4C1C9',
    muted: '#70001C'
  },
  ruby: {
    name: 'Ruby Crown',
    base: '#AC3540',
    dark: '#7A252D',
    light: '#D4626B',
    accent: '#CFB53B',
    background: '#FFF6F7',
    text: '#2B0D10',
    textLight: '#4A1D21',
    textDark: '#FFFFFF',
    silver: '#E0C5C7',
    muted: '#9C2F39'
  },
  garnet: {
    name: 'Garnet Royale',
    base: '#D85D63',
    dark: '#A93F44',
    light: '#E88A8E',
    accent: '#DAA520',
    background: '#FFF7F8',
    text: '#2F1516',
    textLight: '#4F2527',
    textDark: '#FFFFFF',
    silver: '#E5D1D2',
    muted: '#C85359'
  },
  coral: {
    name: 'Coral Sunset',
    base: '#FF8588',
    dark: '#D65659',
    light: '#FFB3B5',
    accent: '#E6BE8A',
    background: '#FFF9F9',
    text: '#331A1B',
    textLight: '#552D2E',
    textDark: '#FFFFFF',
    silver: '#EBD8D9',
    muted: '#EF7A7D'
  },
  rose: {
    name: 'Rose Quartz',
    base: '#FFAEAF',
    dark: '#D68788',
    light: '#FFD1D2',
    accent: '#E6C9A8',
    background: '#FFFAFA',
    text: '#362424',
    textLight: '#593B3B',
    textDark: '#FFFFFF',
    silver: '#F0E2E2',
    muted: '#EFA1A2'
  }
};

// Configuración para variables CSS
const cssVariables = {
  primary: 'var(--primary-color)',
  primaryLight: 'var(--primary-light)',
  primaryDark: 'var(--primary-dark)',
  secondary: 'var(--secondary-color)',
  silver: 'var(--silver-color)',
};

// Configuración para Tailwind
const tailwindConfig = {
  colors: {
    bordeaux: {
      DEFAULT: COLOR_PALETTES.bordeaux.base,
      dark: COLOR_PALETTES.bordeaux.dark,
      light: COLOR_PALETTES.bordeaux.light,
      accent: COLOR_PALETTES.bordeaux.accent,
      bg: COLOR_PALETTES.bordeaux.background,
      text: COLOR_PALETTES.bordeaux.text
    },
    burgundy: {
      DEFAULT: COLOR_PALETTES.burgundy.base,
      dark: COLOR_PALETTES.burgundy.dark,
      light: COLOR_PALETTES.burgundy.light,
      accent: COLOR_PALETTES.burgundy.accent,
      bg: COLOR_PALETTES.burgundy.background,
      text: COLOR_PALETTES.burgundy.text
    },
    ruby: {
      DEFAULT: COLOR_PALETTES.ruby.base,
      dark: COLOR_PALETTES.ruby.dark,
      light: COLOR_PALETTES.ruby.light,
      accent: COLOR_PALETTES.ruby.accent,
      bg: COLOR_PALETTES.ruby.background,
      text: COLOR_PALETTES.ruby.text
    },
    garnet: {
      DEFAULT: COLOR_PALETTES.garnet.base,
      dark: COLOR_PALETTES.garnet.dark,
      light: COLOR_PALETTES.garnet.light,
      accent: COLOR_PALETTES.garnet.accent,
      bg: COLOR_PALETTES.garnet.background,
      text: COLOR_PALETTES.garnet.text
    },
    coral: {
      DEFAULT: COLOR_PALETTES.coral.base,
      dark: COLOR_PALETTES.coral.dark,
      light: COLOR_PALETTES.coral.light,
      accent: COLOR_PALETTES.coral.accent,
      bg: COLOR_PALETTES.coral.background,
      text: COLOR_PALETTES.coral.text
    },
    rose: {
      DEFAULT: COLOR_PALETTES.rose.base,
      dark: COLOR_PALETTES.rose.dark,
      light: COLOR_PALETTES.rose.light,
      accent: COLOR_PALETTES.rose.accent,
      bg: COLOR_PALETTES.rose.background,
      text: COLOR_PALETTES.rose.text
    }
  }
};

export const useColorPalette = () => {
  const [currentPalette, setCurrentPalette] = useState('burgundy');

  const applyPalette = (paletteKey) => {
    const palette = COLOR_PALETTES[paletteKey];
    if (!palette) return;

    const variants = generateColorVariants(palette.base);
    
    // Aplicar variables CSS
    const root = document.documentElement;
    
    // Colores principales
    root.style.setProperty('--primary-color', palette.base);
    root.style.setProperty('--primary-light', palette.light);
    root.style.setProperty('--primary-dark', palette.dark);
    root.style.setProperty('--primary-muted', palette.muted);
    
    // Colores de fondo y acento
    root.style.setProperty('--secondary-color', palette.background);
    root.style.setProperty('--accent-color', palette.accent);
    root.style.setProperty('--silver-color', palette.silver);
    
    // Colores de texto
    root.style.setProperty('--text-primary', palette.text);
    root.style.setProperty('--text-light', palette.textLight);
    root.style.setProperty('--text-dark', palette.textDark);
    
    // Variantes adicionales
    root.style.setProperty('--primary-lighter', variants.lighter);
    root.style.setProperty('--primary-darker', variants.dark);
    
    // Colores de texto con contraste automático
    root.style.setProperty('--text-on-primary', getContrastColor(palette.base));
    root.style.setProperty('--text-on-light', getContrastColor(palette.light));
    root.style.setProperty('--text-on-dark', getContrastColor(palette.dark));
    
    // Aplicar tema de DaisyUI
    root.setAttribute('data-theme', paletteKey);

    // Guardar en localStorage
    localStorage.setItem('quinceColorPalette', paletteKey);
  };

  const changePalette = (paletteKey) => {
    setCurrentPalette(paletteKey);
    applyPalette(paletteKey);
  };

  useEffect(() => {
    const savedPalette = localStorage.getItem('quinceColorPalette');
    if (savedPalette && COLOR_PALETTES[savedPalette]) {
      setCurrentPalette(savedPalette);
      applyPalette(savedPalette);
    } else {
      applyPalette('burgundy');
    }
  }, []);

  return {
    currentPalette,
    changePalette,
    palettes: COLOR_PALETTES,
    currentPaletteData: COLOR_PALETTES[currentPalette],
    cssVariables,
    tailwindConfig,
    getContrastColor
  };
}; 