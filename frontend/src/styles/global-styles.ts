import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *, input, button {
        font-family: 'Poppins', sans-serif;
    }
    body, html {
        background: #E5E5E5;
        height: 100%;
    }
`
export default GlobalStyle;