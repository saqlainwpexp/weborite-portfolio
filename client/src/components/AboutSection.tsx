import { motion } from "framer-motion";

const AboutSection = () => {
  const stats = [
    { label: "Projects Completed", value: 600 },
    { label: "Happy Clients", value: 250 },
    { label: "Team Members", value: 35 },
    { label: "Awards Won", value: 28 }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23282828'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%23333'/%3E%3Cpath d='M40,150 C40,120 160,120 160,150 L160,180 L40,180 Z' fill='%23333'/%3E%3C/svg%3E",
      bio: "10+ years experience in digital strategy and web development"
    },
    {
      name: "Alex Chen",
      role: "Creative Director",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23282828'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%23333'/%3E%3Cpath d='M40,150 C40,120 160,120 160,150 L160,180 L40,180 Z' fill='%23333'/%3E%3C/svg%3E",
      bio: "Award-winning designer with expertise in UI/UX and branding"
    },
    {
      name: "Michael Taylor",
      role: "Head of Development",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23282828'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%23333'/%3E%3Cpath d='M40,150 C40,120 160,120 160,150 L160,180 L40,180 Z' fill='%23333'/%3E%3C/svg%3E",
      bio: "Full-stack developer specializing in scalable web applications"
    },
    {
      name: "Lisa Zhang",
      role: "Marketing Strategist",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23282828'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%23333'/%3E%3Cpath d='M40,150 C40,120 160,120 160,150 L160,180 L40,180 Z' fill='%23333'/%3E%3C/svg%3E",
      bio: "Digital marketing expert with focus on growth and conversion"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 px-6 bg-[#0c0e0c]">
      <div className="container mx-auto">
        {/* Story Section */}
        <motion.div 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our <span className="text-[#00ff4c]">Story</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-300 mb-6">
                Founded in 2015, Pixel Pulse began with a simple mission: to create digital experiences that empower businesses to thrive in an ever-evolving digital landscape.
              </p>
              <p className="text-gray-300 mb-6">
                What started as a small team of passionate developers and designers has grown into a full-service digital agency, helping clients around the world transform their digital presence.
              </p>
              <p className="text-gray-300">
                Our approach combines technical expertise with creative innovation, ensuring each project we deliver exceeds expectations and drives real business results.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-[#181a18] rounded-lg overflow-hidden border border-[#00ff4c] border-opacity-20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.svg 
                    className="w-20 h-20 text-[#00ff4c]" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    initial={{ opacity: 0.3, scale: 0.9 }}
                    animate={{ 
                      opacity: [0.3, 0.6, 0.3], 
                      scale: [0.9, 1.1, 0.9] 
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 8L16 12L10 16V8Z" fill="currentColor" />
                  </motion.svg>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#00ff4c] opacity-60"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#00ff4c] opacity-60"></div>
            </div>
          </div>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-box rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <motion.h3 
                  className="text-4xl font-bold text-[#00ff4c] mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    delay: index * 0.1 + 0.5 
                  }}
                >
                  {stat.value}+
                </motion.h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Team */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Meet Our <span className="text-[#00ff4c]">Team</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={member.name}
                className="bg-[#181a18] rounded-lg overflow-hidden border border-[#00ff4c] border-opacity-10 transition-all duration-300 hover:border-opacity-30 hover:shadow-lg hover:shadow-[#00ff4c]/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-[#00ff4c] text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <motion.button 
              className="bg-[#181a18] hover:bg-[#00ff4c] hover:text-[#0c0e0c] transition-colors duration-300 text-white font-medium py-3 px-8 rounded-full inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Join Our Team
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;