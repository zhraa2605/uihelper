'use client';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  const [isSpinning, setIsSpinning] = useState(false);
  
  useEffect(() => {
    // On mount - get saved theme or system preference
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);
  
  const toggleTheme = () => {
    setIsSpinning(true);
    
    // Wait for spin animation to reach halfway before changing the theme
    setTimeout(() => {
      const nextTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
      document.documentElement.classList.toggle('dark', nextTheme === 'dark');
      localStorage.setItem('theme', nextTheme);
    }, 300); // Half of the animation duration
    
    // Reset spinning state after animation completes
    setTimeout(() => {
      setIsSpinning(false);
    }, 600); // Full animation duration
  };
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-900 dark:text-gray-100 transition-all duration-200"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      disabled={isSpinning}
    >
      <div className={isSpinning ? 'animate-spin' : ''}>
        {theme === 'dark' ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </div>
    </button>
  );
}