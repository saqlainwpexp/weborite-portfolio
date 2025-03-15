import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import StatBox from "./StatBox";
import SocialButton from "./SocialButton";
import ServicesSection from "./ServicesSection";
import PortfolioSection from "./PortfolioSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

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

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const titleWords = ["Digital", "Solutions", "That", "Drive", "Results"];

  return (
    <div className="bg-[#0c0e0c] text-white font-sans antialiased min-h-screen">
      <div className="graffiti-bg min-h-screen relative">
        <div className="gradient-overlay min-h-screen">
          <Navbar />

          <motion.main 
            className="container mx-auto px-6 pt-16 pb-16 flex flex-col items-center justify-center text-center relative min-h-[80vh]"
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
          >
            {/* Animated Background Elements */}
            <motion.div 
              className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-[#00ff4c]/10 to-transparent blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            
            <motion.div 
              className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#00ff4c]/10 to-transparent blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            
            {/* Title with Letter Animation */}
            <div className="mb-6 overflow-hidden">
              <motion.div 
                className="flex flex-wrap justify-center gap-x-4 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                variants={fadeInUp}
              >
                {titleWords.map((word, i) => (
                  <div key={i} className="overflow-hidden flex">
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={`${i}-${charIndex}`}
                        variants={{
                          hidden: { y: 100, opacity: 0 },
                          visible: { 
                            y: 0, 
                            opacity: 1,
                            transition: { 
                              delay: i * 0.1 + charIndex * 0.03,
                              duration: 0.5,
                              ease: [0.33, 1, 0.68, 1]
                            }
                          }
                        }}
                        className={charIndex === 0 && i === 0 ? "text-[#00ff4c]" : "text-white"}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
            
            <motion.p 
              className="text-gray-300 text-lg mb-10 max-w-xl"
              variants={fadeInUp}
            >
              Creating stunning websites, powerful SEO strategies, <br/> engaging social media, and compelling content
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-4 mb-20"
              variants={fadeInUp}
            >
              <motion.a 
                href="#contact" 
                className="bg-[#00ff4c] text-[#0c0e0c] px-8 py-3 rounded-full font-medium shadow-lg shadow-[#00ff4c]/20"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px 0 rgba(0, 255, 76, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
              
              <motion.a 
                href="#services" 
                className="border border-[#00ff4c] text-white px-8 py-3 rounded-full font-medium"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(0, 255, 76, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.a>
            </motion.div>
            
            {/* Social Media Icons */}
            <motion.div 
              className="flex items-center space-x-4 mb-12"
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
                value={500} 
                label="Projects Completed"
                suffix="+"
                graphPath="M0 20L20 15L40 22L60 5L80 10L100 2" 
              />
              
              <StatBox 
                value={98} 
                label="Client Satisfaction"
                suffix="%"
                graphPath="M0 25L20 20L40 15L60 18L80 5L100 10" 
              />
              
              <StatBox 
                value={10} 
                label="Years Experience"
                suffix="+"
                graphPath="M0 20L20 22L40 15L60 5L80 8L100 2" 
              />
            </motion.div>
            
            {/* Mouse Scroll Indicator */}
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <motion.div 
                className="w-8 h-12 border-2 border-[#00ff4c] rounded-full flex justify-center pt-2 mb-2"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div 
                  className="w-1 h-2 bg-[#00ff4c] rounded-full"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <motion.p 
                className="text-[#00ff4c] text-xs font-light"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Scroll Down
              </motion.p>
            </motion.div>
          </motion.main>
        </div>
      </div>
      
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default HeroSection;
