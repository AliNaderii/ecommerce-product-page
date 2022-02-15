import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  }

  *, *:before, *:after {
  box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 1em;
    line-height: 1.7;
  }

  a {
    text-decoration: none;
  }
  
  ul {
    list-style-type: none;
  }

  button {
    border: none;
    background-color: unset;

    &:hover {
      cursor: pointer;
    }
  }

`;

export default GlobalStyle;