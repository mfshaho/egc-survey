import { useEffect, useState } from 'react';

const useColorScheme = (): string => {
  const [colorScheme, setColorScheme] = useState<string>('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setColorScheme(e.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleChange);
    setColorScheme(mediaQuery.matches ? 'dark' : 'light');
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return colorScheme;
};

export default useColorScheme;
