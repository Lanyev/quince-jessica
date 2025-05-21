import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PhotoUploader = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const newFiles = [...e.dataTransfer.files];
    handleFiles(newFiles);
  };

  const handleFileSelect = (e) => {
    const newFiles = [...e.target.files];
    handleFiles(newFiles);
  };

  const handleFiles = (newFiles) => {
    // Filter for only image files
    const imageFiles = newFiles.filter(file => file.type.startsWith('image/'));
    
    // Add preview URLs
    const filesWithPreviews = imageFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
      id: `${file.name}-${Date.now()}`
    }));
    
    setFiles(prev => [...prev, ...filesWithPreviews]);
  };

  const removeFile = (id) => {
    setFiles(files.filter(file => file.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (files.length === 0) {
      setUploadError('Por favor selecciona al menos una imagen para compartir');
      return;
    }
    
    setIsSubmitting(true);
    setUploadError(null);
    
    // Simulate upload process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after success message
      setTimeout(() => {
        setFiles([]);
        setIsSuccess(false);
      }, 5000);
    }, 2000);
  };

  return (
    <div className="mt-12 p-6 bg-white/95 rounded-xl shadow-lg border border-primary/10">
      <h3 className="text-2xl font-script text-primary mb-4">Comparte tus fotos</h3>
      <p className="font-serif text-gray-600 mb-6">
        ¿Tienes fotos conmigo que te gustaría compartir? Súbelas aquí para agregarlas a la galería.
      </p>
      
      {isSuccess ? (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 mb-6"
        >
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-serif">¡Gracias por compartir tus fotos! Serán revisadas y agregadas a la galería pronto.</span>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div 
            className={`border-2 border-dashed rounded-lg p-8 mb-4 text-center transition-colors ${
              isDragging ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary/50'
            }`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="mt-4 font-serif text-gray-700">Arrastra y suelta tus fotos aquí o</p>
            <label className="mt-2 inline-block cursor-pointer">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-serif">
                Selecciona archivos
              </span>
              <input 
                type="file" 
                multiple 
                accept="image/*" 
                className="hidden"
                onChange={handleFileSelect} 
              />
            </label>
          </div>
          
          {uploadError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 mb-4 font-serif text-sm">
              {uploadError}
            </div>
          )}
          
          {files.length > 0 && (
            <div className="mb-6">
              <h4 className="font-serif text-gray-700 mb-2">Fotos seleccionadas ({files.length})</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {files.map(file => (
                  <div key={file.id} className="relative group">
                    <img 
                      src={file.preview} 
                      alt={file.name} 
                      className="h-24 w-full object-cover rounded-lg border border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => removeFile(file.id)}
                      className="absolute -top-2 -right-2 bg-white rounded-full w-6 h-6 shadow-md flex items-center justify-center text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <p className="text-xs font-serif truncate mt-1">{file.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <button 
            type="submit" 
            disabled={isSubmitting || files.length === 0}
            className={`w-full py-3 rounded-lg font-serif font-medium shadow-md flex items-center justify-center ${
              isSubmitting || files.length === 0 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-primary text-white hover:bg-primary-light transition-colors'
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Subiendo...
              </>
            ) : 'Compartir fotos'}
          </button>
        </form>
      )}
    </div>
  );
};

export default PhotoUploader;
