import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";



export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    <div className="App">
      <h1>josiel</h1>
    </div>
    </ThemeProvider>
  )
}


