
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import DispatchesPage from "./pages/dispatches";
import ChangelogPage from "./pages/changelog";
import DocumentationPage from "./pages/documentation";
import NotFound from "./pages/NotFound";
import ImprintsIndex from "./pages/imprints/index";
import SigilStudiesIndex from "./pages/imprints/sigil-studies/index";
import ActivateIndex from "./pages/imprints/activate/index";
import TechCraftIndex from "./pages/imprints/techcraft/index";
import InterfacePoeticsIndex from "./pages/imprints/interface-poetics/index";
import SubscribePage from "./pages/subscribe";
import DispatchDetail from "./pages/DispatchDetail";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/dispatches" element={<DispatchesPage />} />
            <Route path="/changelog" element={<ChangelogPage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
            <Route path="/subscribe" element={<SubscribePage />} />
            <Route path="/imprints" element={<ImprintsIndex />} />
            <Route path="/imprints/activate" element={<ActivateIndex />} />
            <Route path="/imprints/activate/:slug" element={<DispatchDetail />} />
            <Route path="/imprints/techcraft" element={<TechCraftIndex />} />
            <Route path="/imprints/techcraft/:slug" element={<DispatchDetail />} />
            <Route path="/imprints/interface-poetics" element={<InterfacePoeticsIndex />} />
            <Route path="/imprints/interface-poetics/:slug" element={<DispatchDetail />} />
            <Route path="/imprints/sigil-studies" element={<SigilStudiesIndex />} />
            <Route path="/imprints/sigil-studies/:slug" element={<DispatchDetail />} />
            <Route path="/imprints/spa" element={<ImprintsIndex />} />
            <Route path="/imprints/spa/:slug" element={<DispatchDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
