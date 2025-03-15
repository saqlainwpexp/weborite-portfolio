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
      features: ["Responsive Design", "UX/UI Optimization", "E-commerce Solutions", "CMS Integration"]
    },
    {
      icon: LucideSearch,
      title: "SEO Services",
      description: "Data-driven strategies to increase your visibility in search results and drive organic traffic.",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "SEO Audits"]
    },
    {
      icon: LucideSpeaker,
      title: "Social Media",
      description: "Engage your audience with strategic content that builds brand loyalty and drives growth.",
      features: ["Platform Strategy", "Content Calendar", "Community Management", "Paid Campaigns"]
    },
    {
      icon: LucidePencil,
      title: "Content Writing",
      description: "Compelling, SEO-optimized content that tells your story and connects with your audience.",
      features: ["Blog Posts", "Website Copy", "Email Campaigns", "Product Descriptions"]
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
              className="bg-[#121512] p-6 rounded-lg border border-[#1c1f1c] relative group"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(0, 255, 76, 0.15)",
                scale: 1.02,
                borderColor: "rgba(0, 255, 76, 0.4)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Background hover effect */}
              <motion.div 
                className="absolute -inset-0.5 bg-gradient-to-r from-[#00ff4c]/0 to-[#00ff4c]/0 rounded-lg blur opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                {/* Icon with animated border */}
                <div className="mb-5 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00ff4c]/20 to-transparent rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-14 h-14 flex items-center justify-center bg-[#181a18] border border-[#242824] rounded-lg relative overflow-hidden group-hover:border-[#00ff4c]/30 transition-colors duration-300">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#00ff4c]/10 via-transparent to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
                    />
                    <service.icon className="w-6 h-6 text-[#00ff4c]" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#00ff4c] transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400 mb-5">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center text-sm text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ x: 5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      <span className="w-1.5 h-1.5 bg-[#00ff4c] rounded-full mr-2"></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button 
                  className="mt-6 text-[#00ff4c] text-sm font-medium flex items-center group-hover:underline"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
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
            className="inline-flex items-center rounded-full bg-[#00ff4c]/10 border border-[#00ff4c]/30 text-[#00ff4c] px-8 py-4 font-medium transition-all hover:bg-[#00ff4c]/20"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 76, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Consultation
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;