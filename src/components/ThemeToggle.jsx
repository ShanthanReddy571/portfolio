'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const current = resolvedTheme || theme || 'light';
  const isDark = current === 'dark';
  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={() => {
        const next = isDark ? 'light' : 'dark';
        setTheme(next);
      }}
      className="btn btn-ghost"
    >
      <span aria-hidden>{isDark ? '🌞' : '🌙'}</span>
      <span>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
}
