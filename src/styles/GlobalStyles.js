import { createGlobalStyle } from "styled-components";
import './normalize.css'
import { COLORS } from "./variablesCss";
export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

body{
    margin: 0;
    height: 100vh;
    background-color: ${COLORS.backgroundBody};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'DM Mono', monospace;
    color: ${COLORS.textColor};
}

img{
    max-width: 100%;
    display: block;
}

ul{
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
}

a{
    text-decoration: none;
    color: inherit;
}`

