import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WhatsAppProvider } from "@/contexts/WhatsAppContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { LeadPopup } from "@/components/LeadPopup";
import SiteLayout from "@/components/layout/SiteLayout";
import PageLoader from "@/components/PageLoader";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";

import Founder from "./pages/Founder";

import Testimonials from "./pages/Testimonials";
import GalleryInsights from "./pages/GalleryInsights";
import Placements from "./pages/Placements";
import Franchise from "./pages/Franchise";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <WhatsAppProvider>
          <PageLoader />
          <SiteLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:slug" element={<CourseDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/founder" element={<Founder />} />
              
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/gallery-insights" element={<GalleryInsights />} />
              <Route path="/gallery" element={<GalleryInsights />} />
              <Route path="/blog" element={<GalleryInsights />} />
              <Route path="/placements" element={<Placements />} />
              <Route path="/franchise" element={<Franchise />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />

            </Routes>
          </SiteLayout>
          <FloatingWhatsApp />
          <LeadPopup />
        </WhatsAppProvider>
      </BrowserRouter>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
