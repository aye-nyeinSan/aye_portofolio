
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

 useEffect(() => {
   const root = window.document.documentElement;

   root.classList.remove("light", "dark", "dark-mode-background"); // Remove the background class as well

   if (theme === "system") {
     const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
       .matches
       ? "dark"
       : "light";

     root.classList.add(systemTheme);
     if (systemTheme === "dark") {
       root.classList.add("dark-mode-background");
     }
     return;
   }

   root.classList.add(theme);
   if (theme === "dark") {
     root.classList.add("dark-mode-background");
   }
 }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  
  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');
  
  return context;
};
