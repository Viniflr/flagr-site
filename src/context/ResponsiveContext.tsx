// src/context/ResponsiveContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import useResponsive from '../hooks/useResponsive';

const ResponsiveContext = createContext<ReturnType<typeof useResponsive> | null>(null);

export const ResponsiveProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const responsive = useResponsive();
  return (
    <ResponsiveContext.Provider value={responsive}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsiveContext = () => {
  const context = useContext(ResponsiveContext);
  if (!context) {
    throw new Error('useResponsiveContext must be used within a ResponsiveProvider');
  }
  return context;
};