import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      title: string;
      text: string;
      label: string;
      background: string;
      border: string;
      invalidBorder: string;
      buttonHover1: string;
      buttonHover2: string;
      circleBackground: string;
      lightGray: string;
    };
    fontFamily: string;
  }
}
