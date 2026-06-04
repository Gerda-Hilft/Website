import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import CloudPricing from "./pages/CloudPricing";
import ServicePage from "./pages/ServicePage";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cloud-pricing" element={<CloudPricing />} />
            <Route path="/it-support" element={<ServicePage serviceKey="it-support" />} />
            <Route path="/cloud-speicher" element={<ServicePage serviceKey="cloud-speicher" />} />
            <Route path="/hardware-reparatur" element={<ServicePage serviceKey="hardware-reparatur" />} />
            <Route path="/kahoot-erstellung" element={<ServicePage serviceKey="kahoot-erstellung" />} />
            <Route path="/website-erstellung" element={<ServicePage serviceKey="website-erstellung" />} />
            <Route path="/installation-betriebssystem" element={<ServicePage serviceKey="installation-betriebssystem" />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
