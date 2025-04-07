import React from "react";
import { motion } from "framer-motion";
import QuoteSection from "../components/QuoteSection";
import SimpleFooter from "../components/SimpleFooter";
import Navbar from "../components/Navbar";

export default function QuotePage() {
  return (
    <div className="bg-[#0c0e0c] text-white font-sans antialiased">
      <Navbar />
      <div className="py-16 bg-[#0d0f0d] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Get a <span className="text-[#00ff4c]">Quote</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that fits your needs and budget
            </p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <QuoteSection />

      {/* Footer */}
      <SimpleFooter />
    </div>
  );
} 