'use client'

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  tiltEffect = true,
  padding = 'md',
  animationDelay = 0,
  ...props 
}) => {
  const baseClasses = "bg-white rounded-3xl border border-gray-100 transition-all duration-300";
  
  const paddingSizes = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };

  // If tilt effect is enabled, wrap with Tilt
  if (tiltEffect && hover) {
    return (
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareEnable={true}
        glareMaxOpacity={0.15}
        className="rounded-3xl"
      >
        <motion.div
          className={`${baseClasses} ${paddingSizes[padding]} shadow-lg cursor-pointer ${className}`}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: animationDelay,
            type: "spring",
            stiffness: 120,
          }}
          {...props}
        >
          {children}
        </motion.div>
      </Tilt>
    );
  }

  // Fallback to motion div with hover effect but no tilt
  if (hover) {
    return (
      <motion.div
        className={`${baseClasses} ${paddingSizes[padding]} shadow-lg cursor-pointer ${className}`}
        whileHover={{
          scale: 1.05,
          y: -5,
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: animationDelay,
          type: "spring",
          stiffness: 120,
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  // No hover effects
  return (
    <div
      className={`${baseClasses} ${paddingSizes[padding]} shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;