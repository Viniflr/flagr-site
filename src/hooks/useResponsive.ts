// src/hooks/useResponsive.ts
import { useState, useEffect, useCallback } from 'react';

// Tipos para breakpoints e orientação
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type Orientation = 'portrait' | 'landscape';

// Definição de breakpoints (em pixels)
const BREAKPOINTS: Record<Breakpoint, number> = {
  xs: 0,      // Extra small devices (phones)
  sm: 576,    // Small devices (phones landscape)
  md: 768,    // Medium devices (tablets)
  lg: 992,    // Large devices (desktops)
  xl: 1200,   // Extra large devices
  xxl: 1400   // Extra extra large
};

interface ResponsiveState {
  breakpoint: Breakpoint;
  orientation: Orientation;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isPortrait: boolean;
  isLandscape: boolean;
  width: number;
  height: number;
}

const useResponsive = () => {
  const [state, setState] = useState<ResponsiveState>({
    breakpoint: 'md',
    orientation: 'portrait',
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isPortrait: true,
    isLandscape: false,
    width: 0,
    height: 0
  });

  const calculateResponsiveState = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Determinar breakpoint
    let breakpoint: Breakpoint = 'md';
    if (width >= BREAKPOINTS.xxl) breakpoint = 'xxl';
    else if (width >= BREAKPOINTS.xl) breakpoint = 'xl';
    else if (width >= BREAKPOINTS.lg) breakpoint = 'lg';
    else if (width >= BREAKPOINTS.md) breakpoint = 'md';
    else if (width >= BREAKPOINTS.sm) breakpoint = 'sm';
    else breakpoint = 'xs';

    // Determinar orientação
    const orientation: Orientation = width > height ? 'landscape' : 'portrait';

    setState({
      breakpoint,
      orientation,
      isMobile: width < BREAKPOINTS.md,
      isTablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
      isDesktop: width >= BREAKPOINTS.lg,
      isPortrait: orientation === 'portrait',
      isLandscape: orientation === 'landscape',
      width,
      height
    });
  }, []);

  useEffect(() => {
    // Calcular estado inicial
    calculateResponsiveState();

    // Adicionar listener de redimensionamento
    window.addEventListener('resize', calculateResponsiveState);
    
    // Adicionar listener de mudança de orientação
    window.addEventListener('orientationchange', calculateResponsiveState);

    return () => {
      window.removeEventListener('resize', calculateResponsiveState);
      window.removeEventListener('orientationchange', calculateResponsiveState);
    };
  }, [calculateResponsiveState]);

  return state;
};

export default useResponsive;