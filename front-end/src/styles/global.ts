
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding:0;
    box-sizing: border-box;


 }

 body {
    background-color: ${(props) => props.theme['red-500']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-fontsmoothing: antialiased;
    font-family: "Roboto", sans-serif;
 }

`