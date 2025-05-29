import React, { useState, useEffect } from 'react';

const ResponsiveTest = () => {
  const [screenInfo, setScreenInfo] = useState({
    width: 0,
    height: 0,
    breakpoint: ''
  });

  useEffect(() => {
    const updateScreenInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      let breakpoint = '';
      if (width < 640) breakpoint = 'xs (< 640px)';
      else if (width < 768) breakpoint = 'sm (640px - 767px)';
      else if (width < 1024) breakpoint = 'md/tablet (768px - 1023px)';
      else if (width < 1280) breakpoint = 'lg/desktop (1024px - 1279px)';
      else if (width < 1536) breakpoint = 'xl (1280px - 1535px)';
      else breakpoint = '2xl/ultra-wide (1536px+)';

      setScreenInfo({ width, height, breakpoint });
    };

    updateScreenInfo();
    window.addEventListener('resize', updateScreenInfo);
    return () => window.removeEventListener('resize', updateScreenInfo);
  }, []);

  return (
    <div className="fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg text-sm font-mono z-50 no-print">
      <div className="space-y-1">
        <div>📱 {screenInfo.width} x {screenInfo.height}</div>
        <div>🖥️ {screenInfo.breakpoint}</div>
        <div className="border-t border-white/20 pt-2 mt-2">
          <div className="text-xs space-y-1">
            <div className="block sm:hidden">📱 Mobile</div>
            <div className="hidden sm:block md:hidden">📱 Small</div>
            <div className="hidden md:block lg:hidden">📱 Tablet</div>
            <div className="hidden lg:block xl:hidden">🖥️ Desktop</div>
            <div className="hidden xl:block 2xl:hidden">🖥️ Large</div>
            <div className="hidden 2xl:block">🖥️ Ultra-wide</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTest; 