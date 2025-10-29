'use client';

import { useEffect } from 'react';

// Lightweight theme manager without next-themes.
// Persists theme in localStorage("theme") and toggles html class.
export function ThemeProvider({ children }) {
  useEffect(() => {
    try {
      const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
      // Default to dark when not previously chosen
      const theme = stored || 'dark';
      const html = document.documentElement;
      if (theme === 'dark') html.classList.add('dark');
      else html.classList.remove('dark');
    } catch {}
  }, []);

  return children;
}
