import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GiftRegistry = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const giftCategories = [
    { id: 'all', name: 'Todos' },
    { id: 'decoracion', name: 'Decoración' },
    { id: 'moda', name: 'Moda' },
    { id: 'tecnologia', name: 'Tecnología' },
    { id: 'experiencias', name: 'Experiencias' }
  ];
  
  const gifts = [
    {
      id: 1,
      name: 'Set de joyería',
      description: 'Un lindo conjunto de collar y aretes para la ocasión especial',
      image: 'https://images.unsplash.com/photo-1608508644127-ba99d7732fee?q=80&w=200',
      category: 'moda',
      price: '$800 - $1,200',
      stores: ['Pandora', 'Tous']
    },
    {
      id: 2,
      name: 'Álbum de fotos personalizado',
      description: 'Para guardar los recuerdos de este día tan especial',
      image: 'https://images.unsplash.com/photo-1518557984649-7b161c230cfa?q=80&w=200',
      category: 'decoracion',
      price: '$300 - $500',
      stores: ['Amazon', 'Lumen']
    },
    {
      id: 3,
      name: 'Audífonos inalámbricos',
      description: 'Para disfrutar de mi música favorita',
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=200',
      category: 'tecnologia',
      price: '$1,500 - $2,500',
      stores: ['Apple', 'Best Buy', 'Amazon']
    },
    {
      id: 4,
      name: 'Boletos para concierto',
      description: 'Me encantaría asistir a algún concierto de mi artista favorito',
      image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=200',
      category: 'experiencias',
      price: '$800 - $2,000',
      stores: ['Ticketmaster']
    },
    {
      id: 5,
      name: 'Lámpara decorativa',
      description: 'Una lámpara bonita para mi habitación',
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=200',
      category: 'decoracion',
      price: '$600 - $1,000',
      stores: ['IKEA', 'Liverpool']
    },
    {
      id: 6,
      name: 'Smartwatch',
      description: 'Para monitorear actividad física y recibir notificaciones',
      image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=200',
      category: 'tecnologia',
      price: '$2,000 - $4,000',
      stores: ['Apple', 'Samsung', 'Best Buy']
    }
  ];
  
  const filteredGifts = selectedCategory === 'all' 
    ? gifts 
    : gifts.filter(gift => gift.category === selectedCategory);
  
  return (
    <div className="bg-white/95 rounded-xl shadow-lg p-6 border border-primary/10">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-script text-primary mb-2">Mesa de Regalos</h3>
        <p className="font-serif text-gray-600">
          Si deseas hacerme un regalo, aquí hay algunas ideas que me encantarían.
          Tu presencia es el mejor regalo, pero si insistes, estas son algunas sugerencias.
        </p>
      </div>
      
      <div className="mb-6 flex flex-wrap gap-2 justify-center">
        {giftCategories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full font-serif text-sm transition-colors ${
              selectedCategory === category.id
                ? 'bg-primary text-white'
                : 'bg-primary/10 text-primary hover:bg-primary/20'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredGifts.map(gift => (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden bg-primary/5">
                <img 
                  src={gift.image} 
                  alt={gift.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary mb-2 font-nav">
                  {giftCategories.find(c => c.id === gift.category)?.name}
                </span>
                <h4 className="font-script text-xl text-primary mb-1">{gift.name}</h4>
                <p className="text-gray-600 text-sm mb-3 font-serif">{gift.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="text-primary font-serif font-semibold">{gift.price}</div>
                  <div className="text-xs text-gray-500">
                    {gift.stores.join(' · ')}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <div className="mt-8 border-t border-gray-100 pt-6 text-center">
        <p className="text-gray-500 font-serif text-sm italic">
          Estos son solo sugerencias. Cualquier regalo será apreciado, pero tu presencia es lo más importante.
        </p>
      </div>
    </div>
  );
};

export default GiftRegistry;
