
import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Check local storage for saved theme or use system preference
  const [theme, setTheme] = useState<Theme>(() => {
    // We need to check if window is defined for SSR
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme) return savedTheme;
      
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    
    return 'light';
  });

  // Apply theme to document immediately to prevent flash
  useEffect(() => {
    // Apply theme class to html element
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save theme preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system preference changes
  useEffect(() => {
    if (!window.matchMedia) return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      // Only change if user hasn't explicitly set a preference
      if (!localStorage.getItem('theme')) {
        setTheme(mediaQuery.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
