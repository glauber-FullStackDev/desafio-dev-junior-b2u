import { ThemeProvider } from "styled-components";
import { Nav } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Home } from "./components/page";
import { Register } from "./components/Form/Register";
import { useEffect, useState } from "react";
import { Update } from "./components/Form/ToEdit";
import { api } from "./lib/axios";
import { Card } from "./components/Card";

export function App() {
  const [open , setOpen] = useState(false);
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Nav />
    
   {/* {open  <p>cadastre produto</p>} */}
       <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/atualizar" element={<Update />} />
      {/*   <Route path="/atualizar" element={<Form />} /> */}
      </Routes> 
    </ThemeProvider>
  );
}
