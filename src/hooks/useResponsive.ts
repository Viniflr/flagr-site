// src/hooks/useResponsive.ts
import { useState, useEffect } from 'react';

interface ResponsiveInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  screenWidth: number;
  screenHeight: number;
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

const useResponsive = (): ResponsiveInfo => {
  const [responsiveInfo, setResponsiveInfo] = useState<ResponsiveInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: false,
    screenWidth: 0,
    screenHeight: 0,
    breakpoint: 'md'
  });

  useEffect(() => {
    const updateResponsiveInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Definições de breakpoint
      const isMobile = width < 576;
      const isTablet = width >= 576 && width < 992;
      const isDesktop = width >= 992 && width < 1440;
      const isLargeDesktop = width >= 1440;

      // Determinar breakpoint atual
      let breakpoint: ResponsiveInfo['breakpoint'] = 'md';
      if (width < 576) breakpoint = 'xs';
      else if (width < 768) breakpoint = 'sm';
      else if (width < 992) breakpoint = 'md';
      else if (width < 1200) breakpoint = 'lg';
      else if (width < 1440) breakpoint = 'xl';
      else breakpoint = 'xxl';

      setResponsiveInfo({
        isMobile,
        isTablet,
        isDesktop,
        isLargeDesktop,
        screenWidth: width,
        screenHeight: height,
        breakpoint
      });
    };

    // Atualizar imediatamente e adicionar listener
    updateResponsiveInfo();
    window.addEventListener('resize', updateResponsiveInfo);

    // Cleanup
    return () => window.removeEventListener('resize', updateResponsiveInfo);
  }, []);

  return responsiveInfo;
};

export default useResponsive;