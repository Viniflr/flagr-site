import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Plano from "./pages/planos";
import { ResponsiveProvider } from './context/ResponsiveContext'; // Importe o ResponsiveProvider

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        {/* Adicione o ResponsiveProvider aqui */}
        <ResponsiveProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/second" element={<Plano />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ResponsiveProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;