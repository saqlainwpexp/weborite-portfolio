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

function HomePage() {
  return (
    <div className="bg-[#0c0e0c] text-white font-sans antialiased">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <CtaSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={HomePage} />
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
