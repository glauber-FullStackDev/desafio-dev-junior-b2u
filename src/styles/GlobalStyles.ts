import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;
        width: 100%;
        height: 100%;
    }
    *, button, input {
        border: 0;
        background: none;
        font-family: -apple-system, system-ui, sans-serif;
    }
    :root {
        --branco: #FFFDF9;
        --mostarda: #E97E13;
        --verde: #1E6511;
        
    }
`;