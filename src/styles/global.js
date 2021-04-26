import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        
    }
   html, body, #root {
        height: 100%;
        scroll-behavior: smooth;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #F2F2F2;
        }
        code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
        }
`;
export default GlobalStyle;
