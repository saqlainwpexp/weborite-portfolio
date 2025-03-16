import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import SimpleFooter from "@/components/SimpleFooter";

export default function NotFound() {
  return (
    <div className="bg-[#0c0e0c] text-white font-sans antialiased min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20">
        <motion.div 
          className="text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-[#00ff4c] text-9xl font-bold mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
          >
            404
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Page Not Found
          </h1>
          
          <p className="text-gray-400 max-w-md mx-auto mb-10">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="bg-[#00ff4c] text-[#0c0e0c] px-8 py-3 rounded-full font-medium inline-block shadow-lg shadow-[#00ff4c]/20">
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <SimpleFooter />
    </div>
  );
}
