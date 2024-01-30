import { createContext, useContext, useState } from "react";

const useThemeSource = () => {
  const [lightMode, setLightMode] = useState(false);

  return { lightMode, setLightMode };
};

const ThemeContext = createContext(null);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={useThemeSource()}>
      {children}
    </ThemeContext.Provider>
  );
};
