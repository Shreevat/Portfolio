import { createContext, useState } from 'react';

const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

interface DarkModeProviderProps {
  children: React.ReactNode;
}

const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode === 'true';
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
    // Update the context value
    contextValue.darkMode = !darkMode;
  };

  const contextValue = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeProvider, DarkModeContext };