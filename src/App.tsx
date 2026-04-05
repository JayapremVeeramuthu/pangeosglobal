import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import CategoryProducts from "./pages/CategoryProducts";

// About Pages
import AboutIntent from "./pages/about/AboutIntent";
import AboutVision from "./pages/about/AboutVision";
import AboutMission from "./pages/about/AboutMission";
import AboutObjectives from "./pages/about/AboutObjectives";
import AboutLeadership from "./pages/about/AboutLeadership";
import QualityPolicy from "./pages/about/QualityPolicy";
import SocialResponsibility from "./pages/about/SocialResponsibility";

// Other Pages
import Brands from "./pages/Brands";
import BrandDetail from "./pages/BrandDetail";
import CustomizedWear from "./pages/CustomizedWear";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Brand Routes */}
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/:brandSlug" element={<BrandDetail />} />
          

          {/* ✅ CATEGORY ROUTE (MAIN FIX) */}
          <Route path="/categories/:category" element={<CategoryProducts />} />

          {/* Customized Wear */}
          <Route path="/customized-wear" element={<CustomizedWear />} />
          <Route path="/customized-wear/:category" element={<CustomizedWear />} />
          
          {/* About Routes */}
          <Route path="/about" element={<AboutIntent />} />
          <Route path="/about/intent" element={<AboutIntent />} />
          <Route path="/about/vision" element={<AboutVision />} />
          <Route path="/about/mission" element={<AboutMission />} />
          <Route path="/about/objectives" element={<AboutObjectives />} />
          <Route path="/about/leadership" element={<AboutLeadership />} />
          <Route path="/about/quality-policy" element={<QualityPolicy />} />
          <Route path="/about/social-responsibility" element={<SocialResponsibility />} />
          
          {/* Other Pages */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;