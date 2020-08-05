import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      primaryLighter: string;
      primaryLight: string;
      primary: string;
      primaryDarker: string;
      secondary: string;
      secondaryDark: string;
      titleInPrimary: string;
      textInPrimary: string;
      textTitle: string;
      textComplement: string;
      textBase: string;
      lineInWhite: string;
      inputBackground: string;
      buttonText: string;
      boxBase: string;
      boxFooter: string;
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
