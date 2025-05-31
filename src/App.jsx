import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import MusicPlayer from './components/MusicPlayer.jsx';
import ScrollToTop from './components/ScrollToTop';
import BetterAnimatedRoutes from './components/BetterAnimatedRoutes';
import ThemeToggle from './components/ThemeToggle';
import AnimatedBackground from './components/AnimatedBackground';
import Inicio from './pages/Inicio';
import Ceremonia from './pages/Ceremonia';
import Asistencia from './pages/Asistencia';
import Fiesta from './pages/Fiesta';
import Galeria from './pages/Galeria';
import Padrinos from './pages/Padrinos';
import Chambelanes from './pages/Chambelanes';
import Regalos from './pages/Regalos';

function App() {
  // La ruta a tu archivo de música con ruta relativa para GitHub Pages
  const audioSrc = './audio/background-music.mp3'; 

  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <AnimatedBackground />
        <div className="flex-grow pb-[65px] lg:pb-[100px]">
          <BetterAnimatedRoutes>
            <Route path="/" element={<Inicio />} />
            <Route path="/ceremonia" element={<Ceremonia />} />
            <Route path="/asistencia" element={<Asistencia />} />
            <Route path="/fiesta" element={<Fiesta />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/padrinos" element={<Padrinos />} />
            <Route path="/chambelanes" element={<Chambelanes />} />
            <Route path="/regalos" element={<Regalos />} />
          </BetterAnimatedRoutes>
        </div>
        <MusicPlayer audioSrc={audioSrc} />
        <ScrollToTop />
        <ThemeToggle />
        <footer className="w-full fixed bottom-0 left-0 right-0 z-5 no-print">
          <Navbar />
        </footer>
      </div>
    </Router>
  );
}

export default App;