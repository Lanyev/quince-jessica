import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <motion.div
        className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
