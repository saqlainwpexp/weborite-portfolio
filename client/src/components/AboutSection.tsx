import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, 100]);
  
  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      description: "Expert in digital strategy with 12+ years of industry experience.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTIxNTEyOyIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxYTFkMWE7IiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9InVybCgjZ3JhZDEpIiByeD0iMTAwIiByeT0iMTAwIi8+CiAgICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iNDAiIGZpbGw9IiMwMGZmNGMiIG9wYWNpdHk9IjAuMSIvPgogICAgPHBhdGggZD0iTTY1LDEzMCBDNjUsMTAwIDEzNSwxMDAgMTM1LDEzMCBMMTM1LDE2MCBDMTM1LDE2MCA2NSwxNjAgNjUsMTYwIFoiIGZpbGw9IiMwMGZmNGMiIG9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4="
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      description: "Award-winning designer specializing in UI/UX and brand identity.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTIxNTEyOyIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxYTFkMWE7IiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9InVybCgjZ3JhZDEpIiByeD0iMTAwIiByeT0iMTAwIi8+CiAgICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iNDAiIGZpbGw9IiMwMGZmNGMiIG9wYWNpdHk9IjAuMSIvPgogICAgPHBhdGggZD0iTTY1LDEzMCBDNjUsMTAwIDEzNSwxMDAgMTM1LDEzMCBMMTM1LDE2MCBDMTM1LDE2MCA2NSwxNjAgNjUsMTYwIFoiIGZpbGw9IiMwMGZmNGMiIG9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4="
    },
    {
      name: "David Lee",
      role: "SEO Specialist",
      description: "Data-driven SEO expert with expertise in local and technical SEO.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTIxNTEyOyIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxYTFkMWE7IiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9InVybCgjZ3JhZDEpIiByeD0iMTAwIiByeT0iMTAwIi8+CiAgICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iNDAiIGZpbGw9IiMwMGZmNGMiIG9wYWNpdHk9IjAuMSIvPgogICAgPHBhdGggZD0iTTY1LDEzMCBDNjUsMTAwIDEzNSwxMDAgMTM1LDEzMCBMMTM1LDE2MCBDMTM1LDE2MCA2NSwxNjAgNjUsMTYwIFoiIGZpbGw9IiMwMGZmNGMiIG9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4="
    },
    {
      name: "Emily Johnson",
      role: "Content Strategist",
      description: "Storyteller and content expert with a background in journalism.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTIxNTEyOyIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxYTFkMWE7IiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9InVybCgjZ3JhZDEpIiByeD0iMTAwIiByeT0iMTAwIi8+CiAgICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iNDAiIGZpbGw9IiMwMGZmNGMiIG9wYWNpdHk9IjAuMSIvPgogICAgPHBhdGggZD0iTTY1LDEzMCBDNjUsMTAwIDEzNSwxMDAgMTM1LDEzMCBMMTM1LDE2MCBDMTM1LDE2MCA2NSwxNjAgNjUsMTYwIFoiIGZpbGw9IiMwMGZmNGMiIG9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4="
    }
  ];
  
  const timelineItems = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Pixel Pulse was established with a mission to help businesses thrive in the digital landscape."
    },
    {
      year: "2016",
      title: "Service Expansion",
      description: "Expanded our services to include SEO and social media management."
    },
    {
      year: "2018",
      title: "Team Growth",
      description: "Grew our team to 15 specialists across all digital marketing disciplines."
    },
    {
      year: "2020",
      title: "International Clients",
      description: "Started working with clients across Europe, Asia, and North America."
    },
    {
      year: "2023",
      title: "Award Recognition",
      description: "Recognized as one of the top digital agencies in the industry."
    }
  ];
  
  return (
    <section id="about" className="py-24 bg-[#0d0f0d]" ref={containerRef}>
      <motion.div 
        className="container mx-auto px-6"
        style={{ opacity, y }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            className="text-[#00ff4c] text-sm uppercase tracking-wider font-medium block mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Who We Are
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About <span className="text-[#00ff4c]">Our Agency</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Driving digital transformation with innovative strategies and creative solutions since 2014
          </motion.p>
        </motion.div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold mb-6">Our <span className="text-[#00ff4c]">Story</span></h3>
            <div className="space-y-6 text-gray-300">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Pixel Pulse was born from a simple vision: to help businesses thrive in an increasingly digital world. We believe that exceptional digital presence should be accessible to businesses of all sizes.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                What started as a small web design studio has evolved into a full-service digital agency. Today, we offer comprehensive solutions including web design, SEO optimization, social media management, and content creation.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Our approach combines data-driven strategies with creative excellence to deliver measurable results for our clients. We're not just service providers — we're partners in your digital journey.
              </motion.p>
            </div>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold mb-4">Our <span className="text-[#00ff4c]">Values</span></h4>
              <div className="grid grid-cols-2 gap-4">
                {["Innovation", "Excellence", "Integrity", "Collaboration"].map((value, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-2 h-2 bg-[#00ff4c] rounded-full"></div>
                    <span className="text-gray-300">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            {/* Timeline */}
            <h3 className="text-3xl font-bold mb-10">Our <span className="text-[#00ff4c]">Journey</span></h3>
            <div className="relative border-l-2 border-[#2c2e2c] pl-8 ml-4 space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="absolute -left-[41px] w-6 h-6 bg-[#121512] rounded-full border-2 border-[#00ff4c] flex items-center justify-center">
                    <motion.div 
                      className="w-2 h-2 bg-[#00ff4c] rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                  </div>
                  <div className="rounded-lg p-5 bg-[#121512] border border-[#2c2e2c] hover:border-[#00ff4c]/30 transition-colors duration-300">
                    <span className="text-[#00ff4c] font-bold text-lg">{item.year}</span>
                    <h4 className="text-white font-semibold text-xl mt-1 mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <motion.h3 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Meet Our <span className="text-[#00ff4c]">Team</span>
            </motion.h3>
            <motion.p 
              className="text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Our talented experts are passionate about helping businesses succeed in the digital realm
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="group bg-[#121512] rounded-lg overflow-hidden border border-[#2c2e2c] hover:border-[#00ff4c]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden h-60">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-[#0c0e0c] to-transparent opacity-70"
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 0.7 }}
                  />
                </div>
                
                <div className="p-5">
                  <h4 className="text-white font-semibold text-xl group-hover:text-[#00ff4c] transition-colors duration-300">{member.name}</h4>
                  <p className="text-[#00ff4c] text-sm font-medium mt-1 mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                  
                  {/* Social Media Icons */}
                  <div className="mt-5 flex space-x-3">
                    {["linkedin", "twitter", "email"].map((social, i) => (
                      <motion.a 
                        key={i}
                        href="#" 
                        className="w-8 h-8 rounded-full bg-[#181a18] flex items-center justify-center text-gray-400 hover:text-[#00ff4c] hover:bg-[#181a18]/80 transition-colors duration-300"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="w-4 h-4">
                          {social === "linkedin" && (
                            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            </svg>
                          )}
                          {social === "twitter" && (
                            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                            </svg>
                          )}
                          {social === "email" && (
                            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                          )}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;