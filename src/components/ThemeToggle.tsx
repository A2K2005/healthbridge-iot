
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { Switch } from '@/components/ui/switch';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center space-x-2"
    >
      <Sun className="h-4 w-4 text-yellow-500 dark:text-yellow-300" />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}
      />
      <Moon className="h-4 w-4 text-gray-500 dark:text-blue-300" />
    </motion.div>
  );
};

export default ThemeToggle;
