import { ThemeProvider } from "styled-components";
import { Nav } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Home } from "./components/page";
import { Register } from "./components/Form/Register";
import { useState } from "react";
import { Update } from "./components/Form/ToEdit";
//import { Metamask } from "./components/Metamask/index.jsx";

export function App() {
  const [state, setState] = useState({ idState: "" });
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Nav />

      <Routes>
        <Route path="/" element={<Home state={state} setState={setState} />} />
        <Route
          path="/cadastrar"
          element={<Register state={state} setState={setState} />}
        />
        <Route
          path="/atualizar"
          element={<Update state={state} setState={setState} />}
        />
       {/*  <Route path="/cripto" element={<Metamask />} /> */}
      </Routes>
    </ThemeProvider>
  );
}
