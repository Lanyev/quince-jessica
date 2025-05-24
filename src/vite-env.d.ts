/// <reference types="vite/client" />

// Declaraciones para archivos estáticos
declare module '*/audio/*.mp3' {
  const src: string;
  export default src;
}
