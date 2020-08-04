import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html {
    font-size: 60%; 
    height: 100%;
  }
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textTitle};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }
  body, #root {
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center
  }
  body, input, button, textarea {
    font: 500 1.6rem Poppins, Archivo, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.48;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
  a {
    text-decoration: none;
    background: none;
    font-weight: 700;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
  }
  button {
    cursor: pointer;
  }
  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%
    }
  }
`;
