import React from 'react';
import { Link } from 'react-router-dom';

const MoreModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={onClose}></div>
      <div className="fixed bottom-[70px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-sm bg-primary text-white rounded-xl shadow-xl p-4 z-50 border border-primary-light">      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-nav font-semibold text-white">Más opciones</h3>
        <button onClick={onClose} className="text-white/80 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Link 
          to="/galeria" 
          className="flex flex-col items-center p-3 hover:bg-primary-light rounded-lg"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
          <span className="text-xs font-nav text-center mt-1">Galería</span>
        </Link>
        
        <Link 
          to="/padrinos" 
          className="flex flex-col items-center p-3 hover:bg-primary-light rounded-lg"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span className="text-xs font-nav text-center mt-1">Padrinos</span>
        </Link>
        
        <Link 
          to="/chambelanes" 
          className="flex flex-col items-center p-3 hover:bg-primary-light rounded-lg"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span className="text-xs font-nav text-center mt-1">Chambelanes</span>
        </Link>
        
        <Link 
          to="/regalos" 
          className="flex flex-col items-center p-3 hover:bg-primary-light rounded-lg"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <rect x="3" y="8" width="18" height="14" rx="2" />
            <path d="M20 8H8a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a4 4 0 0 0-4-4Z" />
            <path d="M12 8V3" />
            <path d="M8 3h8" />
            <path d="M12 14v4" />
          </svg>
          <span className="text-xs font-nav text-center mt-1">Regalos</span>
        </Link>
      </div>
    </div>
    </>
  );
};

export default MoreModal;
