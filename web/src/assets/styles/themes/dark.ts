import { shade } from "polished";

export default {
  title: "dark",
  colors: {
    background: "#111",
    primaryLighter: shade(0.25, "#9871F5"),
    primaryLight: shade(0.25, "#916BEA"),
    primary: "#333",
    primaryDarker: "#6842C2",
    secondary: shade(0.25, "#04D361"),
    secondaryDark: shade(0.25, "#04BF58"),
    titleInPrimary: shade(0.10, "#916BEA"),
    textInPrimary: shade(0.25, "#916BEA"),
    textTitle: "#FAFAFC",
    textComplement: "#9C98A6",
    textBase: "#6A6180",
    lineInWhite: shade(0.25, "#916BEA"),
    inputBackground: shade(0.25, "#F8F8FC"),
    buttonText: "#F8F8FC",
    boxBase: "#333",
    boxFooter: shade(0.55, "#916BEA"),
  },
  fontSizes: {
    default: "1.4rem",
    large: "1.6rem",
    small: "1.2rem",
    tiny: "1rem",
  },
  spacing: {
    default: "1.6rem",
    vertical: "1.6rem 0",
    horizontal: "0 1.6rem",
    large: "2.4rem",
  },
  transition: {
    defaut: "180ms ease-in-out",
  },
};
