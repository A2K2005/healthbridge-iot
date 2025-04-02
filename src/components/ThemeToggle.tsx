
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { Toggle } from '@/components/ui/toggle';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Toggle
        aria-label="Toggle theme"
        onClick={toggleTheme}
        className="p-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <motion.div
          animate={{ rotate: theme === 'dark' ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        >
          {theme === 'dark' ? (
            <Moon className="h-5 w-5 text-yellow-300" />
          ) : (
            <Sun className="h-5 w-5 text-yellow-500" />
          )}
        </motion.div>
      </Toggle>
    </motion.div>
  );
};

export default ThemeToggle;
