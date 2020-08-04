import React from "react";
import { ThemeProvider } from "styled-components";

import Routes from "./routes";

import light from "./assets/styles/themes/light";
import GlobalStyle from "./assets/styles/global";

function App() {
  return (
    <ThemeProvider theme={light}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
