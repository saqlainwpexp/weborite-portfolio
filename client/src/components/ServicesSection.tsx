import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LucideMonitor, LucideSearch, LucidePencil, LucideSpeaker } from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const services = [
    {
      icon: LucideMonitor,
      title: "Web Design",
      description: "Custom-crafted, responsive websites that captivate visitors and drive conversions.",
    },
    {
      icon: LucideSearch,
      title: "SEO Services",
      description: "Data-driven strategies to increase your visibility in search results and drive organic traffic.",
    },
    {
      icon: LucideSpeaker,
      title: "Social Media",
      description: "Engage your audience with strategic content that builds brand loyalty and drives growth.",
    },
    {
      icon: LucidePencil,
      title: "Content Writing",
      description: "Compelling, SEO-optimized content that tells your story and connects with your audience.",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0d0f0d] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-gradient-to-r from-[#00ff4c]/5 to-transparent blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            ease: "linear" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-[5%] w-64 h-64 rounded-full bg-gradient-to-r from-[#00ff4c]/10 to-transparent blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.span 
            className="text-[#00ff4c] text-sm uppercase tracking-wider font-medium block mb-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            What We Offer
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our <span className="text-[#00ff4c]">Services</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Comprehensive digital solutions to help your business grow and thrive in the digital landscape
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-[#121512] p-8 rounded-lg border border-[#1c1f1c] relative group overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 15px 30px -5px rgba(0, 255, 76, 0.3)",
                scale: 1.02,
                borderColor: "rgba(0, 255, 76, 0.4)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff4c]/0 via-[#00ff4c]/0 to-[#00ff4c]/0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 group-hover:via-[#00ff4c]/20 transition-all duration-700 -z-10"></div>
              
              {/* Corner glow */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#00ff4c] rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
              
              {/* Bottom light effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#00ff4c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                {/* Icon with animated glow */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-[#00ff4c]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
                  <div className="w-16 h-16 flex items-center justify-center bg-[#181a18] border border-[#242824] rounded-lg relative overflow-hidden group-hover:border-[#00ff4c]/50 group-hover:shadow-[0_0_15px_rgba(0,255,76,0.5)] transition-all duration-500">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#00ff4c]/10 via-transparent to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
                    />
                    <service.icon className="w-7 h-7 text-[#00ff4c]" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-[#00ff4c] transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                
                <motion.div 
                  className="mt-6 text-[#00ff4c] text-sm font-medium flex items-center group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="group-hover:underline">Learn More</span>
                  <motion.svg 
                    className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-200" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                  >
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </motion.svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Ready to transform your digital presence?</h3>
          <motion.a 
            href="#contact" 
            className="inline-flex items-center rounded-full bg-[#00ff4c]/10 border border-[#00ff4c]/30 text-[#00ff4c] px-8 py-4 font-medium transition-all hover:bg-[#00ff4c]/20 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button glow effect */}
            <div className="absolute -inset-1 bg-[#00ff4c]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            
            <span className="relative z-10">Get a Free Consultation</span>
            <svg className="w-5 h-5 ml-2 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;