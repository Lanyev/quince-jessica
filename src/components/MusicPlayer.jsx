import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [showVolume, setShowVolume] = useState(false);
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

    const audio = audioRef.current;
    audio.addEventListener('ended', handleAudioEnd);
    audio.volume = volume;

    return () => {
      audio.removeEventListener('ended', handleAudioEnd);
    };
  }, [volume]);
  return (    <div className="fixed bottom-32 right-4 z-[100]">
      <audio ref={audioRef} src={audioSrc} preload="auto" loop />
        {showVolume && (
        <div className="absolute bottom-16 right-1 bg-white/90 p-3 rounded-lg shadow-md mb-2 backdrop-blur-sm border border-primary/20 w-32">
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
      
      <div className="flex">
        <button
          onClick={() => setShowVolume(!showVolume)}
          className="w-10 h-10 bg-primary/80 rounded-full shadow-md flex items-center justify-center hover:bg-primary-light transition-colors duration-300 mr-2"
          aria-label="Controlar volumen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
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
          className="w-12 h-12 bg-primary rounded-full shadow-md flex items-center justify-center hover:bg-primary-light transition-colors duration-300"
          aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          {isPlaying ? (
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
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
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
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </button>
      </div>
    </div>  );
};

export default MusicPlayer;
