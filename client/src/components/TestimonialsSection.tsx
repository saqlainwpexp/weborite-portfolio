import { motion } from "framer-motion";
import { useRef, useState } from "react";

const TestimonialsSection = () => {
  const containerRef = useRef(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "TechVision Inc",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23282828'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%23333'/%3E%3Cpath d='M40,150 C40,120 160,120 160,150 L160,180 L40,180 Z' fill='%23333'/%3E%3C/svg%3E",
      quote: "Working with this team has transformed our digital presence. Their expertise in web design and SEO has resulted in a 200% increase in our organic traffic.",
      rating: 5
    },
    {
      id: 2,
      name: "David Chen",
      role: "CEO",
      company: "InnovateX",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23282828'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%23333'/%3E%3Cpath d='M40,150 C40,120 160,120 160,150 L160,180 L40,180 Z' fill='%23333'/%3E%3C/svg%3E",
      quote: "The social media strategy they developed has helped us build a strong community of engaged followers. Our brand awareness has never been stronger.",
      rating: 5
    },
    {
      id: 3,
      name: "Sarah Thompson",
      role: "Content Manager",
      company: "Global Media",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23282828'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%23333'/%3E%3Cpath d='M40,150 C40,120 160,120 160,150 L160,180 L40,180 Z' fill='%23333'/%3E%3C/svg%3E",
      quote: "Their content writing team consistently delivers high-quality, engaging content that resonates with our audience and drives conversions.",
      rating: 5
    },
    {
      id: 4,
      name: "Michael Chang",
      role: "Product Manager",
      company: "FutureTech",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23282828'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%23333'/%3E%3Cpath d='M40,150 C40,120 160,120 160,150 L160,180 L40,180 Z' fill='%23333'/%3E%3C/svg%3E",
      quote: "The UI/UX design work exceeded our expectations. They truly understand how to create intuitive and engaging user experiences.",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "E-commerce Director",
      company: "Retail Plus",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23282828'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%23333'/%3E%3Cpath d='M40,150 C40,120 160,120 160,150 L160,180 L40,180 Z' fill='%23333'/%3E%3C/svg%3E",
      quote: "Our online store's performance has improved dramatically since implementing their recommended optimizations.",
      rating: 5
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Startup Founder",
      company: "InnovateLab",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23282828'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%23333'/%3E%3Cpath d='M40,150 C40,120 160,120 160,150 L160,180 L40,180 Z' fill='%23333'/%3E%3C/svg%3E",
      quote: "Their team helped us launch our MVP faster than expected, with a polished product that received great feedback.",
      rating: 5
    },
    {
      id: 7,
      name: "Rachel Kim",
      role: "Brand Manager",
      company: "StyleHub",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23282828'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%23333'/%3E%3Cpath d='M40,150 C40,120 160,120 160,150 L160,180 L40,180 Z' fill='%23333'/%3E%3C/svg%3E",
      quote: "The brand identity they created perfectly captures our vision and has helped us stand out in a competitive market.",
      rating: 5
    },
    {
      id: 8,
      name: "Thomas Brown",
      role: "Operations Director",
      company: "LogiTech",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23282828'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%23333'/%3E%3Cpath d='M40,150 C40,120 160,120 160,150 L160,180 L40,180 Z' fill='%23333'/%3E%3C/svg%3E",
      quote: "Their custom software solution has streamlined our operations and improved efficiency across all departments.",
      rating: 5
    },
    {
      id: 9,
      name: "Sophie Martinez",
      role: "Digital Marketing Lead",
      company: "GrowthCo",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23282828'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%23333'/%3E%3Cpath d='M40,150 C40,120 160,120 160,150 L160,180 L40,180 Z' fill='%23333'/%3E%3C/svg%3E",
      quote: "The digital marketing campaign they developed delivered exceptional ROI and helped us achieve our growth targets.",
      rating: 5
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
    <section 
      id="testimonials" 
      className="py-24 bg-[#0c0e0c] relative overflow-hidden"
      onMouseLeave={() => setHoveredId(null)}
    >
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

      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.span 
            className="text-[#00ff4c] text-sm uppercase tracking-wider font-medium block mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Client Feedback
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            What Our <span className="text-[#00ff4c]">Clients</span> Say
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Don't just take our word for it - hear from some of our satisfied clients about their experience working with us
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className={`bg-[#181a18] p-8 rounded-lg border border-[#1c1f1c] relative group overflow-hidden transition-all duration-300 ${
                hoveredId === null ? '' : 
                hoveredId === testimonial.id ? 'scale-105 z-10' : 'blur-[5px] opacity-20 scale-95'
              }`}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(testimonial.id)}
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
              
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <motion.svg 
                  className="w-8 h-8 text-[#00ff4c] opacity-20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  initial={{ scale: 0.8, rotate: -10 }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </motion.svg>
              </div>

              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-5 h-5 text-[#00ff4c]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </motion.svg>
                ))}
              </div>

              {/* Quote Text */}
              <motion.p 
                className="text-gray-300 mb-6 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                "{testimonial.quote}"
              </motion.p>

              {/* Author Info */}
              <div className="flex items-center">
                <motion.div 
                  className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-[#00ff4c]/30"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <motion.h4 
                    className="font-semibold text-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {testimonial.name}
                  </motion.h4>
                  <motion.p 
                    className="text-gray-400 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {testimonial.role} at {testimonial.company}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 