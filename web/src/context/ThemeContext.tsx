import React, { createContext, useCallback } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

import usePersistedState from "../utils/usePersistedState";

import light from "../assets/styles/themes/light";
import dark from "../assets/styles/themes/dark";

interface ThemeContextData {
  mode: DefaultTheme;
  toggleTheme(): void;
}

export const ThemeColorContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);

export const ThemeColorProvider: React.FC = ({ children }) => {
  const [mode, setMode] = usePersistedState<DefaultTheme>(
    "@ProffyTheme",
    light
  );

  const toggleTheme = useCallback(() => {
    setMode(mode.title === "light" ? dark : light);
  }, [mode.title, setMode]);

  return (
    <ThemeColorContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={mode}>{children}</ThemeProvider>
    </ThemeColorContext.Provider>
  );
};
