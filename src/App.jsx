import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import MusicPlayer from './components/MusicPlayer.jsx';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';
import BetterAnimatedRoutes from './components/BetterAnimatedRoutes';
import Inicio from './pages/Inicio';
import Ceremonia from './pages/Ceremonia';
import Asistencia from './pages/Asistencia';
import Fiesta from './pages/Fiesta';
import Galeria from './pages/Galeria';
import Padrinos from './pages/Padrinos';
import Chambelanes from './pages/Chambelanes';
import Regalos from './pages/Regalos';
import Invitaciones from './pages/Invitaciones';

function App() {
  // La ruta a tu archivo de música - reemplázala cuando tengas tu archivo
  const audioSrc = '/audio/background-music.mp3'; 
  
  // Estado para el fondo personalizado
  const [bgStyle, setBgStyle] = useState({});
  
  useEffect(() => {
    // Puedes cambiar esto a la ruta de tu imagen de fondo cuando la tengas
    const bgImagePath = '/images/backgrounds/bg-pattern.jpg';
    
    // Comprobamos si la imagen existe
    const img = new Image();
    img.src = bgImagePath;
    
    img.onload = () => {
      // Si la imagen carga correctamente, la usamos como fondo
      setBgStyle({
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${bgImagePath})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      });
    };
    
    img.onerror = () => {
      // Si hay error, usamos un fondo con patrón sutil
      setBgStyle({
        backgroundColor: 'var(--secondary-color)',
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), radial-gradient(var(--primary-color) 0.5px, var(--secondary-color) 0.5px)`,
        backgroundSize: '20px 20px'
      });
    };
  }, []);

  return (
    <Router>
      <div className="App flex flex-col min-h-screen" style={bgStyle}>
        <div className="flex-grow pb-[80px]">
          <BetterAnimatedRoutes>
            <Route path="/" element={<Inicio />} />
            <Route path="/ceremonia" element={<Ceremonia />} />
            <Route path="/asistencia" element={<Asistencia />} />
            <Route path="/fiesta" element={<Fiesta />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/padrinos" element={<Padrinos />} />
            <Route path="/chambelanes" element={<Chambelanes />} />
            <Route path="/regalos" element={<Regalos />} />
            <Route path="/invitaciones" element={<Invitaciones />} />
          </BetterAnimatedRoutes>
        </div>
        <MusicPlayer audioSrc={audioSrc} />
        <ScrollToTop />
        <footer className="w-full fixed bottom-0 left-0 right-0 z-5 p-[15px]">
          <Navbar />
        </footer>
      </div>
    </Router>
  );
}

export default App;