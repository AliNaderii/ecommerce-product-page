import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 16px;
    line-height: 1.7;
  }

`;

export default GlobalStyle;