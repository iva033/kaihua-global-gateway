import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Play a subtle toggle sound using Web Audio API
const playToggleSound = (isDark: boolean) => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create oscillator for the tone
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    // Different frequencies for light/dark mode
    oscillator.frequency.setValueAtTime(isDark ? 440 : 523, audioContext.currentTime); // A4 for dark, C5 for light
    oscillator.type = 'sine';
    
    // Envelope for a soft click
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.15);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
    
    // Clean up
    setTimeout(() => audioContext.close(), 200);
  } catch (e) {
    // Silently fail if audio context is not available
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('kaihua-theme');
    if (saved) return saved as Theme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('kaihua-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = useCallback(() => {
    // Add transition class for smooth animation
    document.documentElement.classList.add('theme-transitioning');
    
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Play toggle sound
    playToggleSound(newTheme === 'dark');
    
    setTheme(newTheme);
    
    // Remove class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 500);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
