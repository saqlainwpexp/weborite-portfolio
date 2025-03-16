import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <motion.header 
      className="px-6 py-4 flex items-center justify-between border-b border-opacity-10 border-[#00ff4c] sticky top-0 z-50 bg-[#0c0e0c]/80 backdrop-blur-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        {/* Logo */}
        <Link href="/" className="logo-hover">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M8 20L20 8L32 20L20 32L8 20Z" 
                stroke="#00ff4c" 
                strokeWidth="2" 
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }} 
              />
              <motion.path 
                d="M15 15L25 25M15 25L25 15" 
                stroke="#00ff4c" 
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }} 
              />
            </svg>
            <div className="ml-2">
              <div className="text-white font-bold text-lg">Pixel</div>
              <div className="text-[#00ff4c] text-xs font-medium">Pulse</div>
            </div>
          </motion.div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.2 }}
          >
            <Link 
              href={item.href} 
              className="text-white hover:text-[#00ff4c] transition-colors duration-200 font-medium text-sm"
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Contact Button */}
      <motion.button 
        className="bg-[#181a18] hover:bg-[#00ff4c] hover:text-[#0c0e0c] transition-colors duration-300 text-white font-medium py-2 px-4 rounded-full text-sm flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Get a Quote
      </motion.button>

      {/* Mobile menu button - only show on small screens */}
      <div className="md:hidden">
        <motion.button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2"
          whileTap={{ scale: 0.9 }}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Mobile menu - show when toggled */}
      {isOpen && (
        <motion.div 
          className="md:hidden absolute top-16 right-0 left-0 bg-[#0c0e0c] z-50 p-4 border-b border-[#00ff4c] border-opacity-10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link 
                href={item.href}
                className="block py-2 text-white hover:text-[#00ff4c] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;