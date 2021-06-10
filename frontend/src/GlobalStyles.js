import { createGlobalStyle } from "styled-components";
import { COLORS } from "./Constants";
const GlobalStyle = createGlobalStyle`

*,
  *:before,
  *:after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
  }
  body {
    margin: 0;
    padding: 0;
    color: #382918;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background: ${COLORS.background};
    color: ${COLORS.primary};
    max-width: 100vw;
    font-size: 10px;
    font-weight: 400;
    line-height: 1;
    text-decoration: none;
  }
  h1{
      font-weight: 00;
      font-size: 4.0rem;

  }
  h2{
    font-weight: 400;
    font-size: 2.0rem;
}
p,section{
    font-weight:350;
    font-size: 1.6rem;
}

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      vertical-align: baseline;
  }

`;

export default GlobalStyle;
