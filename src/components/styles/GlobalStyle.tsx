import { createGlobalStyle, DefaultTheme } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  ${normalize}

  *, ::before, ::after {
    border-width: 0;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors?.border || "currentColor"};
  }

  blockquote, dl, dd, h1, h2, h3,
  h4, h5, h6, hr, figure, p, pre {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  img, svg, video, canvas, audio, 
  iframe, embed, object {
    display: block;
  }

  body {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 500;
    background-color: #2D0922;
    color: ${({ theme }) => theme.colors?.text?.[100] || "#FFFFFF"};
  }

  /* ===== Custom Scroll Bar ===== */
  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background: #F47845;
  }

  ::-webkit-scrollbar-thumb {
    background: #F47845;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #F47845;
  }

  input[type="text"] {
    background-color: ${({ theme }) => theme.colors?.body || "transparent"};
    color: ${({ theme }) => theme.colors?.text?.[100] || "#FFFFFF"};
    caret-color: ${({ theme }) => theme.colors?.primary || "#F47845"};
  }

  input[type="text"]:focus-visible {
    outline: none;
  }

  .sr-only {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;

export default GlobalStyle;
