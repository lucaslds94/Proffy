import React from "react";
import { ThemeProvider } from "styled-components";

import Landing from "./pages/Landing";

import light from "./assets/styles/themes/light";
import GlobalStyle from "./assets/styles/global";

function App() {
  return (
    <ThemeProvider theme={light}>
      <Landing />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
