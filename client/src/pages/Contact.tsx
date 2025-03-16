import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="bg-[#0c0e0c] text-white font-sans antialiased">
      <Navbar />
      <div className="py-16 bg-[#0d0f0d] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Get In <span className="text-[#00ff4c]">Touch</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to start your digital journey? Contact us today for a free consultation
            </p>
          </div>
        </div>
      </div>
      <ContactSection />
      {typeof Footer !== 'undefined' && <Footer />}
    </div>
  );
};

export default ContactPage;