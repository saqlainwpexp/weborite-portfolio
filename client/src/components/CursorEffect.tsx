import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Clear previous timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Set new timeout to turn off the effect after scrolling stops
      const timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 300);
      
      setScrollTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  return (
    <>
      {/* Custom cursor */}
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          backgroundColor: "#00ff4c",
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          scale: isScrolling ? [1, 1.5, 1] : 1,
          opacity: isScrolling ? 0.7 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />

      {/* Scroll effect */}
      <AnimatePresence>
        {isScrolling && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full bg-gradient-radial from-[#00ff4c] to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trailing effect */}
      <motion.div
        className="fixed w-32 h-32 rounded-full pointer-events-none z-30 opacity-5 blur-3xl"
        style={{
          backgroundColor: "#00ff4c",
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
        }}
        animate={{
          scale: isScrolling ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 40,
          delay: 0.1,
        }}
      />
    </>
  );
};

export default CursorEffect;