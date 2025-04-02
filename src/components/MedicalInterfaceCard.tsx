
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Pill } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';

const MedicalInterfaceCard: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  const handleGetStarted = () => {
    navigate('/auth');
  };

  return (
    <motion.div 
      className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        type: "spring", 
        stiffness: 100 
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Gradient Background - Changes on hover */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: isHovered 
            ? 'linear-gradient(to bottom right, #FF6B8B, #FF8E53)' 
            : 'linear-gradient(to bottom right, var(--medical-blue-600, #0284C7), var(--medical-green-500, #10B981), var(--medical-blue-400, #38BDF8))'
        }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div 
            key={i}
            className={`absolute ${theme === 'dark' ? 'bg-white/15' : 'bg-white/20'} rounded-full`}
            style={{
              width: Math.random() * 50 + 10,
              height: Math.random() * 50 + 10,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8 text-white text-center">
        <motion.div
          className={`w-24 h-24 mx-auto mb-6 ${theme === 'dark' ? 'bg-white/15' : 'bg-white/20'} rounded-full flex items-center justify-center`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 10 
          }}
        >
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Heart className="w-12 h-12 text-white" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Pill className="w-12 h-12 text-white" />
          </motion.div>
        </motion.div>
        
        <motion.h2 
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1, display: isHovered ? 'none' : 'block' }}
            transition={{ duration: 0.2 }}
          >
            Medical Care Interface
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, display: isHovered ? 'block' : 'none' }}
            transition={{ duration: 0.2 }}
          >
            Your Health Partner
          </motion.span>
        </motion.h2>
        
        <motion.p
          className={`${theme === 'dark' ? 'text-white/90' : 'text-white/80'} mb-6`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1, display: isHovered ? 'none' : 'block' }}
            transition={{ duration: 0.2 }}
          >
            Your health is our priority. Experience seamless healthcare with cutting-edge technology.
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, display: isHovered ? 'block' : 'none' }}
            transition={{ duration: 0.2 }}
          >
            Advanced care at your fingertips. Get started with personalized health management.
          </motion.span>
        </motion.p>
        
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.button
            className={`${isHovered ? 'bg-white text-pink-500' : `${theme === 'dark' ? 'bg-white/20 hover:bg-white/30' : 'bg-white/20 hover:bg-white/30'}`} px-4 py-2 rounded-full flex items-center space-x-2 transition-colors`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
          >
            {isHovered ? (
              <>
                <Pill className="w-5 h-5" />
                <span>Join Now</span>
              </>
            ) : (
              <>
                <Heart className="w-5 h-5" />
                <span>Get Started</span>
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MedicalInterfaceCard;
