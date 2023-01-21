import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`

:root{
  --background-color: #28A498;
  --color-header: #28A498;
  --color-span: #FDFFFC;
  --color-blue: #4D91D1;
  --color-span-secondary: #CCCCCC;
  --background-cart: #112A41;
  --color-button:#7C70FF;
  --color-red:#FF0A23;
}

body{
  font-family: 'Roboto Condensed', sans-serif;
}

*{
  margin: 0 ;
  padding: 0 ;
}

.link{
  text-decoration:none ;
  color:black ;
}

.link-cart{
  text-decoration:none;
}

`