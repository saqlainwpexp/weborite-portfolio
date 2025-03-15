import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

type StatBoxProps = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  graphPath: string;
};

const StatBox = ({ value, label, prefix = "", suffix = "", graphPath }: StatBoxProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = Date.now();
      
      const timer = setInterval(() => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        setCount(Math.floor(progress * value));
        
        if (progress === 1) {
          clearInterval(timer);
        }
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);
  
  const formattedValue = new Intl.NumberFormat().format(count);

  return (
    <motion.div 
      ref={ref}
      className="stat-box px-6 py-8 rounded-xl flex flex-col items-center justify-center"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-[#00ff4c] font-bold text-3xl mb-2">
        {prefix}{formattedValue}{suffix}
      </h3>
      <p className="text-gray-400 text-sm">{label}</p>
      {/* Graph visualization */}
      <svg className="mt-2" width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d={graphPath} 
          stroke="#00ff4c" 
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
};

export default StatBox;
