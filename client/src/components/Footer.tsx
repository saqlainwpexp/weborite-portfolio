import { motion } from "framer-motion";
import { Link } from "wouter";
import SocialButton from "./SocialButton";

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Careers", href: "#careers" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#blog" },
        { name: "Case Studies", href: "#case-studies" },
        { name: "FAQs", href: "#faqs" },
        { name: "Support", href: "#support" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookies", href: "#cookies" }
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-[#0a0c0a] text-white pt-20 pb-8 border-t border-[#00ff4c] border-opacity-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Company Info */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center mb-6 logo-hover">
              <svg className="h-8 w-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 20L20 8L32 20L20 32L8 20Z" stroke="#00ff4c" strokeWidth="2" fill="none" />
                <path d="M15 15L25 25M15 25L25 15" stroke="#00ff4c" strokeWidth="2" />
              </svg>
              <div className="ml-2">
                <div className="text-white font-bold text-lg">Pixel</div>
                <div className="text-[#00ff4c] text-xs font-medium">Pulse</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Empowering digital growth with cutting-edge design, 
              development, and marketing strategies. Your success 
              is our mission.
            </p>
            <div className="flex space-x-3">
              <SocialButton platform="twitter" href="#twitter" />
              <SocialButton platform="discord" href="#discord" />
              <SocialButton platform="telegram" href="#telegram" />
            </div>
          </motion.div>
          
          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div 
              key={section.title} 
              className=""
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#00ff4c] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <motion.li key={link.name} variants={item}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-[#00ff4c] transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-[#00ff4c] border-opacity-10 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div>
            &copy; {new Date().getFullYear()} Pixel Pulse. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            Designed with 💚 for the digital age
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;