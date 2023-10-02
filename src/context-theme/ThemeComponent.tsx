import React, { ReactNode, createContext, useState, useContext } from "react";

const ThemeContent = createContext<boolean | undefined>(undefined);
const ThemeUpdateContext = createContext<(() => void) | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function useTheme() {
  return useContext(ThemeContent);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  function setTheme() {
    return setDarkTheme((prevTheme) => !prevTheme);
  }

  return (
    <ThemeContent.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={setTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContent.Provider>
  );
}
