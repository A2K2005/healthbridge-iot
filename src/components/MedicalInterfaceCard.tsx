
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Pill, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MedicalInterfaceCard: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/auth');
  };

  return (
    <motion.div 
      className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
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
      {/* Gradient Background */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: 1,
          background: isHovered 
            ? "linear-gradient(135deg, #FF719A 0%, #FFA99F 48%, #FFE29F 100%)" 
            : "linear-gradient(to br, var(--medical-blue-600), var(--medical-green-500), var(--medical-blue-400))"
        }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundSize: "200% 200%",
          backgroundPosition: isHovered ? "100% 0%" : "0% 0%"
        }}
      />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute bg-white/20 rounded-full"
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
          className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center"
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
            animate={{ 
              opacity: isHovered ? 0 : 1,
              rotateY: isHovered ? 90 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <Heart className="w-12 h-12 text-white" />
          </motion.div>
          
          <motion.div
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              rotateY: isHovered ? 0 : -90
            }}
            transition={{ duration: 0.3 }}
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
          {isHovered ? "Advanced Care Solutions" : "Medical Care Interface"}
        </motion.h2>
        
        <motion.p
          className="text-white/80 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {isHovered 
            ? "Experience premium medical services with our cutting-edge treatment options."
            : "Your health is our priority. Experience seamless healthcare with cutting-edge technology."}
        </motion.p>
        
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.button
            className={`${isHovered ? 'bg-white text-pink-500' : 'bg-white/20 text-white hover:bg-white/30'} px-4 py-2 rounded-full flex items-center space-x-2 transition-colors`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
          >
            <Zap className="w-5 h-5" />
            <span>Get Started</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MedicalInterfaceCard;
