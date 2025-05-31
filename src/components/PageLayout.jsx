import React from 'react';

const PageLayout = ({ 
  title, 
  subtitle, 
  children, 
  showDivider = true,
  className = "",
  containerClassName = ""
}) => {
  return (
    <div className={`min-h-screen ${className}`}>
      <div className={`container-responsive desktop-section tablet-section mobile-section ${containerClassName}`}>
        <div className="content-max-width">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="font-script text-6xl md:text-7xl lg:text-8xl xl:text-9xl ultra-wide-title mobile-title font-bold text-primary mb-3">
              {title}
            </h1>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary-light italic">
              {subtitle}
            </p>
            {showDivider && (
              <div className="flex justify-center mt-6">
                <div className="w-32 md:w-48 lg:w-64 h-1 bg-primary rounded-full"></div>
              </div>
            )}
          </div>

          {/* Content */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout; 