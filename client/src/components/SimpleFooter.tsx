import { Link } from "wouter";
import { motion } from "framer-motion";

const SimpleFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0a0c0a] text-white py-8 border-t border-[#00ff4c] border-opacity-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center logo-hover">
              <svg className="h-8 w-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 20L20 8L32 20L20 32L8 20Z" stroke="#00ff4c" strokeWidth="2" fill="none" />
                <path d="M15 15L25 25M15 25L25 15" stroke="#00ff4c" strokeWidth="2" />
              </svg>
              <div className="ml-2">
                <div className="text-white font-bold text-lg">Pixel</div>
                <div className="text-[#00ff4c] text-xs font-medium">Pulse</div>
              </div>
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-6 mb-4 md:mb-0">
            <Link href="/services" className="text-gray-300 hover:text-[#00ff4c] transition-colors duration-300">Services</Link>
            <Link href="/portfolio" className="text-gray-300 hover:text-[#00ff4c] transition-colors duration-300">Portfolio</Link>
            <Link href="/about" className="text-gray-300 hover:text-[#00ff4c] transition-colors duration-300">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-[#00ff4c] transition-colors duration-300">Contact</Link>
          </div>
          
          <div className="flex space-x-4">
            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 text-[#00ff4c]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </motion.a>
            <motion.a 
              href="https://discord.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 text-[#00ff4c]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
            </motion.a>
            <motion.a 
              href="https://telegram.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 text-[#00ff4c]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.5 6.484-.709 8.61-.092.924-.284 1.233-.468 1.26-.399.065-.702-.297-1.085-.592-.603-.467-1.024-.771-1.611-1.227-.895-.7-.315-1.085.196-1.712.133-.167 2.43-2.234 2.475-2.425.006-.024.012-.07-.005-.104-.018-.035-.07-.038-.102-.032-.064.013-1.08.672-3.046 1.979a2.154 2.154 0 0 1-1.229.46 4.45 4.45 0 0 1-1.777-.408c-.715-.249-1.284-.374-1.235-.789.027-.216.324-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014.933-.384 1.783-.726 2.49-.945.367-.116.66-.18.867-.18z" />
              </svg>
            </motion.a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-[#00ff4c] border-opacity-10 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Pixel Pulse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;