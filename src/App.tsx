
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OracleCrossTalkPage from "./pages/imprints/sigil-studies/oracle-crosstalk";
import SystemsThinkingPage from "./pages/imprints/spa/systems-thinking";
import TshirtRulePage from "./pages/imprints/spa/tshirt-rule";
import ImprintsPage from "./pages/imprints";
import AboutPage from "./pages/about";
import SubscribePage from "./pages/subscribe";
import ContactPage from "./pages/contact";
import DispatchesPage from "./pages/dispatches";

// Create a React Query client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/imprints" element={<ImprintsPage />} />
          <Route path="/imprints/sigil-studies/oracle-crosstalk" element={<OracleCrossTalkPage />} />
          <Route path="/imprints/spa/systems-thinking" element={<SystemsThinkingPage />} />
          <Route path="/imprints/spa/tshirt-rule" element={<TshirtRulePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dispatches" element={<DispatchesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
