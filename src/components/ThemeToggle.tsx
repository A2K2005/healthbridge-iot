
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { Switch } from '@/components/ui/switch';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-2 bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm p-1.5 rounded-full border border-border"
    >
      <Sun className={`h-4 w-4 ${isDark ? 'text-gray-400' : 'text-yellow-500'} transition-colors`} />
      
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-gray-800 data-[state=unchecked]:bg-blue-100"
      />
      
      <Moon className={`h-4 w-4 ${isDark ? 'text-yellow-300' : 'text-gray-400'} transition-colors`} />
    </motion.div>
  );
};

export default ThemeToggle;
