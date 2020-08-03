import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      primaryLighter: string;
      primaryLight: string;
      primaryDarker: string;
      secondary: string;
      secondaryDark: string;
      secondaryDarker: string;
      textBase: string;
      textInPrimary: string;
      textTitle: string;
      background: string;
      white: string;
    };
    fontSizes: {
      default: string;
      large: string;
      small: string;
      tiny: string;
    };
    spacing: {
      default: string;
      vertical: string;
      horizontal: string;
      large: string;
    };
    transition: {
      defaut: string;
    };
  }
}
