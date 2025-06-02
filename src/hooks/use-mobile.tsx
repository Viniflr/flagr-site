// src/hooks/use-mobile.tsx
import useResponsive from './useResponsive';

// Opção 1: Retorna apenas o valor booleano
const useMobile = (): boolean => {
  const { isMobile } = useResponsive();
  return isMobile;
};

// Opção 2: Retorna o objeto completo (se necessário)
const useMobileExtended = () => {
  return useResponsive();
};

export default useMobile;
// export { useMobileExtended } se precisar;