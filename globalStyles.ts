import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   
   @font-face {
    font-family: Inconsolata;
    src: url('/fonts/Inconsolata/Inconsolata-Regular.ttf') format("truetype");
  }

    @font-face {
    font-family: Roboto;
    src: url('/fonts/Roboto/RobotoMono-Regular.ttf') format("truetype");
  } 

    html,
    body {
        padding: 0;
        margin: 0;
        background-color: rgba(50, 50, 50, 1); margin: 0; 
        font-family: Inconsolata;
    }
    * {
        box-sizing: border-box;
    }
    


`;

export default GlobalStyles;
