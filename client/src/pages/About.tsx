import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import SimpleFooter from "@/components/SimpleFooter";

const AboutPage = () => {
  return (
    <div className="bg-[#0c0e0c] text-white font-sans antialiased">
      <Navbar />
      <div className="py-16 bg-[#0d0f0d] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              About <span className="text-[#00ff4c]">Us</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Learn about our journey, mission, and the team behind our digital success stories
            </p>
          </div>
        </div>
      </div>
      <AboutSection />
      <CtaSection />
      <SimpleFooter />
    </div>
  );
};

export default AboutPage;