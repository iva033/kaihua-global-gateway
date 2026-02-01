import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { playToggleSound } from '@/lib/sounds';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('kaihua-theme');
    if (saved) return saved as Theme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [soundEnabled, setSoundEnabledState] = useState<boolean>(() => {
    const saved = localStorage.getItem('kaihua-sound');
    return saved !== 'false'; // Default to true
  });

  useEffect(() => {
    localStorage.setItem('kaihua-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('kaihua-sound', String(soundEnabled));
  }, [soundEnabled]);

  const setSoundEnabled = useCallback((enabled: boolean) => {
    setSoundEnabledState(enabled);
  }, []);

  const toggleTheme = useCallback(() => {
    document.documentElement.classList.add('theme-transitioning');
    
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    if (soundEnabled) {
      playToggleSound(newTheme === 'dark');
    }
    
    setTheme(newTheme);
    
    // Extended timeout for smoother transition completion
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 700);
  }, [theme, soundEnabled]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, soundEnabled, setSoundEnabled }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
