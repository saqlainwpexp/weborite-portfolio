import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CtaSection from "@/components/CtaSection";
import CursorEffect from "@/components/CursorEffect";
import Navbar from "@/components/Navbar";
import SimpleFooter from "@/components/SimpleFooter";
import ServicesPage from "@/pages/Services";
import PortfolioPage from "@/pages/Portfolio";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import BlogPage from "@/pages/Blog";
import CreateBlog from "@/pages/CreateBlog";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuotePage from "@/pages/QuotePage";
import Admin from "@/pages/Admin";

function HomePage() {
  return (
    <div className="bg-[#0c0e0c] text-white font-sans antialiased">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CtaSection />
      <AboutSection />
      <ContactSection />
      <SimpleFooter />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      {/* Main routes */}
      <Route path="/" component={HomePage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/create" component={CreateBlog} />
      <Route path="/quote" component={QuotePage} />
      {/* Admin route */}
      <Route path="/admin" component={Admin} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <CursorEffect />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;