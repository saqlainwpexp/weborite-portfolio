import { motion } from "framer-motion";

const CtaSection = () => {
  // Company logos
  const logos = [
    {
      id: "logo1",
      svg: (
        <svg className="h-8 md:h-10" viewBox="0 0 100 40" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 20C23 29.9411 29.9411 36 20 36C10.0589 36 4 29.9411 4 20C4 10.0589 10.0589 4 20 4C29.9411 4 23 10.0589 23 20Z" />
          <path d="M40 12H44V28H40V12Z" />
          <path d="M48 12H52V16H56V24H52V28H48V12Z" />
          <path d="M60 12H70V16H64V18H68V22H64V24H70V28H60V12Z" />
          <path d="M72 12H76V24H84V28H72V12Z" />
        </svg>
      )
    },
    {
      id: "logo2",
      svg: (
        <svg className="h-8 md:h-10" viewBox="0 0 120 40" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12H14V16H10V12Z" />
          <path d="M10 18H14V28H10V18Z" />
          <path d="M17 12H21V28H17V12Z" />
          <path d="M24 12H28V16H32V24H28V28H24V12Z" />
          <path d="M35 12H45V16H39V18H43V22H39V24H45V28H35V12Z" />
          <path d="M55 28C51.6863 28 49 25.3137 49 22C49 18.6863 51.6863 16 55 16C58.3137 16 61 18.6863 61 22C61 25.3137 58.3137 28 55 28Z" />
          <path d="M64 12H76V16H72V28H68V16H64V12Z" />
          <path d="M84 28C80.6863 28 78 25.3137 78 22C78 18.6863 80.6863 16 84 16C87.3137 16 90 18.6863 90 22C90 25.3137 87.3137 28 84 28Z" />
          <path d="M94 12H106V16H102V28H98V16H94V12Z" />
        </svg>
      )
    },
    {
      id: "logo3",
      svg: (
        <svg className="h-8 md:h-10" viewBox="0 0 120 40" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 12H20V28H16V12Z" />
          <path d="M24 12H36V16H32V28H28V16H24V12Z" />
          <path d="M40 12H50V16H44V18H48V22H44V24H50V28H40V12Z" />
          <path d="M53 12H57V16H61V24H57V28H53V12Z" />
          <path d="M66 28C62.6863 28 60 25.3137 60 22C60 18.6863 62.6863 16 66 16C69.3137 16 72 18.6863 72 22C72 25.3137 69.3137 28 66 28Z" />
          <path d="M82 12H92V16H86V18H90V22H86V24H92V28H82V12Z" />
          <path d="M98 20L102 12H106L98 28L90 12H94L98 20Z" />
        </svg>
      )
    },
    {
      id: "logo4",
      svg: (
        <svg className="h-8 md:h-10" viewBox="0 0 120 40" fill="white" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="12" />
          <path d="M40 8H60V12H52V32H48V12H40V8Z" />
          <path d="M64 8H82V12H68V18H78V22H68V28H82V32H64V8Z" />
          <circle cx="90" cy="20" r="10" fill="none" stroke="white" strokeWidth="4" />
          <path d="M104 8H108V28H120V32H104V8Z" />
        </svg>
      )
    },
    {
      id: "logo5",
      svg: (
        <svg className="h-8 md:h-10" viewBox="0 0 100 40" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 8L38 32H2L20 8Z" />
          <path d="M45 8H65V12H49V18H61V22H49V32H45V8Z" />
          <path d="M70 8H90V12H74V18H86V22H74V28H90V32H70V8Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-[#00A462]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Have project<br />
            in mind? Let's talk
          </motion.h2>
          
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.a 
              href="#contact"
              className="inline-flex items-center bg-white text-[#00A462] rounded-full px-8 py-3 font-medium shadow-lg hover:bg-opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Book a free discovery call
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <motion.p 
            className="text-center text-white/80 text-sm mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Trusted by enterprises worldwide
          </motion.p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.id}
                className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.8, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {logo.svg}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-full" style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px' 
        }}></div>
      </div>
    </section>
  );
};

export default CtaSection;