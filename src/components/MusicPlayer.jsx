import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [showVolume, setShowVolume] = useState(false);
  const [audioError, setAudioError] = useState(null);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  useEffect(() => {
    const handleAudioEnd = () => {
      setIsPlaying(false);
    };

    const handleAudioError = (e) => {
      console.error('Error loading audio:', e);
      console.log('Audio source attempted:', audioSrc);
      setAudioError(`Error al cargar audio: ${e.message}`);
    };

    const handleAudioCanPlay = () => {
      console.log('Audio can play now:', audioSrc);
      setAudioError(null);
    };

    const audio = audioRef.current;
    audio.addEventListener('ended', handleAudioEnd);
    audio.addEventListener('error', handleAudioError);
    audio.addEventListener('canplay', handleAudioCanPlay);
    audio.volume = volume;

    return () => {
      audio.removeEventListener('ended', handleAudioEnd);
      audio.removeEventListener('error', handleAudioError);
      audio.removeEventListener('canplay', handleAudioCanPlay);
    };
  }, [volume, audioSrc]);

  return (
    <div className="fixed bottom-48 right-4 z-[100]">
      <audio ref={audioRef} src={audioSrc} preload="auto" loop />
      
      {audioError && (
        <div className="absolute bottom-28 right-1 bg-red-100 p-2 rounded-md text-xs text-red-600 w-32 hidden">
          {audioError}
        </div>
      )}
      
      {showVolume && (
        <div className="absolute bottom-20 right-1 bg-white/90 p-3 rounded-lg shadow-lg mb-2 backdrop-blur-sm border border-primary/20 w-32">
          <label htmlFor="volume-control" className="text-xs text-primary mb-1 block font-serif">Volumen</label>
          <input
            id="volume-control"
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full accent-primary"
          />
        </div>
      )}
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => setShowVolume(!showVolume)}
          className="w-14 h-14 bg-primary/80 rounded-full shadow-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 border-2 border-white/30"
          aria-label="Controlar volumen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            {volume > 0.6 ? (
              <>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
              </>
            ) : volume > 0.3 ? (
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            ) : null}
          </svg>
        </button>

        <button
          onClick={togglePlay}
          className="w-14 h-14 bg-primary rounded-full shadow-lg flex items-center justify-center hover:bg-primary-light transition-colors duration-300 border-2 border-white/30"
          aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
