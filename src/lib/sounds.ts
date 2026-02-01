// Centralized sound utilities for UI feedback

type SoundType = 'toggle' | 'click' | 'success' | 'error' | 'hover' | 'language';

interface SoundConfig {
  frequency: number;
  duration: number;
  type: OscillatorType;
  volume: number;
  frequencyEnd?: number;
}

const soundConfigs: Record<SoundType, SoundConfig> = {
  toggle: {
    frequency: 440,
    duration: 0.15,
    type: 'sine',
    volume: 0.1,
  },
  click: {
    frequency: 600,
    duration: 0.08,
    type: 'sine',
    volume: 0.08,
  },
  success: {
    frequency: 523,
    duration: 0.2,
    type: 'sine',
    volume: 0.1,
    frequencyEnd: 659,
  },
  error: {
    frequency: 200,
    duration: 0.15,
    type: 'square',
    volume: 0.06,
  },
  hover: {
    frequency: 800,
    duration: 0.05,
    type: 'sine',
    volume: 0.03,
  },
  language: {
    frequency: 500,
    duration: 0.12,
    type: 'sine',
    volume: 0.08,
  },
};

// Check if sound is enabled (reads from localStorage)
export const isSoundEnabled = (): boolean => {
  return localStorage.getItem('kaihua-sound') !== 'false';
};

// Play a sound with given configuration
const playSound = (config: SoundConfig): void => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.frequency.setValueAtTime(config.frequency, audioContext.currentTime);
    if (config.frequencyEnd) {
      oscillator.frequency.linearRampToValueAtTime(config.frequencyEnd, audioContext.currentTime + config.duration);
    }
    oscillator.type = config.type;
    
    // Smooth envelope
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(config.volume, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + config.duration);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + config.duration);
    
    setTimeout(() => audioContext.close(), config.duration * 1000 + 100);
  } catch (e) {
    // Silently fail if audio context is not available
  }
};

// Play theme toggle sound (A4 for dark, C5 for light)
export const playToggleSound = (isDark: boolean): void => {
  if (!isSoundEnabled()) return;
  
  playSound({
    ...soundConfigs.toggle,
    frequency: isDark ? 440 : 523,
  });
};

// Play language switch sound (higher for English, lower for Russian)
export const playLanguageSound = (isEnglish: boolean): void => {
  if (!isSoundEnabled()) return;
  
  playSound({
    ...soundConfigs.language,
    frequency: isEnglish ? 550 : 480,
  });
};

// Play click/tap sound for buttons
export const playClickSound = (): void => {
  if (!isSoundEnabled()) return;
  playSound(soundConfigs.click);
};

// Play success sound (form submission, etc.)
export const playSuccessSound = (): void => {
  if (!isSoundEnabled()) return;
  playSound(soundConfigs.success);
};

// Play error sound
export const playErrorSound = (): void => {
  if (!isSoundEnabled()) return;
  playSound(soundConfigs.error);
};

// Play subtle hover sound (use sparingly)
export const playHoverSound = (): void => {
  if (!isSoundEnabled()) return;
  playSound(soundConfigs.hover);
};

// Play navigation sound
export const playNavigationSound = (): void => {
  if (!isSoundEnabled()) return;
  playSound({
    frequency: 350,
    duration: 0.1,
    type: 'sine',
    volume: 0.06,
    frequencyEnd: 420,
  });
};
