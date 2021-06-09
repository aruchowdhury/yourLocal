import { createGlobalStyle } from "styled-components";
import { COLORS } from "./Constants";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #382918;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background: ${COLORS.background};
    color: ${COLORS.primary};
   
  }
`;

export default GlobalStyle;
