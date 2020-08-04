import React from "react";

import Routes from "./routes";
import { ThemeColorProvider } from "./context/ThemeContext";

import GlobalStyle from "./assets/styles/global";

function App() {
  return (
    <>
      <ThemeColorProvider>
        <Routes />
        <GlobalStyle />
      </ThemeColorProvider>
    </>
  );
}

export default App;
