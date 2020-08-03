import React from "react";
import { ThemeProvider } from "styled-components";

import light from "./assets/styles/themes/light";
import GlobalStyle from "./assets/styles/global";

function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <h1>Hello worldos</h1>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
