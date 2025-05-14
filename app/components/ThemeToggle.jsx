'use client';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  const [isSpinning, setIsSpinning] = useState(false);
  
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);
  
  const toggleTheme = () => {
    setIsSpinning(true);
    
    setTimeout(() => {
      const nextTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
      document.documentElement.classList.toggle('dark', nextTheme === 'dark');
      localStorage.setItem('theme', nextTheme);
    }, 300); 
    
    setTimeout(() => {
      setIsSpinning(false);
    }, 600); 
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