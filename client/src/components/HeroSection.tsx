import { motion } from "framer-motion";
import Navbar from "./Navbar";
import StatBox from "./StatBox";
import SocialButton from "./SocialButton";

const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-[#0c0e0c] text-white font-sans antialiased min-h-screen">
      <div className="graffiti-bg min-h-screen relative">
        <div className="gradient-overlay min-h-screen">
          <Navbar />

          <motion.main 
            className="container mx-auto px-6 pt-20 pb-16 flex flex-col items-center justify-center text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              variants={fadeInUp}
            >
              <span className="text-white">Most liquid</span><br/>
              <span className="text-white">primary market</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-lg mb-10 max-w-xl"
              variants={fadeInUp}
            >
              Claim first access to the most<br/> important tokens in crypto
            </motion.p>
            
            {/* Social Media Icons */}
            <motion.div 
              className="flex items-center space-x-4 mb-20"
              variants={fadeInUp}
            >
              <SocialButton platform="telegram" href="#" />
              <SocialButton platform="twitter" href="#" />
              <SocialButton platform="discord" href="#" />
            </motion.div>
            
            {/* Statistics */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl"
              variants={staggerContainer}
            >
              <StatBox 
                value={15} 
                label="APY APR"
                suffix="x"
                graphPath="M0 20L20 15L40 22L60 5L80 10L100 2" 
              />
              
              <StatBox 
                value={200100} 
                label="Transactions"
                graphPath="M0 25L20 20L40 15L60 18L80 5L100 10" 
              />
              
              <StatBox 
                value={1} 
                label="Connected"
                prefix="$"
                suffix=" billion+"
                graphPath="M0 20L20 22L40 15L60 5L80 8L100 2" 
              />
            </motion.div>
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
