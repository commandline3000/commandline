import { createGlobalStyle } from "styled-components";

// Use relative paths since these CSS files are inside src/styles:
import "../../styles/f6823d1195ce2dd4.css";
import "../../styles/08ddc100803a2a55.css";
import "../../styles/8618ea51901d2f94.css";

const GlobalStyle = createGlobalStyle`
  /* Font Import */
  @font-face {
    font-family: 'Monaspace Neon';
    src: url('/fonts/MonaspaceNeonVarVF.woff2') format('woff2');
    font-weight: 100 900;
    font-style: normal;
  }

  body {
    font-family: 'Monaspace Neon', monospace;
    background-color: #FFFFFF;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-size: calc(max(3.1415926535vmin, 16px));
    line-height: 1.5;
    font-variation-settings: 
      'wght' 200,
      'wdth' 100,
      'slnt' 0;
  }

  /* Headings and paragraphs */
  h1, h2, h3, p {
    font-family: 'Monaspace Neon', monospace;
    margin: 0;
    text-shadow: none;
  }

  h1, h2, h3 {
    line-height: 1.2; 
    margin-bottom: 0.75em; 
  }

  p {
    font-size: 1em;
    font-weight: 500;
    color: #93a1a1;
    text-shadow: none;
    line-height: 1.5;
    margin-bottom: 1em;
  }

  /* Terminal Wrapper */
  #terminal-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
  }

  /* Command Text */
  #terminal-wrapper span {
    font-size: 2em;
    color: #268bd2;
    text-shadow: none;
  }

  /* Links */
  #terminal-wrapper a {
    color: #268bd2;
    text-decoration: none;
    font-weight: 600;
  }

  #terminal-wrapper a:hover {
    text-decoration: underline;
  }

  /* Circles, etc. */
  @keyframes orbit {
    0% {
      transform: rotate(0deg) translateX(20vmin) rotate(0deg);
    }
    100% {
      transform: rotate(1turn) translateX(20vmin) rotate(-1turn);
    }
  }

  .circle-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;
  }

  #circle1,
  #circle2,
  #circle3 {
    position: absolute;
    top: -80vmax;
    left: 40%;
    width: 100vmax;
    height: 100vmax;
    border-radius: 50%;
    mix-blend-mode: screen;
    filter: blur(80px);
    animation: orbit 10s linear infinite;
  }

  #circle1 {
    background-color: hsla(53, 71%, 73%, 0.6);
  }

  #circle2 {
    background-color: rgba(0,200,255,0.6);
  }

  #circle3 {
    background-color: rgba(254,182,255,0.6);
  }
`;

export default GlobalStyle;
