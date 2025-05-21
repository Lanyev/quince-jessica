import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SaveTheDate = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const eventDate = new Date('June 25, 2025 18:00:00');
  const eventEndDate = new Date('June 25, 2025 23:59:00');
  
  const formatDate = (date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  };
  
  const getGoogleCalendarUrl = () => {
    const startDate = formatDate(eventDate);
    const endDate = formatDate(eventEndDate);
    
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=XV+Años+de+Jessica+Paola&dates=${startDate}/${endDate}&details=Celebración+de+XV+años+de+Jessica+Paola.+¡Te+esperamos!&location=Iglesia+de+San+Juan+/+Salón+Jardines+del+Bosque`;
  };
  
  const getIcsFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//XV Años Jessica Paola//ES
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:XV Años de Jessica Paola
DTSTART:${formatDate(eventDate)}
DTEND:${formatDate(eventEndDate)}
LOCATION:Iglesia de San Juan / Salón Jardines del Bosque
DESCRIPTION:Celebración de XV años de Jessica Paola. ¡Te esperamos!
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;
    
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    return URL.createObjectURL(blob);
  };
  
  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-white font-serif font-bold px-6 py-3 rounded-lg shadow-md hover:bg-primary-light transition duration-300 flex items-center"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2" 
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        Agendar Fecha
      </motion.button>
      
      {isOpen && (
        <div className="absolute mt-3 left-0 w-64 bg-white rounded-lg shadow-xl p-4 border border-primary/20">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-primary font-script text-lg">Guardar Fecha</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <p className="text-sm text-gray-600 mb-4 font-serif">
            25 de Junio, 2025 - 18:00 hrs
          </p>
          
          <div className="flex flex-col space-y-2">
            <a 
              href={getGoogleCalendarUrl()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-500 text-white text-sm rounded py-2 px-4 flex items-center hover:bg-blue-600 transition"
            >
              <svg width="16" height="16" className="mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="M21.6,10.2l-9.6,7.2L2.4,10.2V19.8c0,1.3,1.1,2.4,2.4,2.4h14.4c1.3,0,2.4-1.1,2.4-2.4V10.2z"/>
                <path d="M21.6,4.2c0-1.3-1.1-2.4-2.4-2.4H4.8c-1.3,0-2.4,1.1-2.4,2.4v3l9.6,7.2l9.6-7.2V4.2z"/>
              </svg>
              Añadir a Google Calendar
            </a>
            
            <a 
              href={getIcsFile()} 
              download="XV_Jessica_Paola.ics" 
              className="bg-gray-100 text-gray-800 text-sm rounded py-2 px-4 flex items-center hover:bg-gray-200 transition"
            >
              <svg width="16" height="16" className="mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="M20,6h-4V4c0-1.1-0.9-2-2-2h-4C8.9,2,8,2.9,8,4v2H4C2.9,6,2,6.9,2,8v11c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8 C22,6.9,21.1,6,20,6z M10,4h4v2h-4V4z M20,19H4V8h16V19z"/>
                <path d="M16,10H8v2h8V10z"/>
                <path d="M16,14H8v2h8V14z"/>
              </svg>
              Descargar para Outlook/Apple
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SaveTheDate;
